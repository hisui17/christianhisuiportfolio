export const contact = { email: "", github: "", linkedin: "" };

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
] as const;
