"use client";

import type { HTMLAttributes, PointerEvent as ReactPointerEvent } from "react";
import { useRef } from "react";

type CardProps = HTMLAttributes<HTMLDivElement>;

export default function Card(props: CardProps) {
  const { className, onPointerEnter, onPointerMove, onPointerLeave, ...rest } = props;
  const cardRef = useRef<HTMLDivElement | null>(null);

  const resetTilt = () => {
    const element = cardRef.current;

    if (!element) {
      return;
    }

    element.style.setProperty("--tilt-rotate-x", "0deg");
    element.style.setProperty("--tilt-rotate-y", "0deg");
    element.style.setProperty("--tilt-lift", "0px");
  };

  const updateTilt = (event: ReactPointerEvent<HTMLDivElement>) => {
    const element = cardRef.current;

    if (!element) {
      return;
    }

    const rect = element.getBoundingClientRect();
    const pointerX = event.clientX - rect.left;
    const pointerY = event.clientY - rect.top;
    const offsetX = pointerX / rect.width - 0.5;
    const offsetY = pointerY / rect.height - 0.5;
    const maxRotation = 12;

    element.style.setProperty("--tilt-rotate-x", `${(-offsetY * maxRotation).toFixed(2)}deg`);
    element.style.setProperty("--tilt-rotate-y", `${(offsetX * maxRotation).toFixed(2)}deg`);
    element.style.setProperty("--tilt-lift", "10px");
  };

  return (
    <div
      ref={cardRef}
      onPointerEnter={(event) => {
        updateTilt(event);
        onPointerEnter?.(event);
      }}
      onPointerMove={(event) => {
        updateTilt(event);
        onPointerMove?.(event);
      }}
      onPointerLeave={(event) => {
        resetTilt();
        onPointerLeave?.(event);
      }}
      className={className ? `tilt-card ${className}` : "tilt-card"}
      {...rest}
    />
  );
}
