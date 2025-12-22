import Image from "next/image";
import { ReactNode } from "react";

interface WatermarkImageProps {
  src: string;
  alt: string;
  opacity?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
  fit?: "cover" | "contain";
  children?: ReactNode;
}

/**
 * Renders an image as a background watermark with optional overlay content.
 * The parent must provide explicit sizing (e.g., height/width classes).
 */
export default function WatermarkImage({
  src,
  alt,
  opacity = 0.15,
  className = "",
  sizes = "100vw",
  priority = false,
  fit = "cover",
  children,
}: WatermarkImageProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="pointer-events-none select-none"
        style={{ opacity, objectFit: fit }}
      />
      {children ? <div className="relative">{children}</div> : null}
    </div>
  );
}
