'use client';

import Image from 'next/image';
import { useState } from 'react';

export interface ScreenshotItem {
  src: string;
  alt: string;
}

interface ScreenshotGridProps {
  screenshots: ScreenshotItem[];
  borderClass: string;
}

export default function ScreenshotGrid({
  screenshots,
  borderClass,
}: ScreenshotGridProps) {
  const [enlargedImg, setEnlargedImg] = useState<ScreenshotItem | null>(null);

  return (
    <>
      <div className="grid grid-cols-3 gap-3">
        {screenshots.map((shot, idx) => (
          <div
            key={shot.src}
            onClick={() => setEnlargedImg(shot)}
            className={`cursor-zoom-in rounded-2xl overflow-hidden border ${borderClass} bg-slate-950 shadow-xl transform transition-transform ${
              idx === 1
                ? 'translate-y-4 hover:translate-y-3'
                : 'hover:-translate-y-1'
            }`}
          >
            <Image
              src={shot.src}
              alt={shot.alt}
              width={300}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>

      {/* 全屏图片放大遮罩层 (Lightbox) */}
      {enlargedImg && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#031814]/90 backdrop-blur-md p-4 sm:p-8 cursor-zoom-out transition-opacity"
          onClick={() => setEnlargedImg(null)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={enlargedImg.src}
            alt={enlargedImg.alt}
            className="max-h-[95vh] max-w-[95vw] object-contain rounded-2xl shadow-[0_0_50px_rgba(251,191,36,0.15)] ring-1 ring-amber-500/20"
          />
        </div>
      )}
    </>
  );
}