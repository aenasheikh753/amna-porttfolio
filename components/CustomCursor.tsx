"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  let rix = 0, riy = 0, mx = 0, my = 0;

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = mx + "px";
        dotRef.current.style.top = my + "px";
      }
    };
    document.addEventListener("mousemove", onMove);

    const animRing = () => {
      rix += (mx - rix) * 0.13;
      riy += (my - riy) * 0.13;
      if (ringRef.current) {
        ringRef.current.style.left = rix + "px";
        ringRef.current.style.top = riy + "px";
      }
      requestAnimationFrame(animRing);
    };
    animRing();

    const hoverEls = document.querySelectorAll("a, button, .hoverable");
    hoverEls.forEach((el) => {
      el.addEventListener("mouseenter", () => ringRef.current?.classList.add("hovering"));
      el.addEventListener("mouseleave", () => ringRef.current?.classList.remove("hovering"));
    });

    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
