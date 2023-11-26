"use client";
import React, { useEffect, useRef, useState } from "react";

interface Ball {
  x: number;
  y: number;
  dy: number;
  radius: number;
  color: string;
}

export function BackgroundBalls({ style }: { style: React.CSSProperties }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const balls = useRef<Ball[]>([]); // Store balls in a ref

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions(containerRef.current.getBoundingClientRect());
      }
    };

    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    const getRandomArbitrary = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const generateRandomColor = () => {
      const shadeOfPurple = Math.floor(getRandomArbitrary(200, 260));
      return `hsl(${shadeOfPurple}, 50%, 50%)`;
    };

    const canvas = canvasRef.current;
    if (canvas && dimensions) {
      canvas.width = dimensions.width;
      canvas.height = dimensions.height;
      const context = canvas.getContext("2d");

      for (let i = 0; i < 50; i++) {
        const radius = getRandomArbitrary(5, 50);
        balls.current.push({
          x: getRandomArbitrary(radius, canvas.width - radius),
          y: getRandomArbitrary(radius, canvas.height - radius),
          dy: getRandomArbitrary(1, 3),
          radius,
          color: generateRandomColor(),
        });
      }

      const render = () => {
        if (context) {
          context.clearRect(0, 0, canvas.width, canvas.height);
          balls.current.forEach((ball) => {
            context.beginPath();
            context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2, false);
            context.fillStyle = ball.color;
            ball.y += ball.dy;
            // Detect collision with ground
            if (ball.y + ball.radius > canvas.height) {
              ball.y = canvas.height - ball.radius;
              ball.dy *= -0.9; // Add some "bounce"
            } else {
              ball.dy += 0.2; // Gravity
            }
          });
          requestAnimationFrame(render);
        }
      };
      render();
    }
  }, [dimensions]);

  return (
    <div ref={containerRef} style={{ position: "relative", ...style }}>
      <canvas ref={canvasRef} />
    </div>
  );
}
