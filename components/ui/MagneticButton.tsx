"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MagneticButton({ children, href, className, ...props }: React.ComponentPropsWithoutRef<typeof motion.a>) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [isFinePointer, setIsFinePointer] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  useEffect(() => {
    setIsFinePointer(window.matchMedia("(pointer: fine)").matches);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isFinePointer || !ref.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

    if (distance < width * 1.5) {
      x.set(distanceX * 0.4);
      y.set(distanceY * 0.4);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: isFinePointer ? springX : 0, y: isFinePointer ? springY : 0 }}
      className={`group relative flex h-[130px] w-[130px] items-center justify-center overflow-hidden rounded-full border border-white/20 bg-transparent text-sm font-medium text-text transition-colors hover:border-transparent ${className}`}
      {...props}
    >
      <div className="absolute inset-0 h-full w-full translate-y-full bg-text transition-transform duration-500 ease-in-out group-hover:translate-y-0" />
      <span className="relative z-10 transition-colors duration-500 group-hover:text-background">
        {children}
      </span>
    </motion.a>
  );
}