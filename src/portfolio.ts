import botsDashboard from './assets/case-files/bots-v2-security-overview.png';

export const contact = {
  email: 'villaver.christianjade17@gmail.com',
  mobile: '09946562010',
  phoneHref: 'tel:+639946562010',
  facebook: 'https://www.facebook.com/christianhisui',
  instagram: 'https://www.instagram.com/hisui.chrstn/',
  github: '',
  linkedin: 'https://www.linkedin.com/in/christian-jade-villaver-607499420',
};

export const caseFiles = [
  {
    id: 'CASE-001',
    screenshot: botsDashboard,
    screenshotAlt: 'BOTS v2 Security Overview dashboard showing event totals, HTTP errors, source IPs, event volume, and traffic breakdowns.',
    category: 'DETECTION & MONITORING',
    title: 'SIEM Threat Detection & Dashboard Build',
    tools: ['Splunk Enterprise', 'BOTSv2', 'SPL'],
    description: 'A learning case focused on exploring the BOTSv2 dataset, writing SPL queries to surface indicators of compromise, and building Splunk dashboards with panels, visualizations, and time-range controls.',
    skills: ['SPL Query Writing', 'Log Correlation', 'Dashboard Design'],
  },
  {
    id: 'CASE-002',
    category: 'INCIDENT RESPONSE',
    title: 'Incident Triage, Ticketing & Reporting',
    tools: ['Incident Reports', 'Ticketing'],
    description: 'A practice workflow for the work that follows detection: assessing alerts, prioritizing findings, tracking incidents, and writing structured reports that support a clear handoff.',
    skills: ['Alert Triage', 'Prioritization', 'Incident Reporting'],
  },
  {
    id: 'CASE-003',
    category: 'NETWORK FORENSICS',
    title: 'Network Traffic & Packet Analysis',
    tools: ['Wireshark'],
    description: 'A learning case covering traffic analysis in Wireshark, display filters, TCP stream inspection, and comparison of baseline traffic with anomalous captures to identify patterns that need attention.',
    skills: ['Packet Analysis', 'Wireshark Filters', 'Anomaly Detection'],
  },
  {
    id: 'CASE-004',
    category: 'ADVERSARY INTELLIGENCE',
    title: 'Honeypot Deployment & Threat Intelligence',
    tools: ['Kali Linux', 'Cowrie', 'Wireshark'],
    description: 'A home-lab case exploring an isolated network segment, Cowrie honeypot logging, and correlation of session activity with Wireshark captures to connect application events with network evidence.',
    skills: ['Honeypot Configuration', 'Network Segmentation', 'Threat Analysis'],
  },
];

type Project = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  status: string;
  scope: string;
};

type Lab = {
  category: string;
  title: string;
  description: string;
  tools: string;
  status: string;
  responsibilities?: string[];
};

export const projects: Project[] = [
  {
    title: 'Occupancy-Driven Plug for Adaptive Lighting and Appliance Control',
    category: 'IOT / EMBEDDED SYSTEMS',
    description: 'An IoT-based system designed to support adaptive lighting and appliance control using occupancy detection, ambient-light sensing, wireless communication, and mobile-based monitoring.',
    tags: ['ESP8266', 'ESP32-C3', 'ESP-NOW', 'OCCUPANCY SENSING', 'AMBIENT-LIGHT SENSING', 'IOT', 'AUTOMATION', 'MOBILE MONITORING', 'APPLIANCE CONTROL', 'ENERGY MANAGEMENT'],
    status: 'COMPLETED',
    scope: 'This completed project integrates microcontrollers, occupancy and ambient-light sensors, ESP-NOW communication, and mobile-based monitoring and control. It reflects my interest in embedded systems, IoT, automation, and practical energy-management solutions.',
  },
  {
    title: 'Networking & Cisco Learning',
    category: 'NETWORKING / CISCO',
    description: 'Hands-on networking exercises and academic work involving Cisco technologies, routing, switching, TCP/IP concepts, and network fundamentals.',
    tags: ['CISCO', 'TCP/IP', 'ROUTING CONCEPTS', 'SWITCHING CONCEPTS', 'NETWORK FUNDAMENTALS'],
    status: 'LEARNING',
    scope: 'I am continuing to strengthen my foundation in networking, IT infrastructure, and cybersecurity through hands-on learning, Cisco networking experience, and continued technical study. Specific training and coursework details: to be added.',
  },
];

export const labs: Lab[] = [
  {
    category: 'ON-THE-JOB TRAINING / METROLOGYX INSTITUTE OF TECHNOLOGY',
    title: 'IT Assistant',
    description: 'Gained hands-on exposure to real workplace IT environments while supporting technical tasks, troubleshooting, and day-to-day IT operations.',
    tools: 'Technical troubleshooting, hardware/software support, basic system support',
    status: 'ON-THE-JOB TRAINING',
    responsibilities: [
      'Assisted with technical troubleshooting and IT support tasks',
      'Supported users with basic hardware and software concerns',
      'Gained practical exposure to workplace IT systems and processes',
      'Strengthened communication and problem-solving skills',
    ],
  },
  {
    category: 'NETWORKING & IT INFRASTRUCTURE',
    title: '$ networking',
    description: 'Strengthening networking fundamentals, routing, switching, and infrastructure concepts.',
    tools: 'TCP/IP, routing and switching concepts, Cisco networking, network fundamentals',
    status: 'LEARNING',
  },
  {
    category: 'CYBERSECURITY FOUNDATIONS',
    title: '$ cybersecurity',
    description: 'Building foundational knowledge in system security, network security, and cybersecurity concepts.',
    tools: 'System security, network security, cybersecurity fundamentals',
    status: 'LEARNING',
  },
  {
    category: 'PROFESSIONAL PORTFOLIO',
    title: '$ portfolio',
    description: 'Building and refining my professional engineering portfolio.',
    tools: 'Technical communication, continuous learning',
    status: 'BUILDING',
  },
  {
    category: 'EMBEDDED SYSTEMS & IOT',
    title: '$ iot-project',
    description: 'Completed the Occupancy-Driven Plug for Adaptive Lighting and Appliance Control.',
    tools: 'ESP8266, ESP32-C3, sensors, ESP-NOW, automation, mobile monitoring and control',
    status: 'COMPLETED',
  },
];

export const skillGroups = [
  ['IT SUPPORT', ['Technical troubleshooting', 'Hardware/software support', 'Basic system support']],
  ['NETWORKING — DEVELOPING', ['TCP/IP', 'Routing and switching concepts', 'Cisco networking', 'Network fundamentals']],
  ['SOFTWARE DEVELOPMENT', ['React.js', 'Node.js', 'Web development', 'Database integration']],
  ['DATABASE / BACKEND', ['Firebase Authentication', 'Firestore']],
  ['EMBEDDED SYSTEMS & IOT', ['ESP8266', 'ESP32-C3', 'Microcontrollers', 'Sensors', 'ESP-NOW', 'IoT', 'Automation']],
  ['PROFESSIONAL SKILLS', ['Problem solving', 'Technical communication', 'Troubleshooting', 'Continuous learning']],
  ['CYBERSECURITY / SECURITY OPERATIONS', ['VirusTotal', 'AbuseIPDB', 'Shodan', 'Wireshark', 'Splunk', 'Kali Linux', 'SIEM Fundamentals', 'Honeypot Labs', 'Splunk BOTS v2']],
] as const;

export const certifications: {
  title: string;
  issuer: string;
  description: string;
  issued: string;
  issuedLabel: string;
  badge: string;
  credentialUrl?: string;
}[] = [
  {
    title: 'CCNA: Enterprise Networking, Security, and Automation',
    issuer: 'Cisco',
    description: 'Covers enterprise network architecture, security concepts, network automation, and technologies used to manage and secure modern networks.',
    issued: '2026-08-24',
    issuedLabel: 'August 2026',
    badge: 'ccna-ensa.png',
  },
  {
    title: 'CCNA: Introduction to Networks',
    issuer: 'Cisco',
    description: 'Introduces core networking concepts including network models, Ethernet, IP addressing, basic device configuration, and fundamental network communication.',
    issued: '2026-08-19',
    issuedLabel: 'August 2026',
    badge: 'ccna-itn.png',
  },
  {
    title: 'CCNA: Switching, Routing, and Wireless Essentials',
    issuer: 'Cisco',
    description: 'Focuses on switching, VLANs, routing fundamentals, wireless networking, and practical configuration of small to medium-sized networks.',
    issued: '2026-08-24',
    issuedLabel: 'August 2026',
    badge: 'ccna-srwe.png',
  },
  {
    title: 'Network Defense',
    issuer: 'Cisco',
    description: 'Cisco training credential in network defense.',
    issued: '2026-05-10',
    issuedLabel: 'May 2026',
    badge: 'network-defense.png',
  },
  {
    title: 'Ethical Hacker',
    issuer: 'Cisco',
    description: 'Cisco training credential in ethical hacking.',
    issued: '2025-12-24',
    issuedLabel: 'December 2025',
    badge: 'ethical-hacker.png',
  },
];
