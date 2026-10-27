import type { RefObject } from "react";
import { gsap, useGSAP } from "../lib/gsap";

/**
 * Page-level scroll motion: element reveals and desktop parallax.
 * All tweens and triggers are created inside a GSAP context scoped to `scope`,
 * so Strict Mode double-mounts and unmounts clean up without duplicate triggers.
 * Nothing is hidden unless motion is allowed, so reduced-motion users see content as-is.
 */
export function usePageMotion(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
          gsap.from(el, {
            autoAlpha: 0,
            y: 28,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          });
        });
      });

      mm.add(
        "(prefers-reduced-motion: no-preference) and (min-width: 1024px) and (pointer: fine)",
        () => {
          gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
            gsap.fromTo(
              el,
              { yPercent: -6 },
              {
                yPercent: 6,
                ease: "none",
                scrollTrigger: {
                  trigger: el.parentElement ?? el,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true,
                },
              },
            );
          });
        },
      );

      return () => {
        mm.revert();
      };
    },
    { scope },
  );
}
