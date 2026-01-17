"use client";

import React, { MouseEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface RippleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

interface Ripple {
    x: number;
    y: number;
    id: number;
}

/**
 * RippleButton
 * A button component that displays a material-design style ripple effect on click.
 */
export const RippleButton = React.forwardRef<HTMLButtonElement, RippleButtonProps>(
    ({ children, className, onClick, ...props }, ref) => {
        const [ripples, setRipples] = useState<Ripple[]>([]);

        const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const id = Date.now();

            setRipples((prev) => [...prev, { x, y, id }]);

            if (onClick) {
                onClick(e);
            }
        };

        const removeRipple = (id: number) => {
            setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
        };

        return (
            <button
                ref={ref}
                className={cn(
                    "relative overflow-hidden cursor-pointer select-none",
                    className
                )}
                onClick={handleClick}
                {...props}
            >
                {children}
                <AnimatePresence>
                    {ripples.map((ripple) => (
                        <motion.span
                            key={ripple.id}
                            initial={{ scale: 0, opacity: 0.35 }}
                            animate={{ scale: 2, opacity: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6 }}
                            style={{
                                position: "absolute",
                                top: ripple.y,
                                left: ripple.x,
                                width: "100%",
                                paddingBottom: "100%", // Makes it a square based on width
                                borderRadius: "50%",
                                transform: "translate(-50%, -50%)",
                                backgroundColor: "currentColor",
                                pointerEvents: "none",
                            }}
                            onAnimationComplete={() => removeRipple(ripple.id)}
                        />
                    ))}
                </AnimatePresence>
            </button>
        );
    }
);
RippleButton.displayName = "RippleButton";
