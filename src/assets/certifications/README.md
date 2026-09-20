# Cisco badge images

Place the original badge PNG files here with these exact names:

- `ccna-ensa.png`: CCNA: Enterprise Networking, Security, and Automation
- `ccna-itn.png`: CCNA: Introduction to Networks
- `ccna-srwe.png`: CCNA: Switching, Routing, and Wireless Essentials

The cards automatically include these images on the next build. Missing images
are omitted, rather than replaced with invented badges. Images use a consistent
128 x 128 px display area with `object-fit: contain` to preserve proportions.

If a real verification URL becomes available, add `credentialUrl` to the matching
entry in `src/portfolio.ts`. Until then, no credential button is displayed.
