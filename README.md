# Outbreak Zone website

A complete, responsive, static website with a landing page and ten searchable player documentation pages. No build step, frameworks, accounts or paid services are required.

## Run it

Open `index.html` in a browser, or serve the folder with any static hosting service. To preview locally with Python, from this folder run:

```sh
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Publish

Upload this folder to Vercel, Netlify, Cloudflare Pages, GitHub Pages or any static website host. There is no build command. All documentation uses shareable links such as `/#/docs/getting-started` so pages work on basic static hosting without server rewrites.

## Add screenshots

Put your image files into `assets/screenshots/` and name them:

* `city.jpg`
* `wasteland.jpg`
* `horde.jpg`
* `bloodmoon.jpg`

Images are automatically displayed in the gallery. Until then, each slot shows a designed placeholder. You can change filenames, descriptions and gallery order near `GALLERY` in `app.js`.

## Customize

* `app.js`: all page content, docs, links and interactions
* `styles.css`: entire visual design and responsive layouts
* `index.html`: page metadata and font links

The server IP copy control is a backup. The main call to action links straight to the Modrinth modpack. The sidebar search searches across all ten documentation pages. Press Ctrl K or Cmd K to open it from anywhere.

## Notes

The content reflects the gameplay specifications provided for the server. It does not query the server for live status, so it does not claim that the server is currently online.
