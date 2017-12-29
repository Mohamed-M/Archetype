# Archetype Web Components

View it at: https://mohamed-m.github.io/archetype/

## Getting Started

These instructions will get you a copy of the system up and running on your local machine for development.

### Prerequisites

- Node Package Manager (NPM)
- Git
- Command Line Interface (CLI)

### Built With

* [PostCSS](https://github.com/postcss/postcss) - A CSS Preprocessor used for transforming styles with JS plugins. Plugins used in this project:
  * cssnext ( + autoprefixer)
  * cssnano
  * gulp
  * gulp-postcss
  * gulp-webserver
  * postcss-animation
  * sass
  * lost

* [Gulp](http://gulpjs.com/) -  A toolkit for automating painful or time-consuming tasks in your development workflow.

* [Sass](http://sass-lang.com/) - Sass is an extension of CSS that adds power and elegance to the basic language. It allows you to use variables, nested rules, mixins, inline imports, and more, all with a fully CSS-compatible syntax.


### Installation
Copy the git repository to your local folder:
```
git clone https://github.com/Mohamed-M/Archetype.git
```

Run the NPM installer, which will run the package.json file and install all the necessary dependencies (i.e. PostCSS plugins):

```
npm install
```

Run the Gulp process to process the CSS, and open up a web server with live reload.

```
gulp
```
