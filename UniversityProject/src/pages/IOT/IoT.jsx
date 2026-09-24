import React, { useState, useEffect, useRef } from 'react';
import './IoT.css';
import iotImage from './iot.webp';

// Project details data[cite: 2]
const PROJECT_DATA = {
  campus: {
    num: '01',
    title: 'Smart Campus Digital Twin',
    tagline: 'Real-time IoT intelligence for connected campuses.',
    desc: 'A web-based digital representation of a university campus connected to IoT devices and sensors, giving facilities teams one interactive view of every building.',
    pipeline: ['ESP32 / Sensors', 'MQTT / Wi-Fi', 'Backend / API', 'Database', 'React / 3D Web Dashboard'],
    features: [
      'Interactive campus and building visualization',
      'Real-time temperature, humidity, occupancy, air-quality and energy data',
      'Building and room-level monitoring',
      'Real-time alerts and an admin dashboard',
      'Analytics with historical data and smart lighting/device monitoring'
    ]
  },
  maintenance: {
    num: '02',
    title: 'Industrial Predictive Maintenance',
    tagline: 'AI-powered machine health monitoring and failure prediction.',
    desc: 'An IoT platform that monitors industrial machines and uses data analytics to identify potential equipment failures before they occur.',
    pipeline: ['IoT Sensors', 'MQTT', 'Cloud / Backend', 'Machine Learning', 'React Dashboard'],
    features: [
      'Vibration, temperature, RPM and current monitoring',
      'Real-time machine status and health score',
      'Anomaly detection and failure-risk prediction',
      'Maintenance history and analytics dashboard',
      'Alerts and notifications for at-risk equipment'
    ]
  },
  energy: {
    num: '03',
    title: 'Smart Energy Intelligence',
    tagline: 'Real-time monitoring and analytics for connected energy systems.',
    desc: 'A professional IoT energy-management platform for monitoring and analyzing electricity consumption across buildings and devices.',
    pipeline: ['Smart Meter / Sensors', 'MQTT / HTTP', 'Cloud Backend', 'Database', 'Web Analytics Dashboard'],
    features: [
      'Real-time, building- and device-level power consumption',
      'Daily, weekly and monthly analytics with historical graphs',
      'Peak-consumption detection and estimated energy cost',
      'High-consumption alerts and energy forecasting',
      'Efficiency reporting'
    ]
  },
  fleet: {
    num: '04',
    title: 'Connected Fleet Intelligence',
    tagline: 'Real-time asset tracking, monitoring and analytics.',
    desc: 'A real-time IoT fleet and asset tracking platform using GPS-enabled devices to keep every vehicle and shipment visible.',
    pipeline: ['GPS / IoT Device', 'Internet / Cellular', 'API', 'Database', 'Real-Time Web Map'],
    features: [
      'Live GPS tracking on an interactive map',
      'Vehicle and asset status with speed monitoring',
      'Route history and geofencing',
      'Trip analytics and fleet statistics',
      'Real-time location updates and alerts'
    ]
  },
  agriculture: {
    num: '05',
    title: 'Precision Agriculture Platform',
    tagline: 'Connected sensing and intelligent irrigation for smarter farming.',
    desc: 'A professional IoT-based agriculture platform for monitoring crops, soil and irrigation across a field or farm.',
    pipeline: ['IoT Sensors', 'Wi-Fi / LoRa', 'MQTT / API', 'Cloud', 'Web Dashboard'],
    features: [
      'Soil moisture, temperature, humidity and light monitoring',
      'Water-level monitoring and field dashboard',
      'Smart irrigation control with remote device control',
      'Historical data and water-consumption analytics',
      'Environmental alerts'
    ]
  },
  building: {
    num: '06',
    title: 'Smart Building Management',
    tagline: 'Connected environments for intelligent building operations.',
    desc: 'An IoT-powered web platform for monitoring and managing intelligent buildings, room by room.',
    pipeline: ['IoT Sensors / Devices', 'MQTT', 'Backend', 'Database', 'Real-Time Web Application'],
    features: [
      'Real-time room temperature, humidity, CO2 and air-quality monitoring',
      'Occupancy detection and interactive floor plan',
      'Smart lighting and HVAC control',
      'Room-by-room analytics with energy monitoring',
      'Device management, alerts, and role-based access control'
    ]
  }
};

// Animated Stat Counter Component[cite: 2]
function StatCounter({ count, suffix = '' }) {
  const [value, setValue] = useState(0);
  const elRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const animateCount = () => {
      const target = parseFloat(count);
      const duration = 1200;
      const start = performance.now();
      const isDecimal = String(target).includes('.');

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = target * eased;
        setValue(isDecimal ? current.toFixed(1) : Math.round(current));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateCount();
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.4 }
      );
      observer.observe(el);
      return () => observer.disconnect();
    } else {
      animateCount();
    }
  }, [count]);

  return (
    <div className="stat-value" ref={elRef}>
      {value}{suffix}
    </div>
  );
}
<img src="/iot.webp" alt="IoT Interface" width="770" height="513" />

export default function IoT() {
  const [activeProjectKey, setActiveProjectKey] = useState(null);
  const modalCloseBtnRef = useRef(null);
  const nodeMapSvgRef = useRef(null);

  // Scroll reveal observer[cite: 2]
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && revealEls.length) {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
      );
      revealEls.forEach((el, i) => {
        el.style.transitionDelay = `${(i % 3) * 80}ms`;
        revealObserver.observe(el);
      });
      return () => revealObserver.disconnect();
    } else {
      revealEls.forEach((el) => el.classList.add('is-visible'));
    }
  }, []);

  // Node map animated SVG lines[cite: 2]
  useEffect(() => {
    const svg = nodeMapSvgRef.current;
    if (svg) {
      const paths = svg.querySelectorAll('path');
      paths.forEach((path, i) => {
        const length = path.getTotalLength();
        path.style.strokeDasharray = String(length);
        path.style.strokeDashoffset = String(length);
        path.style.transition = `stroke-dashoffset 1.4s ease ${i * 0.15}s`;
        requestAnimationFrame(() => {
          setTimeout(() => {
            path.style.strokeDashoffset = '0';
          }, 100);
        });
      });
    }
  }, []);

  // Modal keyboard handling and scroll lock[cite: 2]
  useEffect(() => {
    if (activeProjectKey) {
      document.body.style.overflow = 'hidden';
      if (modalCloseBtnRef.current) {
        modalCloseBtnRef.current.focus();
      }
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveProjectKey(null);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [activeProjectKey]);

  const activeProject = activeProjectKey ? PROJECT_DATA[activeProjectKey] : null;

  return (
    <div className="iot-page" id="top">
      {/* ============ HERO ============ */}
     {/* ============ HERO ============ */}
<section className="iot-hero">
  <div className="iot-hero-grid" aria-hidden="true"></div>
  <div className="container">
    <div className="hero-layout">
      <div className="hero-content">
        <span className="eyebrow">Vertex Technologies · Connected Systems</span>
        <h1 className="hero-title">
          <span>Internet of</span>
          <span>Things</span>
        </h1>
        <p className="hero-lede">
          Sensors, machines and everyday objects, sharing data in real time. We build the software layer that turns those signals into decisions.
        </p>
        <div className="hero-actions">
          <a href="#definition" className="btn btn-primary">Explore IoT</a>
          <a href="mailto:hello@vertextechnologies.io" className="btn btn-secondary">Talk to Us</a>
        </div>
      </div>

     
     
      <div className="hero-visual">
        <figure className="hero-image-frame">
          <img 
            src={iotImage} 
            alt="A hand touching a glowing IoT interface surrounded by connected device icons" 
            width="770" 
            height="513" 
          />
        </figure>
      </div>

    </div>
  </div>
</section>
 
      {/* ============ WHAT IS IOT ============ */}
      <section id="definition">
        <div className="container">
          <div className="section-head reveal">
            <h2>What is the Internet of Things?</h2>
          </div>
          <div className="definition-layout">
            <div className="reveal">
              <p>IoT is a network of devices that exchange data over the internet. Embedded sensors and software let them collect and share information automatically.</p>
              <p>It turns ordinary objects — appliances, machines, vehicles — into smart devices that work with users and with each other.</p>
              <p>A device is only as useful as the platform reading it. That's where we come in: dashboards, APIs and cloud pipelines.</p>
            </div>
            <div className="definition-visual reveal">
              <div className="node-map" aria-hidden="true">
                <svg ref={nodeMapSvgRef} viewBox="0 0 300 160">
                  <path d="M40 30 L150 80" stroke="#38BDF8" strokeWidth="1.5" opacity="0.5" fill="none" />
                  <path d="M150 80 L260 40" stroke="#38BDF8" strokeWidth="1.5" opacity="0.5" fill="none" />
                  <path d="M150 80 L90 135" stroke="#38BDF8" strokeWidth="1.5" opacity="0.5" fill="none" />
                  <path d="M150 80 L230 130" stroke="#38BDF8" strokeWidth="1.5" opacity="0.5" fill="none" />
                  <path d="M40 30 L90 135" stroke="#38BDF8" strokeWidth="1.5" opacity="0.3" fill="none" />
                </svg>
                <div className="node" style={{ top: '22px', left: '34px' }}></div>
                <div className="node" style={{ top: '74px', left: '144px', width: '14px', height: '14px' }}></div>
                <div className="node" style={{ top: '32px', left: '254px' }}></div>
                <div className="node" style={{ top: '127px', left: '84px' }}></div>
                <div className="node" style={{ top: '122px', left: '224px' }}></div>
              </div>
              <p className="caption">Connected devices exchanging data across a shared network.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ IMPORTANCE OF IOT ============ */}
      <section className="section-alt">
        <div className="container">
          <div className="section-head reveal">
            <h2>Why IoT matters today</h2>
            <p>IoT sits at the centre of digital transformation, reshaping how organisations operate day to day.</p>
          </div>
          <div className="grid grid-4">
            <div className="card reveal">
              <div className="icon-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" strokeLinejoin="round" /></svg>
              </div>
              <h3>Operational efficiency</h3>
              <p>Real-time monitoring keeps systems running at their best, with far less manual oversight.</p>
            </div>
            <div className="card reveal">
              <div className="icon-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 8v5l3 3M21 12a9 9 0 1 1-9-9" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <h3>Predictive maintenance</h3>
              <p>Devices flag issues before they cause downtime, keeping operations running smoothly.</p>
            </div>
            <div className="card reveal">
              <div className="icon-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 21s-7-4.35-9.5-8.5C1 9 2.5 5.5 6 5c2-.3 3.7.9 4.5 2 .8-1.1 2.5-2.3 4.5-2 3.5.5 5 4 3.5 7.5C19 16.65 12 21 12 21Z" strokeLinejoin="round" /></svg>
              </div>
              <h3>Better user experience</h3>
              <p>Automation and personalization make everyday interactions feel effortless.</p>
            </div>
            <div className="card reveal">
              <div className="icon-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 21V10l9-7 9 7v11h-6v-6H9v6H3Z" strokeLinejoin="round" /></svg>
              </div>
              <h3>Smarter environments</h3>
              <p>Driving innovation in smart cities, agriculture, healthcare, and industrial automation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WEB ENGINEERING ============ */}
      <section>
        <div className="container">
          <div className="section-head reveal">
            <h2>IoT and web engineering</h2>
            <p>Connected devices produce enormous amounts of data. Web applications are how people monitor, control and make sense of it.</p>
          </div>
          <div className="grid grid-3">
            <div className="card reveal">
              <h3>Responsive design</h3>
              <p>Dashboards and control panels that work smoothly from desktop to smartphone.</p>
            </div>
            <div className="card reveal">
              <h3>Real-time visualization</h3>
              <p>Charts, graphs, and alerts that present live data from sensors and devices.</p>
            </div>
            <div className="card reveal">
              <h3>Cloud integration</h3>
              <p>Secure connections to the cloud servers where IoT data is stored and processed.</p>
            </div>
            <div className="card reveal">
              <h3>API development</h3>
              <p>APIs that let web applications communicate with devices and services reliably.</p>
            </div>
            <div className="card reveal">
              <h3>Security &amp; privacy</h3>
              <p>Protecting data in transit and user information from evolving cyber threats.</p>
            </div>
            <div className="card reveal">
              <h3>Interoperability</h3>
              <p>Smooth integration across the many standards and platforms IoT devices rely on.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FEATURED PROJECTS ============ */}
      <section id="solutions" className="projects-section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Selected work</span>
            <h2>Featured IoT platforms</h2>
            <p>Six builds across campus, industry, energy, mobility, agriculture and buildings — each carrying sensor data to a decision.</p>
          </div>

          <div className="pipeline-strip reveal" aria-hidden="true">
            <span>IoT Devices</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <span>Connectivity</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <span>Backend</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <span>Data</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <span>Intelligence</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <span>Web Application</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <span>Human Control</span>
          </div>

          <div className="project-grid">
            <article className="project-card reveal" data-project="campus">
              <div className="project-visual project-visual--campus">
                <span className="project-num">01</span>
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M12 54V26l20-12 20 12v28" strokeLinejoin="round" />
                  <path d="M20 54V34h8v20M36 54V34h8v20" strokeLinejoin="round" />
                  <circle cx="32" cy="22" r="2.4" fill="currentColor" stroke="none" />
                  <path d="M12 26 32 22 52 26" strokeDasharray="2 4" />
                </svg>
              </div>
              <div className="project-body">
                <h3>Smart Campus Digital Twin</h3>
                <p className="project-tagline">Real-time IoT intelligence for connected campuses.</p>
                <p className="project-desc">A digital twin of a campus, wired into live temperature, occupancy, air-quality and energy feeds — with alerts and historical analytics.</p>
                <div className="project-tags">
                  <div className="tag-row"><span className="tag-label">IoT</span><span className="tag">ESP32</span><span className="tag">Sensors</span><span className="tag">MQTT</span><span className="tag">Wi-Fi</span></div>
                  <div className="tag-row"><span className="tag-label">Web</span><span className="tag">React</span><span className="tag">3D Visualization</span><span className="tag">REST API</span><span className="tag">Database</span></div>
                </div>
                <button type="button" className="project-link" onClick={() => setActiveProjectKey('campus')}>Explore Project <span aria-hidden="true">→</span></button>
              </div>
            </article>

            <article className="project-card reveal" data-project="maintenance">
              <div className="project-visual project-visual--maintenance">
                <span className="project-num">02</span>
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <circle cx="26" cy="32" r="10" />
                  <path d="M26 22v-4M26 46v-4M16 32h-4M40 32h-4M18.9 24.9l-2.8-2.8M35.9 39.1l2.8 2.8M18.9 39.1l-2.8 2.8M35.9 24.9l2.8-2.8" />
                  <path d="M38 34c4 2 10 0 14-6M44 24l4 1-1 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="project-body">
                <h3>Industrial Predictive Maintenance</h3>
                <p className="project-tagline">AI-powered machine health monitoring and failure prediction.</p>
                <p className="project-desc">Tracks vibration, temperature, RPM and current to score machine health and flag anomalies before they become failures.</p>
                <div className="project-tags">
                  <div className="tag-row"><span className="tag-label">IoT</span><span className="tag">Vibration Sensors</span><span className="tag">Temp Sensors</span><span className="tag">MQTT</span></div>
                  <div className="tag-row"><span className="tag-label">Web</span><span className="tag">Machine Learning</span><span className="tag">React</span><span className="tag">Cloud Backend</span></div>
                </div>
                <button type="button" className="project-link" onClick={() => setActiveProjectKey('maintenance')}>Explore Project <span aria-hidden="true">→</span></button>
              </div>
            </article>

            <article className="project-card reveal" data-project="energy">
              <div className="project-visual project-visual--energy">
                <span className="project-num">03</span>
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M35 8 18 34h11l-4 22 21-28H35l4-20Z" strokeLinejoin="round" strokeLinecap="round" />
                </svg>
              </div>
              <div className="project-body">
                <h3>Smart Energy Intelligence</h3>
                <p className="project-tagline">Real-time monitoring and analytics for connected energy systems.</p>
                <p className="project-desc">Tracks electricity use by building and device, with peak detection, cost estimates and forecasting.</p>
                <div className="project-tags">
                  <div className="tag-row"><span className="tag-label">IoT</span><span className="tag">Smart Meters</span><span className="tag">MQTT</span><span className="tag">HTTP</span></div>
                  <div className="tag-row"><span className="tag-label">Web</span><span className="tag">Cloud Backend</span><span className="tag">Database</span><span className="tag">Analytics Dashboard</span></div>
                </div>
                <button type="button" className="project-link" onClick={() => setActiveProjectKey('energy')}>Explore Project <span aria-hidden="true">→</span></button>
              </div>
            </article>

            <article className="project-card reveal" data-project="fleet">
              <div className="project-visual project-visual--fleet">
                <span className="project-num">04</span>
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M32 10c-8 0-14 6-14 14 0 11 14 30 14 30s14-19 14-30c0-8-6-14-14-14Z" strokeLinejoin="round" />
                  <circle cx="32" cy="24" r="5" />
                </svg>
              </div>
              <div className="project-body">
                <h3>Connected Fleet Intelligence</h3>
                <p className="project-tagline">Real-time asset tracking, monitoring and analytics.</p>
                <p className="project-desc">GPS fleet tracking with a live map, geofencing, route history and trip analytics for dispatchers and fleet managers.</p>
                <div className="project-tags">
                  <div className="tag-row"><span className="tag-label">IoT</span><span className="tag">GPS Modules</span><span className="tag">Cellular</span></div>
                  <div className="tag-row"><span className="tag-label">Web</span><span className="tag">REST API</span><span className="tag">Database</span><span className="tag">Real-Time Map</span></div>
                </div>
                <button type="button" className="project-link" onClick={() => setActiveProjectKey('fleet')}>Explore Project <span aria-hidden="true">→</span></button>
              </div>
            </article>

            <article className="project-card reveal" data-project="agriculture">
              <div className="project-visual project-visual--agriculture">
                <span className="project-num">05</span>
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M32 54V28" strokeLinecap="round" />
                  <path d="M32 30c0-10-8-16-16-16 0 10 6 18 16 16ZM32 34c0-9 8-15 16-15 0 9-6 17-16 15Z" strokeLinejoin="round" />
                  <path d="M18 54h28" strokeLinecap="round" />
                </svg>
              </div>
              <div className="project-body">
                <h3>Precision Agriculture Platform</h3>
                <p className="project-tagline">Connected sensing and intelligent irrigation for smarter farming.</p>
                <p className="project-desc">Monitors soil moisture, temperature, humidity and water levels, with smart irrigation control and usage trends.</p>
                <div className="project-tags">
                  <div className="tag-row"><span className="tag-label">IoT</span><span className="tag">Soil Sensors</span><span className="tag">LoRa</span><span className="tag">Wi-Fi</span></div>
                  <div className="tag-row"><span className="tag-label">Web</span><span className="tag">MQTT/API</span><span className="tag">Cloud</span><span className="tag">React Dashboard</span></div>
                </div>
                <button type="button" className="project-link" onClick={() => setActiveProjectKey('agriculture')}>Explore Project <span aria-hidden="true">→</span></button>
              </div>
            </article>

            <article className="project-card reveal" data-project="building">
              <div className="project-visual project-visual--building">
                <span className="project-num">06</span>
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="14" y="10" width="36" height="44" rx="2" strokeLinejoin="round" />
                  <path d="M14 26h36M14 40h36M28 10v44M40 10v44" strokeWidth="1.2" opacity="0.6" />
                  <circle cx="21" cy="18" r="1.6" fill="currentColor" stroke="none" />
                  <circle cx="46" cy="33" r="1.6" fill="currentColor" stroke="none" />
                  <circle cx="34" cy="47" r="1.6" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <div className="project-body">
                <h3>Smart Building Management</h3>
                <p className="project-tagline">Connected environments for intelligent building operations.</p>
                <p className="project-desc">Room-level temperature, humidity, CO₂ and occupancy on an interactive floor plan, with lighting, HVAC and energy control.</p>
                <div className="project-tags">
                  <div className="tag-row"><span className="tag-label">IoT</span><span className="tag">CO₂ Sensors</span><span className="tag">Occupancy Sensors</span><span className="tag">MQTT</span></div>
                  <div className="tag-row"><span className="tag-label">Web</span><span className="tag">Backend</span><span className="tag">Database</span><span className="tag">Real-Time Web App</span></div>
                </div>
                <button type="button" className="project-link" onClick={() => setActiveProjectKey('building')}>Explore Project <span aria-hidden="true">→</span></button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ============ TECH STACK ============ */}
      <section className="section-alt">
        <div className="container">
          <div className="section-head reveal">
            <h2>Technologies behind an IoT website</h2>
            <p>The stack that keeps connected data moving — from device to dashboard.</p>
          </div>
          <div className="grid grid-2">
            <div className="card stack-group reveal">
              <h3>Frontend</h3>
              <div className="stack-tags">
                <span>HTML5</span><span>CSS3</span><span>JavaScript</span><span>React</span><span>Vue.js</span>
              </div>
            </div>
            <div className="card stack-group reveal">
              <h3>Backend</h3>
              <div className="stack-tags">
                <span>Node.js</span><span>Django</span><span>Flask</span>
              </div>
            </div>
            <div className="card stack-group reveal">
              <h3>Database</h3>
              <div className="stack-tags">
                <span>MongoDB</span><span>Firebase</span><span>MySQL</span><span>PostgreSQL</span>
              </div>
            </div>
            <div className="card stack-group reveal">
              <h3>Real-time communication</h3>
              <div className="stack-tags">
                <span>WebSockets</span><span>MQTT</span>
              </div>
            </div>
            <div className="card stack-group reveal">
              <h3>Cloud services</h3>
              <div className="stack-tags">
                <span>AWS</span><span>Microsoft Azure</span><span>Google Cloud</span>
              </div>
            </div>
            <div className="card stack-group reveal">
              <h3>Security</h3>
              <div className="stack-tags">
                <span>HTTPS</span><span>OAuth</span><span>JWT</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section id="process">
        <div className="container">
          <div className="section-head reveal">
            <h2>How we build it</h2>
            <p>Four stages take a project from device data to a platform people rely on every day.</p>
          </div>
          <div className="process-list">
            <div className="process-step reveal">
              <span className="feature-num">01</span>
              <div>
                <h3>Discover</h3>
                <p>We map your devices, data flows, and the outcomes that matter before writing a line of code.</p>
              </div>
            </div>
            <div className="process-step reveal">
              <span className="feature-num">02</span>
              <div>
                <h3>Design</h3>
                <p>Interfaces and architecture are planned together, so the dashboard fits how the data actually behaves.</p>
              </div>
            </div>
            <div className="process-step reveal">
              <span className="feature-num">03</span>
              <div>
                <h3>Build</h3>
                <p>Frontend, backend, and device integrations are built in parallel, tested against real hardware.</p>
              </div>
            </div>
            <div className="process-step reveal">
              <span className="feature-num">04</span>
              <div>
                <h3>Support</h3>
                <p>Once live, we monitor, patch, and scale the platform as your device fleet grows.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="section-alt">
        <div className="container">
          <div className="cta-panel reveal">
            <div>
              <h2>Building smarter, connected experiences</h2>
              <p>We pair web engineering with IoT-specific tooling: real-time interaction, solid data security, and interfaces people enjoy using.</p>
            </div>
            <a href="mailto:hello@vertextechnologies.io" className="btn btn-primary">Start a Project</a>
          </div>
        </div>
      </section>

      {/* ============ PROJECT MODAL ============ */}
      <div
        className={`project-modal ${activeProjectKey ? 'is-open' : ''}`}
        id="project-modal"
        aria-hidden={!activeProjectKey}
      >
        <div className="project-modal-backdrop" onClick={() => setActiveProjectKey(null)}></div>
        <div className="project-modal-panel" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
          <button
            type="button"
            className="project-modal-close"
            ref={modalCloseBtnRef}
            onClick={() => setActiveProjectKey(null)}
            aria-label="Close project details"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
            </svg>
          </button>
          {activeProject && (
            <>
              <span className="project-modal-num" id="project-modal-num">{activeProject.num}</span>
              <h3 id="project-modal-title">{activeProject.title}</h3>
              <p className="project-modal-tagline">{activeProject.tagline}</p>
              <p className="project-modal-desc">{activeProject.desc}</p>
              <div className="project-modal-pipeline" aria-hidden="true">
                {activeProject.pipeline.map((stage, i) => (
                  <React.Fragment key={i}>
                    <span>{stage}</span>
                    {i < activeProject.pipeline.length - 1 && <em>→</em>}
                  </React.Fragment>
                ))}
              </div>
              <div className="project-modal-features">
                <h4>Key capabilities</h4>
                <ul>
                  {activeProject.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <a href="mailto:hello@vertextechnologies.io" className="btn btn-primary project-modal-cta">
                Discuss this project
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}