import { useEffect, useRef } from "react";
import { gsap } from "../../lib/gsap";

interface NetworkCanvasProps {
  className?: string;
}

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  z: number;
}

const LINK_DISTANCE_RATIO = 0.2;
const POINTER_RADIUS = 150;

/**
 * Lightweight 2D node network. Animation pauses off-screen, respects reduced motion
 * (draws one static frame), and tilts gently with the pointer on fine-pointer desktops.
 */
export function NetworkCanvas({ className }: NetworkCanvasProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine) and (min-width: 1024px)");

    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let raf = 0;
    let visible = true;
    const pointer = { x: 0, y: 0, on: false };

    const seed = () => {
      const rect = wrap.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(Math.min(70, Math.max(24, (width * height) / 9000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        z: 0.35 + Math.random() * 0.65,
      }));
    };

    const step = () => {
      for (const n of nodes) {
        n.x += n.vx * n.z;
        n.y += n.vy * n.z;
        if (n.x < -10) n.x = width + 10;
        if (n.x > width + 10) n.x = -10;
        if (n.y < -10) n.y = height + 10;
        if (n.y > height + 10) n.y = -10;

        if (pointer.on) {
          const dx = n.x - pointer.x;
          const dy = n.y - pointer.y;
          const d2 = dx * dx + dy * dy;
          if (d2 > 0 && d2 < POINTER_RADIUS * POINTER_RADIUS) {
            const d = Math.sqrt(d2);
            const force = (1 - d / POINTER_RADIUS) * 0.5;
            n.x += (dx / d) * force;
            n.y += (dy / d) * force;
          }
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const link = Math.min(width, height) * LINK_DISTANCE_RATIO;
      const link2 = link * link;
      ctx.lineWidth = 1;

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < link2) {
            const alpha = (1 - Math.sqrt(d2) / link) * 0.3 * Math.min(a.z, b.z);
            ctx.strokeStyle = `rgba(59, 130, 246, ${alpha.toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      if (pointer.on) {
        for (const n of nodes) {
          const dx = n.x - pointer.x;
          const dy = n.y - pointer.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < POINTER_RADIUS * POINTER_RADIUS) {
            const alpha = (1 - Math.sqrt(d2) / POINTER_RADIUS) * 0.5;
            ctx.strokeStyle = `rgba(34, 211, 238, ${alpha.toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(pointer.x, pointer.y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        ctx.fillStyle = n.z > 0.75 ? "rgba(34, 211, 238, 0.95)" : "rgba(139, 92, 246, 0.75)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, 0.9 + n.z * 1.6, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = () => {
      step();
      draw();
      raf = requestAnimationFrame(loop);
    };

    const run = () => {
      cancelAnimationFrame(raf);
      if (reduce.matches) {
        draw();
        return;
      }
      if (visible) raf = requestAnimationFrame(loop);
    };

    seed();
    run();

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      run();
    });
    io.observe(wrap);

    const ro = new ResizeObserver(() => {
      seed();
      if (reduce.matches) draw();
    });
    ro.observe(wrap);

    const rotateX = gsap.quickTo(canvas, "rotationX", { duration: 1, ease: "power3.out" });
    const rotateY = gsap.quickTo(canvas, "rotationY", { duration: 1, ease: "power3.out" });

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const r = wrap.getBoundingClientRect();
      pointer.x = e.clientX - r.left;
      pointer.y = e.clientY - r.top;
      pointer.on = true;
      if (finePointer.matches) {
        rotateY(((pointer.x / width) - 0.5) * 8);
        rotateX(-((pointer.y / height) - 0.5) * 8);
      }
      if (reduce.matches) draw();
    };
    const onLeave = () => {
      pointer.on = false;
      rotateX(0);
      rotateY(0);
      if (reduce.matches) draw();
    };
    wrap.addEventListener("pointermove", onMove);
    wrap.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerleave", onLeave);
      gsap.killTweensOf(canvas);
    };
  }, []);

  return (
    <div ref={wrapRef} className={className} aria-hidden="true" style={{ perspective: 900 }}>
      <canvas ref={canvasRef} className="block h-full w-full" aria-hidden="true" />
    </div>
  );
}
