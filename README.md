# Acuatec Waterproofing Services - Website

Static company website for **Acuatec Waterproofing Services**, a PCAB-licensed waterproofing and flooring contractor in Mandaluyong City. Plain HTML, CSS and JavaScript: no build step and no dependencies.

## Structure
```
index.html             page content
assets/css/styles.css  styles (brand palette as CSS variables at the top)
assets/js/main.js      services tabs, problem selector, quote form, lightbox, mobile menu
assets/img/            logos, favicon and project photos (from the company profile)
.nojekyll              makes GitHub Pages serve the files as-is
```

## Run locally
Open `index.html` in a browser, or serve the folder: `python3 -m http.server 8000` and visit http://localhost:8000.

## Deploy on GitHub Pages
1. Create a repository and push these files to the `main` branch.
2. Go to **Settings > Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. The site goes live at `https://<username>.github.io/<repository>/`. All paths are relative, so it also works on a custom domain.

## Editing
- **Brand colors:** Primary Blue `#1F3C88`, Secondary Blue `#3A6EA5`, Light Gray `#F5F5F5`, Dark Gray `#333333`, White. Fonts: Montserrat (headings) and Lato (body) from Google Fonts.
- **Services and photos:** edit the `SV` list at the top of `assets/js/main.js`; each entry lists photo names; add both `assets/img/NAME.webp` and `assets/img/thumbs/NAME.webp` (about 720 px on the long side).
- **Contact details:** search `index.html` for the phone numbers, email and address (contact section and footer).
- **Quote form:** it prepares a message and opens the visitor's email app or Messenger, because a static site cannot send messages itself. Use a form service such as Formspree if you want submissions delivered.
- **Client and partner logos** are shown as text. Add the original logo files to `assets/img/` to display them.

Content and photos come from Acuatec's company profile and brand kit. All rights reserved by Acuatec Waterproofing Services.
