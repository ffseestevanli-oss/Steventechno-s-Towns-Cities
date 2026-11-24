# Player manual

`MANUAL.md` is the full player manual for Steventechno's Towns & Cities, checked against build 258 (lua, README.md and docs/ in st_homeconstruct/). One file, eleven numbered sections, so it can be split per page if the site wants that.

## Screenshot placeholders

Each placeholder in MANUAL.md is a blockquote line starting `> 📷 **Screenshot needed:**` with a file name under `screenshots/` and what the shot should show. Replace the line with `![caption](screenshots/<id>.png)` once the picture exists. IDs reuse the old website's names where one existed.

- `screenshots/start-spawnmenu.png`. The spawn menu Tools tab with Construction → Steventechno's Towns & Cities selected.
- `screenshots/start-first-house.png`. A finished first house: walls, windows, a gable roof and a painted outside.
- `screenshots/ui-overview.png`. The Build interface with the tab strip, rail, corner block and top bar labelled.
- `screenshots/ui-hand.png`. A sofa in the hand as a green ghost, with the cursor hint text.
- `screenshots/ui-wallview.png`. The same house in Walls up, Cutaway and Walls down, side by side.
- `screenshots/build-paint-column.png`. The Wall paint tab open, with Fill, Paint side and the texture picker.
- `screenshots/build-lots.png`. A lot shown as a green grid with a foundation being dragged onto it.
- `screenshots/build-walls.png`. A room being drawn with Shift+drag, the green ghost showing its size.
- `screenshots/build-garage.png`. A 6-tile garage door half open, with the width slider in the Doors panel.
- `screenshots/build-windows.png`. Windows at Low, Default and High, and a window turned 45° in the wall.
- `screenshots/build-stairs.png`. Stairs placed between two floors with the blue arrival square, and an elevator shaft.
- `screenshots/build-pools.png`. A backyard with a shallow pool, and a basement shown through the ground while the Basement tool is open.
- `screenshots/build-roofs.png`. An L-shaped house with two overlapping gable roofs and a lean-to porch.
- `screenshots/cities-roads.png`. A crossroads, a curved road joining two offset roads, and a driveway into a lot.
- `screenshots/build-lotlib.png`. The Lots tab with saved lot tiles and a saved house as a ghost being placed.
- `screenshots/furnish-sources.png`. Home Furnishings open on Living Room, with the source headers in the grid and the room list on the left.
- `screenshots/cities-clubs.png`. A club with the light-up dance floor, a runway with a dance pole, the bar and the DJ booth.
- `screenshots/furnish-styles.png`. The style card for a sofa: turning preview and colour swatches.
- `screenshots/furnish-wall.png`. A painting being hung, with the Low / Middle / High / Top height snap.
- `screenshots/settings-panel.png`. The Settings window with Music, View, Building and Performance sections.
- `screenshots/settings-lothiding.png`. A town seen from far away with Low Lot Rendering on: far houses as simple shapes.
- `screenshots/mp-limits.png`. The admin Limits window listing players with Unlock / Lock buttons.
- `screenshots/mp-preview.png`. Another player's wall drag shown in blue with their name over it.

## Links still to fill in

Workshop links for this addon, the OST, the Electronics Pack, House Pack 3 and Buildings Pack 2.0 are named but not linked (their ids aren't in the project). Furniture Pack Extended (455282752) and Classic (106229933) are known.

## Small mismatches found in the addon while writing (not changed)

- The tool's spawn-menu panel says "Home re-centres"; the camera actually re-centres with H (Home steps the wall view). `lua/weapons/gmod_tool/stools/st_homeconstruct.lua`
- The same panel says floors "1 to 8"; it's up to 16 when an admin raises Max floors.
- docs/STAIRS.md and docs/FLOORS.md still describe Paint buttons on the Stairs tab and foundation Edges; painting moved to the PAINT column.
- The addon's own README.md still lists shop and club pieces under Build → Cities and Furnish → Towns & Cities; they're in Furnish → Public Furnishings and Home Furnishings. docs/FURNISH.md still describes one Furnish tab per source; it's now Home Furnishings with source headers.
- docs/WALLS.md still describes three window heights (Low, Default, High); windows have 10 height levels.
