import React, { useEffect } from "react";

import pythonLogo from "../../assets/logos/python.png";
import tensorlogo from "../../assets/logos/TensorFlow.png";
import pytorchlogo from "../../assets/logos/pytorch.png";
import skitlearnlogo from "../../assets/logos/skitlearn.jpg";
import pandaslogo from "../../assets/logos/pandas.png";
import numpylogo from "../../assets/logos/numpy.png";
import opencvlogo from "../../assets/logos/opencv.png";
import fastapilogo from "../../assets/logos/fastapi.png";

import "./AIMachineLearning.css";

const services = [
  {
    number: "01",
    icon: "AI",
    title: "Artificial Intelligence",
    description:
      "Build practical artificial intelligence systems that solve real business and operational problems through intelligent automation.",
    tags: ["AI Systems", "Automation", "LLM"],
  },
  {
    number: "02",
    icon: "ML",
    title: "Machine Learning",
    description:
      "Develop predictive and classification models that transform your data into useful insights and intelligent decisions.",
    tags: ["Prediction", "Classification", "Python"],
  },
  {
    number: "03",
    icon: "CV",
    title: "Computer Vision",
    description:
      "Create intelligent systems capable of detecting, classifying, recognizing, and analyzing visual information.",
    tags: ["OpenCV", "Detection", "Image AI"],
  },
  {
    number: "04",
    icon: "NLP",
    title: "Natural Language Processing",
    description:
      "Develop intelligent applications that understand, process, analyze, and generate human language.",
    tags: ["NLP", "Chatbots", "LLM"],
  },
  {
    number: "05",
    icon: "DA",
    title: "Data Intelligence",
    description:
      "Transform raw datasets into meaningful analytics, predictions, dashboards, and decision-support systems.",
    tags: ["Analytics", "Data", "Insights"],
  },
  {
    number: "06",
    icon: "API",
    title: "AI Integration",
    description:
      "Integrate AI capabilities into websites, applications, APIs, software products, and existing business workflows.",
    tags: ["API", "Backend", "Integration"],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Understand the Problem",
    description:
      "We understand your business problem, project idea, data, requirements, and desired outcome.",
  },
  {
    number: "02",
    title: "Design the Solution",
    description:
      "We determine the appropriate AI approach, architecture, data strategy, and technologies.",
  },
  {
    number: "03",
    title: "Build & Test",
    description:
      "The system is developed, trained, tested, optimized, and prepared for practical implementation.",
  },
  {
    number: "04",
    title: "Deploy & Support",
    description:
      "The solution is deployed for real-world use with documentation, guidance, and continued support.",
  },
];

const technologies = [
  { name: "Python", logo: pythonLogo },
  { name: "TensorFlow", logo: tensorlogo },
  { name: "PyTorch", logo: pytorchlogo },
  { name: "Scikit-learn", logo: skitlearnlogo },
  { name: "Pandas", logo: pandaslogo },
  { name: "NumPy", logo: numpylogo },
  { name: "OpenCV", logo: opencvlogo },
  { name: "FastAPI", logo: fastapilogo },
];

const testimonials = [
  {
    initial: "A",
    name: "Ahmed Khan",
    role: "Business Client",
    text:
      "The AI solution helped us automate a repetitive workflow and process information much faster.",
  },
  {
    initial: "M",
    name: "Maria Hassan",
    role: "Software Developer",
    text:
      "The development process was organized clearly and the documentation made integration straightforward.",
  },
  {
    initial: "V",
    name: "VertexTechnology Client",
    role: "AI / ML Project",
    text:
      "The solution was designed around our actual requirements and gave us a clear path toward implementation.",
  },
];

function AIMachineLearning() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".scroll-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => {
      revealElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <div className="ai-page">

      {/* =========================
          HERO SECTION
      ========================= */}

      <main>
        <section id="home" className="ai-hero">
          <div className="hero-background-grid"></div>

          <div className="hero-glow hero-glow-one"></div>
          <div className="hero-glow hero-glow-two"></div>

          <div className="ai-container hero-grid">

            {/* HERO CONTENT */}

            <div className="hero-content scroll-reveal">

              <div className="brand-name">
                VERTEX<span>TECHNOLOGY</span>
              </div>

              <div className="hero-label">
                <span className="status-dot"></span>
                AI & MACHINE LEARNING
              </div>

              <h1>
                Intelligence
                <br />
                <span>built for impact.</span>
              </h1>

              <p className="hero-description">
                We build practical AI and machine-learning solutions that
                transform complex problems into intelligent products,
                automation systems, and data-driven solutions.
              </p>

              <div className="hero-buttons">
                <a href="#contact" className="ai-btn ai-btn-primary">
                  Request a Solution
                  <span>→</span>
                </a>

                <a href="#services" className="ai-btn ai-btn-secondary">
                  Explore Services
                </a>
              </div>

              <div className="hero-trust">

                <div>
                  <span className="trust-check">✓</span>
                  Custom AI Solutions
                </div>

                <div>
                  <span className="trust-check">✓</span>
                  Expert Development
                </div>

                <div>
                  <span className="trust-check">✓</span>
                  Practical Results
                </div>

              </div>
            </div>


            {/* HERO VISUAL */}

            <div className="hero-visual scroll-reveal">

              <div className="visual-grid"></div>

              <div className="orb-ring ring-one"></div>
              <div className="orb-ring ring-two"></div>
              <div className="orb-ring ring-three"></div>

              <div className="ai-core">

                <div className="ai-core-inner">
                  <span>AI</span>
                </div>

              </div>

              <div className="neural-node node-one"></div>
              <div className="neural-node node-two"></div>
              <div className="neural-node node-three"></div>
              <div className="neural-node node-four"></div>

              <div className="floating-card floating-card-top">

                <span className="floating-label">
                  MODEL STATUS
                </span>

                <div className="floating-status">
                  <span></span>
                  READY
                </div>

              </div>

              <div className="floating-card floating-card-bottom">

                <span className="floating-label">
                  AI PIPELINE
                </span>

                <div className="pipeline">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

              </div>

              <div className="hero-code-card">

                <div className="code-top">

                  <div className="code-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <span>model.py</span>

                </div>

                <div className="code-content">

                  <p>
                    <span className="code-keyword">
                      model
                    </span>{" "}
                    = NeuralNetwork()
                  </p>

                  <p>
                    <span className="code-keyword">
                      model
                    </span>
                    .train(data)
                  </p>

                  <p>
                    <span className="code-keyword">
                      result
                    </span>{" "}
                    = model.predict()
                  </p>
                  

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =========================
            INTRODUCTION
        ========================= */}

        <section className="ai-section intro-section">

          <div className="ai-container intro-grid scroll-reveal">

            <div>

              <div className="section-label">
                WHAT WE BUILD
              </div>

              <h2>
                From an idea
                <br />
                to an intelligent system.
              </h2>

            </div>

            <div className="intro-right">

              <p>
                Whether you need a custom machine-learning model,
                AI chatbot, computer vision system, data solution,
                or intelligent automation, VertexTechnology develops
                solutions around your actual requirements.
              </p>

              <a href="#services" className="inline-link">
                Explore our capabilities
                <span>→</span>
              </a>

            </div>

          </div>

        </section>


        {/* =========================
            SERVICES
        ========================= */}

        <section
          id="services"
          className="ai-section services-section"
        >

          <div className="ai-container">

            <div className="section-heading scroll-reveal">

              <div>

                <div className="section-label">
                  01 / SERVICES
                </div>

                <h2>
                  AI capabilities,
                  <br />
                  without the complexity.
                </h2>

              </div>

              <p>
                From model development to intelligent automation,
                VertexTechnology provides practical AI services
                for modern applications, businesses, and research.
              </p>

            </div>


            <div className="services-grid">

              {services.map((service, index) => (

                <article
                  className="service-card scroll-reveal"
                  key={service.title}
                  style={{
                    animationDelay: `${index * 0.08}s`,
                  }}
                >

                  <div className="service-top">

                    <div className="service-icon">
                      {service.icon}
                    </div>

                    <span>
                      {service.number}
                    </span>

                  </div>

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.description}
                  </p>

                  <div className="service-tags">

                    {service.tags.map((tag) => (

                      <span key={tag}>
                        {tag}
                      </span>

                    ))}

                  </div>

                  <a
                    href="#contact"
                    className="service-link"
                  >
                    Discuss this service
                    <span>→</span>
                  </a>

                </article>

              ))}

            </div>

          </div>

        </section>


        {/* =========================
            STATS
        ========================= */}

        <section className="stats-section">

          <div className="ai-container stats-grid scroll-reveal">

            <div className="stat-box">

              <span className="stat-symbol">
                AI
              </span>

              <strong>
                INTELLIGENT
              </strong>

              <small>
                AI Systems
              </small>

            </div>


            <div className="stat-box">

              <span className="stat-symbol">
                DATA
              </span>

              <strong>
                DATA-DRIVEN
              </strong>

              <small>
                Solutions
              </small>

            </div>


            <div className="stat-box">

              <span className="stat-symbol">
                ✓
              </span>

              <strong>
                RELIABLE
              </strong>

              <small>
                Development
              </small>

            </div>


            <div className="stat-box">

              <span className="stat-symbol">
                ⚡
              </span>

              <strong>
                PRACTICAL
              </strong>

              <small>
                Implementation
              </small>

            </div>

          </div>

        </section>


        {/* =========================
            PROCESS
        ========================= */}

        <section
          id="process"
          className="ai-section process-section"
        >

          <div className="ai-container">

            <div className="section-heading scroll-reveal">

              <div>

                <div className="section-label">
                  02 / HOW IT WORKS
                </div>

                <h2>
                  From problem
                  <br />
                  to deployment.
                </h2>

              </div>

              <p>
                A simple and transparent process designed to turn
                requirements into working intelligent solutions.
              </p>

            </div>


            <div className="process-grid">

              {processSteps.map((step, index) => (

                <article
                  className="process-card scroll-reveal"
                  key={step.number}
                  style={{
                    animationDelay: `${index * 0.08}s`,
                  }}
                >

                  <div className="process-number">
                    {step.number}
                  </div>

                  {index < processSteps.length - 1 && (
                    <div className="process-line"></div>
                  )}

                  <h3>
                    {step.title}
                  </h3>

                  <p>
                    {step.description}
                  </p>

                  <span className="process-arrow">
                    →
                  </span>

                </article>

              ))}

            </div>

          </div>

        </section>


        {/* =========================
            TECHNOLOGY STACK
        ========================= */}

        <section className="ai-section technology-section">

          <div className="ai-container">

            <div className="technology-layout scroll-reveal">

              <div className="technology-content">

                <div className="section-label">
                  TECHNOLOGY STACK
                </div>

                <h2>
                  Built with modern
                  <br />
                  AI technologies.
                </h2>

                <p>
                  We use established development tools and
                  machine-learning technologies to build scalable,
                  reliable, and practical solutions.
                </p>

              </div>
              <div className="technology-grid">
                {technologies.map((tech) => (
                  <div className="technology-item" key={tech.name}>
                    <span
                      className="technology-dot"
                      style={{ "--logo-url": `url('${tech.logo}')` }}
                    ></span>
                    {tech.name}
                  </div>
                ))}
              </div>

            </div>

          </div>

        </section>


        {/* =========================
            EXPERT
        ========================= */}

        <section
          id="expert"
          className="ai-section expert-section"
        >

          <div className="ai-container">

            <div className="expert-card scroll-reveal">

              <div className="expert-image-area">

                <div className="expert-grid"></div>

                <div className="expert-glow"></div>



                <div className="expert-badge">
                  AI / RESEARCH
                </div>

              </div>


              <div className="expert-content">

                <div className="section-label">
                  ACADEMIC & RESEARCH EXPERTISE
                </div>

                <h2>
                  Dr. Syed Saqib Raza
                </h2>

                <h3>
                  Assistant Professor, Air University Aerospace &
                  Aviation Campus
                </h3>

                <p>
                  PhD in Computer Science (Artificial Intelligence),
                  with 14+ years of academic and research experience
                  across intelligent computing.
                </p>

                <div className="expert-skills">

                  <span>
                    ✓ Artificial Intelligence
                  </span>

                  <span>
                    ✓ Intelligent Computing
                  </span>

                  <span>
                    ✓ Machine Learning
                  </span>

                  <span>
                    ✓ Research
                  </span>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =========================
            TESTIMONIALS
        ========================= */}

        <section className="ai-section reviews-section">

          <div className="ai-container">

            <div className="section-heading scroll-reveal">

              <div>

                <div className="section-label">
                  CLIENT EXPERIENCE
                </div>

                <h2>
                  Built to be useful.
                  <br />
                  Designed to deliver.
                </h2>

              </div>

            </div>


            <div className="reviews-grid">

              {testimonials.map(
                (testimonial, index) => (

                  <article
                    className="review-card scroll-reveal"
                    key={testimonial.name}
                    style={{
                      animationDelay: `${index * 0.1}s`,
                    }}
                  >

                    <div className="stars">
                      ★★★★★
                    </div>

                    <p>
                      “{testimonial.text}”
                    </p>

                    <div className="review-person">

                      <div className="review-avatar">
                        {testimonial.initial}
                      </div>

                      <div>

                        <strong>
                          {testimonial.name}
                        </strong>

                        <span>
                          {testimonial.role}
                        </span>

                      </div>

                    </div>

                  </article>

                )
              )}

            </div>

          </div>

        </section>


        {/* =========================
            CONTACT
        ========================= */}

        <section
          id="contact"
          className="ai-section contact-section"
        >

          <div className="ai-container">

            <div className="contact-box scroll-reveal">

              <div className="contact-content">

                <div className="section-label">
                  03 / START A PROJECT
                </div>

                <h2>
                  Have an AI problem
                  <br />
                  worth solving?
                </h2>

                <p>
                  Tell us what you want to build. We can turn
                  your requirement into a clear AI or
                  machine-learning solution.
                </p>

              </div>


              <div className="contact-actions">

                <a
                  href="mailto:hello@vertextechnology.ai"
                  className="ai-btn ai-btn-primary"
                >
                  Request a Solution
                  <span>→</span>
                </a>

                <span>
                  Let's discuss your project requirements.
                </span>

              </div>

            </div>

          </div>

        </section>

      </main>


      {/* =========================
          FOOTER
      ========================= */}

      <footer className="ai-footer">

        <div className="ai-container footer-inner">

          <div className="footer-brand">

            <div className="footer-logo">
              VERTEX<span>TECHNOLOGY</span>
            </div>

            <p>
              Artificial intelligence and machine-learning
              solutions for real-world problems.
            </p>

          </div>


          <div className="footer-links">

            <a href="#home">
              Home
            </a>

            <a href="#services">
              Services
            </a>

            <a href="#process">
              Process
            </a>

            <a href="#expert">
              Expert
            </a>

            <a href="#contact">
              Contact
            </a>

          </div>


          <div className="footer-copy">
            © 2026 VertexTechnology. All rights reserved.
          </div>

        </div>

      </footer>

    </div>
  );
}

export default AIMachineLearning;
