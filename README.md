# yourname.github.io

Personal portfolio: CV (built from Typst) + a projects gallery. Plain
HTML/CSS/JS, no build step for the site itself.

## Structure

```
index.html          the whole page
css/style.css        styles
js/main.js            project data lives in the PROJECTS array here
assets/cv/cv.typ      CV source (Typst)
assets/cv/cv.pdf       compiled CV (auto-rebuilt by CI, see below)
assets/projects/       put your project images/videos here
.github/workflows/     GitHub Action that rebuilds cv.pdf on push
```

## 1. Publish on GitHub Pages

1. Create a repo named `yourusername.github.io` on GitHub.
2. Push this folder's contents to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```
3. In the repo settings → **Pages**, set the source to `main` / `root`
   (this is usually automatic for a `username.github.io` repo).
4. Your site is live at `https://yourusername.github.io` within a
   minute or two.

## 2. Edit your CV

Edit `assets/cv/cv.typ` — it's a normal Typst file, replace the
placeholder name, education, experience, and skills with your own.

- **Locally**: install Typst (`brew install typst`, or see
  https://github.com/typst/typst#installation), then
  `typst compile assets/cv/cv.typ assets/cv/cv.pdf` to preview.
- **On GitHub**: you don't need Typst installed at all. Every push
  that touches `cv.typ` triggers `.github/workflows/build-cv.yml`,
  which compiles the PDF and commits it back automatically. Just edit
  the `.typ` file (even directly in the GitHub web UI) and push.

## 3. Add real projects

Open `js/main.js` and edit the `PROJECTS` array — one object per
project, with a title, category, one-line summary, a path to an
image or video in `assets/projects/`, and links (GitHub repo, demo
video, writeup, etc). The page renders cards and filter chips from
this array automatically; you don't need to touch `index.html`.

Until you add real files, each card shows a small placeholder instead
of a broken image/video.

**Media tips**
- Images: 1200px wide is plenty, JPG/WebP, keep under ~300KB so the
  page stays fast.
- Videos: keep clips short (10–30s) and compressed (H.264 MP4,
  under ~10MB) — GitHub Pages has no video transcoding, so what you
  upload is what visitors download. For anything longer, consider
  hosting on YouTube and linking out instead of embedding the file
  directly.

## 4. Personalize

- Replace `Your Name`, email, LinkedIn, and GitHub links in
  `index.html` (hero, header brand, contact section, footer).
- The color palette and fonts are defined as CSS variables at the top
  of `css/style.css` (`:root { --primary: ... }`) if you want to
  adjust the blue tone.
