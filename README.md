# bryanpaget.com

This is my personal homepage, hosted on GitHub Pages at [bryanpaget.com](https://bryanpaget.com). It's a lightweight, single-page site — a link-in-bio style card that points to my profiles across the web and showcases a selection of my projects. The page is plain HTML/CSS/JS with no framework, featuring a muted greyscale-and-gold aesthetic, a dark/light theme toggle, and a fully responsive layout.

## Structure

- `index.html` — the entire site, with inline styles and the theme-toggle script
- `img/` — avatar and photo assets referenced by the page
- `.github/workflows/jekyll-docker.yml` — builds the site on push to `main` via a Jekyll container (the page is static, so Jekyll passes it through)
- `CNAME` — maps the repo to `bryanpaget.com`

## Projects

Selected sub-pages are linked from the homepage:

- [Heart Sutra](https://bryanpaget.com/heart-sutra)
- [Toronto Bikeshare](https://bryanpaget.com/toronto-bikeshare)
- [Tetragon & eBPF](https://bryanpaget.com/tetragon-and-ebpf)
- [Markdown to PDF](https://bryanpaget.com/markdown-to-pdf)
- [Zone Presentation (Nov 2025)](https://bryanpaget.com/ZonePresentationNovember2025)

## Development

Run locally with `jekyll serve` (see the `Gemfile` for dependencies), then open http://localhost:4000. Push to `main` to deploy.
