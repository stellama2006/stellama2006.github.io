# Personal website template
Static, no build step. Edit `assets/site.js` (name, tagline, photo, link chips, nav), then the three HTML pages.
Preview: `python3 -m http.server` then open http://localhost:8000
Deploy: push to a GitHub repo named `<username>.github.io` (Settings → Pages).
CV page: put your PDF at `assets/cv.pdf`. Add a page: create `foo.html` (copy `teaching.html`) and add it to `nav` in `assets/site.js`.
