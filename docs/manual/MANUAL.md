# Steventechno's Towns & Cities! Player Manual

*The Ultimate FlatMap Transformation Project!*

Towns & Cities is a Sims-style building tool for Garry's Mod. You draw lots, foundations, walls, floors and roofs on a grid with your mouse, put in doors, windows, stairs and working elevators, dig basements and shallow pools, lay roads with sidewalks, furnish every room and every shop, and save whole houses to place again anywhere. This manual covers everything a player needs, from the first house to server settings.

Written for build 258.

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

> **Tip:** F2 and F3 follow your Garry's Mod key binds (`gm_showteam` and `gm_showspare1`), so they still work if you moved those binds. You can also bind `sthc_build`, `sthc_furnish` or `sthc_toggle` to any key.

### Your first house in nine steps

> 📷 **Screenshot needed:** `screenshots/start-first-house.png`. A finished first house: walls, windows, a gable roof and a painted outside.

1. **Flooring → Lots:** drag a lot on open ground. 12x10 is a good first house.
2. **Flooring → Foundation** (optional): pick a height and drag it over the lot.
3. **Walls:** hold <kbd>Shift</kbd> and drag to outline the house, then drag inner walls for rooms.
4. **Doors:** pick a front door and click an outside wall. Add inner doors.
5. **Windows:** click windows onto the walls. Hold and move up or down for Low or High.
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

> 📷 **Screenshot needed:** `screenshots/ui-overview.png`. The Build interface with the tab strip, rail, corner block and top bar labelled.

- **Tab strip** along the bottom. Each tab's options open above it. Tabs with several tools (Flooring, Walls, Stairs) show them as icons on the **rail** down the left of the panel; hover an icon for its name and hints.
- **Corner block** on the left: the floor counter (arrows and pips), the camera button, wall view, the **eraser** and the **pipette**.
- **Top bar** (top right): Undo, Float, Grid size, Settings (cog), Bulldoze, Props / Limits, Save (admins) and Exit.
- **Pencil** at the end of the tab strip: drag tabs into your own order or untick ones you don't use. Saved for you. `sthc_tabs_reset` puts the default order back.
- **Float** splits the interface into separate windows you can drag, collapse and snap to screen edges. **Dock** joins them again, **Reset** puts the windows back in place (or `sthc_ui_reset`).
- Prefer the normal Garry's Mod look, or a skin mod? Tick **Settings → Use the classic Garry's Mod look** (`sthc_ui_skin derma`).
- **Sounds:** buttons, tabs, placing, removing, picking up, turning, undo and floor changes each have their own short interface sound, and a different one plays when something can't go where you tried to put it.
- **Cursor icons:** a small icon next to the pointer shows what a click will do: a **sledgehammer** while removing, a **hand** while carrying something, a **paint brush** while painting and an **eyedropper** while picking a texture.

### The hand

> 📷 **Screenshot needed:** `screenshots/ui-hand.png`. A sofa in the hand as a green ghost, with the cursor hint text.

Almost everything you place works like the hand in The Sims:

1. Click a tile in the catalogue. That piece is now **in your hand** and follows the cursor as a ghost: **green** fits, **red** doesn't, and the text by the cursor says why.
2. Click (or press, drag and release) to put it down. The hand empties afterwards. Hold <kbd>Shift</kbd> to keep it and place more.
3. With an **empty hand**, click a placed piece to lift it. The piece itself follows the cursor while you carry it. Put it down somewhere else, press <kbd>Del</kbd> to delete it, or right-click to put it back where it was.
4. <kbd>Del</kbd> or <kbd>Esc</kbd> empties your hand.

If you click a piece that belongs to another tab (a window while you're on Flooring, say), the interface jumps to that tab and lifts the piece there.

### The eraser

The eraser in the corner block is one Remove tool for every tab. While it's on, a click or drag removes what the active tab would add: walls, floor tiles, fences, roads, roofs, stairs, pools, doors, windows or furniture. Right-drag or <kbd>Ctrl</kbd>+drag does the same in most tabs without switching tools.

### The pipette

The pipette next to the eraser copies something you've already placed. Turn it on and click a piece in the world: a copy of it, in the same style, goes into your hand, and the interface opens the tab and category it comes from with its tile lit. It works on furniture, Home and Public Furnishings pieces, wall objects (curtains, flags and LED strips keep their colour and length), doors and windows. It turns itself off after one pick; right-click cancels.

### Floors and wall view

> 📷 **Screenshot needed:** `screenshots/ui-wallview.png`. The same house in Walls up, Cutaway and Walls down, side by side.

- **Floors:** <kbd>Page Up</kbd> / <kbd>Page Down</kbd> or the floor arrows switch floors (1 to 8 by default, up to 16 if an admin raises it). Everything above the floor you're on is hidden, so you can always see in.
- **Two floor counters on foundation lots:** when the camera is on a lot with a foundation, a second floor column appears. The right one counts floors on top of the foundation; the left one counts floors on the ground beside it, for driveways, sheds and garden walls. Click a column to make it active.
- **Wall view:** <kbd>Tab</kbd> cycles **Walls up**, **Cutaway** (the walls facing the camera drop so you can see into rooms) and **Walls down**. <kbd>Home</kbd> steps walls up, <kbd>End</kbd> steps them down. Walls are always full height in game.

## 3. Camera, controls and hotkeys

### Camera

| Input | Does |
|---|---|
| <kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd>, arrow keys or mouse at the screen edge | Slide the camera (<kbd>Shift</kbd> is faster) |
| Middle-drag | Orbit (turn and tilt) |
| Right-drag | Pan (when the tab doesn't use right-click) |
| Mouse wheel | Zoom |
| <kbd>Q</kbd> / <kbd>E</kbd> | Rotate 45° |
| <kbd>H</kbd> | Re-centre on your player |
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
| Mouse wheel (garage door in hand) | Change its width |
| Mouse wheel or <kbd>R</kbd> (basement stairs in hand) | Turn them |
| <kbd>[</kbd> / <kbd>]</kbd> | Elevator top stop |
| <kbd>Alt</kbd> or <kbd>Ctrl</kbd>+click (painting) | Eyedropper |

### Furnishing

| Input | Does |
|---|---|
| Click a catalogue tile | Put it in your hand |
| Press, drag, release | Place and turn (90° steps) |
| <kbd>,</kbd> / <kbd>.</kbd> or <kbd>Ctrl</kbd>+wheel | Rotate 90° (with <kbd>Alt</kbd>: 15°) |
| <kbd>Alt</kbd> | Place freely: no grid, any angle |
| <kbd>Shift</kbd> | Keep it in your hand |
| <kbd>[</kbd> / <kbd>]</kbd> | Change style (colour) |
| Mouse wheel (TV in hand) | Change the screen size, 1" a step (<kbd>Shift</kbd>: 5") |
| <kbd>F</kbd> | Fix a model whose front is the wrong way |
| <kbd>V</kbd> | Turn a flag horizontal / vertical |
| <kbd>Del</kbd> | Empty your hand, or delete a lifted piece |

### In game (interface closed)

| Key | Does |
|---|---|
| <kbd>E</kbd> | Open doors and gates, sit, switch lights, flush, run taps, call and ride elevators, open garage doors, run machines |

## 4. Build mode, tab by tab

Everything in Build mode sits on a 64-unit grid (one tile). Each floor is 128 units tall.

### PAINT column (Floor tiles and Wall paint)

> 📷 **Screenshot needed:** `screenshots/build-paint-column.png`. The Wall paint tab open, with Fill, Paint side and the texture picker.

The two dark-blue tabs at the front of the tab strip paint everything that isn't a roof or a road.

- **Floor tiles** lays and paints floors in one step: drag over empty cells to lay tiles in the picked texture, and over existing tiles (or foundation tops, stair treads and fronts) to retexture them. With **Surface: Ceiling** it paints the underside of the floor above. Right-drag or the eraser removes tiles. Tiles on upper floors need floor below, with up to 2 tiles of overhang.
- **Wall paint** paints walls: walls, half walls, pillars, foundation edges and stair sides.

Options on the panel:

| Option | Choices |
|---|---|
| **Fill** | One tile, Drag area, Whole room, Whole floor |
| **Paint side** (walls) | Clicked, Inside, Outside, Both |
| **Surface** (floors) | Floor, Ceiling |

Pick a texture from the picker (filter it with the type chips such as Carpet, Tile, Wood, and the colour dots), then click or drag. The floor list includes the roads' own surfaces (Road Asphalt, Fresh Asphalt, Sidewalk Concrete, Sidewalk Cobblestone, Dirt Road), so a forecourt, patio or parking lot meets the road beside it without a seam, and coloured concretes (Light Grey, Charcoal, Sand, Terracotta, Red, Sage, Slate Blue and Mocha) for patios and plazas. The rail has **Brush**, **Fill room** (<kbd>Shift</kbd>), **Eyedropper** (<kbd>Alt</kbd> or <kbd>Ctrl</kbd>) and **Empty hand** (<kbd>Del</kbd>).

**Split line** (Wall paint): paint an outside wall in two parts, for example brick below and siding above. Turn it on, drag on a wall to move the line, then click above or below it to paint that part. Right-click removes the line.

The Walls paint list also has fake-window **office facades** (Office Windows in blue, dark, bronze or green glass, Lights On, Concrete or Brick with Windows) and **Reflective Glass**, so tall buildings don't need hundreds of real windows.

### Flooring

> 📷 **Screenshot needed:** `screenshots/build-lots.png`. A lot shown as a green grid with a foundation being dragged onto it.

The Flooring tab has three tools on its rail. (Floor tiles are laid from the PAINT column.)

- **Lots.** Every house starts with a lot. Drag on empty ground to draw one, from 4x4 up to 64x64 tiles. Start a drag inside a lot and pull outward to grow it. While Lots is picked, every lot shows as a green grid. A lot can sit right beside a road.
- **Resizing a lot:** point at an edge or corner of a lot until it lights up yellow, then drag it in or out. The new size shows in green and anything that would be cut off in red. A lot can only shrink if nothing built on it would end up outside, and a lot with a basement can't be resized.
- **Foundation** (optional). Pick a height (8 to 96 units in steps of 8) and a texture, then drag it onto the lot. The whole lot shares one foundation height; change it and the walls, stairs and everything on the lot move with it. Shift-click fills the whole foundation with a texture.
- **Sidewalks.** Draw plain concrete paths anywhere on the grid: front walks, wide driveways, plazas. They meet road sidewalks flush.

### Walls

> 📷 **Screenshot needed:** `screenshots/build-walls.png`. A room being drawn with Shift+drag, the green ghost showing its size.

The Walls tab has **Walls** and **Fences**.

**Walls**

- Drag from a grid corner to draw a straight wall. Drag at about 45° for a **diagonal** wall.
- <kbd>Shift</kbd>+drag draws a whole room.
- Right-drag or <kbd>Ctrl</kbd>+drag deletes (with <kbd>Shift</kbd>: a room outline).
- Walls merge into long pieces by themselves. Tick **Corner posts** for white posts at every corner.
- Rail tools: **Half walls** (draw walls at a lower height, or press a wall and move up or down to set its height; right-click puts it back to full), **Square pillar**, **Round pillar**, **Corner cap** (click a grid corner) and **Move walls**.
- **Move walls:** press on a wall and drag it sideways. The whole straight run between its junctions slides, whole tiles at a time, taking its doors, windows, paint, height and anything hung on it along. Walls joined to its ends stretch or shorten to stay connected; another wall in the way, a diagonal or the lot edge stops it. It's one undo step.

**Fences**

- **Fence:** drag along grid lines. <kbd>Shift</kbd>+drag fences a whole yard.
- **Gate:** click a fence to turn that cell into a gate (click again to undo). <kbd>E</kbd> opens gates in game.
- Styles: Picket, Privacy, Ranch, Iron. Drawing over a fence restyles it.
- Fences go anywhere: on lots (on the foundation, or on upper floors as balcony railings), on open ground (they follow the slope) and along roads.

### Doors

> 📷 **Screenshot needed:** `screenshots/build-garage.png`. A 6-tile garage door half open, with the width slider in the Doors panel.

Pick a door and click a wall. The ghost is green where it fits.

- **Doors:** six-panel doors in grey, white and black, arched panel, double doors, glass sliding doors, wood, panel and glass doors in several wood finishes, French doors, Oak shaker, Craftsman, Navy front door, Red door with glass, Farmhouse plank, and Half-Life 2 style city and metal doors. **Archway** and **Wide archway** are open passages.
- <kbd>F</kbd> flips which side a single door is hinged on.
- **Glass sliding doors** (2 tiles) have a dark aluminium frame and real see-through glass; one panel slides past the other.
- In game, <kbd>E</kbd> opens a door away from you. Double doors open together and sliding doors slide.
- **Garage door:** one catalogue tile for every width. Use the **Garage door width** slider or the mouse wheel while it's in your hand to pick **2 to 8 tiles** wide (4 is the default). In game, <kbd>E</kbd> rolls it up along the ceiling; press <kbd>E</kbd> on the lip left in the doorway to close it.
- **Garage door button:** in Furnish → Home Furnishings → Lighting. It snaps onto a wall like a light switch, and <kbd>E</kbd> on it opens or shuts every garage door of its room.
- With an empty hand, click a door to lift and move it.

Doors and windows need a plain, full-height straight wall that's long enough. They don't go on diagonal or half walls.

### Windows

> 📷 **Screenshot needed:** `screenshots/build-windows.png`. Windows at Low, Default and High, and a window turned 45° in the wall.

Pick a window and click a wall.

- **Windows:** Window, Paned, Tall, High, Wide, Wide paned, Picture (3 tiles), and the framed set with casing and sill: Divided, Cottage, Transom, Double-hung, Four-pane, Sidelight, Grid and Twin grid. **Glass wall** is a full-height glass panel for shop fronts, lobbies and curtain walls.
- **Height:** press on the wall, keep the button held and move the mouse up or down. The window snaps between **10 height levels**, from as low to as high as it fits in the wall, then release. A plain click places it at the default height. A window turned on its side has more room to move.
- **Rotation:** with a window in your hand (or lifted), the **mouse wheel turns it** in the wall, 15° a step, for diamond and angled windows. A turned window that wouldn't fit is scaled down to fit. <kbd>Shift</kbd> keeps the angle for the next window.

### Stairs

> 📷 **Screenshot needed:** `screenshots/build-stairs.png`. Stairs placed between two floors with the blue arrival square, and an elevator shaft.

Go to the floor the stairs start on and open **Stairs**.

- Pick a style (Oak, Walnut, Carpet, Stone, Concrete) and point at the cell for the bottom step. The stairs climb one floor over 2 tiles; the blue square is where you arrive.
- <kbd>,</kbd> / <kbd>.</kbd> or <kbd>F</kbd> turn them. Click to place.
- They need floor under them, floor on the next storey to land on, and no wall in the way. The floor above opens up over them for headroom, and closes again if you remove them.
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

- Drag a rectangle on bare ground of your lot, from 2x2 up to 16x16 tiles. Not on a foundation or over a basement.
- Pick a depth, **Wading** or **Shallow**, and a tile colour: white, blue, teal or stone.
- Walk in and you wade: you're drawn lower in the water and your footsteps splash. There's no swimming.
- Remove with the eraser or a right-drag over the pool.

**Basement**

- One basement per lot, one storey deep under floor 1. **Dig** drags out the room (at least 2x4 tiles); digging again replaces it.
- **Stairs:** click where the top step goes, and turn them with the mouse wheel or <kbd>R</kbd>. They come up through floor 1, which opens over them.
- **Fill in** closes the basement again (not while someone is down there).
- While the Basement tool is open, the whole room shows through the ground. Down in it you walk, run and jump as usual, and other players see you there.
- A lot with a basement can't be resized.

### Roofs

> 📷 **Screenshot needed:** `screenshots/build-roofs.png`. An L-shaped house with two overlapping gable roofs and a lean-to porch.

- Pick **Gable**, **Hip**, **Flat**, **Lean-to** or **Half hip**, a pitch (**Shallow** 14°, **Low** 21°, **Medium** 27°, **Steep** 37°) and a texture.
- Go **up one floor** from the walls the roof sits on, then drag over the rooms. It overhangs the walls by half a tile.
- <kbd>F</kbd> (or **Turn**) turns a gable's ridge, or which side a lean-to or half hip's flat edge faces. Put that flat edge against a taller wall for porches and extensions.
- Click a roof to give it the current type, pitch and texture. Right-click (or <kbd>Ctrl</kbd>+click) removes it.
- Roofs may overlap, so an L-shaped house is two roofs. Rooms without a ceiling get their walls carried up to the roof (vaulted rooms).
- **Hide roofs** hides every roof while you build. Roofs also hide while you're on a floor below them.
- The Roofs tab keeps its own **Draw | Paint** buttons: Paint restyles the top, underside or gable ends.

### Roads

> 📷 **Screenshot needed:** `screenshots/cities-roads.png`. A crossroads, a curved road joining two offset roads, and a driveway into a lot.

Roads are laid on a large road grid (one road tile is 12x12 building tiles, two full lanes with sidewalks).

| Rail tool | Does |
|---|---|
| **Draw roads** | Drag to lay a road with sidewalks (up to 32 road tiles per drag). Drag across or into a road for a corner, T junction or crossroads; open ends get a rounded dead end |
| **Roads (no sidewalk)** | Just the road surface. Roads with sidewalks taper smoothly into them. Good with Country Lane or Dirt Road for country roads |
| **Curved road** | Press on the open end of one road, drag to the open end of another, release. A smooth curve joins them, even offset, at an angle, as a U-turn or between different heights (up to 8 road tiles apart). Curves drive smoothly, with no bumps between pieces. <kbd>Ctrl</kbd>+click a curve removes it |
| **Driveway** | Drag along the sidewalk in front of a lot. The curb and sidewalk are cut out and a ramp runs down to the road. Surface: concrete or asphalt |
| Bulldoze / <kbd>Ctrl</kbd>+drag | Remove the road tiles in the dragged area |

- **Road styles:** Buildings Pack (default), Classic Asphalt, Main Road, City Street, Concrete Road, Country Lane, Dirt Road. **Sidewalk styles:** Buildings Pack, Concrete Slabs, Smooth Concrete, Cobblestone, Small Tiles. Drag over a road with another style to restyle it. The Buildings Pack styles need Buildings Pack 2.0.
- **Paint** (Roads tab): paint the road surface, sidewalk, curb or grass of any tile with road, floor or wall textures. Shift-click paints all connected tiles that looked the same.
- Lots, drawn sidewalks and fences can't go on a road.

### Lots (saved lots)

> 📷 **Screenshot needed:** `screenshots/build-lotlib.png`. The Lots tab with saved lot tiles and a saved house as a ghost being placed.

The Lots tab saves a copy of a lot with everything on it and places it again anywhere, as often as you like.

- **Save copy:** click one of your lots (green) and give it a name. A picture is taken from the lot's south side for its tile.
- **Place selected:** the saved lot follows the cursor as a ghost. <kbd>,</kbd> <kbd>.</kbd> or <kbd>F</kbd> turn it; the yellow arrow (and the down arrow on its tile) marks the side that faced south when you saved it. Click to build, <kbd>Shift</kbd> to keep it in hand, <kbd>Del</kbd> or right-click to put it back. <kbd>Ctrl</kbd>+<kbd>Z</kbd> removes a placed lot.
- **Delete selected** asks first. Double-click a tile to place it, right-click to rename it.
- Each player keeps up to **32** saved lots on the server. Placing follows the server's limits (lot size, lot count, floors, props).

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
- **LED strips** (Wall → LEDs): a coloured strip that glows on the wall and lights the room, or a **glow only** version that casts no light. Twelve colours plus **RGB cycle**, 1 to 4 tiles long, hung from floor height up to just under the ceiling for cove lighting. Low strips glow upward like baseboard lighting.

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
- The arrow on the floor shows the front. If a model's front is wrong, press <kbd>F</kbd> to fix it; that's remembered per model.
- <kbd>Alt</kbd> places freely at any angle. <kbd>,</kbd> / <kbd>.</kbd> rotate 90° (15° with <kbd>Alt</kbd>).
- **Small things go on tops:** TVs, lamps, monitors, vases, plants, books and other small pieces sit on tables, desks, shelves, dressers and counters when you hold them over one. Moving the table carries them along.
- **Chairs snap** to the front of a desk or the nearest edge of a dining table.
- **Kitchen counters** side by side join into one run, and a counter turned 90° at the end makes a corner.
- **TVs** change size with the mouse wheel while they're in your hand (<kbd>Shift</kbd> for 5" steps). A lifted TV goes back down at its new size.
- Furniture goes on the floor you're viewing.

### Styles

> 📷 **Screenshot needed:** `screenshots/furnish-styles.png`. The style card for a sofa: turning preview and colour swatches.

Items with a small swatch badge come in several styles (colours, fabrics, woods, finishes). Clicking one opens a card with a turning preview and a swatch per style; hover to preview, click to pick. <kbd>[</kbd> / <kbd>]</kbd> change the style of what's in your hand. Your last pick per model comes back next time.

### Wall objects

> 📷 **Screenshot needed:** `screenshots/furnish-wall.png`. A painting being hung, with the Low / Middle / High / Top height snap.

Pick a poster, painting, mirror, clock, sign, wall TV or LED strip, press on a wall and, while holding, move the mouse up or down to snap between **Low**, **Middle**, **High** and **Top**, and sideways to slide along the wall. Release to hang. <kbd>Alt</kbd> slides freely; <kbd>F</kbd> flips a model that hangs back to front. Flags turn horizontal or vertical with <kbd>V</kbd>. Picking an LED strip opens a card for its colour and length.

### Things that work

In game, <kbd>E</kbd> on:

- **Lights:** ceiling lights, pendants, sconces, lamps, fireplaces, candles, streetlamps and the vanity mirror's bulbs turn on and off. Ceiling fans spin up and coast down. A **light switch** works every light in its room.
- **Seats:** sofas (several people), armchairs, dining and office chairs, park benches, bar stools, bed edges and bed benches.
- **Bathroom:** flush the toilet, run the shower and taps, fill the tub, open the mirror cabinet.
- **Kitchen and laundry:** open fridge and oven doors, turn burners on, run washers and dryers.
- **Living room and bedroom:** TVs show a picture, the turntable spins, the aquarium and lava lamp light up, bookcase and wardrobe doors open and dresser drawers slide out.
- **Office:** monitors turn on. **Clocks** tell the real time.

## 6. Settings

> 📷 **Screenshot needed:** `screenshots/settings-panel.png`. The Settings window with Music, View, Building and Performance sections.

The cog in the top bar opens **Settings**.

| Section | Setting | Does |
|---|---|---|
| Music | **Music volume**, **Next song** | Build music volume (0 turns it off) and skip. Says when the soundtrack isn't installed |
| View | **Show grid (G)** | Grid lines on or off |
| View | **Half-size grid (32)** in Build / in Furnish | Finer grid (also <kbd>Shift</kbd>+<kbd>G</kbd>) |
| View | **Use the classic Garry's Mod look** | Your Derma skin instead of the Towns & Cities look |
| Building | **Max floors** (admins) | Highest floor on this server, 1 to 16 (default 8) |
| Performance | **Lot Hiding** | How far lots are simplified, below |
| Performance | **Hide objects past**, **Simplify / hide lots past** | The two distances Lot Hiding uses |

### Lot Hiding

> 📷 **Screenshot needed:** `screenshots/settings-lothiding.png`. A town seen from far away with Low Lot Rendering on: far houses as simple shapes.

Big towns can have thousands of pieces. Lot Hiding lets your PC skip the detail on lots far from you. It only changes what you see; nothing changes on the server, and lots come back exactly as they were.

| Choice | What happens to far lots |
|---|---|
| **None** | Everything is always drawn in full |
| **Objects Only** | Furniture, wall objects and lamps on far lots are hidden; houses stay full detail |
| **Objects, and Low Lot Rendering** (default) | Objects hidden, and far houses drawn as one simple low-detail shape |
| **Hide Lots** | Objects hidden, and past the house distance the whole lot is hidden |

The default distances are 3000 units for objects and 5000 for houses. Skyscrapers, roads, fences and street pieces off lots are never hidden.

Lots unhide ahead of you: Lot Hiding looks a couple of seconds ahead along the way you're moving, on foot or in a vehicle, so the lots you're heading for are ready before you reach them. Step onto a lot and everything on it shows at once.

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
| `sthc_ui_scroll vertical` or `horizontal` | Catalogue scroll direction |
| `sthc_music_volume 0-1`, `sthc_music_next` | Music volume, skip song |
| `sthc_furnish_rescan` | Rescan installed packs (after subscribing mid-game) |
| `sthc_furnish_debug` | List the packs Furnish found and what went where |
| `sthc_diag` | Entity counts, duplicates, orphaned pieces, Lot Hiding and lamp state, frame rate |
| `sthc_perf [seconds]` | Time every hook and piece for a few seconds (default 5), then print what took longest per frame |
| `sthc_lod_status` | Lot Hiding counts |

### Graphics (client)

| Convar | Default | Does |
|---|---|---|
| `sthc_lod_level` | 2 | Lot Hiding: 0 None, 1 Objects Only, 2 Low Lot Rendering, 3 Hide Lots |
| `sthc_lod_objects` / `sthc_lod_house` | 3000 / 5000 | Lot Hiding distances |
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
- **A busy town runs slowly.** Try **Settings → Lot Hiding → Hide Lots**, lower the distances, `sthc_phong 1`, or fewer lamp lights (`sthc_lights_soft 4`). `sthc_perf` shows what's taking the time.
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
| **Steventechno's Buildings Pack 2.0** | **Required for Public Furnishings → Skyscrapers.** Also exterior brick, concrete (including the coloured concretes), marble, ceiling and shop textures, some door styles, and the Buildings Pack road and sidewalk styles |

Furnish and the paint picker only show what's installed, so nothing breaks without a pack; its items simply don't appear. On a server, install the packs on the server as well.
