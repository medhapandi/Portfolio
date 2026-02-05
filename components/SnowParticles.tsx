"use client";

import React, { useEffect, useState } from "react";

interface Snowflake {
    id: number;
    left: number;
    animationDuration: number;
    animationDelay: number;
    size: number;
    opacity: number;
}

const SnowParticles: React.FC = () => {
    const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

    useEffect(() => {
        const flakes: Snowflake[] = [];
        const numFlakes = 50;

        for (let i = 0; i < numFlakes; i++) {
            flakes.push({
                id: i,
                left: Math.random() * 100,
                animationDuration: 5 + Math.random() * 10,
                animationDelay: Math.random() * 5,
                size: 2 + Math.random() * 4,
                opacity: 0.3 + Math.random() * 0.7,
            });
        }

        setSnowflakes(flakes);
    }, []);

    return (
        <div className="snow-container">
            {snowflakes.map((flake) => (
                <div
                    key={flake.id}
                    className="snowflake"
                    style={{
                        left: `${flake.left}%`,
                        animationDuration: `${flake.animationDuration}s`,
                        animationDelay: `${flake.animationDelay}s`,
                        width: `${flake.size}px`,
                        height: `${flake.size}px`,
                        opacity: flake.opacity,
                    }}
                />
            ))}
        </div>
    );
};

export default SnowParticles;
