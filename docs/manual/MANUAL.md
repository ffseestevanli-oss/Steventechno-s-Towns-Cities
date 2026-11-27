# Steventechno's Towns & Cities! Player Manual

*The Spiritual Successor to Steventechno's House Packs, Buildings Packs, Furniture Packs AND Electronics Packs, All in one massive, yet compact add-on!*

Towns & Cities is a Sims-style building tool for Garry's Mod. You draw lots, foundations, walls, floors and roofs on a grid with your mouse, put in doors, windows, stairs and working elevators, dig basements and shallow pools, lay roads with sidewalks, furnish every room and every shop, and save whole houses to place again anywhere. This manual covers everything a player needs, from the first house to server settings.

Written for build 324 (and To The Urbs! 003).

## 1. Getting started

### Install

1. Subscribe to Towns & Cities on the Steam Workshop. (Or copy the `st_homeconstruct` folder into `garrysmod/addons/`.)
2. Optional: subscribe to the soundtrack addon, **Steventechno's Towns & Cities OST**. Without it everything works, just without build music.
3. Optional: subscribe to the Steventechno packs listed under [Dependencies](#11-dependencies-and-optional-packs) for even more furniture, textures and skyscrapers.
4. Start any map. Flat maps such as gm_flatgrass or gm_construct make the best canvas.

### Open the tool

> 📷 **Screenshot needed:** `screenshots/start-spawnmenu.png`. The spawn menu Tools tab with Construction → Steventechno's Towns & Cities selected.

1. Open the spawn menu (<kbd>Q</kbd>) and go to **Tools → Construction → Steventechno's Towns & Cities**. This puts the tool gun in your hands with Towns & Cities selected.
2. While holding it, press <kbd>F3</kbd> to open **Build** mode or <kbd>F2</kbd> to open **Furnish** mode. <kbd>R</kbd> also opens and closes the interface.
3. Press the other key to switch between Build and Furnish, and <kbd>F1</kbd> to leave.
4. <kbd>Esc</kbd> puts down whatever is in your hand without closing anything.

While the interface is open your character stands still and the mouse drives a Sims-style camera. The tool gun's own clicks do nothing, so nothing gets built by accident.

> **Tip:** F2 and F3 follow your Garry's Mod key binds (`gm_showteam` and `gm_showspare1`), so they still work if you moved those binds. You can also bind `sthc_build`, `sthc_furnish` or `sthc_toggle` to any key. Every other key in Build and Furnish can be changed in **Settings → Keybinds** (see [Keybinds](#keybinds)).

### Your first house in nine steps

> 📷 **Screenshot needed:** `screenshots/start-first-house.png`. A finished first house: walls, windows, a gable roof and a painted outside.

1. **Flooring → Lots:** drag a lot on open ground. 12x10 is a good first house.
2. **Flooring → Foundation** (optional): pick a height and drag it over the lot.
3. **Walls:** hold <kbd>Shift</kbd> and drag to outline the house, then drag inner walls for rooms.
4. **Doors:** pick a front door and click an outside wall. Add inner doors.
5. **Windows:** click windows onto the walls. Hold and move up or down to set the height.
6. **Floor tiles** (PAINT column): pick a floor and Shift-click each room.
7. **Wall paint** (PAINT column): set Paint side to Outside and Fill to Whole floor for the outside, then Inside and Whole room for each room.
8. **Roofs:** go up one floor (<kbd>Page Up</kbd>), pick Gable, a pitch and shingles, then drag over the whole house.
9. **Furnish:** press <kbd>F2</kbd>, open **Home Furnishings → Living Room**, pick a sofa, press where it goes and drag to turn it.

<kbd>Ctrl</kbd>+<kbd>Z</kbd> undoes every step, so experiment freely.

## 2. The interface

### Build and Furnish

The interface has two groups of tabs:

- **Build** (<kbd>F3</kbd>) is for the house and the town: lots, floors, walls, doors, windows, stairs, pools and basements, roofs, roads and saved lots.
- **Furnish** (<kbd>F2</kbd>) is for what goes inside and around it. **Home Furnishings** has furniture, appliances, lights, decor and wall objects for homes; **Public Furnishings** has shops, clubs, restaurants, parking lots and skyscrapers.

The **Build | Furnish** switch above the corner block does the same as the keys.

### Layout

> 📷 **Screenshot needed:** `screenshots/ui-overview.png`. The Build interface with the tab strip, rail, corner block and top bar labeled.

- **Tab strip** along the bottom. Each tab's options open above it. Tabs with several tools (Flooring, Walls, Stairs) show them as icons on the **rail** down the left of the panel; hover an icon for its name and hints.
- **Corner block** on the left: the floor counter (arrows and pips), the camera button, wall view, the **eraser** and the **pipette**.
- **Top bar** (top right): Undo, Float, Grid size, Settings (cog), Bulldoze, Props / Limits, Save (admins) and Exit.
- **Pencil** at the end of the tab strip: drag tabs into your own order or untick ones you don't use. Saved for you. `sthc_tabs_reset` puts the default order back.
- **Float** splits the interface into separate windows you can drag, collapse and snap to screen edges. **Dock** joins them again, **Reset** puts the windows back in place (or `sthc_ui_reset`).
- Prefer the normal Garry's Mod look, or a skin mod? Tick **Settings → Use the classic Garry's Mod look** (`sthc_ui_skin derma`).
- **Sounds:** buttons, tabs, placing, removing, picking up, turning, undo and floor changes each have their own short interface sound, and a different one plays when something can't go where you tried to put it.
- **Hotbar:** the number keys <kbd>1</kbd> to <kbd>0</kbd> and <kbd>-</kbd> pick the tools along the hotbar, left to right. The key shows in the corner of each button.
- **Cursor:** the pointer turns into an **open hand** over anything you can pick up, and a **closed, grabbing hand** while you're holding something (a piece you lifted or a catalog item). A small icon next to the pointer shows the other tools: a **sledgehammer** while removing, a **paint brush** while painting and an **eyedropper** while picking a texture. Prefer the arrow with a small hand beside it? `sthc_cursor_hand_pointer 0`.
- **Warning banner:** a yellow bar above the build panel warns you when something is switched on that changes how building works: "⚠ Split-Line is currently active!" (the wall swatches also go gray), roofs hidden, or the build light on. Switch the thing off and the banner goes.

### The hand

> 📷 **Screenshot needed:** `screenshots/ui-hand.png`. A sofa in the hand as a green ghost, with the cursor hint text.

Almost everything you place works like the hand in The Sims:

1. Click a tile in the catalog. That piece is now **in your hand** and follows the cursor as a ghost: **green** fits, **red** doesn't, and the text by the cursor says why.
2. Click (or press, drag and release) to put it down. The hand empties afterward. Hold <kbd>Shift</kbd> to keep it and place more.
3. With an **empty hand**, click a placed piece to lift it. The hand catches a piece by its whole outline, not just its solid parts, so a parking space can be grabbed anywhere inside its lines and thin lamps and chairs are easy to catch. Pieces behind a wall can't be grabbed. The piece itself follows the cursor while you carry it. Put it down somewhere else, press <kbd>Del</kbd> to delete it, or right-click to put it back where it was.
4. <kbd>Del</kbd> or <kbd>Esc</kbd> empties your hand.

If you click a piece that belongs to another tab (a window while you're on Flooring, say), the interface jumps to that tab and lifts the piece there.

### The eraser

The eraser in the corner block is one Remove tool for every tab. While it's on, a click or drag removes what the active tab would add: walls, floor tiles, fences, roads, roofs, stairs, pools, doors, windows or furniture. Right-drag or <kbd>Ctrl</kbd>+drag does the same in most tabs without switching tools.

### The pipette

The pipette next to the eraser (or <kbd>O</kbd>) copies something you've already placed. Turn it on and click a piece in the world: a copy of it, in the same style, goes into your hand, and the interface opens the tab and category it comes from with its tile lit. It works on furniture, Home and Public Furnishings pieces, wall objects (curtains, flags and LED strips keep their color and length), doors and windows, flags and the kitchen backsplash. It turns itself off after one pick; right-click cancels.

### Floors and wall view

> 📷 **Screenshot needed:** `screenshots/build-wallview.png`. The same house in Walls up, Cutaway and Walls down.

- **Floors:** <kbd>Page Up</kbd> / <kbd>Page Down</kbd> or the floor arrows switch floors (1 to 8 by default, up to 16 if an admin raises it). Everything above the floor you're on is hidden, so you can always see in.
- **Two floor counters on foundation lots:** when the camera is on a lot with a foundation, a second floor column appears. The right one counts floors on top of the foundation; the left one counts floors on the ground beside it, for driveways, sheds and garden walls. Click a column to make it active.
- **Wall view:** <kbd>Tab</kbd> cycles **Walls up**, **Cutaway** (the walls facing the camera drop so you can see into rooms) and **Walls down**. <kbd>Home</kbd> steps walls up, <kbd>End</kbd> steps them down. Walls are always full height in game.
- **The active lot:** by default only the lot you're working on opens up. The lot under the build camera's focus is the **active lot**: it gets the cutaway or walls-down view and hides the floors above the one you're on. Every other lot keeps its walls up, all its floors and its roof, like a dollhouse street. Pan over open ground and the last lot stays active. To open up every nearby lot instead, set **Settings → Performance → Build mode lot behavior** to **View interiors on all lots**.

## 3. Camera, controls and hotkeys

### Camera

| Input | Does |
|---|---|
| <kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd>, arrow keys or mouse at the screen edge | Slide the camera (<kbd>Shift</kbd> is faster) |
| Middle-drag | Orbit (turn and tilt) |
| Right-drag | Pan (when the tab doesn't use right-click) |
| Mouse wheel | Zoom (the plain wheel always zooms; sizes and heights use <kbd>Shift</kbd> or <kbd>Ctrl</kbd> with the wheel) |
| <kbd>Q</kbd> / <kbd>E</kbd> | Rotate 45° |
| <kbd>H</kbd> | Re-center on your player |
| <kbd>Page Up</kbd> / <kbd>Page Down</kbd> | Floor up / down (the camera rises with it) |

Edge scrolling and inverted orbit can be turned off in the tool's spawn menu panel (`sthc_cam_edgescroll`, `sthc_cam_invert`).

### Everywhere

| Key | Does |
|---|---|
| <kbd>F3</kbd> / <kbd>F2</kbd> / <kbd>F1</kbd> | Open Build / open Furnish / leave |
| <kbd>R</kbd> | Open or close the interface |
| <kbd>Ctrl</kbd>+<kbd>Z</kbd> | Undo |
| <kbd>Esc</kbd> | Empty your hand / cancel a drag |
| <kbd>Tab</kbd>, <kbd>Home</kbd> / <kbd>End</kbd> | Cycle wall view, walls up / down |
| <kbd>G</kbd> | Show or hide the grid |
| <kbd>Shift</kbd>+<kbd>G</kbd> | Half-size (32 unit) grid |
| <kbd>1</kbd> … <kbd>0</kbd>, <kbd>-</kbd> | Hotbar tools, left to right |
| <kbd>O</kbd> | Pipette |
| <kbd>L</kbd> | Lot lights on / off while building (only on your screen; your lights come back as they were when you leave build mode) |
| <kbd>Shift</kbd>+<kbd>L</kbd> | Build light: lights everything evenly, indoors and out, while you build. Off again when you leave build mode |

### Building

| Input | Does |
|---|---|
| Left-drag | Draw walls, floors, roads, fences, lots |
| <kbd>Shift</kbd>+drag | Whole room outline (walls, fences) |
| <kbd>Shift</kbd>+click | Fill a room or connected area |
| Right-drag or <kbd>Ctrl</kbd>+drag | Remove |
| <kbd>F</kbd> | Flip a door's hinge, turn a roof's ridge, the stairs or an elevator |
| <kbd>,</kbd> / <kbd>.</kbd> | Turn stairs, elevators, saved lots |
| Mouse wheel (window in hand) | Turn the window 15° |
| <kbd>[</kbd> / <kbd>]</kbd> (window in hand) | Window narrower / wider (1 to 8 tiles) |
| <kbd>Shift</kbd>+wheel (garage door in hand) | Change its width |
| <kbd>Shift</kbd>+wheel (Gate tool) | Gate width, 1 to 6 tiles |
| Mouse wheel or <kbd>R</kbd> (basement stairs in hand) | Turn them |
| <kbd>[</kbd> / <kbd>]</kbd> | Elevator top stop |
| <kbd>Page Up</kbd> / <kbd>Page Down</kbd> (Roofs tool) | Raise / lower the ridge height |
| Middle-click a roof (Roofs tool) | Copy its ridge height (Match) |
| <kbd>Alt</kbd> or <kbd>Ctrl</kbd>+click (painting) | Eyedropper |

### Furnishing

| Input | Does |
|---|---|
| Click a catalog tile | Put it in your hand |
| Press, drag, release | Place and turn (90° steps) |
| <kbd>,</kbd> / <kbd>.</kbd> or <kbd>Ctrl</kbd>+wheel | Rotate 90° (with <kbd>Alt</kbd>: 15°) |
| <kbd>Alt</kbd> | Place freely: no grid, any angle |
| <kbd>Shift</kbd> | Keep it in your hand. Over a sidewalk, also places a streetlamp, bus stop or traffic light freely instead of snapping |
| <kbd>[</kbd> / <kbd>]</kbd> | Change style (color) |
| <kbd>Shift</kbd>+wheel (TV in hand) | Change the screen size, 1" a step (<kbd>Shift</kbd>+<kbd>Alt</kbd>: 5") |
| <kbd>Ctrl</kbd>+wheel (wall-mounted TV in hand) | Change its height (12 steps) |
| <kbd>Shift</kbd>+wheel (wall light in hand) | Change its height |
| <kbd>F</kbd> | Fix a model whose front is the wrong way |
| <kbd>V</kbd> | Turn a flag horizontal / vertical |
| <kbd>Del</kbd> | Empty your hand, or delete a lifted piece |

### In game (interface closed)

| Key | Does |
|---|---|
| <kbd>E</kbd> | Opens a Sims-style **radial menu** of what the thing you're looking at can do: open doors and gates, sit, switch lights, flush, run taps, call and ride elevators, open garage doors, run machines. Click an option, or <kbd>Esc</kbd> / right-click to close it. With **Quick use** on (Settings → Interface), things with only one option, like doors, chairs and switches, act straight away |
| <kbd>Shift</kbd>+<kbd>E</kbd> | Skip the menu and do the usual thing straight away. On a **light switch**, opens its color and intensity menu instead |

### Keybinds

**Settings → Keybinds** lists every Build and Furnish key, grouped under Camera, View, Tools, Lights and In the hand. Click a key and press a new one (<kbd>Shift</kbd>, <kbd>Ctrl</kbd> and <kbd>Alt</kbd> combinations work), or right-click it to unbind it. Every action can have a second key. Each row has a reset arrow, and **Reset all** puts every key back. Two actions on the same key show in red. <kbd>F1</kbd>, <kbd>F2</kbd>, <kbd>F3</kbd> and <kbd>R</kbd> keep following your own Garry's Mod binds.

Two keys work as held modifiers: **Adjust with the wheel** (<kbd>Shift</kbd>) for TV size, wall light height and garage door width, and **Height with the wheel** (<kbd>Ctrl</kbd>) for wall-mounted TVs. Unbind Adjust and the plain wheel adjusts instead of zooming. (The gate width always uses <kbd>Shift</kbd>+wheel.) Console: `sthc_keybinds_list` prints every key, `sthc_keybinds_reset` resets them all.

## 4. Build mode, tab by tab

Everything in Build mode sits on a 64-unit grid (one tile). Each floor is 128 units tall.

### PAINT column (Floor tiles and Wall paint)

> 📷 **Screenshot needed:** `screenshots/build-split.png`. The Wall paint tab open, with Fill, Paint side and the texture picker.

The two dark-blue tabs at the front of the tab strip paint everything that isn't a roof or a road.

- **Floor tiles** lays and paints floors in one step: drag over empty cells to lay tiles in the picked texture, and over existing tiles (or foundation tops, stair treads and fronts) to retexture them. With **Surface: Ceiling** it paints the underside of the floor above. Right-drag or the eraser removes tiles. Tiles on upper floors need floor below, with up to 2 tiles of overhang.
- **Wall paint** paints walls: walls, half walls, pillars, foundation edges and stair sides.

Options on the panel:

| Option | Choices |
|---|---|
| **Fill** | One tile, Drag area, Whole room, Whole floor |
| **Paint side** (walls) | Clicked, Inside, Outside, Both |
| **Surface** (floors) | Floor, Ceiling |

Pick a texture from the picker (filter it with the type chips such as Carpet, Tile, Wood, and the color dots), then click or drag. The floor list includes the roads' own surfaces (Road Asphalt, Fresh Asphalt, Sidewalk Concrete, Sidewalk Cobblestone, Dirt Road), so a forecourt, patio or parking lot meets the road beside it without a seam, and colored concretes (Light Gray, Charcoal, Sand, Terracotta, Red, Sage, Slate Blue and Mocha) for patios and plazas. The rail has **Brush**, **Fill room** (<kbd>Shift</kbd>), **Eyedropper** (<kbd>Alt</kbd> or <kbd>Ctrl</kbd>) and **Empty hand** (<kbd>Del</kbd>).

**Split line** (Wall paint): paint an outside wall in two parts, for example brick below and siding above. Turn it on, drag on a wall to move the line, then click above or below it to paint that part. Right-click removes the line.

The Walls paint list also has fake-window **office facades** (Office Windows in blue, dark, bronze or green glass, Lights On, Concrete or Brick with Windows) and **Reflective Glass**, so tall buildings don't need hundreds of real windows.

### Flooring

> 📷 **Screenshot needed:** `screenshots/build-lots.png`. A new lot being dragged out as a green grid.

The Flooring tab has three tools on its rail. (Floor tiles are laid from the PAINT column.)

- **Lots.** Every house starts with a lot. Drag on empty ground to draw one, from 4x4 up to 64x64 tiles. Start a drag inside a lot and pull outward to grow it. While Lots is picked, every lot shows as a green grid. A lot can sit right beside a road.
- **Resizing a lot:** point at an edge or corner of a lot until it lights up yellow, then drag it in or out. The new size shows in green and anything that would be cut off in red. A lot can only shrink if nothing built on it would end up outside, and a lot with a basement can't be resized.
- **Foundation** (optional). Pick a height (8 to 96 units in steps of 8) and a texture, then drag it onto the lot. The whole lot shares one foundation height; change it and the walls, stairs and everything on the lot move with it. Shift-click fills the whole foundation with a texture.
- **Sidewalks.** Draw plain concrete paths anywhere on the grid: front walks, wide driveways, plazas. They meet road sidewalks flush.

### Walls

> 📷 **Screenshot needed:** `screenshots/build-walls.png`. A room being drawn with Shift+drag, the green ghost showing its size.

The Walls tab has **Walls** and **Fences**.

**Walls**

- Drag from a grid corner to draw a straight wall. Drag at about 45° for a **diagonal** wall. Diagonals are a little thinner than straight walls and their ends are cut flush where they meet another wall, so corners close cleanly with nothing overlapping. They take paint, doors, windows (turned, wide and decorated ones too), garage doors and wall objects just like straight walls, and a room closed by a diagonal counts as indoors.
- <kbd>Shift</kbd>+drag draws a whole room.
- Right-drag or <kbd>Ctrl</kbd>+drag deletes (with <kbd>Shift</kbd>: a room outline).
- Walls merge into long pieces by themselves. Tick **Corner posts** for white posts at every corner.
- Rail tools: **Half walls** (draw walls at a lower height, or press a wall and move up or down to set its height; right-click puts it back to full), **Square pillar**, **Round pillar**, **Corner cap** (click a grid corner) and **Move walls**.
- **Move walls:** press on a wall and drag it sideways. The whole straight run between its junctions slides, whole tiles at a time, taking its doors, windows, paint, height and anything hung on it along. Walls joined to its ends stretch or shorten to stay connected; another wall in the way, a diagonal or the lot edge stops it. The floor it slides over goes with the room that grows: those tiles take that room's floor texture, and the ceiling above them that room's ceiling. It's one undo step.
- **Walls under a roof:** a wall drawn up into the space under a sloped roof is cut off along the roof's underside, so nothing pokes through the roof. Use it for attic rooms, sloped cut-outs and knee walls. Flat roofs don't cut walls, and the house wall a Half Gable leans on isn't cut either.
- **Basement walls:** on a lot with a basement, go down to **B1** (<kbd>Page Down</kbd> from floor 1) and draw walls, doors, windows and pillars inside the basement room, and use Move walls there. Wall objects hang on them and on the basement's own walls. Doors and windows have to fit under the basement ceiling.

**Fences**

- **Fence:** drag along grid lines. Drag at about 45° for a **diagonal** fence across the tiles, the same way as diagonal walls. <kbd>Shift</kbd>+drag fences a whole yard.
- **Gate:** click a fence (or a diagonal fence) to put a gate there, centered on that tile. <kbd>Shift</kbd>+mouse wheel sets the width first, **1 to 6 tiles** (the cursor shows it): one tile is a single leaf, two or more a pair of leaves meeting in the middle, so a 6-tile gate makes a driveway gate. Click any part of a gate to turn it back into fence. In game, <kbd>E</kbd> opens and closes it, and both leaves swing away from you.
- Gates stand out from their fence: thicker, taller posts with stepped caps, an arched top rail, a framed leaf with a diagonal brace on wood and vinyl styles, and black strap hinges, latch and pull. The brick wall takes a black iron gate, post and wire a split-rail gate.
- **Styles:** Picket, Privacy, Ranch, Iron, Vinyl, Horizontal slat, Brick wall, Lattice top, Black aluminum, Post and wire, Cedar picket and Bamboo screen. Drawing over a fence restyles it.
- Fences go anywhere: on lots (on the foundation, or on upper floors as balcony railings), on open ground (they follow the slope) and along roads.

### Doors

> 📷 **Screenshot needed:** `screenshots/build-garage.png`. A 6-tile garage door half open, with the width slider in the Doors panel.

Pick a door and click a wall. The ghost is green where it fits.

- **Doors:** six-panel doors in gray, white and black, arched panel, double doors, glass sliding doors, wood, panel and glass doors in several wood finishes, French doors, Oak shaker, Craftsman, Navy front door, Red door with glass, Farmhouse plank, and Half-Life 2 style city and metal doors. **Archway** and **Wide archway** are open passages.
- <kbd>F</kbd> flips which side a single door is hinged on.
- **Glass sliding doors** (2 tiles) have a dark aluminum frame and real see-through glass; one panel slides past the other.
- In game, <kbd>E</kbd> opens a door away from you. Double doors open together and sliding doors slide.
- **Garage door:** one catalog tile for every width. Use the **Garage door width** slider or the mouse wheel while it's in your hand to pick **2 to 8 tiles** wide (4 is the default). In game, <kbd>E</kbd> rolls it up along the ceiling; press <kbd>E</kbd> on the lip left in the doorway to close it.
- **Garage door button:** in Furnish → Home Furnishings → Lighting. It snaps onto a wall like a light switch, and <kbd>E</kbd> on it opens or shuts every garage door of its room.
- **Door sounds:** the **Sound** list next to the Doors title picks how a new door sounds: Classic, Heavy wood, Soft latch, Squeaky, Metal, Heavy steel, Glide or Silent. **Preview** plays it. To change a placed door, lift it, pick a sound and put it down. Garage doors keep their motor sound.
- With an empty hand, click a door to lift and move it.

Doors and windows need a plain, full-height wall (straight or diagonal) that's long enough. They don't go on half walls.

### Windows

> 📷 **Screenshot needed:** `screenshots/build-window-heights.png`. Windows at different heights, and a window turned 45° in the wall.

Pick a window and click a wall.

- **Windows:** Window, Paned, Tall, High, Wide, Wide paned, Picture (3 tiles), and the framed set with casing and sill: Divided, Cottage, Transom, Double-hung, Four-pane, Sidelight, Grid and Twin grid. **Glass wall** is a full-height glass panel for shop fronts, lobbies and curtain walls.
- **Height:** press on the wall, keep the button held and move the mouse up or down. The window snaps between **10 height levels**, from as low to as high as it fits in the wall, then release. A plain click places it at the default height. A window turned on its side has more room to move.
- **Rotation:** with a window in your hand (or lifted), the **mouse wheel turns it** in the wall, 15° a step, for diamond and angled windows. A turned window that wouldn't fit is scaled down to fit. <kbd>Shift</kbd> keeps the angle for the next window.
- **Width:** every window, the glass wall included, can be **1 to 8 tiles** wide. With a window in your hand (or lifted), pick from the **Width** list next to the Windows title, or press <kbd>[</kbd> / <kbd>]</kbd>. The glass stretches and the panes keep about their size, adding more glazing bars.
- **Outside decorations:** three **Outside** lists next to the Windows title dress a window's outside face: **shutters** (black, white, green, red, navy, wood), a **flower box or awning** (wood, white or black flower boxes; red, green or blue striped or black awnings) and a **plate** (white or black trim plate, stone surround with a keystone, header and sill, brick soldier header). New windows get them. To change a placed window, lift it, change the lists and put it down. They go on the side of the wall that isn't indoors, follow the window's width and height, work on diagonal walls and lower with the wall view. Turned windows don't take them.

### Stairs

> 📷 **Screenshot needed:** `screenshots/build-stairs.png`. Stairs placed between two floors with the blue arrival square, and an elevator shaft.

Go to the floor the stairs start on and open **Stairs**.

- Pick a style (Oak, Walnut, Carpet, Stone, Concrete) and point at the cell for the bottom step. The stairs climb one floor over 2 tiles; the blue square is where you arrive.
- <kbd>,</kbd> / <kbd>.</kbd> or <kbd>F</kbd> turn them. Click to place.
- They need floor under them, floor on the next story to land on, and no wall in the way. The floor above opens up over them for headroom, and closes again if you remove them.
- A wall running beside the stairs trims them to its face, so stairs in a one-tile hallway fit exactly between the walls. They re-fit whenever walls around them change.
- **Porch steps:** point at the edge of a foundation and the steps snap to it, facing out. They always match the foundation height and update when it changes.
- Paint treads, fronts and sides from the PAINT column.

**Elevators** (Stairs → Elevators)

- Pick a shaft style (Brushed steel, Red brick, White, Charcoal, Concrete, Sand stucco). The shaft is 2x2 tiles and snaps to a grid corner.
- The bottom stop is the floor you're on. <kbd>[</kbd> / <kbd>]</kbd> (or Top − / Top +) set the top stop. <kbd>,</kbd> <kbd>.</kbd> or <kbd>F</kbd> turn the doors (the yellow slab on the ghost).
- It needs floor tiles under the whole shaft and no walls inside its 2x2 tiles on any floor it passes. The shaft brings its own walls.
- **Riding:** <kbd>E</kbd> on the shaft or its doors calls the car. <kbd>E</kbd> inside opens the floor buttons; click one and the car goes there. Displays above each door show the car's floor. Everyone standing in the car rides it like a vehicle: you stay where you stood, facing the same way, and step off on the floor it stops at. Nobody bobs or falls out on the way.

### Pools & Basement

> 📷 **Screenshot needed:** `screenshots/build-pools.png`. A backyard with a shallow pool, and a basement shown through the ground while the Basement tool is open.

The map's ground can't really be dug, so pools and basements are drawn into it. Both work on your own lot.

**Pools**

- Drag a rectangle on bare ground of your lot, from 2x2 up to 32x32 tiles. Not on a foundation or over a basement.
- Pick a depth, **Wading** or **Shallow**, and a tile color: white, blue, teal or stone.
- Walk in and you wade: you're drawn lower in the water and your footsteps splash. There's no swimming.
- Remove with the eraser or a right-drag over the pool.

**Basement**

- One basement per lot, one story deep under floor 1. **Dig** drags out the room (at least 2x4 tiles); digging again replaces it.
- **Stairs:** click where the top step goes, and turn them with the mouse wheel or <kbd>R</kbd>. They come up through floor 1, which opens over them.
- **Fill in** closes the basement again (not while someone is down there).
- While the Basement tool is open, the whole room shows through the ground. Down in it you walk, run and jump as usual, and other players see you there.
- **B1:** <kbd>Page Down</kbd> from floor 1 goes to the basement floor (the counter shows "B1"). There you can furnish it, paint its floor, walls and ceiling, and build walls, doors, windows and pillars inside it (see [Walls](#walls)).
- A lot with a basement can't be resized. Moving or turning a lot takes its basement and pools along.

### Roofs

> 📷 **Screenshot needed:** `screenshots/build-roofs.png`. An L-shaped house with two overlapping gable roofs and a lean-to porch.

The Roofs tab has two tools on its rail: **Roofs** and **Ceilings**.

**Roofs**

- Pick **Gable**, **Hip**, **Flat**, **Half Gable** or **Half Hip**, a pitch (**Shallow** 14°, **Low** 21°, **Medium** 27°, **Steep** 37°) and a texture.
- Go **up one floor** from the walls the roof sits on, then drag over the rooms. It overhangs the walls by half a tile.
- <kbd>F</kbd> (or **Turn**) turns a gable's ridge, or which side a half roof's flat back edge faces.
- **Half Gable** (it used to be called Lean-to) is half a gable roof, cut off flat at the ridge. It brings its own paintable wall along the high back edge, all the way up to the roof top, so it works on its own as a shed or porch roof. Where the floor above already has a wall on that line, that part of its wall is left out, so it leans neatly against a taller house. **Half Hip** is the same with a hipped front.
- **Ridge height:** **Lower** / **Higher** in the panel, or <kbd>Page Up</kbd> / <kbd>Page Down</kbd> while the Roofs tool is picked, set the ridge height in 8-unit steps. **Auto** goes back to the height the pitch gives. **Match** (or middle-clicking a roof) copies that roof's ridge height, so a narrow wing can reach the same ridge as the main roof.
- **Joining:** roofs that touch join up by themselves. A gable that runs into another roof, like the wing of an L- or T-shaped house, carries its ridge on into that roof and meets it in proper valleys. Gable ends and overhangs that would end up buried inside the other roof are removed, two gables in a row merge into one, and flat roofs side by side lose the doubled overhang between them. So an L-shaped house is two roofs that look like one.
- Click a roof to give it the current type, pitch, height and texture. Right-click (or <kbd>Ctrl</kbd>+click) removes it.
- Rooms without a ceiling get their walls carried up to the roof (vaulted rooms).
- **Hide roofs** hides every roof while you build (the warning banner reminds you). Roofs also hide while you're on a floor below them.
- The Roofs tab keeps its own **Draw | Paint** buttons: Paint restyles the top, underside or gable ends.

**Ceilings**

Click a room to change its ceiling:

- **Texture:** the room's ceiling gets the texture picked on the right.
- **Tray**, **Crown** or **Beams:** adds a wood accent to the room's ceiling. Tray is a wide sloped band of wood round the ceiling with a molding at the bottom, Crown a small crown molding where the walls meet the ceiling, and Beams the tray band plus wooden beams across the room. Pick a **Narrow**, **Medium** or **Wide** band and any wood.
- Right-click a room to take its accent off.
- A room that's open to the roof has no ceiling tiles to work on, and the tool says so.

### Roads

> 📷 **Screenshot needed:** `screenshots/cities-roads.png`. A crossroads, a curved road joining two offset roads, and a driveway into a lot.

Roads are laid on a large road grid (one road tile is 12x12 building tiles, two full lanes with sidewalks).

| Rail tool | Does |
|---|---|
| **Draw roads** | Drag to lay a road with sidewalks (up to 32 road tiles per drag). Drag across or into a road for a corner, T junction or crossroads; open ends get a rounded dead end |
| **Roads (no sidewalk)** | Just the road surface. Roads with sidewalks taper smoothly into them. Good with Country Lane or Dirt Road for country roads |
| **Curved road** | Press on the open end of one road, drag to the open end of another, release. A smooth curve joins them, even offset, at an angle, as a U-turn or between different heights (up to 8 road tiles apart). Curves drive smoothly, with no bumps between pieces. <kbd>Ctrl</kbd>+click a curve removes it |
| **Driveway** | Drag along the sidewalk in front of a lot. The curb and sidewalk are cut out and a ramp runs down to the road. The cut is straight on the lot side, so it lines up with a driveway on the lot, and widens toward the road. Surface: concrete or asphalt |
| Bulldoze / <kbd>Ctrl</kbd>+drag | Remove the road tiles in the dragged area |

- **Road styles:** Buildings Pack (default), Classic Asphalt, Main Road, City Street, Concrete Road, Country Lane, Dirt Road. **Sidewalk styles:** Buildings Pack, Concrete Slabs, Smooth Concrete, Cobblestone, Small Tiles. Drag over a road with another style to restyle it. The Buildings Pack styles need Buildings Pack 2.0.
- **Paint** (Roads tab): paint the road surface, sidewalk, curb or grass of any tile with road, floor or wall textures. Shift-click paints all connected tiles that looked the same.
- Lots, drawn sidewalks and fences can't go on a road.

### Lots (saved lots)

> 📷 **Screenshot needed:** `screenshots/build-lotlib.png`. The Lots tab with saved lot tiles and a saved house as a ghost being placed.

The Lots tab saves a copy of a lot with everything on it and places it again anywhere, as often as you like.

- **Save copy:** click one of your lots (green) and give it a name. A picture is taken from the lot's south side for its tile.
- **Place selected:** the saved lot follows the cursor as a ghost. <kbd>,</kbd> <kbd>.</kbd> or <kbd>F</kbd> turn it; the yellow arrow (and the down arrow on its tile) marks the side that faced south when you saved it. Click to build, <kbd>Shift</kbd> to keep it in hand, <kbd>Del</kbd> or right-click to put it back. <kbd>Ctrl</kbd>+<kbd>Z</kbd> removes a placed lot.
- **Move lot:** click one of your lots (admins: any lot). It lifts up as a ghost, with an amber outline where it stood. <kbd>,</kbd> <kbd>.</kbd> or <kbd>F</kbd> turn it, click to set it down, <kbd>Del</kbd> or right-click cancels. Everything goes with it: floors, walls, doors, windows, roofs, stairs, elevators, basement, pools, furniture, wall objects, paint, its fences and the sidewalks inside it. It keeps its name and owner. <kbd>Ctrl</kbd>+<kbd>Z</kbd> moves it back.
- **Lot preview:** while you place or move a lot, the ghost is a **low poly model** of the house: floors, foundation, walls (half walls at their height), doors and windows as panels and the real roof shapes. It turns with the lot, so you see exactly how it will stand, and goes red where it can't go. Prefer the old box with the amber FRONT arrow? **Settings → Lots → Lot preview style → Hidden with arrow**. A lot too big to send for the preview shows the arrow instead.
- Turning a lot turns everything on it, half roofs, basements and pools included.
- **Delete selected** asks first. Double-click a tile to place it, right-click to rename it or put it in a category.
- **Categories:** the column next to the options sorts your saved lots. **All my lots** lists everything you saved. **Add** makes a category, the pencil renames the picked one and **Rem** removes it (its lots stay in All my lots). Right-click a lot → **Category** to file it, or pick a category before **Save copy** to save straight into it. Up to 24 categories.
- **Stock lots:** categories with a star come with the addon, such as **Steven Techno Houses**. Anyone can place them; nobody can change or delete them.
- Each player keeps up to **32** saved lots on the server. Placing follows the server's limits (lot size, lot count, floors, props).

> **For creators:** to bundle a category of houses into an addon, run `sthc_lotpack_export "<category name>" <pack id>` and copy the `data_static` and `materials` folders it writes (under `garrysmod/data/sthc/lotpack_export/`) into the addon's root folder. The full steps are in the addon's `docs/LOTS.md`.

### Bulldoze

**Bulldoze** in the top bar: hover a lot (it turns red) and click to remove it and everything built on it. It asks first and <kbd>Ctrl</kbd>+<kbd>Z</kbd> undoes it. Only your own lots unless you're an admin. Right-click or the button again to stop.

## 5. Furnish mode

Press <kbd>F2</kbd>. Furnish uses the hand: click a tile, then press where it goes, drag around it to turn it and release.

Furnish has two tabs: **Home Furnishings** for houses and **Public Furnishings** for shops, clubs and the street.

### Home Furnishings

> 📷 **Screenshot needed:** `screenshots/furnish-sources.png`. Home Furnishings open on Living Room, with the source headers in the grid and the room list on the left.

The list on the left has **All**, the rooms (Kitchen, Bathroom, Lighting, Closet, Bedroom, Office, Living Room, Dining Room, Outdoor, Decor, Garage, Other) and **Wall**, for posters, paintings, mirrors, clocks, signs, wall TVs, curtains, flags and LED strips. Only rooms with something in them are listed.

Inside each room the pieces are grouped under a header for **where they come from**:

| Header | What's in it |
|---|---|
| **Half-Life 2** | Stock Half-Life 2 furniture |
| **Steventechno's Furniture** | Furniture Pack Extended and Classic |
| **Steventechno's Electronics** | TVs, computers, consoles and speakers with readable names |
| **Towns & Cities** | The addon's own pieces, no download needed |
| **Other addons** | Furniture from any other mounted pack Furnish finds |

A pack's header only shows up when that pack is installed.

The addon's own pieces cover every room: a kitchen and bathroom that work, ceiling lights, fans and switches, a laundry room, an office with a dozen desks and monitors up to 32:9, and outdoor pieces such as streetlamps, benches and planters. The wooden pieces use the addon's own oak furniture wood, with walnut and painted styles. A few sets in more detail:

- **Living room:** sofas, armchairs, tables, a fireplace, rugs, lamps, plants and decor, plus TVs on feet, on a pedestal or on the wall that you **resize with the mouse wheel** while they're in your hand, a retro CRT, an entertainment wall, a hi-fi stack, a turntable whose record spins, speakers, bookshelves (the glass-door bookcase opens), floating shelves, a lava lamp and an aquarium whose fish swim while its light is on.
- **Bedroom:** twin, full, queen and king beds and bunk beds, each with three frame finishes and fourteen beddings; nightstands, a tall chest, a dresser whose drawers slide out, a wardrobe and armoire that open, a blanket chest, a vanity with a bulb-ringed mirror and its stool, a floor mirror, a bed bench, bedside and swing-arm lamps, an alarm clock that shows the real time, and small decor.
- **Dining room:** 31 pieces. Seven dining tables (farmhouse, trestle, round, oval, glass, banquet and a breakfast nook), two counter-height and two bar-height tables, and three sets that come with their chairs (a pub table with four stools, a bistro set for two and a dinette for four). Also seven dining chairs, counter and bar stools, a bench, a buffet, a china cabinet, a bar cart, a fruit bowl and a place setting. Chairs and the bench snap to every table.
- **Kitchen:** counters, islands, wall cabinets, a stove, fridge, dishwasher and sink that join into runs, plus a **Backsplash**: tiles on the wall from the countertop up to the wall cabinets. Point at the wall above a counter. Panels side by side line up their tiles. 14 styles: white, gray, black, sage and navy subway, blue and white zellige, terracotta, white herringbone, marble hexagon, glass mosaic, patterned cement, marble slab and stainless steel.
- **Flags** (Wall): the **Pride flag** tile (19 pride flags) and a separate **Flag** tile with 8 American flags (US, Betsy Ross, Gadsden, First Navy Jack, POW/MIA, Come and Take It, Texas, Puerto Rico) and 33 national flags. Pick one on the swatch card, choose a size, and <kbd>V</kbd> turns it horizontal or vertical.
- **LED strips** (Wall → LEDs): a colored strip that glows on the wall and lights the room, or a **glow only** version that casts no light. Twelve colors plus **RGB cycle**, 1 to 4 tiles long, hung from floor height up to just under the ceiling for cove lighting. Low strips glow upward like baseboard lighting.

### Public Furnishings

> 📷 **Screenshot needed:** `screenshots/cities-clubs.png`. A club with the light-up dance floor, a runway with a dance pole, the bar and the DJ booth.

Public Furnishings holds ready-made commercial pieces. Categories are on the left, picture tiles on the right, and every tile works with the hand like furniture. Like all furniture, they go on a lot.

| Category | Highlights |
|---|---|
| **Clubs** | Light-up dance floor tiles (nine patterns that flow across tiles), DJ booth, bars, back bar, stools, high tables, VIP sofa, velvet rope, PA speaker, light tower, disco ball, and **staging**: runway tiles and a runway end that line up into a catwalk, a pole stage, a 2x2 stage, stage steps, a go-go box and dance poles |
| **Parking Lots** | Parking lines and whole parking spaces, wheel stops (plain and striped), a speed bump, bollards, a parking sign and an EV charger |
| **Skyscrapers** | The "No Lot" skyscrapers from **Buildings Pack 2.0**, one piece each (needs the pack) |
| **Restaurant** (Dining, Bar and Drinks, Kitchen) | Tables, booths, chairs, soda fountain, espresso and ice machines, range, fryer, griddle, hood, fridges and more |
| **Pawn Shop** (Counters and Cases, Shelves and Signs, Merchandise) | Glass cases, register, safe, shelving, neon signs, merchandise that goes in the cases |
| **Repair Shop** (Lifts and Machines, Tires, Storage and Benches, Tools and Signs) | Two- and four-post car lifts that raise real cars (simfphys included), tire changer, balancer, compressor, tool chest, signs |
| **Laundromat** | Coin-op washers and dryers, change and soap machines, folding counter, cart, bench, neon sign |
| **Convenience Store** and **Gas Station** | Checkout, a glass cashier counter with a money tray (and an extension that joins it), coolers, slush machine, hot dog roller, ATM, gondolas, fuel pumps, a canopy you can drive under, price sign |
| **Computer Store** (Shelves and Counters, PC Cases, Monitors, Keyboards, Mice and Speakers, Boxed Products, LEDs and Signs) | Stocked gondolas, monitor walls, a glass cabinet, 29 PC case styles whose fans spin and RGB lights up, monitors from a 15.6" portable to a 57" curved super ultrawide, keyboards, mice, retail boxes, LED panels and signs |

In game, <kbd>E</kbd> brings most of them to life: seats, doors, lids, burners, cases, signs, registers, stage lights and machines.

### Placing furniture

- Furniture snaps by its footprint: its back sits on a grid line, flush against a wall when there is one, and it turns to face away from the wall.
- **Half-grid snapping:** furniture also snaps halfway between grid lines: every 32 units on the full grid, every 16 on the half grid. The extra lines are drawn fainter. Turn it off in **Settings → Grid → Subdivided furniture grid**. Parking lines, wheel stops and speed bumps keep their own grids.
- Against a **diagonal wall**, furniture turns to face out of it and sits flush on its face. Wall objects hang flat on diagonals too.
- The arrow on the floor shows the front. If a model's front is wrong, press <kbd>F</kbd> to fix it; that's remembered per model.
- <kbd>Alt</kbd> places freely at any angle. <kbd>,</kbd> / <kbd>.</kbd> rotate 90° (15° with <kbd>Alt</kbd>).
- **Small things go on tops:** TVs, lamps, monitors, vases, plants, books and other small pieces sit on tables, desks, shelves, dressers and counters when you hold them over one. Moving the table carries them along.
- **Chairs snap** to the front of a desk or the nearest edge of a dining table.
- **Kitchen counters** side by side join into one run, and a counter turned 90° at the end makes a corner.
- **TVs** change size with <kbd>Shift</kbd>+mouse wheel while they're in your hand, 1" a step (add <kbd>Alt</kbd> for 5" steps). A lifted TV goes back down at its new size. **Wall-mounted TVs** have 12 height steps: press on the wall and move up or down, or use <kbd>Ctrl</kbd>+wheel. A TV in the way, including the one you're moving, doesn't stop it finding the wall behind.
- **Streetlamps snap to the road:** off a lot, a streetlamp held over a road's sidewalk jumps to the back of the sidewalk, facing the road, with its arm over it. Hold <kbd>Shift</kbd> to place it anywhere on the sidewalk, facing any way.
- Furniture goes on the floor you're viewing.

### Styles

> 📷 **Screenshot needed:** `screenshots/furnish-styles.png`. The style card for a sofa: turning preview and color swatches.

Items with a small swatch badge come in several styles (colors, fabrics, woods, finishes). Clicking one opens a card with a turning preview and a swatch per style; hover to preview, click to pick. <kbd>[</kbd> / <kbd>]</kbd> change the style of what's in your hand. Your last pick per model comes back next time.

### Wall objects

> 📷 **Screenshot needed:** `screenshots/furnish-wall.png`. A painting being hung, with the Low / Middle / High / Top height snap.

Pick a poster, painting, mirror, clock, sign, wall TV or LED strip, press on a wall and, while holding, move the mouse up or down to snap between **Low**, **Middle**, **High** and **Top**, and sideways to slide along the wall. Release to hang. <kbd>Alt</kbd> slides freely; <kbd>F</kbd> flips a model that hangs back to front. Flags turn horizontal or vertical with <kbd>V</kbd>. Picking an LED strip opens a card for its color and length.

### Things that work

In game, <kbd>E</kbd> on:

- **Lights:** ceiling lights, pendants, sconces, lamps, fireplaces, candles, streetlamps and the vanity mirror's bulbs turn on and off. Ceiling fans spin up and coast down. A **light switch** works every light in its room.
- **Light color and intensity:** <kbd>Shift</kbd>+<kbd>E</kbd> on a light switch opens its menu. **Set Color** offers Red, Orange, Yellow, Green, Blue, Purple, or **Custom** (a color wheel with OK and Cancel). **Set Intensity** offers Low, Medium, High, or **Custom** (a slider with OK and Cancel). **Default Light** puts the room back to warm white at Medium. The choice goes to every light in the switch's room and is saved with them.
- **Automatic lighting:** lights on a lot switch off when everyone leaves it and come back as they were when someone returns. An admin can turn this off in **Settings → Performance → Automatic lighting**, so lights stay exactly as players switched them.
- **Doors** play the sound picked for them in the Doors tab.
- **Seats:** sofas (several people), armchairs, dining and office chairs, park benches, bar stools, bed edges and bed benches.
- **Bathroom:** flush the toilet, run the shower and taps, fill the tub, open the mirror cabinet.
- **Kitchen and laundry:** open fridge and oven doors, turn burners on, run washers and dryers.
- **Living room and bedroom:** TVs show a picture, the turntable spins, the aquarium and lava lamp light up, bookcase and wardrobe doors open and dresser drawers slide out.
- **Office:** monitors turn on. **Clocks** tell the real time.

### Wiremod

With **Wiremod** installed, switchable pieces get Wire inputs and outputs, and the Wire tools work on them:

| Piece | Inputs | Outputs |
|---|---|---|
| Ceiling, pendant and wall lights, sconces | `On`, `Toggle` | `On`, `Brightness` |
| Ceiling fan (with or without a light kit) | `On`, `Toggle` | `On`, `FanSpeed` (and `Brightness` with a light kit) |
| Light switch | `On`, `Toggle` (the whole room) | `On` |
| Garage door button | `Toggle` (its garage doors) | |
| Streetlamps | `On`, `Toggle` | `On`, `Brightness` |

`On` switches the piece on while the value isn't 0. `Toggle` flips it each time the value goes from 0 to something else, so wire a button to it. A light wired to `On` stays the way the wire says when everyone leaves the lot. Wire links aren't saved with the lot, and a moved piece needs wiring again. Without Wiremod nothing changes.

## 6. Settings

> 📷 **Screenshot needed:** `screenshots/settings-panel.png`. The Settings window on the Performance page, with the section list on the left.

The cog in the top bar opens **Settings**. The sections are down the left:

| Section | Settings |
|---|---|
| **Interface** | UI style, docked panel or floating windows, catalog layout, which way the swatch and furniture lists scroll (up / down or sideways), **Edit tabs**, **Quick build with F2 / F3** (opens Build or Furnish even without the tool out), **Quick use with E**, **Title in the corner**, **Classic Garry's Mod look** |
| **Grid** | Show grid lines, half-size grid in Build and in Furnish, **Subdivided furniture grid** (half-grid furniture snapping), line brightness |
| **Lots** | **Lot preview style**: Low poly preview or Hidden with arrow |
| **Keybinds** | Every Build and Furnish key (see [Keybinds](#keybinds)) |
| **Music & sound** | Music volume (0 turns it off), Now playing and Next song, the track list per pack, menu sounds. Says when the soundtrack isn't installed |
| **Performance** | Lot hiding, placeables hiding, automatic lighting, build mode lot behavior and rendering, below |
| **Limits** | Your usage; admins set the multiplayer limits and unlock players |
| **Server** (admins) | **Max floors**, 1 to 16 (default 8) |

### Performance

> 📷 **Screenshot needed:** `screenshots/settings-lothiding.png`. A town seen from far away with Lot Hiding on Low Detail: far houses as simple shapes.

Big towns can have thousands of pieces. These settings let your PC skip detail you can't see. They only change what you see: nothing changes on the server, and lots come back exactly as they were.

**Lot hiding** decides what happens to lots that are far away (or not active):

| Choice | What happens |
|---|---|
| **Off** | Every lot is drawn in full |
| **Low Detail** (recommended, default) | Furniture, wall objects and lamps are hidden past the objects distance, and past the lots distance the house is drawn as one simple low-poly shape, so the street keeps its look at almost no cost |
| **Hidden** | Objects hidden, and past the lots distance the whole lot vanishes. Only needed on low-end PCs |

Small objects such as vases and books also fade out once they're too small to see, even on nearby lots. That never happens in build mode, on a lot someone is standing on, or to anything that gives off light.

**Lot hiding behavior** decides which lots count as far:

- **Distance** (default): lots further than the distances below. **Preset** sets both distances at once: **Low** 225, **Medium** 500, **High** 750, **Extra High** 1000. The sliders **Hide objects past** and **Simplify lots past** fine-tune each one.
- **Only Active:** every lot except the **active lot** is treated as far, whatever the distance. The active lot is the lot you're standing on. In build mode it's the lot under the camera's focus; pan over a street and the last one stays active, and leaving build mode switches back to the lot you're on. The best choice for low-end PCs.

**Placeables hiding** covers fences and street pieces that aren't on a lot, such as lamp posts and benches: **Off** (always full), **Low Detail** (default: far ones get simpler lighting and no glow, and far streetlamps stop lighting the street) or **Hidden**. With Only Active, placeables on or near the active lot, or close to you, stay in full. They always draw in full while build mode is open, so you can click them.

**Automatic lighting** (server, admins change it): **On** switches a lot's lights off when everyone leaves and back on as they were when someone returns. **Off** leaves every light exactly as players switched it.

**Build mode lot behavior:** **View interiors on active only** (default) opens up only the lot you're editing, while the lots around it stay whole buildings with walls up, every floor and their roofs. **View interiors on all lots** opens up every nearby lot, handy when you're building several houses at once.

**Rendering:**

- **Interior shading** (on by default): rooms ignore the map's light and get their own soft indoor light, so a house looks the same by day and night, and room lamps add on top of it, still stopping at the walls. A tile counts as a room when walls close it in and a floor or roof covers it, diagonal walls included; basements count, a yard closed in by garden walls doesn't. A wall's room side gets the indoor light and its street side keeps the map's light. **Indoor brightness** sets how bright rooms are before any lamp is on: raise it if rooms look too dark, lower it if they look too bright.
- **Legacy rendering fallback mode:** draws houses piece by piece the old way, in case anything looks wrong with the faster rendering. Not recommended.

Lots unhide ahead of you: Lot Hiding looks a couple of seconds ahead along the way you're moving, on foot or in a vehicle, so the lots you're heading for are ready before you reach them. Step onto a lot and everything on it shows at once. Skyscrapers and roads are never hidden.

## 7. Saving and sharing

### Map saves

Lots, houses, furniture, roads and fences are saved per map in `data/sthc/<map>.json`. **Auto-save** writes every 5 minutes while something changed, and on shutdown or map change, and the save loads when the map starts.

Admins (you, in single player) get a **Save** button in the top bar: **Auto-save** on / off, **Save now**, **Load last save**, **Make a GMod save** and **Remove all** (asks first).

### Garry's Mod saves and the Workshop

Garry's Mod's own saves (spawn menu → **Saves**, or **Make a GMod save**) carry the whole town. Publish a save from the Saves tab to share it on the Workshop: anyone with Towns & Cities who loads it gets the town, and in single player its lots become theirs.

### Saved lots

To share one house rather than a town, use the [Lots tab](#lots-saved-lots). Saved lots live on the server in `data/sthc/lotlib/<SteamID64>/`, and their pictures on your PC in `data/sthc/lotthumbs/`.

### Cleanup

Spawn menu → Utilities → Cleanup: **Clean up everything** also removes your own Towns & Cities builds, and the **Towns & Cities builds** row removes only those. The admin **Clean up everything** clears the whole town.

## 8. Multiplayer

### Limits

> 📷 **Screenshot needed:** `screenshots/mp-limits.png`. The admin Limits window listing players with Unlock / Lock buttons.

On a server, players who aren't admins have limits by default:

| Limit | Default | Convar |
|---|---|---|
| Lots per player | 2 | `sthc_mp_lots` |
| Biggest lot | 16x16 tiles | `sthc_mp_lot_size` |
| Props per player (all lots together) | 64 | `sthc_mp_props` |
| Floors per building | 2 | `sthc_mp_floors` |
| Limits on / off for everyone | on | `sthc_mp_limits 0/1` |

**Props** are Furnish things: furniture, lights, fans, kitchen and bathroom pieces and wall decorations. Walls, floors, foundations, doors, windows, stairs, roofs, fences and roads don't count. Single player and admins have no limits.

The **Props 12/64** button in the top bar shows what you've used. Admins see **Limits** instead: a list of everyone with an **Unlock / Lock** button. Unlocked players have no limits, saved across restarts.

### Building together

> 📷 **Screenshot needed:** `screenshots/mp-preview.png`. Another player's wall drag shown in blue with their name over it.

- While someone drags walls, floor tiles, a foundation or a lot, everyone else sees it in **blue** with their name over it. `sthc_mp_previews 0` hides these.
- You can only edit your own lots unless you are an admin. Fences can also go on open ground.

### Running a server

The server needs the same optional packs as the players. Add them with `resource.AddWorkshop` (for example `resource.AddWorkshop( "455282752" )`) so players download them when they join. After enabling a pack mid-game, run `sthc_furnish_rescan`.

## 9. Console commands

### Everyone

| Command | Does |
|---|---|
| `sthc_build` / `sthc_furnish` / `sthc_toggle` | Open Build / open Furnish / open or close (while holding the tool) |
| `sthc_ui_layout docked` or `floating` | Docked or floating interface |
| `sthc_ui_reset` | Put floating windows back in place |
| `sthc_tabs_reset` | Default tab order, nothing hidden |
| `sthc_ui_skin derma` or `mockup` | Garry's Mod look or Towns & Cities look |
| `sthc_ui_catlist grid` or `list` | Large or compact category list |
| `sthc_ui_scroll vertical` or `horizontal` | Catalog scroll direction |
| `sthc_music_volume 0-1`, `sthc_music_next` | Music volume, skip song |
| `sthc_furnish_rescan` | Rescan installed packs (after subscribing mid-game) |
| `sthc_furnish_debug` | List the packs Furnish found and what went where |
| `sthc_diag` | Entity counts, duplicates, orphaned pieces, Lot Hiding and lamp state, frame rate |
| `sthc_perf [seconds]` | Time every hook and piece for a few seconds (default 5), then print what took longest per frame |
| `sthc_lod_status` | Lot Hiding counts |
| `sthc_keybinds_list`, `sthc_keybinds_reset` | Print every Build / Furnish key, put them all back to default |
| `sthc_lotpack_export "<category>" <pack id>` | Export a category of saved lots as a stock lot pack (admins, or single player) |

### Graphics (client)

| Convar | Default | Does |
|---|---|---|
| `sthc_lod_level` | 2 | Lot hiding: 0 Off, 2 Low Detail, 3 Hidden (1, objects only, still works from the console) |
| `sthc_lod_mode` | 0 | Lot hiding behavior: 0 Distance, 1 Only Active |
| `sthc_lod_objects` / `sthc_lod_house` | 3000 / 5000 | Lot hiding distances (225 and up) |
| `sthc_lod_placeables` | 1 | Placeables hiding: 0 Off, 1 Low Detail, 2 Hidden |
| `sthc_build_interiors` | 1 | Build mode lot behavior: 0 interiors on all lots, 1 active lot only |
| `sthc_interior_shading`, `sthc_interior_brightness` | 1, 1 | Interior shading on / off, indoor brightness (0.2 to 2) |
| `sthc_legacy_render` | 0 | Legacy rendering fallback mode |
| `sthc_lot_preview` | lowpoly | Lot preview style: `lowpoly` or `arrow` |
| `sthc_cursor_hand_pointer` | 1 | Open / grabbing hand cursor (0: arrow with a small hand beside it) |
| `sthc_phong` | 2 | Shiny highlights: 2 all materials, 1 only shiny ones, 0 off |
| `sthc_lights` | 1 | Lamps cast light (0: bulbs only glow) |
| `sthc_lights_soft` | 8 | How many of the nearest lamps cast soft light |
| `sthc_lights_distance` | 2500 | Lamps further than this give no light |
| `sthc_streetlamp_lights`, `sthc_streetlamp_max` | 1, 8 | Streetlamp light on / off, how many at once |
| `sthc_club_lights`, `sthc_club_light_max` | 1, 6 | Club light towers and disco balls |
| `sthc_leds_lights` | 6 | How many of the nearest LED strips cast light (0: all glow only) |
| `sthc_leds_brightness`, `sthc_leds_glow` | 1, 1 | LED strip light brightness and wall glow strength |
| `sthc_leds_distance` | 2000 | LED strips further than this cast no light |
| `sthc_lot_grid` | 1 | Show lots as a green grid in Build mode |

### Admins

| Command | Does |
|---|---|
| `sthc_save` / `sthc_load` | Save now / load the last save |
| `sthc_autosave 0/1`, `sthc_autoload 0/1` | Auto-save, load on map start |
| `sthc_autosave_interval <seconds>` | Time between auto-saves (0 = only on shutdown) |
| `sthc_remove_all confirm` | Remove everything |
| `sthc_lot_remove <id>`, `sthc_bulldoze <id>` | Remove one lot |
| `sthc_lot_save <id> [name]` | Save a lot to your saved lots |
| `sthc_set_max_floors <1-16>` | Max floors per building |
| `sthc_unlock <name>`, `sthc_lock <name>`, `sthc_unlocked` | Lift or restore a player's limits, list unlocked players |
| `sthc_mp_limits`, `sthc_mp_lots`, `sthc_mp_lot_size`, `sthc_mp_props`, `sthc_mp_floors` | Multiplayer limits |
| `sthc_lights_all 1/0`, `sthc_lamps_all 1/0`, `sthc_streetlamps_all 1/0` | Every light / lamp / streetlamp on or off |
| `sthc_lights_auto 1/0` | Automatic lighting: lights go off when everyone leaves a lot (0: fully manual) |
| `sthc_lifts_down` | Lower every car lift |
| `sthc_diag_fix` | Remove orphaned pieces and rebuild every lot from its save data (fixes duplicates; the lot data doesn't change) |
| `sthc_physcheck` | Check that built pieces are solid |
| `sthc_walls_rebuild`, `sthc_roofs_rebuild`, `sthc_stairs_rebuild`, `sthc_elevators_rebuild`, `sthc_fences_rebuild` | Respawn every piece of that kind from the save data |
| `sthc_debug 1` | Debug logging |

## 10. Troubleshooting

- **F3 / F2 do nothing.** You need to be holding the tool: spawn menu → Tools → Construction → Steventechno's Towns & Cities.
- **A pack's furniture or textures are missing.** Check it's subscribed and enabled in the Addons menu, then run `sthc_furnish_rescan`. On a server, the server needs the pack too. `sthc_furnish_debug` shows what Furnish found.
- **Skyscrapers category is empty.** Subscribe to Buildings Pack 2.0 (server and players).
- **A lot won't resize.** It has a basement, or something built on it would end up outside the new edge (shown in red).
- **"Soundtrack not installed" in Settings.** Subscribe to the Towns & Cities OST addon, or ignore it if you don't want music.
- **A busy town runs slowly.** Try **Settings → Performance → Lot hiding behavior → Only Active**, a lower distance preset, Lot hiding **Hidden**, `sthc_phong 1`, or fewer lamp lights (`sthc_lights_soft 4`). `sthc_perf` shows what's taking the time.
- **Rooms look too dark or too bright.** Change **Settings → Performance → Indoor brightness**, or turn Interior shading off to go back to the map's light.
- **Something looks wrong with the house drawing.** Turn on **Settings → Performance → Legacy rendering fallback mode**.
- **A yellow bar sits over the build panel.** It's the warning banner: split line on, roofs hidden or the build light on (<kbd>Shift</kbd>+<kbd>L</kbd>). Switch that off and it goes.
- **A key does nothing, or two things.** Check **Settings → Keybinds**: actions sharing a key show in red, and **Reset all** puts every key back.
- **The plain mouse wheel doesn't resize a TV or garage door.** Resizing is now <kbd>Shift</kbd>+wheel, so the wheel always zooms.
- **Wired lights stopped responding after a move.** Moving a piece drops its Wire links; wire it again.
- **Pieces doubled up or left floating after a crash.** An admin can run `sthc_diag_fix`.
- **The ghost is red.** Read the text by the cursor: it says why (no floor below, a wall in the way, outside your lot, a limit reached).

## 11. Dependencies and optional packs

Towns & Cities works on its own. It ships with its own walls, doors, windows, roofs, roads, textures and hundreds of built-in furniture and city pieces. These are optional and add more:

| Pack | What it adds |
|---|---|
| **Steventechno's Towns & Cities OST** | The build music, played while Build or Furnish is open |
| **Steventechno's Furniture Pack Extended** (Workshop 455282752) | Its models in Home Furnishings under the Steventechno's Furniture header, with style swatches. Posters and paintings under Wall |
| **Steventechno's Furniture Pack Classic** (Workshop 106229933) | The classic furniture under the same header |
| **Steventechno's Electronics Pack** | Its own header in Home Furnishings: TVs, computers, consoles, speakers. Wall TVs hang on walls |
| **Steventechno's House Pack 3** | Paints, trims, brick, siding, floors and kitchen textures in the paint picker, some door styles and the Classic Steventechno lights |
| **Steventechno's Buildings Pack 2.0** | **Required for Public Furnishings → Skyscrapers.** Also exterior brick, concrete (including the colored concretes), marble, ceiling and shop textures, some door styles, and the Buildings Pack road and sidewalk styles |
| **Wiremod** | Wire inputs and outputs on lights, fans, switches, garage door buttons and streetlamps (see [Wiremod](#wiremod)) |
| **Towns & Cities: Decent Vehicle support** (`st_towns_decentvehicle`) | With the Decent Vehicle addon, every road gets Decent Vehicle waypoints by itself, one lane each way, through corners, junctions, dead ends and curves, updating about a second after you build or bulldoze a road. Speed limits: `sthc_dv_speed` (40 km/h) and `sthc_dv_turnspeed` (20 km/h). Waypoints and traffic lights you place by hand stay linked |
| **Expansion packs** | **Games n' Fun** (arcade cabinets, slots and games to play on the TVs and PCs, in its own Furnish tab) and **To The Urbs!** ([section 12](#12-to-the-urbs-expansion)) |

Furnish and the paint picker only show what's installed, so nothing breaks without a pack; its items simply don't appear. On a server, install the packs on the server as well.

## 12. To The Urbs! expansion

> 📷 **Screenshot needed:** `screenshots/urbs-bus.png`. A bus pulled up at a bus shelter with its doors open, and a traffic light on the corner of a crossroads.

**Steventechno's Towns & Cities: To The Urbs!** is a separate Workshop addon that needs the base addon. It adds a **To The Urbs!** tab to Furnish (Skyscrapers, Skyscrapers - Lot Objects, Transit, Traffic, Fake Elevators, Parks, Bikes & Scooters and Graffiti) and to Build (**Monorail**, **Buses** and **Skyscraper roofs**). While either tab is open the build panel turns orange.

### Skyscrapers off lots

The pack's skyscrapers don't need a lot: off a lot they stand on open ground anywhere that isn't a road or another lot, and save with the map like street pieces.

### Bus stops and buses

- **Bus stops:** the **Bus shelter**, **Bus stop sign** and **Bus bench**. Off a lot, hold one beside a road and it snaps onto the grass strip behind the sidewalk, facing the road (hold <kbd>Shift</kbd> to place it freely). Stops go beside a straight stretch, not a junction, corner or dead end.
- **Buses** keep to the right, so a stop serves the buses going that way: put stops on both sides of a road for both directions.
- **Routes** work themselves out: a bus goes to the nearest stop it hasn't visited yet, and from the last one back to the first, round and round. It turns at corners and junctions, takes curved roads and turns back only at a dead end. Routes update by themselves when stops or roads change.
- **At a stop** the bus pulls up with the stop between its doors and opens them for about 8 seconds (<kbd>E</kbd> at the doors holds them).
- **Riding:** press <kbd>E</kbd> inside while it's stopped to sit down. Anyone standing inside is locked in place while it drives and let out at the next stop.
- **Driving:** buses speed up gently, slow for turns, keep their distance from players, vehicles and other buses, and stop at red lights.
- **Build → To The Urbs! → Buses** shows every route as an orange line with arrows, sets the bus colors (White and orange, City blue, Red, Green and yellow, School yellow, Silver and teal) and how many buses run on each route (1 to 4).

Console: `sthc_urbs_buses 0|1` (server) stops or starts every bus, `sthc_urbs_buses_rebuild` (admin) respawns them.

### Traffic lights

- **Traffic light**, **Traffic light on a mast arm** and **Pedestrian signal**. Off a lot, a traffic light held over a T junction or crossroads jumps to the corner nearest the cursor, on the sidewalk to the right of the traffic coming in that way, facing it (the mast arm reaches out over those lanes). Put one on each corner for every way in. Hold <kbd>Shift</kbd> to place one freely.
- Lights stay red until a player in a vehicle (cars, simfphys, LVS) or a bus comes up and waits, then give that direction green, as long as nobody is waiting the other way. They hold green 6 to 24 seconds while traffic keeps coming, then yellow, then all red briefly.
- People on foot don't change the lights: they press <kbd>E</kbd> on the pedestrian signal's button to cross. It shows WALK, then a flashing DON'T WALK for the last 4 seconds.
- `sthc_urbs_signals_reset` (admin) puts every junction back to red.

### Also in the pack

- **Monorail:** drag track across the map (3 to 8 tiles up), click a straight piece for a station, and every stretch with a station gets a train you can ride.
- **Skyscraper roofs:** drag over a building from the floor above for a skyscraper crown (Setback, Mechanical, Glass crown, Helipad) with up to 12 stories of tower under it.
- **Four-lane roads:** the **Four-Lane Avenue** and **Four-Lane Boulevard** road styles join any other road by themselves.
- **Fake elevators**, **parks** (picnic table, fountain, slide, swings, gazebo and more), **bikes and scooters**, and **graffiti** that hangs on walls like a picture.
