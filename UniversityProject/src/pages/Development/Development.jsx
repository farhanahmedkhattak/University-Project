import React, { useState, useEffect } from 'react';
import './VertexTeam.css';

export default function Development() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="vertex-page">
     <br></br>
      {/* HERO */}
      <section className="hero" id="home">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="section-label">Our Development Team</div>
            <h1>
              The Minds Behind <span className="cyan">Your Digital Future.</span>
            </h1>
            <p>
              We're a team of passionate developers, designers and problem solvers who turn ideas into
              scalable, high-performing digital products. With a blend of technical skills and creative
              thinking, we build solutions that make an impact.
            </p>
            <button onClick={() => scrollToSection('team')} className="btn">
              Meet The Team →
            </button>
            <div className="hero-stats">
              <div className="hero-stat">
                <strong>8+</strong>
                <span>Skilled Developers</span>
              </div>
              <div className="hero-stat">
                <strong>100%</strong>
                <span>Product Focused</span>
              </div>
              <div className="hero-stat">
                <strong>∞</strong>
                <span>Always Learning</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="screen">
              <div className="screen-top">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
              <div className="code">
                <div>
                  <span className="blue">const</span> <span className="white">product</span> = <span className="green">"innovation"</span>;
                </div>
                <div>
                  <span className="blue">function</span> <span className="white">buildFuture</span>() &#123;
                </div>
                <div>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="blue">return</span> <span className="green">scalableSolution</span>;
                </div>
                <div>&#125;</div>
                <br />
                <div>
                  <span className="blue">team</span>.<span className="white">create</span>();
                </div>
                <div>
                  <span className="blue">team</span>.<span className="white">collaborate</span>();
                </div>
                <div>
                  <span className="blue">team</span>.<span className="white">innovate</span>();
                </div>
              </div>
            </div>
            <div className="floating-logo">
              <div>V</div>
            </div>
            <div className="floating-card">
              <strong>Digital Products</strong>
              <p>From idea to deployment — built by people who care about details.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="container about-grid">
          <div className="about-text">
            <div className="section-label">About Our Team</div>
            <h2>
              Development <span className="cyan">Team</span>
            </h2>
            <p>
              Our development team is a mix of creative thinkers, problem solvers and technology enthusiasts.
              We work closely together, combining different skills and perspectives to build products that are
              modern, reliable and user-focused.
            </p>
            <button onClick={() => scrollToSection('services')} className="btn">
              Our Services →
            </button>
          </div>

          <div className="capabilities">
            <div className="capability">
              <div className="icon">⚡</div>
              <h3>Full-Stack Development</h3>
              <p>From frontend to backend, we build complete digital solutions.</p>
            </div>
            <div className="capability">
              <div className="icon">◉</div>
              <h3>UI/UX Design</h3>
              <p>Simple, beautiful and user-friendly digital experiences.</p>
            </div>
            <div className="capability">
              <div className="icon">⚙</div>
              <h3>Modern Tech Stack</h3>
              <p>We use modern tools and frameworks for better performance.</p>
            </div>
            <div className="capability">
              <div className="icon">✦</div>
              <h3>Innovation Driven</h3>
              <p>We don't just code. We create solutions for real problems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section" id="team">
        <div className="container">
          <div className="team-heading">
            <div>
              <div className="section-label">Meet The Team</div>
              <h2>
                Our <span className="cyan">Developers</span>
              </h2>
            </div>
            <p>
              Each member brings unique skills and experience to the table. Together, we make Vertex Technology a stronger team.
            </p>
          </div>

          <div className="team-grid">
            <div className="member">
              <div className="member-photo"><div className="avatar">👨🏻‍💻</div></div>
              <div className="member-role">Full-Stack Developer</div>
              <h3>Ali Raza</h3>
              <p>Builds complete web applications from frontend to backend with clean and scalable code.</p>
              <div className="tags">
                <span className="tag">React</span><span className="tag">Node.js</span><span className="tag">MongoDB</span>
              </div>
            </div>

            <div className="member">
              <div className="member-photo"><div className="avatar">👩🏻‍💻</div></div>
              <div className="member-role">Frontend Developer</div>
              <h3>Sara Khan</h3>
              <p>Turns designs into interactive experiences with clean and responsive UI.</p>
              <div className="tags">
                <span className="tag">React</span><span className="tag">Next.js</span><span className="tag">Tailwind</span>
              </div>
            </div>

            <div className="member">
              <div className="member-photo"><div className="avatar">👨🏻‍💻</div></div>
              <div className="member-role">Backend Developer</div>
              <h3>Usman Tariq</h3>
              <p>Builds secure and scalable server-side systems and APIs.</p>
              <div className="tags">
                <span className="tag">Node.js</span><span className="tag">Express</span><span className="tag">MongoDB</span>
              </div>
            </div>

            <div className="member">
              <div className="member-photo"><div className="avatar">👨🏻‍💻</div></div>
              <div className="member-role">Mobile Developer</div>
              <h3>Zain Ali</h3>
              <p>Creates smooth mobile apps for iOS and Android with great performance.</p>
              <div className="tags">
                <span className="tag">React Native</span><span className="tag">Flutter</span>
              </div>
            </div>

            <div className="member">
              <div className="member-photo"><div className="avatar">👩🏻‍🎨</div></div>
              <div className="member-role">UI/UX Designer</div>
              <h3>Areeba Fatima</h3>
              <p>Designs simple, beautiful and user-friendly experiences.</p>
              <div className="tags">
                <span className="tag">Figma</span><span className="tag">Adobe XD</span><span className="tag">Photoshop</span>
              </div>
            </div>

            <div className="member">
              <div className="member-photo"><div className="avatar">👨🏻‍💻</div></div>
              <div className="member-role">QA Engineer</div>
              <h3>Bilal Ahmed</h3>
              <p>Finds issues and ensures quality, stability and trust.</p>
              <div className="tags">
                <span className="tag">Testing</span><span className="tag">Automation</span>
              </div>
            </div>

            <div className="member">
              <div className="member-photo"><div className="avatar">👨🏻‍💻</div></div>
              <div className="member-role">DevOps Engineer</div>
              <h3>Hamza Shahid</h3>
              <p>Keeps our systems fast, secure and reliable.</p>
              <div className="tags">
                <span className="tag">Docker</span><span className="tag">AWS</span><span className="tag">Linux</span>
              </div>
            </div>

            <div className="member">
              <div className="member-photo"><div className="avatar">👩🏻‍💻</div></div>
              <div className="member-role">Junior Developer</div>
              <h3>Mahnoor Iqbal</h3>
              <p>Learns, contributes and grows with the team.</p>
              <div className="tags">
                <span className="tag">JavaScript</span><span className="tag">CSS</span><span className="tag">HTML</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section" id="work">
        <div className="container">
          <div className="process-header">
            <div>
              <div className="section-label">How We Work</div>
              <h2>Our Development <span className="cyan">Process</span></h2>
            </div>
            <p>We follow a simple and effective process to turn ideas into high-quality digital products.</p>
          </div>

          <div className="process-grid">
            <div className="process-card">
              <div className="icon">⌕</div>
              <div className="process-number">01</div>
              <h3>Plan & Understand</h3>
              <p>We listen, research and break down the problem.</p>
            </div>
            <div className="process-card">
              <div className="icon">✎</div>
              <div className="process-number">02</div>
              <h3>Design</h3>
              <p>We plan the right solution with clear, simple designs.</p>
            </div>
            <div className="process-card">
              <div className="icon">&lt;/&gt;</div>
              <div className="process-number">03</div>
              <h3>Develop</h3>
              <p>We build with modern tools, clean code and best practices.</p>
            </div>
            <div className="process-card">
              <div className="icon">🚀</div>
              <div className="process-number">04</div>
              <h3>Test & Launch</h3>
              <p>We test thoroughly and ship with confidence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES / TECH */}
      <section className="section" id="services">
        <div className="container">
          <div className="tech-header">
            <div>
              <div className="section-label">Technology We Work With</div>
              <h2>Modern Tools. <span className="cyan">Better Solutions.</span></h2>
            </div>
            <p>Industry-standard technologies for scalable products.</p>
          </div>

          <div className="tech-grid">
            {[
              { icon: '⚛', title: 'React', sub: 'UI Library' },
              { icon: 'N', title: 'Next.js', sub: 'React Framework' },
              { icon: 'JS', title: 'Node.js', sub: 'Runtime Environment' },
              { icon: '☕', title: 'Java / Spring Boot', sub: 'Backend Framework' },
              { icon: '◈', title: 'NestJS', sub: 'Backend Framework' },
              { icon: '🍃', title: 'MongoDB', sub: 'Database' },
              { icon: 'PG', title: 'PostgreSQL', sub: 'Database' },
              { icon: 'AWS', title: 'AWS', sub: 'Cloud Infrastructure' },
              { icon: 'GH', title: 'GitHub', sub: 'Version Control' },
              { icon: '+', title: 'And More', sub: 'Always Exploring' },
            ].map((t, i) => (
              <div className="tech-card" key={i}>
                <div className="tech-icon">{t.icon}</div>
                <div>
                  <strong>{t.title}</strong>
                  <span>{t.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CULTURE */}
      <section className="section">
        <div className="container culture">
          <div className="team-image">
            <div className="office-content">
              <div className="big-icon">⌘</div>
              <p>BUILD • COLLABORATE • INNOVATE</p>
            </div>
          </div>

          <div className="culture-content">
            <div className="section-label">Our Team Culture</div>
            <h2>Collaboration. <span className="cyan">Creativity.</span> Results.</h2>
            <p>
              We work in a flexible and supportive environment where every voice matters. From brainstorming
              to deployment, we stay connected, share ideas and move forward together.
            </p>

            <div className="values">
              <div className="value">
                <div className="value-icon">♧</div>
                <h3>Collaboration</h3>
                <p>Better ideas, stronger results.</p>
              </div>
              <div className="value">
                <div className="value-icon">💡</div>
                <h3>Problem Solving</h3>
                <p>Find challenges. Build solutions.</p>
              </div>
              <div className="value">
                <div className="value-icon">↗</div>
                <h3>Continuous Growth</h3>
                <p>Learn today. Build tomorrow.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="contact">
        <div className="container cta-box">
          <div>
            <div className="section-label">Let's Work Together</div>
            <h2>Have an idea? <span className="cyan">Let's build it.</span></h2>
            <p>We'd love to hear about your project and turn your vision into reality.</p>
          </div>
          <a href="mailto:hello@vertextechnology.com" className="btn">
            Start A Conversation →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      {/*
      <footer>
        <div className="container">
          <div className="footer-top">
            <button onClick={() => scrollToSection('home')} className="logo" style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
              <div className="logo-mark"></div>
              <div className="logo-text">
                <strong>VERTEX</strong>
                <small>TECHNOLOGY</small>
              </div>
            </button>

            <div className="footer-links">
              {['home', 'about', 'services', 'work', 'team', 'contact'].map((sec) => (
                <button key={sec} onClick={() => scrollToSection(sec)}>
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}
                </button>
              ))}
            </div>

            <div className="socials">
              <a className="social" href="#home">in</a>
              <a className="social" href="#home">G</a>
              <a className="social" href="#home">▶</a>
              <a className="social" href="#home">◎</a>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 Vertex Technology. All rights reserved.</span>
            <span>Innovate&nbsp;&nbsp; • &nbsp;&nbsp;Build&nbsp;&nbsp; • &nbsp;&nbsp;Grow</span>
          </div>
        </div>
      </footer>
      */}
    </div>
  );
}