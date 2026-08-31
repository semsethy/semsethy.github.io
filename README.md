# Sem Sethy — Portfolio

Source for [semsethy.github.io](https://semsethy.github.io).

Built with **Vite + React + Tailwind CSS + Framer Motion**.

## Editing content

**All site content lives in one file: [`src/data/site.js`](src/data/site.js).**
Edit it and the site updates — no component changes needed. Every section
has a `display` flag; set it to `false` to hide that section entirely.

| To change | Edit |
| --- | --- |
| Name, role, summary, photo, CV | `profile` |
| Social links, email, phone | `social` |
| "What I do" cards | `about` |
| Job history | `experience` |
| Projects and their screenshots | `projects` |
| Testimonial quotes | `testimonials` |
| Recommendation letter | `recommendation` |
| Skill groups | `skills` |
| Degrees and training | `education` |
| Certificates | `certifications` |
| Contact details | `contact` |

## Commands

```bash
npm install     # once
npm run dev     # local dev server
npm run build   # production build into dist/
npm run preview # preview the production build
npm run deploy  # build and publish to the semsethy.github.io Pages repo
```

## How deployment works

`main` holds the source. `npm run deploy` builds it and publishes `dist/`
to the `gh-pages` branch, which GitHub Pages serves at
[semsethy.github.io](https://semsethy.github.io).

The repository must keep the name `semsethy.github.io` — GitHub only
serves a user site from a repo matching the username.

## Assets

`public/` holds the CV, recommendation letter, profile photo, app
screenshots, certificate scans and logos.

> Unredacted source scans are kept in `source-documents/`, which is
> git-ignored. The copies published in `public/` have personal contact
> details removed.
