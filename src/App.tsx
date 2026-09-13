import { useState } from 'react';
import {
  ArrowUpRight,
  ChevronRight,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
} from 'lucide-react';

type Project = {
  year: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  status: string;
  featured?: boolean;
};

type Lab = {
  category: string;
  date: string;
  title: string;
  description: string;
  tools: string;
};

const projects: Project[] = [
  {
    year: '2025',
    title: 'Cybersecurity Project',
    category: 'SECURITY / PLACEHOLDER',
    description: 'A placeholder for a security-focused project, including the problem, approach, and what you learned while building it.',
    tags: ['REPLACE_ME', 'SECURITY', 'DOCUMENTATION'],
    status: 'IN PROGRESS',
    featured: true,
  },
  {
    year: '2025',
    title: 'Network Engineering Project',
    category: 'NETWORKING / PLACEHOLDER',
    description: 'A placeholder for a network design, configuration, or troubleshooting project you want employers to explore.',
    tags: ['TCP/IP', 'REPLACE_ME', 'NETWORKING'],
    status: 'PLANNING',
  },
  {
    year: '2025',
    title: 'Software Development Project',
    category: 'SOFTWARE / PLACEHOLDER',
    description: 'A placeholder for a practical application that demonstrates your problem-solving and software development process.',
    tags: ['CODE', 'REPLACE_ME', 'BUILD'],
    status: 'PLANNING',
  },
  {
    year: '2025',
    title: 'Computer Engineering Thesis',
    category: 'ENGINEERING / PLACEHOLDER',
    description: 'A placeholder for your thesis or capstone work. Add the research question, system, and final outcome here.',
    tags: ['THESIS', 'RESEARCH', 'REPLACE_ME'],
    status: 'ARCHIVED',
  },
];

const labs: Lab[] = [
  { category: 'NETWORKING', date: 'DATE TBD', title: 'Network Security Lab', description: 'Add a short summary of a network security experiment or configuration exercise.', tools: 'TOOLS TO BE ADDED' },
  { category: 'CISCO', date: 'DATE TBD', title: 'Cisco Networking Lab', description: 'Add notes from routing, switching, VLAN, or troubleshooting practice.', tools: 'TOOLS TO BE ADDED' },
  { category: 'LINUX', date: 'DATE TBD', title: 'Linux Lab', description: 'Add a practical Linux administration, scripting, or hardening exercise.', tools: 'TOOLS TO BE ADDED' },
  { category: 'WEB SECURITY', date: 'DATE TBD', title: 'Web Security Lab', description: 'Add an observation from a safe, authorized web security learning exercise.', tools: 'TOOLS TO BE ADDED' },
  { category: 'SYSTEMS', date: 'DATE TBD', title: 'System Administration Lab', description: 'Add a systems setup, service management, or troubleshooting walkthrough.', tools: 'TOOLS TO BE ADDED' },
  { category: 'SECURITY', date: 'DATE TBD', title: 'CTF / Security Exercise', description: 'Add a write-up when you are ready to share a challenge and what it taught you.', tools: 'TOOLS TO BE ADDED' },
];

const skillGroups = [
  ['CYBERSECURITY', ['Security fundamentals', 'Web security', 'Threat awareness', 'REPLACE_ME']],
  ['NETWORKING', ['TCP/IP', 'Routing', 'Switching', 'Network troubleshooting']],
  ['PROGRAMMING', ['Python', 'REPLACE_ME', 'Scripting', 'Problem solving']],
  ['OPERATING SYSTEMS', ['Linux', 'Windows', 'System administration', 'REPLACE_ME']],
  ['DEVELOPMENT', ['Git', 'Web development', 'APIs', 'REPLACE_ME']],
  ['HARDWARE & SYSTEMS', ['Computer architecture', 'Hardware troubleshooting', 'REPLACE_ME']],
] as const;

const scrollTo = (id: string): void => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

function SectionLabel({ children }: { children: string }) {
  return <p className="section-label"><span>+</span> {children}</p>;
}

function StatusPill({ children }: { children: string }) {
  return <span className="status-pill"><span className="status-dot" />{children}</span>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navigate = (id: string): void => {
    setActiveSection(id);
    setMenuOpen(false);
    scrollTo(id);
  };

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" onClick={() => navigate('home')} aria-label="Avery Santos home">
          <span className="brand-mark">AS</span><span className="brand-name">AVERY SANTOS</span>
        </a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          {['home', 'about', 'projects', 'labs', 'skills', 'certifications', 'contact'].map((item) => (
            <button className={activeSection === item ? 'nav-link active' : 'nav-link'} key={item} onClick={() => navigate(item)}>{item.toUpperCase()}</button>
          ))}
        </nav>
        <div className="top-actions">
          <a href="https://github.com" aria-label="GitHub" target="_blank" rel="noreferrer"><Github size={14} /></a>
          <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin size={14} /></a>
          <a href="mailto:hello@example.com" aria-label="Email"><Mail size={14} /></a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X size={18} /> : <Menu size={18} />}</button>
        </div>
      </header>

      <main>
        <section id="home" className="hero section-wrap">
          <div className="hero-copy">
            <SectionLabel> SYSTEM_PROFILE // COMPUTER_ENGINEERING </SectionLabel>
            <h1>Engineering <span>secure</span><br />digital systems.</h1>
            <p className="hero-intro">I&apos;m a Computer Engineering graduate interested in cybersecurity, networking, systems, and software development. I enjoy understanding how technologies work, securing them, and building practical solutions.</p>
            <div className="button-row">
              <button className="button primary" onClick={() => navigate('projects')}>VIEW PROJECTS <ChevronRight size={15} /></button>
              <button className="button secondary" onClick={() => navigate('about')}>ABOUT ME</button>
            </div>
            <div className="hero-meta"><span>LOCATION // PHILIPPINES</span><span>STATUS // <b>OPEN_TO_WORK</b></span></div>
          </div>
          <div className="terminal profile-terminal">
            <div className="terminal-bar"><div className="window-dots"><i /><i /><i /></div><span>terminal://profile</span><span className="terminal-live">● LIVE</span></div>
            <div className="terminal-body">
              <div className="ascii-name" aria-label="AS initials">A S</div>
              <div className="terminal-line"><span>&gt; whoami</span></div>
              <div className="terminal-output">role: computer engineering graduate<br />focus: cybersecurity &amp; networking<br />status: open_to_work<br />location: philippines</div>
              <div className="terminal-line"><span>&gt; interests</span></div>
              <div className="terminal-output">network_security<br />linux<br />systems<br />web_security<br />automation</div>
              <div className="terminal-line cursor-line"><span>&gt; <i className="cursor" /></span></div>
            </div>
          </div>
        </section>

        <section id="about" className="section-wrap about-section">
          <SectionLabel>PROFILE</SectionLabel><h2>About <span>Me</span></h2>
          <div className="about-grid"><div className="about-copy"><p className="lead">A curious engineer with a security-first mindset and a practical approach to learning.</p><p>I&apos;m building my foundation across cybersecurity, networking, systems, and software development through projects, labs, certifications, and hands-on practice. My goal is to join a technical team where I can contribute thoughtfully, learn from experienced people, and grow through real-world work.</p><p className="muted">This portfolio is a working record of the systems I&apos;m learning to understand, build, and protect.</p></div><div className="info-grid"><div><span>EDUCATION</span><strong>B.S. Computer Engineering</strong></div><div><span>PRIMARY INTERESTS</span><strong>Security · Networks · Systems</strong></div><div><span>LOCATION</span><strong>Philippines</strong></div><div><span>AVAILABILITY</span><strong className="green-text">Open to work</strong></div></div></div>
          <div className="learning"><span className="micro-label">CURRENTLY LEARNING</span><div className="tag-row">{['Linux', 'Network Security', 'Cybersecurity', 'Cloud', 'Python', 'Web Security'].map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div></div>
        </section>

        <section id="projects" className="section-wrap projects-section"><div className="section-heading"><div><SectionLabel>ARTIFACTS</SectionLabel><h2>Selected <span>Projects</span></h2><p>Hands-on projects exploring software, systems, networking, and security.</p></div><span className="count-label">04 / PLACEHOLDERS</span></div><div className="project-grid">{projects.map((project) => <article className={project.featured ? 'project-card featured' : 'project-card'} key={project.title}><div className="card-top"><span>{project.year} · {project.category}</span><StatusPill>{project.status}</StatusPill></div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div><div className="card-links"><a href="https://github.com" target="_blank" rel="noreferrer">GITHUB <ExternalLink size={12} /></a><a href="#contact">CASE STUDY <ArrowUpRight size={12} /></a></div></article>)}</div></section>

        <section id="labs" className="section-wrap labs-section"><SectionLabel>FIELD NOTES</SectionLabel><h2>Cybersecurity &amp; <span>Networking Labs</span></h2><p className="section-subtitle">Hands-on experiments, configurations, observations, and technical exercises.</p><div className="lab-grid">{labs.map((lab) => <article className="lab-card" key={lab.title}><div className="card-top"><span>{lab.category}</span><span>{lab.date}</span></div><h3>{lab.title}</h3><p>{lab.description}</p><div className="lab-footer"><span>TOOLS // {lab.tools}</span><button onClick={() => navigate('contact')}>READ LAB <ChevronRight size={13} /></button></div></article>)}</div></section>

        <section id="skills" className="section-wrap skills-section"><SectionLabel>TOOLKIT</SectionLabel><h2>Technical <span>Skills</span></h2><p className="section-subtitle">A growing toolkit, documented honestly and expanded through practice.</p><div className="skills-grid">{skillGroups.map(([group, skills]) => <div className="skill-group" key={group}><div className="skill-heading"><span>$</span> {group.toLowerCase()}</div>{skills.map((skill) => <span className="skill-chip" key={skill}>{skill}</span>)}</div>)}</div></section>

        <section id="certifications" className="section-wrap credentials-section"><div className="section-heading"><div><SectionLabel>CREDENTIALS</SectionLabel><h2>Certifications &amp; <span>Training</span></h2></div><span className="count-label">VERIFICATION READY</span></div><div className="credential-card"><div className="credential-icon">01</div><div><span className="micro-label">CERTIFICATION NAME / PLACEHOLDER</span><h3>Add your certification here</h3><p>Issuer / Training provider · Date to be added</p></div><div className="credential-status"><StatusPill>TO BE ADDED</StatusPill><button onClick={() => navigate('contact')}>VERIFY CREDENTIAL <ArrowUpRight size={12} /></button></div></div></section>

        <section id="education" className="section-wrap education-section"><SectionLabel>BACKGROUND</SectionLabel><h2>Education</h2><div className="timeline-item"><div className="timeline-marker" /><div className="timeline-date">GRADUATION YEAR TBD</div><div><h3>Bachelor of Science in Computer Engineering</h3><p className="green-text">[University Name]</p><p className="muted">Relevant coursework, awards, academic organizations, and thesis details can be added here.</p></div></div></section>

        <section id="workbench" className="section-wrap workbench-section"><SectionLabel>WORK IN PROGRESS</SectionLabel><h2>Workbench</h2><p className="section-subtitle">What I&apos;m currently learning, building, and improving.</p><div className="terminal workbench-terminal"><div className="terminal-bar"><div className="window-dots"><i /><i /><i /></div><span>~/workbench/active</span><span className="terminal-live">3 LIVE</span></div><div className="workbench-lines">{[['cybersecurity-labs', 'Building hands-on security exercises.', 'LEARNING'], ['portfolio', 'Creating my professional portfolio.', 'BUILDING'], ['networking-review', 'Practicing routing, switching, and network fundamentals.', 'LEARNING']].map(([name, desc, status]) => <div className="work-line" key={name}><span className="line-number">0{['cybersecurity-labs', 'portfolio', 'networking-review'].indexOf(name) + 1}</span><div><strong>$ {name}</strong><p>{desc}</p></div><StatusPill>{status}</StatusPill></div>)}<div className="terminal-line"><span>&gt; git status --short <i className="cursor" /></span></div></div></div></section>

        <section id="contact" className="section-wrap contact-section"><div><SectionLabel>CONNECT</SectionLabel><h2>Let&apos;s build something<br /><span>secure together.</span></h2><p>I&apos;m currently open to entry-level opportunities where I can continue learning, contribute to technical teams, and grow as an engineer.</p><a className="button primary" href="mailto:hello@example.com">SEND A MESSAGE <ChevronRight size={15} /></a></div><div className="contact-list"><span>FIND ME ELSEWHERE</span><a href="https://github.com" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} /></a><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} /></a><a href="mailto:hello@example.com">hello@example.com <ArrowUpRight size={13} /></a></div></section>
      </main>

      <footer className="footer"><StatusPill>OPEN_TO_WORK</StatusPill><div className="footer-links"><a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a><a href="mailto:hello@example.com">Email</a></div><span>© 2025 AVERY SANTOS · BUILT WITH CURIOSITY &amp; CAFFEINE</span></footer>
    </div>
  );
}

export default App;
