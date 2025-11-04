"use client"

import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
import { performanceImages } from "./data";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Mock data - replace with your actual imports
// const performanceImages = [
//   { id: "p1", src: "/api/placeholder/400/300", alt: "Performance 1" },
//   { id: "p2", src: "/api/placeholder/400/300", alt: "Performance 2" },
//   { id: "p3", src: "/api/placeholder/400/300", alt: "Performance 3" },
//   { id: "p4", src: "/api/placeholder/400/300", alt: "Performance 4" },
//   { id: "p5", src: "/api/placeholder/400/300", alt: "Performance 5" },
// ];

const performanceImgPositions = [
  { id: "p1", left: 5, bottom: 10, transform: "scale(0.9) rotate(-5deg)" },
  { id: "p2", right: 10, bottom: 15, transform: "scale(1.1) rotate(3deg)" },
  { id: "p3", left: 45, bottom: 5, transform: "scale(1) translateY(-30px)" },
  { id: "p4", right: 35, bottom: 20, transform: "scale(0.95) rotate(-3deg)" },
  { id: "p5", left: 25, bottom: 30 },
];

const Performance: React.FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const sectionRef = useRef<HTMLElement>(null);

  const setupAnimations = (): void => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    // Kill existing ScrollTriggers to prevent duplicates
    const triggers = ScrollTrigger.getAll();
    triggers.forEach(trigger => {
      if (trigger.vars.trigger === sectionEl || trigger.vars.trigger === ".content p") {
        trigger.kill();
      }
    });

    // Text fade-in animation
    gsap.fromTo(
      ".content p",
      { 
        opacity: 0, 
        y: 30 
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".content p",
          start: "top 85%",
          end: "top 50%",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      }
    );

    if (isMobile) return;

    // Set initial positions for images (scattered/random)
    performanceImgPositions.forEach((item) => {
      const selector = `.${item.id}`;
      const initialVars: gsap.TweenVars = {};
      
      // Start from random scattered positions
      if (item.id === "p1") {
        initialVars.left = "20%";
        initialVars.bottom = "50%";
        initialVars.transform = "scale(0.7) rotate(-15deg)";
      } else if (item.id === "p2") {
        initialVars.right = "25%";
        initialVars.bottom = "55%";
        initialVars.transform = "scale(0.6) rotate(20deg)";
      } else if (item.id === "p3") {
        initialVars.left = "60%";
        initialVars.bottom = "45%";
        initialVars.transform = "scale(0.8) translateY(50px)";
      } else if (item.id === "p4") {
        initialVars.right = "15%";
        initialVars.bottom = "60%";
        initialVars.transform = "scale(0.75) rotate(-10deg)";
      }
      
      if (item.id !== "p5") {
        gsap.set(selector, initialVars);
      }
    });

    // Animate images to final positions
    const tl = gsap.timeline({
      defaults: { 
        duration: 1.5, 
        ease: "power3.inOut"
      },
      scrollTrigger: {
        trigger: sectionEl,
        start: "top 70%",
        end: "center 40%",
        scrub: 2,
        toggleActions: "play none none reverse",
      },
    });

    // Animate each image to its final position
    performanceImgPositions.forEach((item, index) => {
      if (item.id === "p5") return;

      const selector = `.${item.id}`;
      const vars: gsap.TweenVars = {
        opacity: 1,
      };

      if (typeof item.left === "number") vars.left = `${item.left}%`;
      if (typeof item.right === "number") vars.right = `${item.right}%`;
      if (typeof item.bottom === "number") vars.bottom = `${item.bottom}%`;
      if (item.transform) vars.transform = item.transform;

      // Stagger the animations slightly
      tl.to(selector, vars, index * 0.1);
    });

    // Add floating animation for images after they're in position
    performanceImgPositions.forEach((item) => {
      if (item.id === "p5") return;
      
      const selector = `.${item.id}`;
      gsap.to(selector, {
        y: "+=15",
        duration: 2 + Math.random() * 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random() * 0.5,
      });
    });
  };

  useGSAP(setupAnimations, { 
    scope: sectionRef, 
    dependencies: [isMobile],
    revertOnUpdate: true 
  });

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      id="performance" 
      ref={sectionRef}
      style={{
        minHeight: "120vh",
        padding: "6rem 2rem",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(to bottom, #000000, #0a0a0a)",
      }}
    >
      <h2 
        style={{ 
          fontSize: "clamp(2rem, 5vw, 4rem)", 
          textAlign: "center", 
          marginBottom: "4rem",
          fontWeight: "bold",
          color: "#ffffff",
          letterSpacing: "-0.02em",
        }}
      >
        Next-level graphics performance. Game on.
      </h2>

      <div 
        className="wrapper" 
        style={{ 
          position: "relative", 
          minHeight: "600px", 
          margin: "4rem auto",
          maxWidth: "1400px",
        }}
      >
        {performanceImages.map((item, index) => (
          <img
            key={index}
            src={item.src}
            className={item.id}
            alt={item.alt || `Performance Image #${index + 1}`}
            style={{
              position: "absolute",
              width: "clamp(200px, 20vw, 350px)",
              height: "auto",
              borderRadius: "12px",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)",
              opacity: item.id === "p5" ? 1 : 0,
              objectFit: "cover",
              willChange: "transform, opacity",
            }}
          />
        ))}
      </div>

      <div 
        className="content" 
        style={{ 
          maxWidth: "900px", 
          margin: "0 auto", 
          padding: "4rem 2rem",
        }}
      >
        <p 
          style={{ 
            fontSize: "clamp(1rem, 2vw, 1.25rem)", 
            lineHeight: "1.8", 
            color: "#a0a0a0",
            textAlign: "center",
          }}
        >
          Run graphics-intensive workflows with a responsiveness that keeps up
          with your imagination. The M4 family of chips features a GPU with a
          second-generation hardware-accelerated ray tracing engine that renders
          images faster, so{" "}
          <span style={{ color: "#ffffff", fontWeight: "500" }}>
            gaming feels more immersive and realistic than ever.
          </span>{" "}
          And Dynamic Caching optimizes fast on-chip memory to dramatically
          increase average GPU utilization — driving a huge performance boost
          for the most demanding pro apps and games.
        </p>
      </div>
    </section>
  );
};

export default Performance;