import { ReactNode } from "react";
import WatermarkImage from "./WatermarkImage";

interface PictureWatermarkProps {
  children?: ReactNode;
  className?: string;
  opacity?: number;
  sizes?: string;
  priority?: boolean;
}

/**
 * Watermark using the Picture1 asset as the background.
 * Wrap any content to float above the faded image.
 */
export default function PictureWatermark({
  children,
  className = "",
  opacity = 0.2,
  sizes = "100vw",
  priority = false,
}: PictureWatermarkProps) {
  return (
    <WatermarkImage
      src="/assets/Picture1.png"
      alt="Watermark background"
      opacity={opacity}
      fit="cover"
      className={className}
      sizes={sizes}
      priority={priority}
    >
      {children}
    </WatermarkImage>
  );
}
