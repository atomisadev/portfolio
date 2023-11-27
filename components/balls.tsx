"use client";
import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";

interface BackgroundBallProps {
  style: React.CSSProperties;
  className?: string;
}

export function BackgroundBalls({ style, className }: BackgroundBallProps) {
  const sceneRef = useRef<HTMLDivElement | null>(null);
  const engineRef = useRef<Matter.Engine | undefined>(undefined);

  // Create a function for setting up the scene
  const setup = () => {
    if (!sceneRef.current) return;

    // clear previous engine
    if (engineRef.current) {
      Matter.Engine.clear(engineRef.current);
    }

    const engine = Matter.Engine.create();
    engineRef.current = engine;

    const render = Matter.Render.create({
      element: sceneRef.current,
      engine,
      options: {
        width: window.innerWidth,
        height: sceneRef.current.clientHeight,
        background: style.backgroundColor,
        wireframes: false,
        showAngleIndicator: false,
      },
    });

    const numOfBalls = 65;
    const ballSpawnPoint = { x: window.innerWidth / 2, y: -50 };

    let ballCounter = 0;
    const dropBallsInterval = setInterval(() => {
      if (ballCounter >= numOfBalls) {
        clearInterval(dropBallsInterval);
      } else {
        const ball1 = createBall(ballSpawnPoint.x, ballSpawnPoint.y);
        const ball2 = createBall(ballSpawnPoint.x, ballSpawnPoint.y);
        Matter.World.add(engine.world, [ball1, ball2]);
        ballCounter += 2;
      }
    }, 500);

    const createBall = (x: number, y: number) =>
      Matter.Bodies.circle(x, y, getRandom(10, 50), {
        restitution: 0.5,
        friction: 0.05,
        render: {
          fillStyle: `hsl(${getRandom(200, 260)}, 50%, 50%)`,
        },
      });

    const getRandom = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const floor = Matter.Bodies.rectangle(
      window.innerWidth / 2,
      sceneRef.current.clientHeight,
      window.innerWidth,
      10,
      {
        isStatic: true,
        render: {
          visible: false,
        },
      }
    );

    const wallOptions = { isStatic: true, render: { visible: false } };
    const wallWidth = 10;
    const leftWall = Matter.Bodies.rectangle(
      wallWidth / 2,
      sceneRef.current.clientHeight / 2,
      wallWidth,
      sceneRef.current.clientWidth,
      wallOptions
    );

    const rightWall = Matter.Bodies.rectangle(
      window.innerWidth - wallWidth / 2,
      sceneRef.current.clientHeight / 2,
      wallWidth,
      sceneRef.current.clientHeight,
      wallOptions
    );

    Matter.World.add(engine.world, [floor, leftWall, rightWall]);

    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });

    Matter.World.add(engine.world, mouseConstraint);
    render.mouse = mouse;

    Matter.Engine.run(engine);
    Matter.Render.run(render);
  };

  useEffect(() => {
    setup();

    return () => {
      if (engineRef.current) Matter.Engine.clear(engineRef.current);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setup();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return <div ref={sceneRef} style={style} className={className}></div>;
}
