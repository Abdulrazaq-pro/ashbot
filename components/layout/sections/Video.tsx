"use client";
import React from "react";

// Proper TypeScript interface for Video component
interface VideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  className?: string;
}

const Video: React.FC<VideoProps> = ({ src, className, ...props }) => (
  <video className={className} controls {...props}>
    <source src={src} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
);

export default function VideoShowcase() {
  const localVideoSrc = "/video-pitch.mp4";
  
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <div className="max-w-5xl mx-auto space-y-8">
          
          {/* Section Header */}
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-lg text-center mb-2 tracking-wider bg-gradient-to-r from-greenflow-green-500 to-greenflow-blue-500 bg-clip-text text-transparent font-semibold">
              See It In Action
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-sora)]">
              Watch GreenFlow Transform Farming
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto font-[family-name:var(--font-inter)]">
              From hardware setup to real-time monitoring, see how GreenFlow helps farmers save water and increase yields.
            </p>
          </div>

          {/* Video Container */}
          <div className="bg-gradient-to-br from-greenflow-green-900/20 via-greenflow-blue-900/20 to-greenflow-green-900/20 dark:from-greenflow-green-950/40 dark:via-greenflow-blue-950/40 dark:to-greenflow-green-950/40 backdrop-blur-sm rounded-2xl p-6 border border-greenflow-green-500/30 dark:border-greenflow-green-500/20 shadow-2xl shadow-greenflow-green-500/10">
            <div className="aspect-video rounded-xl overflow-hidden bg-slate-900/50 shadow-inner ring-1 ring-greenflow-blue-500/20">
              <Video 
                src={localVideoSrc} 
                className="w-full h-full object-cover"
                poster="/video-thumbnail.jpg" // Optional: Add a thumbnail
              />
            </div>
            
            {/* Optional: Video caption */}
            <p className="text-center text-sm text-muted-foreground mt-4 font-[family-name:var(--font-inter)]">
              GreenFlow Demo: Real-time soil monitoring and automated irrigation in action
            </p>
          </div>

          {/* Optional: Key Features Below Video */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="text-center p-4 bg-card rounded-lg border border-border">
              <div className="text-3xl mb-2">💧</div>
              <h4 className="font-semibold mb-1 font-[family-name:var(--font-sora)]">
                Real-Time Monitoring
              </h4>
              <p className="text-sm text-muted-foreground">
                See live soil moisture data
              </p>
            </div>
            
            <div className="text-center p-4 bg-card rounded-lg border border-border">
              <div className="text-3xl mb-2">⚡</div>
              <h4 className="font-semibold mb-1 font-[family-name:var(--font-sora)]">
                Automated Control
              </h4>
              <p className="text-sm text-muted-foreground">
                Smart watering decisions
              </p>
            </div>
            
            <div className="text-center p-4 bg-card rounded-lg border border-border">
              <div className="text-3xl mb-2">📱</div>
              <h4 className="font-semibold mb-1 font-[family-name:var(--font-sora)]">
                Mobile Alerts
              </h4>
              <p className="text-sm text-muted-foreground">
                SMS + app notifications
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}