# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: recruiters and hiring managers evaluating Santosh Nayak for a role. They skim for experience, skills, and proof of delivered work, then decide whether to make contact. The main action is to reach out (the hero's "Hire Me" button leads to the contact section).

Other audiences (peers, community) are served by the seminar talks and certifications sections but do not set priorities.

## Product Purpose

A personal portfolio site for Santosh Nayak, a full-stack engineer and Gen AI builder. It presents background, skills, experience, education, projects, apps, certifications, and seminar talks, and gives visitors a direct way to get in touch. Success is a recruiter reaching out.

## Positioning

The physics-to-code story: a scientific background applied to engineering, in the hero tagline "From Physics to Code". Other developers cannot truthfully claim this path.

## Operating Context

Single-page profile with sections: intro, about, skills, experience, education, projects, my-apps, portfolio, certifications, seminar talks, reference, contact, footer. Visitors arrive from a CV, LinkedIn, or a shared link and scan the page quickly. A Buy Me a Coffee link is part of the current page; a Tawk.to live-chat embed exists in the source but is commented out.

## Capabilities and Constraints

- Existing Angular 15 app (module-based) with SCSS, AOS scroll animations, ngx-owl-carousel-o, ngx-toastr, ngx-spinner, and ngx-pagination.
- The Tawk.to chat embed in `src/index.html` is currently commented out; leave it as it is. The Buy Me a Coffee link must remain.
- Hero copy must be preserved as written: the name, the typing roles line, the tagline "From Physics to Code | Driven by Curiosity & Engineering Excellence", and the sub-tagline "Full-Stack Engineer & Gen AI Builder | Architecting High-Performance Systems".
- Deployment target is not recorded; the repo has `dist/` folders and a `404.html`, which suggests static hosting, but this is unconfirmed.

## Brand Commitments

None binding on the visual identity. The user explicitly released the earlier neon green/cyan gradient look (it must change) and gave full freedom to revamp the whole site. Hero copy, Tawk.to chat, and the Buy Me a Coffee link remain fixed (see Capabilities and Constraints).

## Evidence on Hand

Real content already in the app: profile photo (`src/assets/images/SantoshNayak.jpeg`), intro background (`assets/images/intro_bg.png`), certifications, seminar talks and presentations, education, experience, projects. No testimonials or metrics have been provided; future work must not invent any.

## Product Principles

1. A recruiter should understand who Santosh is and how to get in touch within the first screen.
2. The physics-to-code story is the differentiator; it should read as substance, not as a slogan.
3. Proof (projects, certifications, talks) outranks decoration.
4. The visual identity is open; whatever it becomes must serve legibility and proof rather than compete with them.

## Accessibility & Inclusion

No product-specific requirement recorded. Default to WCAG AA contrast and reduced-motion support.
