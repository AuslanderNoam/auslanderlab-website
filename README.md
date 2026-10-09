# Auslander Lab — converted website prototype


## Files
- `index.html`: document structure and navigation
- `style.css`: visual styling and mobile layouts
- `content.js`: research descriptions, publications, software, and news data
- `app.js`: page rendering, searchable publications, news filtering, and mobile menu
- `favicon.svg`: browser tab icon (replaced)
- `data.json` and `build.py`: editable content source and generator for `content.js` 

## Updating content
Edit `data.json` and run `python build.py` followed by `python -c "from pathlib import Path; p=Path('.'); (p/'content.js').write_text('window.LAB_DATA = '+(p/'data.json').read_text()+';\\n')"`.

## check
-  lab member names, roles, photos, and contact details. 
- research illustrations and plots across should be owned 
-  publication links - manually added, require verification
- news dates (?)

## Hosting
Hosted on the existing one
