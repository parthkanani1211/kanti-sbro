// src/components/VideoBackground.tsx

import React, { useState, useRef, useEffect } from "react";

interface VideoBackgroundProps {
  // An object where keys are video formats (mp4, webm) and values are the URL paths.
  videoSources: Record<string, string>;
  // Optional poster image to show while the video loads or if it fails.
  poster?: string;
  // Tailwind CSS classes for the color overlay.
  overlay?: string;
  // Additional CSS classes for the container.
  className?: string;
}

export const VideoBackground = ({ 
  videoSources, 
  poster, 
  overlay = "bg-black/70",
  className = "" 
}: VideoBackgroundProps): JSX.Element => {
  const [videoError, setVideoError] = useState(false);
  // State to track if the component is visible in the viewport.
  const [isIntersecting, setIsIntersecting] = useState(false);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  // Lazy load the video using the Intersection Observer API.
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the component comes into view, update the state.
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          // Stop observing once it's visible to save resources.
          if (videoContainerRef.current) {
            observer.unobserve(videoContainerRef.current);
          }
        }
      },
      {
        // Start loading the video when it's 200px away from the viewport.
        rootMargin: "200px", 
      }
    );

    if (videoContainerRef.current) {
      observer.observe(videoContainerRef.current);
    }

    // Cleanup observer on component unmount.
    return () => {
      if (videoContainerRef.current) {
        observer.unobserve(videoContainerRef.current);
      }
    };
  }, []); 

  // This is the function that gave us the helpful error messages.
  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error(`Video failed to load at path: ${e.currentTarget.currentSrc}`);
    setVideoError(true);
  };

  const hasVideoSources = Object.keys(videoSources).length > 0;
  // Condition now also checks if the component is in view.
  const shouldRenderVideo = isIntersecting && !videoError && hasVideoSources;

  return (
    // Add the ref and aria-hidden for accessibility.
    <div 
      ref={videoContainerRef}
      className={`absolute inset-0 -z-10 overflow-hidden ${className}`}
      aria-hidden="true" // Decorative backgrounds should be hidden from screen readers.
    >
      {shouldRenderVideo ? (
        <video
          // A key helps React re-mount the component if sources change.
          key={Object.values(videoSources).join('_')}
          className="w-full h-full object-cover"
          poster={poster}
          autoPlay
          muted
          loop
          playsInline // Crucial for autoplay on mobile devices.
          onError={handleVideoError}
        >
          {/* Dynamically generate <source> tags for more flexibility. */}
          {Object.entries(videoSources).map(([format, src]) => (
            <source key={src} src={src} type={`video/${format}`} />
          ))}
          Your browser does not support the video tag.
        </video>
      ) : (
        // Fallback: This will show before the video is in view, or if it errors.
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: poster ? `url(${poster})` : 'linear-gradient(135deg, #1f2937, #111827)'
          }}
        />
      )}
      {/* The overlay is always rendered to maintain text readability. */}
      <div className={`absolute inset-0 w-full h-full ${overlay}`} />
    </div>
  );
};