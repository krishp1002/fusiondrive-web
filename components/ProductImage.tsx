"use client"

import { useState } from "react"
import Image from "next/image"

/**
 * Renders a Next.js Image with a graceful fallback placeholder
 * when the image file is missing or fails to load.
 */
export function ProductImage({
  src,
  alt,
  label,
  fill = false,
  width,
  height,
  sizes,
  className,
  imgClassName,
  priority = false,
}: {
  src: string
  alt: string
  label?: string
  fill?: boolean
  width?: number
  height?: number
  sizes?: string
  className?: string
  imgClassName?: string
  priority?: boolean
}) {
  const [hasError, setHasError] = useState(false)
  const fallbackLabel = label ?? alt

  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      {!hasError ? (
        <Image
          src={src}
          alt={alt}
          fill={fill || (!width && !height) ? true : undefined}
          width={!fill && width ? width : undefined}
          height={!fill && height ? height : undefined}
          sizes={sizes}
          className={imgClassName ?? "object-contain object-center p-2 sm:p-4"}
          loading={priority ? "eager" : "lazy"}
          priority={priority}
          unoptimized
          onError={() => setHasError(true)}
        />
      ) : (
        <div
          className="fd-img-placeholder absolute inset-0 flex flex-col items-center justify-center"
          aria-hidden="true"
        >
          <div className="text-3xl mb-2">📷</div>
          <div className="text-xs text-center leading-relaxed px-2">
            {fallbackLabel}
            <br />
            <span className="text-[#BDBDBD] block mt-1 text-[0.65rem]">
              Place image at {src}
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

