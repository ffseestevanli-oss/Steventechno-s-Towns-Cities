# Steventechno's Towns & Cities! website

A static site with no build step, published with GitHub Pages from this `docs/` folder.

To preview locally, run `python -m http.server` inside `docs/` and open http://localhost:8000 (the manual page needs a web server; the other pages also open straight from disk).

## Pages
- `index.html` Home: hero, before/after, stats, the build journey, links to every section
- `build.html` Build mode: lots, floors, walls, diagonal and half walls, doors, windows, stairs, elevators, roofs, fences, paint, tools
- `furnish.html` Furnish mode: the hand, furniture sources, styles, kitchen, bathroom, lighting, living room, decor, office, outdoor, wall objects, curtains and flags
- `cities.html` Streets & Cities: roads, styles, sidewalks, driveways, country roads, street furniture, parking, skyscrapers, clubs
- `together.html` Play together: multiplayer limits, live previews, bulldoze, auto-save, LoD, music, UI, physics
- `start.html` Get started: install, packs, first house, controls, admin commands
- `manual.html` Player manual: renders `manual/MANUAL.md` with a contents sidebar

## Updating the manual
Replace `manual/MANUAL.md`. The page reads it on load, builds the contents list from its `##` and `###` headings, and keeps links like `#11-dependencies-and-optional-packs` working. No HTML editing needed.

## Adding screenshots
See `SCREENSHOTS.md`. Put each file in `img/shots/` with the listed name (.jpg, .png or .webp) and it replaces its placeholder automatically.
Manual screenshots go in `manual/screenshots/` with the names listed in `manual/README.md` (`.png`, `.jpg` or `.webp`). If a manual screenshot isn't there, the page also looks in `img/shots/` for the same name, so a shot like `build-walls` only needs adding once.

When you're done, add `class="final"` to `<body>` to hide any placeholder you skipped.

## Links still to fill in
Search the HTML for these and replace them with real URLs:
- `#WORKSHOP-LINK` (this addon's Workshop page)
- `#ELECTRONICS-PACK-LINK`, `#HOUSE-PACK-LINK`, `#BUILDINGS-PACK-LINK` (start.html)

Logo, banner and favicon in `img/brand/` come from the final branding. Icons in `img/icons/` are the addon's own tool icons from `materials/st_homeconstruct/ui/tools/`.
