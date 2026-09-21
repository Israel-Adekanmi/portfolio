# Israel Adekanmi — Portfolio (React)

A React + TypeScript + TailwindCSS conversion of the original static portfolio, with added scroll and interaction animations (via Framer Motion) and a downloadable resume button.

## What changed from the original HTML

- **Same content, same sections**: Hero, About, Skills, Projects, Experience, Education, Contact, Footer — all copy, links, images, and styling preserved.
- **Componentized**: each section is its own component under `src/components/`, with all text/data centralized in `src/data/portfolio.ts` so it's easy to update later.
- **Animations added** (via [Framer Motion](https://www.framer.com/motion/)):
  - Hero content fades/slides in on load, staggered line by line.
  - Every section title and content block animates in on scroll (`whileInView`).
  - Skill cards and certification cards stagger in; proficiency bars animate their fill width on scroll.
  - Project cards lift on hover, with a subtle image zoom.
  - The experience timeline line draws itself in, and each entry slides in from its side.
  - The nav bar shows an animated underline that slides between the active link; the mobile menu slides open/closed.
  - The WhatsApp button has a soft, continuous pulse to draw the eye.
  - `prefers-reduced-motion` is respected — animations are effectively disabled for users who've asked for that.
- **Downloadable resume**: the "Download Resume" button in the Hero now downloads an actual PDF (`public/Israel_Adekanmi_Resume.pdf`), generated from the same content as the page (summary, skills, experience, projects, education, certifications).

## Project structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Education.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/
│   └── portfolio.ts      ← all content lives here
├── hooks/
│   └── useActiveSection.ts
├── App.tsx
├── main.tsx
└── index.css
public/
└── Israel_Adekanmi_Resume.pdf
```

## Setup

```bash
npm install
npm run dev
```

Open the printed local URL (typically `http://localhost:5173`).

### Build for production

```bash
npm run build
npm run preview
```

## Updating your resume

To regenerate the PDF after editing your details, either:
1. Edit `public/Israel_Adekanmi_Resume.pdf` directly with any PDF editor, or
2. Edit the content in `src/data/portfolio.ts` and re-create a matching PDF (e.g. export from Google Docs/Word, or ask an AI tool to regenerate it from the same data) — just keep the filename as `Israel_Adekanmi_Resume.pdf` in `public/`, or update the `resumeFile` path in `src/data/portfolio.ts` if you rename it.

## Notes

- Icons are loaded from the RemixIcon CDN (same as the original) and Google Fonts (Inter, Pacifico) — both referenced in `index.html`.
- Tailwind's config (`tailwind.config.js`) mirrors the original inline config: same `primary`/`secondary` colors and `rounded-button` radius.
- The contact form from the original was already replaced with a WhatsApp button in the source HTML — that behavior is preserved as-is.
