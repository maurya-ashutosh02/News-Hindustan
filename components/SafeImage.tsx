"use client";

import Image from "next/image";
import { useState } from "react";

export default function SafeImage({ src, alt, ...props }) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...props}
      src={imgSrc || "/news-default.jpg"}  // fallback if empty
      alt={alt}
      onError={() => setImgSrc("/default-news.jpg")} // fallback if broken
    />
  );
}
