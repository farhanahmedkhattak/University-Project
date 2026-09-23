
import { useEffect, useRef } from 'react';
import './Research.css';

const researchAreas = [
  {
    title: 'Artificial Intelligence & Machine Learning',
    description: 'Building models that reason, perceive, and assist people in the real world.',
  },
  {
    title: 'Renewable Energy Systems',
    description: 'Designing efficient solar, wind, and storage technologies for a lower-carbon grid.',
  },
  {
    title: 'Public Health & Epidemiology',
    description: 'Tracking disease patterns and testing interventions that scale to whole populations.',
  },
  {
    title: 'Data Science & Analytics',
    description: 'Turning large, messy datasets into decisions people can act on.',
  },
  {
    title: 'Robotics & Automation',
    description: 'Prototyping machines that work safely alongside people in labs and factories.',
  },
  {
    title: 'Social & Behavioral Sciences',
    description: 'Studying how communities form, communicate, and change over time.',
  },
];

const stats = [
  { value: '40+', label: 'Active research projects' },
  { value: '120', label: 'Faculty researchers' },
  { value: '$8.2M', label: 'Annual research funding' },
  { value: '65', label: 'Papers published this year' },
];

const advisors = [
  {
    name: 'Dr. Muhammad Furqan',
    initials: 'MF',
    image:'/images/advisors/sirfurqan.png',
    title: 'Assistant Professor, Air University Aerospace & Aviation Campus',
    bio: 'PhD in Information & Communication Engineering, Southeast University, China. Specializes in IoT, information-centric networks, and next-generation cellular networks.',
    tags: ['IoT', 'Network Engineering', 'Web Engineering', 'Research Skills'],
  },
  {
    name: 'Dr. Syed Saqib Raza',
    initials: 'SR',
    image:'/images/advisors/Dr-SAQIB-Photo.png',
    title: 'Assistant Professor, Air University Aerospace & Aviation Campus',
    bio: 'PhD in Computer Science (Artificial Intelligence), with 14+ years of academic and research experience across intelligent computing.',
    tags: ['Artificial Intelligence', 'Machine Learning', 'NLP', 'Generative AI'],
  },
  {
    name: 'Dr. Tufail Muhammad',
    initials: 'TM',
    image:'/images/advisors/sirtufail.jpg',
    title: 'Assistant Professor, Air University Aerospace & Aviation Campus',
    bio: 'PhD in Computer System Engineering, GIKI (HEC-funded). Focuses on machine learning, data mining, optimization, and information visualization.',
    tags: ['Machine Learning', 'Data Mining', 'Optimization', 'Info Visualization'],
  },
  {
  name: 'Dr. Muhammad Saud Khan',
  initials: 'MS',
  image:'/images/advisors/sir-saud.png',
  title: 'Assistant Professor & Head of Department, Computer Science, Air University Aerospace & Aviation Campus',
  bio: 'PhD in Cybersecurity, with expertise spanning embedded systems, IoT, and Internet-of-Drones (IoD) security. Leads funded research in cybersecurity and smart systems, and serves as an editor/reviewer for IEEE Access and Elsevier journals.',
  tags: ['Cybersecurity', 'IoT Security', 'Digital Forensics', 'Machine Learning'],
},
{
  name: 'Sir Imran Qureshi',
  initials: 'IQ',
  image:'/images/advisors/Sirimran.webp',
  title: 'Visiting Professor, Robotics & Automation',
  bio: 'Specializes in human-robot collaboration and safe automation systems, with a focus on designing machines that work reliably alongside people in lab and industrial environments. Brings hands-on industry experience to applied robotics research and mentorship.',
  tags: ['Robotics', 'Automation', 'Human-Robot Interaction', 'Embedded Systems'],
},
{
  name: 'Sir Hammad Shah',
  initials: 'HS',
  image:'/images/advisors/SirHammad.webp',
  title: 'Senior Lecturer, Data Science & Analytics',
  bio: 'Focuses on extracting insight from large, complex datasets through statistical modeling and applied analytics. Works on data-driven decision-making frameworks with real-world applications across research and industry contexts.',
  tags: ['Data Science', 'Statistical Modeling', 'Data Analytics', 'Predictive Modeling'],
},
];

const featuredProjects = [
  {
    tag: 'Energy',
    title: 'Adaptive Solar Microgrids for Rural Campuses',
    department: 'Department of Engineering',
  },
  {
    tag: 'Health',
    title: 'Early Detection Models for Seasonal Outbreaks',
    department: 'Department of Public Health',
  },
  {
    tag: 'AI',
    title: 'Conversational Agents for Accessible Learning',
    department: 'Department of Computer Science',
  },
];

function useScrollReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (!('IntersectionObserver' in window)) {
      node.classList.add('is-visible');
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible');
          observer.unobserve(node);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return ref;
}

function RevealSection({ className = '', children }) {
  const ref = useScrollReveal();
  return (
    <section ref={ref} className={`reveal ${className}`}>
      {children}
    </section>
  );
}

export default function Research() {
  return (
    <div className="research-page">
      <section className="research-hero">
  <div className="research-hero-inner">
    <p className="research-eyebrow">Research</p>
    <h1 className="research-hero-title">Where questions turn into evidence.</h1>
    <p className="research-hero-sub">
      Our faculty and students investigate problems across engineering, health,
      computing, and society — work that starts in the lab and ends up changing
      how people live.
    </p>
  </div>
</section>

      <RevealSection className="research-stats">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.label}>
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </RevealSection>

      <RevealSection className="research-areas">
        <h2 className="section-title">Research areas</h2>
        <div className="area-grid">
          {researchAreas.map((area) => (
            <div className="area-card" key={area.title}>
              <h3 className="area-title">{area.title}</h3>
              <p className="area-description">{area.description}</p>
            </div>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="research-advisors">
        <h2 className="section-title">Advisory Board</h2>
        <div className="advisor-grid">
          {advisors.map((advisor) => (
            <div className="advisor-card" key={advisor.name}>
              <div className="advisor-avatar">
                {advisor.image ? (
                  <img src={advisor.image} alt={advisor.name} className="advisor-avatar-img" />
                ) : (
                  advisor.initials
                )}
              </div>
              <h3 className="advisor-name">{advisor.name}</h3>
              <p className="advisor-role">{advisor.title}</p>
              {advisor.bio && <p className="advisor-bio">{advisor.bio}</p>}
              {advisor.tags.length > 0 && (
                <div className="advisor-tags">
                  {advisor.tags.map((tag) => (
                    <span className="advisor-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="research-projects">
        <h2 className="section-title">Featured projects</h2>
        <div className="project-list">
          {featuredProjects.map((project) => (
            <div className="project-card" key={project.title}>
              <span className="project-tag">{project.tag}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-department">{project.department}</p>
            </div>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="research-cta">
        <h2 className="cta-title">Get involved in research</h2>
        <p className="cta-sub">
          Open positions run year-round for undergraduates, graduate students, and
          visiting researchers.
        </p>
        <div className="cta-actions">
          <button className="btn btn-primary" type="button">
            Browse open projects
          </button>
          <button className="btn btn-secondary" type="button">
            Contact the research office
          </button>
        </div>
      </RevealSection>
    </div>
  );
}