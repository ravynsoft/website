# ravynOS Website

The official website for **ravynOS** - an open-source operating system aiming to provide the finesse of macOS with the freedom a user deserves.

This repository contains the completely redesigned website, built from the ground up to reflect a clean, modern, native 2015-Apple aesthetic.

## Architecture

Unlike the previous iteration, this new website is entirely standalone and does not rely on any static site generators or node module dependencies. It is built purely with standard web technologies for maximum performance, simplicity, and ease of maintenance.

- **HTML5:** Pure, semantic markup structured for performance and accessibility.
- **Vanilla CSS:** Custom styling featuring a responsive flexbox/grid layout, smooth micro-animations, and glassmorphism elements, all without the overhead of heavy frameworks like Tailwind or Bootstrap.
- **Vanilla JavaScript:** Lightweight scripts handling interactive elements like the collapsible wiki sidebar, hover-to-copy code snippets, and smooth scrolling.

## Project Structure

```text
.
├── index.html        # The main landing page with project goals and chat links
├── wiki.html         # The comprehensive project documentation
├── faq.html          # Frequently asked questions
├── releases.html     # Information about ravynOS releases
├── css/
│   └── style.css     # The master stylesheet for the entire site
├── js/
│   └── main.js       # The interactive scripts (sidebar toggles, copy buttons)
└── public/           # Static assets (images, logos, screenshots)
```

## Local Development

Because the site is pure static HTML/CSS/JS with no build steps, development is extremely straightforward.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/jqackkk/ravynOS-website.git
   cd ravynOS-website
   ```

2. **Serve the files:**
   You can use any local web server to view the site. For example, using Python:
   ```bash
   python3 -m http.server 8000
   ```
   Then open `http://localhost:8000` in your web browser.

3. **Make changes:**
   Simply edit the HTML, CSS, or JS files. Refresh your browser to see the changes instantly. No build step required!

## Contributing

Contributions are welcome! Please feel free to identify issues, propose improvements, or submit Pull Requests. If you are modifying the Wiki, please ensure that the sidebar navigation correctly links to your new sections.

##  License

The code in this repository is open source. Please refer to the main ravynOS project for comprehensive licensing details regarding the operating system itself.
