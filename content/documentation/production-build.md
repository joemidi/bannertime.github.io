---
title: Building for Production
sort: 6
contributors:
  - pyramidium
---

When you are happy with your banners and you'd like to minify the code and package them up to be shipped, you can use these gulp commands in the root directory of your project.

### Production build

- Minify the code
- Compress images
- Create backup images


```bash
$ gulp prod
```

### Individual production tasks

If you'd prefer not to minify the code you can run the tasks individually.

#### Compress images

```bash
$ gulp images
```

#### Create backup images

```bash
$ gulp backup-image
```

#### Zip banners

```bash
$ gulp zip
```