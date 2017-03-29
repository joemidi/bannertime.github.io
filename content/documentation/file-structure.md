---
title: Generated files
sort: 10
contributors:
  - pyramidium
---

This is the project scaffolding that the generator creates.

### File structure

```
|-- .editorconfig
|-- .gitignore
|-- .jshintrc
|-- README.md
|-- package.json
|-- gulpfile.js
|   |-- config.js
|   |-- index.js
|   |-- lib
|   |   |-- backup-generator.js
|   |   |-- handleErrors.js
|   |-- tasks
|       |-- backup-generator.js
|       |-- backup-image.js
|       |-- browserSync.js
|       |-- build-development.js
|       |-- build-production.js
|       |-- clean.js
|       |-- default.js
|       |-- fonts.js
|       |-- help.js
|       |-- html.js
|       |-- images.js
|       |-- javascript.js
|       |-- json.js
|       |-- prod.js
|       |-- sass.js
|       |-- server.js
|       |-- svg-sprite.js
|       |-- watch.js
|       |-- zip.js
|-- src
    |-- index.html
    |-- base
    |   |-- images
    |   |   |-- desktop.png
    |   |   |-- loading.gif
    |   |   |-- logo.png
    |   |-- js
    |   |   |-- main.js
    |   |-- styles
    |       |-- style.scss
    |-- test-300x250
        |-- index.html
        |-- images
        |   |-- logo.png
        |-- js
        |   |-- banner.animation.js
        |   |-- banner.js
        |   |-- banner.loader.js
        |-- styles
            |-- style.scss
            |-- base
                |-- _banner.scss
                |-- _preloader.scss
```

### File breakdown

A brief description of the generated files.

|File|Description|
|----|-----------|
|.editorconfig|Used to help developers define and maintain consistent coding styles between different editors and IDEs|
|.gitignore|Used to ignore files when committing to a git repository|
|.jshintrc|Helps to detect errors and potential problems in code|
|package.json|Contains project node/npm package data|
|README.md|Readme file for developers|
|gulpfile.js/config.js|Gulp config|
|gulpfile.js/index.js|Import gulp tasks|
|gulpfile.js/lib/backup-generator.js|The backup generator functions|
|gulpfile.js/lib/handleErrors.js|Stop gulp from exiting when there is a syntax error|
|gulpfile.js/tasks/backup-generator.js|Task for generating backup images|
|gulpfile.js/tasks/backupImage.js|Task for prompting the user if there is no backup image|
|gulpfile.js/tasks/browserSync.js|Task for fast live reload injection|
|gulpfile.js/tasks/build-development.js|Task that runs development tasks|
|gulpfile.js/tasks/build-production.js|Task that runs production tasks|
|gulpfile.js/tasks/clean.js|Task that deletes assets before build|
|gulpfile.js/tasks/default.js|Task for enabling `gulp` shortcut instead of typing `gulp build:development`|
|gulpfile.js/tasks/fonts.js|Task for copying font files to public directory|
|gulpfile.js/tasks/help.js|Task for providing help with gulp commands|
|gulpfile.js/tasks/html.js|Task for copying html files to public directory|
|gulpfile.js/tasks/images.js|Task for copying and compressing image files to public directory|
|gulpfile.js/tasks/javascript.js|Task for copying js files to public directory|
|gulpfile.js/tasks/json.js|Task for copying json files to public directory|
|gulpfile.js/tasks/prod.js|Task for enabling `gulp prod` shortcut instead of typing `gulp build:production`|
|gulpfile.js/tasks/sass.js|Task for compiling sass files into css in the public directory|
|gulpfile.js/tasks/server.js|Task for setting up a local production server|
|gulpfile.js/tasks/svg-sprite.js|Task for converting svg files into an svg spritesheet, a png spritesheet and the sprite dimensions in a css file|
|gulpfile.js/tasks/watch.js|Task for watching files for changes and triggering browser sync to reload the page on update|
|gulpfile.js/tasks/zip.js|Task for compressing files for delivery|
|src/index.html|The preview page|
|src/base/images/desktop.png|Desktop icon|
|src/base/images/loading.gif|Loading icon|
|src/base/images/logo.png|The campaign logo|
|src/base/js/main.js|The preview page functions|
|src/base/styles/style.scss|The preview page styles|
|src/[banner-name]-[banner-size]/index.html|The example html file|
|src/[banner-name]-[banner-size]/images/logo.png|Example logo|
|src/[banner-name]-[banner-size]/js/banner.animation.js|The main creative file|
|src/[banner-name]-[banner-size]/js/banner.js|Base banner functions|
|src/[banner-name]-[banner-size]/js/banner.loader.js|Used to load files politely|
|src/[banner-name]-[banner-size]/styles/style.scss|Imports the base styles for the banner|
|src/[banner-name]-[banner-size]/styles/base/_banner.scss|Base banner styles|
|src/[banner-name]-[banner-size]/styles/base/_preloader.scss|Base preloader styles|
