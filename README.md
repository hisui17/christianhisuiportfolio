# Christian Jade Villaver — Portfolio

A responsive React + TypeScript portfolio for an early-career Computer Engineering professional with a Bachelor of Science in Computer Engineering from the University of Cebu. Content emphasizes IT support, networking, software development, embedded systems, and IoT. Infrastructure and cybersecurity are presented as areas of continued development.

## Local development

```sh
npm install
npm run dev
```

On Windows PowerShell, use `npm.cmd` if the execution policy blocks `npm.ps1`.

## Update content

- `src/portfolio.ts`: project descriptions and scope, experience and learning topics, skills, and contact details. Fill in `contact.email`, `contact.github`, and `contact.linkedin` to show the corresponding links. Use your full profile URLs.
- `src/App.tsx`: introduction, quote, About text, and section layout.
- `src/index.css`: colors, typography, illustrations, and responsive layouts.
- `index.html`: page title and search/social metadata.

Content covers the Occupancy-Driven Plug for Adaptive Lighting and Appliance Control, QR Code Management System, networking and Cisco learning, and a clearly marked slot for additional academic projects. The existing Experience section includes IT Assistant On-the-Job Training at Metrologyx Institute of Technology, current learning and building activities, and confirmed Google Maps contribution experience. Education is shown in About, with coursework and thesis/research details left as placeholders. No certifications are listed without verified credentials.

Add supporting evidence and verified project links when available; do not add unverified achievements, certifications, job titles, dates, technologies, or project results. Contact details remain empty until supplied.

## Checks

```sh
npm run typecheck
npm run lint
npm run build
```

Deploy the generated `dist` folder to a static host. No backend or contact-form service is required; the contact action uses an email link once configured.
