# 🛠️ Libre Design Workspace - Complete App Suite

All open-source design and electronics tools organized in one place.

## 📱 Applications

### Circuit Notebook (Main App)
**Desktop application for electronics project management**
- **Status:** ✅ Production Ready
- **Tech:** Electron + React + TypeScript
- **Location:** `/src/`
- **Run:** `npm start`
- **Purpose:** Manage electronics projects, BOMs, and documentation

---

## 🎨 Creative Suite

### GIMP
**Professional image editing**
- **Use for:** Photo editing, image manipulation, textures
- **Files:** `.xcf`, `.xcf.bz2`
- **Location:** `/gimp/`
- **Download:** https://www.gimp.org/

### Inkscape
**Vector graphics editor**
- **Use for:** Logos, icons, diagrams, SVG graphics
- **Files:** `.svg`, `.svgz`
- **Location:** `/inkscape/`
- **Download:** https://inkscape.org/

### Krita
**Digital painting studio**
- **Use for:** Digital art, concept art, textures
- **Files:** `.kra`
- **Location:** `/krita/`
- **Download:** https://krita.org/

### Libresprite
**Pixel art editor**
- **Use for:** Pixel art, sprites, animations
- **Files:** `.ase`, `.aseprite`
- **Location:** `/libresprite/`
- **Download:** https://libresprite.github.io/

### Blender
**3D creation suite**
- **Use for:** 3D modeling, rendering, animation
- **Files:** `.blend`
- **Location:** `/blender/`
- **Download:** https://www.blender.org/

---

## 🔧 Electronics Suite

### KiCAD
**Professional PCB design**
- **Use for:** Schematic capture, PCB layout
- **Files:** `.kicad_pro`, `.kicad_sch`, `.kicad_pcb`
- **Location:** `/kicad/`
- **Download:** https://www.kicad.org/
- **Integration:** Direct link from Circuit Notebook

### LibrePCB
**Modern PCB design tool**
- **Use for:** Easy PCB design, library management
- **Files:** `.lpp`
- **Location:** `/librepcb/`
- **Download:** https://librepcb.org/

### Qucs-S
**Circuit simulator with SPICE**
- **Use for:** RF simulation, circuit analysis
- **Files:** `.sch`, `.dpl`
- **Location:** `/qucs-s/`
- **Download:** https://ra3xdh.github.io/

### Ngspice
**SPICE circuit simulator**
- **Use for:** Analog and digital circuit simulation
- **Files:** `.cir`, `.sp`, `.spice`
- **Location:** `/ngspice/`
- **Download:** http://ngspice.sourceforge.net/
- **Integration:** Built into Circuit Notebook

---

## 📁 Shared Resources

### `/shared/textures/`
Textures and materials usable across multiple tools

### `/shared/references/`
Reference images, datasheets, and documentation

### `/shared/exports/`
Final exported files ready for production or sharing

---

## 🚀 Quick Start Guide

### 1. Install Core Tools
```bash
# Ubuntu/Debian
sudo apt install gimp inkscape krita blender kicad ngspice

# macOS (with Homebrew)
brew install --cask gimp inkscape krita blender kicad

# Windows
# Download installers from each tool's website
```

### 2. Clone This Workspace
```bash
git clone https://github.com/DaCameraGirl/libre-design-workspace.git
cd libre-design-workspace
```

### 3. Run Circuit Notebook
```bash
cd libre-design-workspace
npm install
npm start
```

### 4. Start Creating
- Create electronics projects in Circuit Notebook
- Design PCBs in KiCAD (files auto-organize in `/kicad/`)
- Create graphics in GIMP/Inkscape (save to appropriate folders)
- Everything stays organized and version-controlled

---

## 🔄 Workflow Example

**Designing an Arduino Shield:**

1. **Circuit Design** → KiCAD (`/kicad/arduino-shield/`)
2. **Simulate** → Ngspice or Qucs-S (`/ngspice/`)
3. **Enclosure Design** → Blender (`/blender/enclosure.blend`)
4. **Documentation Graphics** → Inkscape (`/inkscape/diagrams/`)
5. **Project Photos** → GIMP (`/gimp/photos/`)
6. **Track Everything** → Circuit Notebook app

All files stay organized, version-controlled, and backed up.

---

## 💡 Pro Tips

- **Use Git LFS** for large binary files (`.blend`, `.kra`, etc.)
- **Keep source files** (`.xcf`, `.kra`, `.blend`) in their folders
- **Export finals** to `/shared/exports/` for easy sharing
- **Use consistent naming:** `projectname-component-version.ext`
- **Commit often** - design files are binary and can't be merged

---

## 📊 Tool Comparison

| Tool | Best For | Learning Curve | File Size |
|------|----------|----------------|-----------|
| GIMP | Photo editing | Medium | Small-Medium |
| Inkscape | Logos, icons | Easy-Medium | Very small |
| Krita | Digital painting | Medium | Medium-Large |
| Blender | 3D modeling | Steep | Large |
| KiCAD | PCB design | Medium | Small |
| LibrePCB | Quick PCBs | Easy | Small |

---

## 🆘 Getting Help

- **GIMP:** docs.gimp.org
- **Inkscape:** inkscape.org/learn
- **Krita:** docs.krita.org
- **Blender:** blender.org/support/tutorials
- **KiCAD:** docs.kicad.org
- **Circuit Notebook:** Open an issue on GitHub

---

**All tools are free, open-source, and respect your freedom and privacy.** 🎉
