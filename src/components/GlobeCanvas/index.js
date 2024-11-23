import React, { useEffect, useRef, useState } from "react";
import "./style.css";

const images = [
  { src: "/angular.png", label: "angular" },
  { src: "/aws.png", label: "aws" },
  { src: "/c-.png", label: "c-" },
  { src: "/c-sharp.png", label: "c-sharp" },
  { src: "/docker.png", label: "docker" },
  { src: "/java.png", label: "java" },
  { src: "/js.png", label: "js" },
  { src: "/net.png", label: "net" },
  { src: "/React.png", label: "React" },
  { src: "/typescript.png", label: "typescript" },
  // Add more images and labels as needed
];

const GlobeCanvas = () => {
  const canvasRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const numImages = images.length;
    const imageSize = 48;
    const margin = 20; // Add margin between icons
    const radius = 200;
    let angle = 0;
    let animationFrameId;

    const loadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(img);
        img.onerror = (err) => reject(err);
      });
    };

    const draw = async () => {
      try {
        const loadedImages = await Promise.all(
          images.map((img) => loadImage(img.src))
        );

        const positions = [];
        const rows = Math.ceil(Math.sqrt(numImages));
        const cols = Math.ceil(numImages / rows);

        for (let i = 0; i < rows; i++) {
          for (let j = 0; j < cols; j++) {
            if (positions.length < numImages) {
              const x =
                j * (imageSize + margin) +
                (i % 2 === 0 ? 0 : (imageSize + margin) / 2);
              const y = i * (imageSize + margin);
              positions.push({ x, y });
            }
          }
        }

        const animate = () => {
          if (!isPaused) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            loadedImages.forEach((img, index) => {
              const { x, y } = positions[index];
              const newY =
                y + radius * Math.sin(angle + (index * Math.PI) / numImages);
              const opacity =
                0.5 + 0.5 * Math.cos(angle + (index * Math.PI) / numImages); // Opacity based on angle

              ctx.globalAlpha = opacity;
              ctx.drawImage(img, x, newY, imageSize, imageSize);
              ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
              ctx.font = "16px Arial";
              ctx.textAlign = "center";
              ctx.fillText(
                images[index].label,
                x + imageSize / 2,
                newY + imageSize + 20
              );
            });

            angle += 0.01;
          }
          animationFrameId = requestAnimationFrame(animate);
        };

        animate();
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };

    draw();

    const handleMouseEnter = () => {
      setIsPaused(true);
    };

    const handleMouseLeave = () => {
      setIsPaused(false);
    };

    canvas.addEventListener("mouseenter", handleMouseEnter);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      canvas.removeEventListener("mouseenter", handleMouseEnter);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused]);

  return <canvas ref={canvasRef} width={800} height={600} />;
};

export default GlobeCanvas;
