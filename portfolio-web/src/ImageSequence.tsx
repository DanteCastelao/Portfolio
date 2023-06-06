import { CSSProperties } from "react";
import { clamp, MotionValue, useMotionValueEvent } from "framer-motion";
import React, { useEffect, useRef } from "react";

interface ImageSequenceProps {
  progress: MotionValue<number>;
  images: string[];
  height: number;
  width: number;
  style?: CSSProperties;
  className?: string;
}

const ImageSequence = ({
  progress,
  images,
  width,
  height,
  style,
  className
}: ImageSequenceProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRefs = useRef<HTMLImageElement[]>([]);
  const contextRef = useRef<CanvasRenderingContext2D | null | undefined>(null);
  const frameRef = useRef<number>();

  const setFrame = (rawFrame: number) => {
    const frame = clamp(0, images.length - 1, Math.floor(rawFrame));
    if (frameRef.current !== frame && contextRef.current) {
      frameRef.current = frame;
      contextRef.current.drawImage(imgRefs.current[frame], 0, 0);
    }
  };

  useMotionValueEvent(progress, "change", (val) => {
    const frame = clamp(0, images.length - 1, Math.floor(val * images.length));
    setFrame(frame);
  });

  useEffect(() => {
    contextRef.current = canvasRef.current?.getContext("2d");
    imgRefs.current = images.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });
    imgRefs.current[0].onload = () => {
      setFrame(0);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={style}
      width={width}
      height={height}
    />
  );
};

export default ImageSequence;
