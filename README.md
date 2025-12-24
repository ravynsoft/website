# ravynOS Website

The official website for **ravynOS** - an open-source operating system aiming to provide the finesse of macOS with the freedom of FreeBSD.
Built with **Eleventy (11ty)**, PostCSS, and vanilla JavaScript.

![](https://api.cirrus-ci.com/github/ravynsoft/ravynos.svg?branch=main) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](CODE_OF_CONDUCT.md)

## Getting Started

### Prerequisites
- Node.js (LTS recommended)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ravynsoft/website.git
   cd website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the local development server with hot-reload:

```bash
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) to view the site.

### Build

To build the static site for production (outputs to `dist/`):

```bash
npm run build
```

## Key Features

- **Theme System**: content-aware Dark/Light mode with system preference detection and persistence.
- **Glassmorphism UI**: Heavy use of `backdrop-filter: blur()` on headers and cards for a modern, OS-like feel.
- **Interactive Components**:
  - **Releases**: Dynamic list fetched from GitHub API, rendered as an interactive accordion grid.
  - **Features**: "Zig-Zag" storytelling layout with alternating text/image positioning.
  - **FAQ**: Clean accordion-style questions and answers.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop screens.

## 🛠 Technology Stack

- **Static Site Generator**: [Eleventy](https://www.11ty.dev/)
- **Templating**: [Nunjucks](https://mozilla.github.io/nunjucks/)
- **Styling**: PostCSS with CSS Nested, Custom Media, and Import plugins.
- **Scripts**: Vanilla JS bundled with `esbuild`.
- **Assets**: `@11ty/eleventy-img` for image optimization.

## 🤝 Contributing

Contributions are welcome! Please feel free to identify issues, propose improvements, or submit PRs. By participating, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).
