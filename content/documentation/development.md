---
title: Development
sort: 5
contributors:
  - pyramidium
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