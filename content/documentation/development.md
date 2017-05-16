---
title: Development
sort: 5
contributors:
  - pyramidium
  - joemidi
---

This will build the source files from the `src` directory and output them in the `public` directory.

```bash
$ gulp
```

#### Features

* Running `gulp` will build the files from the `src` directory and compile them in the `public` directory.
* A development server will be started on `http://localhost:3000/`.
* Browser Sync will watch the `src` directory for changes and automagically refresh the browser on save.

T> Remember to only edit files in `src` as the files in `public` are "cleaned" every time gulp runs.

#### Greensock

By default Bannertime will include **TweenLite**, **TimelineLite**, **CSSPlugin**, **EasePack** from the [CloudFlare CDN](https://cdnjs.com/libraries/gsap), and you will be able to find this in the `js/banner.js` file.

We recommend that you swap these out for any [Advertising Platforms](/documentation/advertising-platforms) that provide their own CDN:
* [DoubleClick CDN](https://support.google.com/richmedia/answer/6307288)
* [Sizmek CDN](https://support.sizmek.com/hc/en-us/articles/206136366--reference-glossary-HTML5-Shared-Libraries#Greensock)
