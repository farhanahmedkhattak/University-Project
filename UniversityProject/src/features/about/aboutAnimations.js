import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initAboutAnimations(container) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const ctx = gsap.context(() => {
    if (prefersReducedMotion) return;

    // 1. HERO ENTRANCE TIMELINE
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    heroTl
      .from('.vx-tagline', { y: 20, opacity: 0, duration: 0.6 })
      .from('.vx-hero__title', { y: 30, opacity: 0, duration: 0.8 }, '-=0.3')
      .from('.vx-hero__desc', { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')
      .from('.vx-hero__actions', { y: 20, opacity: 0, duration: 0.5 }, '-=0.3')
      .from('.vx-hero__panel', { scale: 0.96, opacity: 0, duration: 0.9 }, '-=0.5');

    // 2. WHO WE ARE / STORY
    gsap.from('.vx-story .vx-editorial-heading', {
      scrollTrigger: {
        trigger: '.vx-story',
        start: 'top 80%',
        once: true
      },
      y: 35,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
    });

    gsap.from('.vx-story .vx-editorial-body', {
      scrollTrigger: {
        trigger: '.vx-story',
        start: 'top 75%',
        once: true
      },
      y: 35,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
    });

    // 3. CORE SERVICES
    gsap.from('.vx-service-card', {
      scrollTrigger: {
        trigger: '.vx-services-grid',
        start: 'top 80%',
        once: true
      },
      y: 40,
      opacity: 0,
      duration: 0.7,
      stagger: 0.15,
      ease: 'power2.out'
    });

    // 4. MISSION & VISION
    gsap.from('.vx-card-block', {
      scrollTrigger: {
        trigger: '.vx-mission-vision',
        start: 'top 80%',
        once: true
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out'
    });

    // 5. OUR GOAL NODES
    gsap.from('.vx-goal-node', {
      scrollTrigger: {
        trigger: '.vx-goal-flow',
        start: 'top 85%',
        once: true
      },
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.12,
      ease: 'power2.out'
    });

    // 6. DIFFERENTIATOR PANEL
    gsap.from('.vx-diff-panel', {
      scrollTrigger: {
        trigger: '.vx-diff-panel',
        start: 'top 80%',
        once: true
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
    });

    // 7. STATS COUNT-UP
    const statBoxes = container.querySelectorAll('.vx-stat-box');
    ScrollTrigger.create({
      trigger: '.vx-stats-grid',
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.from(statBoxes, {
          y: 25,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out'
        });

        container.querySelectorAll('[data-count]').forEach(el => {
          const target = parseInt(el.getAttribute('data-count'), 10);
          const obj = { val: 0 };
          gsap.to(obj, {
            val: target,
            duration: 1.5,
            ease: 'power1.out',
            onUpdate: () => {
              el.textContent = Math.floor(obj.val);
            }
          });
        });
      }
    });

    // 8. TEAM LEADS
    gsap.from('.vx-lead-card', {
      scrollTrigger: {
        trigger: '.vx-grid-leads',
        start: 'top 80%',
        once: true
      },
      y: 35,
      opacity: 0,
      duration: 0.7,
      stagger: 0.15,
      ease: 'power2.out'
    });

    // 9. STUDENT TEAM
    gsap.from('.vx-student-card', {
      scrollTrigger: {
        trigger: '.vx-grid-students',
        start: 'top 80%',
        once: true
      },
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out'
    });

    // 10. GLOBAL AMBITION & FINAL CTA
    gsap.from('.vx-ambition-banner', {
      scrollTrigger: {
        trigger: '.vx-ambition',
        start: 'top 80%',
        once: true
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
    });

    gsap.from('.vx-cta-box', {
      scrollTrigger: {
        trigger: '.vx-cta',
        start: 'top 85%',
        once: true
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
    });

    // Recalculate trigger points after mounting
    ScrollTrigger.refresh();

  }, container);

  return ctx;
}