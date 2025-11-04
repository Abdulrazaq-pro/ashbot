"use client";
import React from "react";

// Mock Video component for demonstration
const Video = ({ src, className, ...props }) => (
  <video className={className} controls {...props}>
    <source src={src} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
);

export default function VideoShowcase() {
  const localVideoSrc = "/video-pitch.mp4";

  return (
    <div className="min-h-screen bg-neutral-100 p-8 flex items-center justify-center">
      <div className="max-w-4xl w-full space-y-8">
        <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/30 shadow-2xl shadow-emerald-500/10">
          <div className="aspect-video rounded-xl overflow-hidden bg-slate-900 shadow-inner">
            <Video src={localVideoSrc} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
