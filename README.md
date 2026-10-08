# Auslander Lab — custom website prototype

This is a responsive, static, multi-section website for Auslander Lab. Open `index.html` in a browser to preview it. Navigation uses URL hash routes so it works on static hosting without server configuration.

## Files
- `index.html`: document structure and navigation
- `style.css`: visual styling and mobile layouts
- `content.js`: research descriptions, publications, software, and news data
- `app.js`: page rendering, searchable publications, news filtering, and mobile menu
- `favicon.svg`: browser tab icon
- `data.json` and `build.py`: editable content source and generator for `content.js`

## Updating content
Edit `data.json` and run `python build.py` followed by `python -c "from pathlib import Path; p=Path('.'); (p/'content.js').write_text('window.LAB_DATA = '+(p/'data.json').read_text()+';\\n')"`.

## Before launching
- Confirm lab member names, roles, photos, and contact details.
- Replace generic research illustrations with approved figures if desired.
- Replace publication links that point to the original publications page with article-specific DOI or journal URLs.
- Verify exact news dates, especially announcements sourced from conversation rather than the publicly indexed News page.
- Add funder logos with permissions/attributions, if needed.
- Point `auslanderlab.com` DNS to the chosen host only after testing.

## Hosting
Upload the files to a GitHub Pages repository, Netlify, or another static host. No build system or backend is required. Google Fonts load online; fallback fonts work offline.
