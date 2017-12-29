# Archetype Web Components

![Archetype](https://imgur.com/wj7m83y.jpg)

View it at:   https://mohamed-m.github.io/Archetype/

A web components library that provides UI components like navigations, buttons, effects, and widgets. It written in a semantic class based structure adhering to the [RSCSS](https://github.com/rstacruz/rscss) (Reasonable System for CSS Stylesheet Structure) methodolgy. It uses ES6/ES2015 syntax and doesn't require jQuery (for most components). It was built using [Infrastructure](https://github.com/Mohamed-M/Infrastructure); my Gulp/Sass/PostCSS build system.

## Guide
All SCSS and JavaScript code should be done in the development folder. 

The production folder contains the .html files the minified javascript file, and the compiled css file.

The SCSS partials should be imported into the development/scss/style.scss file.

The font-size is set to 62.5% on the html tag selector (found in development/scss/_base.scss), so their is easier conversion from REM unit to pixel unit (i.e. 1rem == 10px). Body's font-size is set to 1.6rem (i.e. 16px) to counteract the 62.5% decrease in size.

## Folder Structure

```
.gitignore
gulpfile.js
package.json
README.md
development/
  js/
    main.js
    components/
  scss/
    style.scss
    _base.scss
    _helpers.scss
    _variables.scss
    backgrounds/
      _fixed-scroll.scss
      _parallax.scss
      _video.scss
    components/
      _accordion.scss
      _buttons.scss
      _cards.scss
      _feedback.scss
      _form.scss
      _google-maps.scss
      _grid.scss
      _modal-notification.scss
      _normalize.scss
      _pricing-tables.scss
      _slideshow.scss
      _social-media.scss
      _tabs.scss
      _icons-and-animations.scss
    navigations/
      _dropdown.scss
      _fixed-transparent.scss
      _push.scss
      _shrinking-navbar.scss
      _slide.scss
      _striped.scss
production/
  index.html
  css/
    style.css
    lib/
  img/
  js/
    main.js
    lib/
  backgrounds/
    fixed-scroll.html
    parallax.html
  components/
    accordion.html
    cards.html
    grid.html
    icons-and-animations.html
    modal.html
    pricing-tables.html
    slideshow.html
    social-media.html
    tabs.html
    typoraphy.html
```


## Getting Started

These instructions will get you a copy up and running on your local machine for development.

### Prerequisites

- Node Package Manager (NPM)
- Git
- Command Line Interface (CLI)
- Command Line Utility for Gulp (Gulp-Cli)


### Installation
Copy the git repository to your local folder:
```
git clone https://github.com/Mohamed-M/Archetype.git
```

Run the NPM installer, which will run the package.json file and install all the necessary dependencies (i.e. PostCSS plugins):

```
npm install
```

Run the npm script to process the files, and open up a web server with Browsersync.

```
npm run start
```
