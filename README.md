# Libre Design Workspace

Open-source design workspace for creative and electronics design using 100% free and open-source tools.

## Tools Included

### 🎨 2D Graphics & Digital Art
- **GIMP** - Raster image editing (`/gimp/`)
- **Inkscape** - Vector graphics (`/inkscape/`)
- **Krita** - Digital painting (`/krita/`)
- **Libresprite** - Pixel art and animations (`/libresprite/`)

### 🎮 3D Modeling
- **Blender** - 3D modeling, animation, rendering (`/blender/`)

### 🔧 Electronics Design
- **KiCAD** - Professional PCB design (`/kicad/`)
- **LibrePCB** - Modern PCB design (`/librepcb/`)
- **Qucs-S** - Circuit simulation with SPICE (`/qucs-s/`)
- **Ngspice** - SPICE circuit simulator (`/ngspice/`)

## Repository Structure

```
libre-design-workspace/
├── gimp/              # .xcf files, brushes, patterns
├── inkscape/          # .svg files, templates
├── krita/             # .kra files, brush presets
├── libresprite/       # .ase/.png pixel art
├── blender/           # .blend files, textures, renders
├── kicad/             # .kicad_pcb, .kicad_sch files
├── librepcb/          # LibrePCB projects
├── qucs-s/            # .sch, simulation files
├── ngspice/           # .cir, .spice netlists
└── shared/            # Assets shared across tools
    ├── textures/
    ├── references/
    └── exports/
```

## Getting Started

1. Clone this repository
2. Install the tools you need (all are free and open-source)
3. Add your project files to the appropriate folders
4. Use the shared folder for assets used across multiple tools

## File Types

- **GIMP**: `.xcf`, `.xcf.bz2`
- **Inkscape**: `.svg`, `.svgz`
- **Krita**: `.kra`
- **Libresprite/Aseprite**: `.ase`, `.aseprite`
- **Blender**: `.blend`, `.blend1`
- **KiCAD**: `.kicad_pro`, `.kicad_sch`, `.kicad_pcb`
- **LibrePCB**: `.lpp`
- **Qucs-S**: `.sch`, `.dpl`
- **Ngspice**: `.cir`, `.sp`, `.spice`

## Contributing

Add your open-source design files, templates, and resources. All files should be created with free and open-source software.

## License

This repository structure is MIT licensed. Individual project files retain their respective licenses.
