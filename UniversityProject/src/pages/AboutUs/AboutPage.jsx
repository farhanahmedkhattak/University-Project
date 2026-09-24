import React, { useEffect, useRef } from 'react';
import { renderAboutMarkup } from '../../features/about/aboutTemplate.js';
import { initAboutAnimations } from '../../features/about/aboutAnimations.js';
import "../../features/about/aboutStyles.css";

export default function AboutPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // 1. Inject HTML
    containerRef.current.innerHTML = renderAboutMarkup();

    // 2. Initialize animations
    let ctx;
    const timer = setTimeout(() => {
      if (containerRef.current) {
        ctx = initAboutAnimations(containerRef.current);
      }
    }, 60);

    // 3. Clean up
    return () => {
      clearTimeout(timer);
      if (ctx && typeof ctx.revert === 'function') {
        ctx.revert();
      }
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    }; 
  }, []);

  return <main ref={containerRef} id="about-page-mount" />;
}
