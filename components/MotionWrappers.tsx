"use client";
import React from "react";
import { motion, useInView, Variant, Variants } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

type WrapperProps = {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
};

export const FadeIn = ({ children, className, delay = 0, duration = 0.4 }: WrapperProps) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const SlideUp = ({ children, className, delay = 0, duration = 0.4 }: WrapperProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const ScaleIn = ({ children, className, delay = 0, duration = 0.5 }: WrapperProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const StaggerContainer = ({ children, className, delay = 0 }: { children: React.ReactNode; className?: string, delay?: number }) => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: delay,
            },
        },
    };

    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const StaggerItem = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    const item: Variants = {
        hidden: { opacity: 0, y: 15 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } }
    };
    return (
        <motion.div variants={item} className={className}>
            {children}
        </motion.div>
    )
}

export const TypewriterText = ({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) => {
    return (
        <motion.div
            className={className}
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            transition={{ duration: text.length * 0.05, delay, ease: "easeInOut" }}
            style={{ overflow: "hidden", whiteSpace: "nowrap" }}
        >
            {text}
        </motion.div>
    );
};

export const GlassCard = ({ children, className, hover = true }: WrapperProps & { hover?: boolean }) => {
    return (
        <motion.div
            className={cn(
                "backdrop-blur-md bg-white/10 border border-white/20 rounded-lg",
                hover && "hover:bg-white/15 hover:border-white/30 hover:shadow-lg hover:shadow-primary-500/20",
                "transition-all duration-300",
                className
            )}
            whileHover={hover ? { scale: 1.02, y: -2 } : undefined}
            whileTap={hover ? { scale: 0.98 } : undefined}
        >
            {children}
        </motion.div>
    );
};
