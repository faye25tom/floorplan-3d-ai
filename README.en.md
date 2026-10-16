# AI Floorplan 3D Studio

[中文](README.md) | English

> [!NOTE]
> **Acknowledgement & Open Source Notice**: This project is forked and enhanced based on the original open-source work by [wy51ai/floorplan-3d](https://github.com/wy51ai/floorplan-3d). Sincere gratitude to the original author [@akokoi1](https://x.com/akokoi1) for creating and open-sourcing the remarkable 3D floor plan renderer and material system!
> This project builds upon it with: **AI Vision Multi-modal Floor Plan Recognition**, **Interactive Manual Floor Plan Builder**, **Multi-preset Layout Studio**, and **Auto-Furnish 3D Algorithms**.

A pure front-end tool for interior design on a floor plan: place furniture, remove or modify walls, and take measurements on a 2D plan, then switch to a Three.js 3D scene with one click — view it from above or walk through it in first person. The whole app is a single `index.html`: no build step, just open it.

## Features

**Floor Plan Studio (New)**
- **Top Bar Entrance**: Click `🏠 Floor Plan` on the top bar to open the **Floor Plan Studio** modal
- **Preset Library**: Built-in 4 full-featured floor plans (Classic 3-Bedroom 118㎡, Modern Cozy 2-Bedroom 72㎡, Urban Studio Loft 42㎡, Luxury 4-Bedroom 148㎡) with instant hot-switching
- **AI Vision Recognition**:
  - Upload floor plan images (hand-drawn sketches, CAD drawings, real estate posters)
  - Connect directly to Vision LLMs (OpenAI GPT-4o, Alibaba Qwen-VL, DeepSeek, Google Gemini, etc.) to automatically extract rooms, walls, dimensions, and doors
  - **One-click Smart Simulated Demo**: Experience full AI recognition without an API key
- **Manual Drawing Canvas**:
  - Interactive modular room builder: easily add Living Room, Bedrooms, Kitchen, Bath, Balcony, Study
  - Free drag-and-drop with 100mm grid snap and automatic wall-to-wall snapping, real-time area calculation
  - One-click load current plan for rapid renovations
- **Auto-Furnish Algorithm**: For both AI-generated and hand-drawn floor plans, the system automatically decorates rooms with beds, wardrobes, sofas, dining tables, kitchen counters, and sanitary ware for an instant 3D walkthrough!
- **JSON Structure Code**: View, edit, copy, and export/import floor plan JSON definitions in real-time

**2D Floor Plan**
- Displays the original floor plan at 1:60 / 1:100 scale, dimensions in mm
- Drag 60+ furniture and appliance items from the library on the left (bedroom, living room, dining & kitchen, bathroom, appliances, study & leisure)
- Move, rotate (hold Shift for free angle), and resize items, with automatic snapping to walls
- Measuring tool (snaps to nearby walls; hold Shift to lock horizontal / vertical)
- Remove or modify non-load-bearing walls; load-bearing walls are marked separately
- Layer toggles: dimensions, room names, furniture, grid, load-bearing walls

**3D Scene**
- Bird's-eye, oblique, and top-down views; click a room in the list to fly to it
- Walkthrough mode: WASD + mouse on desktop, virtual joystick on touch devices; click doors to open / close them
- Toggle between full-height and cut-away walls, time-of-day sunlight slider, night lighting
- Detailed furniture models: cabinet door gaps and handles, upholstered headboards, metal and ceramic materials with environment reflections, and more
- Select and drag furniture in 3D as well, kept in sync with the 2D plan in real time

**Plans & Statistics**
- Automatic calculation of room areas and net usable floor area
- Change the floor material of each room (wood, tiles, marble, terrazzo, carpet, etc.), with cost estimates based on area plus 5% wastage
- Undo / redo; plans are auto-saved in the browser's local storage
- Chinese / English UI toggle (button on the right of the top bar; defaults to Chinese and remembers your choice)
- Export to PNG, export / import plans as JSON

## Quick Start

```bash
git clone <repository-url>
cd <repository-directory>
```

Then simply open `index.html` in your browser. Alternatively, start a local static server:

```bash
python3 -m http.server 8000
# Visit http://localhost:8000
```

> Three.js is loaded from the jsDelivr CDN, so an internet connection is required the first time you open the 3D scene.

## Keyboard Shortcuts

| Key | Action |
| --- | --- |
| `T` | Toggle 2D / 3D |
| `V` / `M` / `X` | Select / Measure / Modify walls |
| `R` / `Shift+R` | Rotate selected furniture 90° clockwise / counterclockwise |
| `Delete` / `Backspace` | Delete selected furniture |
| `Ctrl/⌘ + D` | Duplicate selected furniture |
| `Ctrl/⌘ + Z`, `Ctrl/⌘ + Shift + Z` | Undo, redo |
| `F` | Fit to window |
| `+` / `-` | Zoom in / out |
| `[` / `]` | Show / hide the furniture library (left) and the side panel (right) |
| `Shift + F` | Fullscreen |
| `Esc` | Cancel current action |
| Walkthrough: `WASD` / arrow keys, `Shift`, `E` | Move, walk faster, open / close doors |

## Tech Stack

- Vanilla HTML / CSS / JavaScript — no framework, no build step
- 2D floor plan rendered with SVG
- 3D scene built with [Three.js](https://threejs.org/) r160 (OrbitControls, PointerLockControls, RoundedBoxGeometry, RoomEnvironment, CSS2DRenderer)
- Data stored in `localStorage`

## Customizing the Floor Plan

The floor plan data lives in `index.html`:

- `ROOMS`: room polygons, names, and default floor materials
- `WALLS` / `WINS`: walls and window openings
- `MATS`: floor material names and unit prices
- `LIB`: furniture library (type, name, default size, color)
- `buildFurniture()`: 3D models for each furniture type

Edit this data to use your own floor plan.

## Social Media

- X (Twitter): [@akokoi1](https://x.com/akokoi1)

## License

[MIT](LICENSE)
