import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, ChevronDown, Code2, Github, Globe2, Linkedin, Mail, Menu, Network, ShieldCheck, Terminal, X } from 'lucide-react';
import { certifications, contact, labs, projects, skillGroups } from './portfolio';
import IntroSplash from './components/IntroSplash';
import professionalPhoto from './assets/profile/professional-photo.png';

const navigation = ['about', 'projects', 'labs', 'skills', 'certifications', 'contact'];
const certificationBadges = import.meta.glob<string>('./assets/certifications/*.png', {
  eager: true,
  query: '?url',
  import: 'default',
});
const categories = ['Embedded & IoT', 'Networking'];
const focusItems = [
  { Icon: ShieldCheck, label: 'Embedded & IoT' },
  { Icon: Network, label: 'Networking' },
  { Icon: Terminal, label: 'IT support' },
  { Icon: Code2, label: 'Software' },
];
const projectArtwork = [
  { Icon: ShieldCheck, className: 'art-0', label: 'CONNECTED DEVICES' },
  { Icon: Code2, className: 'art-2', label: 'BUILDING FOUNDATIONS' },
];
function Label({ number, children }: { number: string; children: string }) {
  return <p className="section-label"><span>{number} /</span> {children}</p>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [navbarVisible, setNavbarVisible] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [filter, setFilter] = useState('All');
  const visibleProjectCount = projects.filter((_, index) => filter === 'All' || filter === categories[index]).length;
  useEffect(() => {
    const header = headerRef.current;
    const sections = Array.from(document.querySelectorAll<HTMLElement>('main > section[id]'));
    if (!header || !sections.length) return;
    let frame = 0;
    const root = document.documentElement;
    const previousOffset = root.style.getPropertyValue('--navigation-offset');

    const update = () => {
      frame = 0;
      const scrollTop = Math.max(0, window.scrollY);
      const offset = header.offsetHeight + 16;
      root.style.setProperty('--navigation-offset', `${offset}px`);
      setNavbarVisible(scrollTop > 0);
      if (scrollTop === 0) setMenuOpen(false);

      // One shared reading line, independent of section height or observer batches.
      let current = sections[0].id;
      if (scrollTop > 0) {
        for (const section of sections) {
          if (section.getBoundingClientRect().top <= offset + 1) current = section.id;
        }
        // Short final sections may never reach the reading line.
        if (Math.ceil(scrollTop + root.clientHeight) >= root.scrollHeight - 1) {
          current = sections[sections.length - 1].id;
        }
      }
      setActiveSection(current);
    };
    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    // A single passive listener handles visibility and tracking, at most once per frame.
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    const observer = new ResizeObserver(scheduleUpdate);
    observer.observe(header);
    sections.forEach((section) => observer.observe(section));
    update();
    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      observer.disconnect();
      window.cancelAnimationFrame(frame);
      if (previousOffset) root.style.setProperty('--navigation-offset', previousOffset);
      else root.style.removeProperty('--navigation-offset');
    };
  }, []);
  useEffect(() => {
    headerRef.current?.toggleAttribute('inert', !navbarVisible);
  }, [navbarVisible]);
  useEffect(() => {
    if (!menuOpen) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        document.getElementById('menu-toggle')?.focus();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [menuOpen]);

  return <div className="site-shell">
    <div className="ambient-background" aria-hidden="true" />
    <IntroSplash name="Christian Jade Villaver" />
    <a className="skip-link" href="#main">Skip to content</a>
    <header ref={headerRef} className={`topbar ${navbarVisible ? 'topbar-visible' : ''}`} aria-hidden={!navbarVisible}>
      <a className="brand" href="#home" onClick={() => setMenuOpen(false)} aria-current={activeSection === 'home' ? 'location' : undefined} aria-label="Christian Jade Villaver home"><span className="brand-mark">cj<span>.</span></span><span>CHRISTIAN JADE<br /><small>VILLAVER / CPE PROFESSIONAL</small></span></a>
      <nav id="main-navigation" className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">{navigation.map((item) => <a key={item} href={`#${item}`} className={activeSection === item ? 'active' : ''} aria-current={activeSection === item ? 'location' : undefined} onClick={() => setMenuOpen(false)}>{item === 'labs' ? 'Experience' : item}</a>)}</nav>
      <a href="#contact" className="header-contact">Let’s connect <ArrowUpRight size={15} /></a>
      <button id="menu-toggle" className="menu-toggle" aria-expanded={menuOpen} aria-controls="main-navigation" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
    </header>
    <main id="main">
      <section id="home" className="hero section-wrap">
        <div className="hero-copy"><p className="eyebrow"><span className="status-dot" /> OPEN TO OPPORTUNITIES</p><p className="hero-full-name">CHRISTIAN JADE H. VILLAVER</p><p className="hero-name">COMPUTER ENGINEERING PROFESSIONAL</p><h1>Understand.<br />Build.<br /><span>Secure.</span></h1><p className="hero-intro">Hands-on experience across <strong>IT support, networking, software development, embedded systems, and IoT,</strong> with a growing focus on infrastructure, cybersecurity, and practical technology solutions.<br /><small>In a world full of the common, dare to be uncommon.</small></p><div className="button-row"><a className="button primary" href="#projects">Explore my work <ArrowUpRight size={18} /></a><a className="text-link" href="#about">A little about me <ArrowRight size={16} /></a></div><div className="hero-meta"><span><Globe2 size={14} /> BASED IN THE PHILIPPINES</span><span>BS COMPUTER ENGINEERING</span></div></div>
        <div className="hero-portrait">
          <img src={professionalPhoto} alt="Christian Jade H. Villaver in professional attire" width="1122" height="1402" fetchPriority="high" />
        </div>
        <div className="hero-bottom"><a href="#about"><ArrowDown size={14} /> SCROLL TO EXPLORE</a><span>ALWAYS LEARNING. ALWAYS ITERATING.</span></div>
      </section>
      <div className="focus-strip">
        <div className="section-wrap">
          <span className="focus-label">AREAS OF FOCUS</span>
          <div className="focus-marquee">
            <div className="focus-track">
              {[0, 1].map((copy) => (
                <div className="focus-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
                  {focusItems.map(({ Icon, label }) => (
                    <div className="focus-entry" key={label}>
                      <p><Icon aria-hidden="true" />{label}</p>
                      <i aria-hidden="true">+</i>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <section id="about" className="section-wrap about-section">
        <div><Label number="01">THE PERSON BEHIND THE TERMINAL</Label><h2>Computer Engineering professional<br /><span>focused on practical technology.</span></h2></div>
        <div className="about-copy">
          <p className="lead">I am a Computer Engineering professional with hands-on exposure to IT support, networking, software development, embedded systems, and Internet of Things technologies.</p>
          <details className="about-background">
            <summary>
              <span className="background-show-label">View full background</span>
              <span className="background-hide-label">Hide full background</span>
              <ChevronDown size={16} aria-hidden="true" />
            </summary>
            <div className="about-background-content">
              <p>My experience includes working as an IT Assistant during my On-the-Job Training, where I gained practical exposure to real workplace IT environments and strengthened my troubleshooting, technical support, communication, and problem-solving skills.</p>
              <p>My academic and technical projects have also allowed me to work across both hardware and software. I have worked with microcontrollers, sensors, wireless communication, web technologies, databases, and networking concepts while developing practical engineering solutions.</p>
              <p>I completed the Occupancy-Driven Plug for Adaptive Lighting and Appliance Control, integrating technologies such as ESP8266, ESP32-C3, occupancy and ambient-light sensors, ESP-NOW communication, and mobile-based monitoring and control. The project reflects my interest in IoT, automation, embedded systems, and practical energy-management solutions.</p>
              <p>I am continuing to develop my skills in networking, IT infrastructure, cybersecurity, software development, and emerging technologies. My goal is to build a career where I can apply my Computer Engineering background to practical IT and technology problems while continuously improving my technical capabilities.</p>
            </div>
          </details>
          <div className="about-facts"><div><span>EDUCATION</span><strong>Bachelor of Science in Computer Engineering<br />University of Cebu</strong><p className="publication-note">Relevant coursework and thesis/research: details to be added. Academic projects are listed below.</p></div><div><span>NEXT CHAPTER</span><strong><span className="status-dot" /> Open to entry-level roles</strong></div></div>
        </div>
      </section>
      <section id="projects" className="section-wrap"><div className="section-heading"><div><Label number="02">THE WORKBENCH</Label><h2>Projects &amp; <span>learning.</span></h2></div><p>Embedded systems and IoT in practice.<br />Networking foundations in development.</p></div><div className="project-toolbar"><div className="filters" role="group" aria-label="Filter projects">{['All', ...categories].map((category) => <button key={category} aria-pressed={filter === category} onClick={() => setFilter(category)} className={filter === category ? 'selected' : ''}>{category}{category === 'All' && <span>{String(projects.length).padStart(2, '0')}</span>}</button>)}</div><span className="micro-label" aria-live="polite">{String(visibleProjectCount).padStart(2, '0')} WORK &amp; LEARNING {visibleProjectCount === 1 ? 'AREA' : 'AREAS'}</span></div><div className="project-grid">{projects.map((project, index) => {
        const { Icon, className, label } = projectArtwork[index];
        if (filter !== 'All' && filter !== categories[index]) return null;
        return <article className="project-card" key={project.title}><div className={`project-art ${className}`} aria-hidden="true"><div className="art-grid" /><span className="art-id">CJ / 0{index + 1}</span><div className="art-symbol"><Icon size={45} strokeWidth={1} /></div><span className="art-label">{label}</span><span className="art-corner">+</span></div><div className="project-content"><div className="card-top"><span>{project.category}</span><span className={`project-status ${project.status === 'IN PROGRESS' ? 'in-progress' : ''}`}><span />{project.status}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><details className="project-details"><summary>Scope &amp; context <ChevronDown size={16} /></summary><div><p>{project.scope}</p><p className="publication-note">Practical projects and continued technical learning.</p></div></details></div></article>;
      })}</div></section>
      <section id="labs" className="section-wrap"><div className="section-heading"><div><Label number="03">EXPERIENCE &amp; LEARNING</Label><h2>Across disciplines.<br /><span>Deeper understanding.</span></h2></div><p>IT support experience and technical projects.<br />Networking and cybersecurity skills in development.</p></div><div className="lab-list">{labs.map((lab, index) => <details className="lab-row" key={lab.title}><summary><span className="lab-number">0{index + 1}</span><span className="lab-title">{lab.title}<small>{lab.category}</small></span><span className="lab-state">{lab.status}</span><ChevronDown size={19} /></summary><div className="lab-description"><p>{lab.description}</p>{lab.responsibilities && <ul>{lab.responsibilities.map((responsibility) => <li key={responsibility}>• {responsibility}</li>)}</ul>}<span>FOCUS / {lab.tools}</span><p className="publication-note">Part of my ongoing technical development.</p></div></details>)}</div></section>
      <section id="skills" className="section-wrap"><div className="section-heading"><div><Label number="04">TOOLS OF THE TRADE</Label><h2>A growing <span>toolkit.</span></h2></div><p>Hands-on technical exposure, with networking<br />and cybersecurity foundations in development.</p></div><div className="skills-grid">{skillGroups.map(([group, skills], index) => <div className="skill-group" key={group}><span className="skill-index">0{index + 1} /</span><h3>{group}</h3><div>{skills.map((skill) => <span className="skill-chip" key={skill}>{skill}</span>)}</div></div>)}</div><div className="learning-line"><span className="status-dot" /><span>CURRENTLY EXPLORING</span><p>Networking &amp; IT infrastructure <b>/</b> Cybersecurity <b>/</b> Software <b>/</b> Embedded systems &amp; IoT <b>/</b> Emerging technologies</p></div></section>
      <section id="certifications" className="section-wrap">
        <div className="section-heading">
          <div><Label number="05">CERTIFICATIONS & TRAINING</Label><h2>Certifications &amp; <span>training.</span></h2></div>
        </div>
        <div className="certification-grid">
          {certifications.map((credential) => {
            const badge = certificationBadges['./assets/certifications/' + credential.badge];
            return <article className="project-card certification-card" key={credential.title}>
              <div className="project-content">
                {badge && <div className="certification-badge"><img src={badge} alt={credential.title + ' Cisco badge'} width="128" height="128" loading="lazy" /></div>}
                <h3>{credential.title}</h3>
                <p>{credential.issuer}</p>
                <p className="certification-issued">Issued <time dateTime={credential.issued}>{credential.issuedLabel}</time></p>
                {credential.credentialUrl && <a className="text-link" href={credential.credentialUrl} target="_blank" rel="noreferrer">View Credential <ArrowUpRight size={16} /></a>}
              </div>
            </article>;
          })}
        </div>
      </section>
      <section id="contact" className="section-wrap contact-section"><div><Label number="06">WHAT’S NEXT?</Label><h2>Let’s build<br /><span>practical technology.</span></h2><p>I’m currently open to entry-level opportunities where I can apply my Computer Engineering background, contribute to technical teams, and continue developing my skills across IT, networking, software, embedded systems, and cybersecurity.</p>{contact.email ? <a className="button primary" href={`mailto:${contact.email}`}>Let’s talk <ArrowUpRight size={18} /></a> : <p className="contact-pending"><Mail size={17} /> Contact details will be available here soon.</p>}</div><div className="contact-aside"><span className="availability"><span className="status-dot" /> OPEN TO WORK</span><p>Based in the Philippines.<br />Ready for the next challenge.</p><div className="social-links">{contact.github && <a href={contact.github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub <ArrowUpRight size={16} /></a>}{contact.linkedin && <a href={contact.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn <ArrowUpRight size={16} /></a>}</div></div></section>
    </main>
    <footer className="footer section-wrap"><a className="brand-mark" href="#home" aria-label="Back to top">cj<span>.</span></a><span>© {new Date().getFullYear()} Christian Jade Villaver</span><span>BUILT WITH CURIOSITY & PURPOSE</span><a href="#home">Back to top <ArrowUpRight size={14} /></a></footer>
  </div>;
}
export default App;
