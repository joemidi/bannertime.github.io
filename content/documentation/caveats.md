---
title: Caveats
sort: 10
contributors:
    - pyramidium
    - joemidi
---

This is a roundup of workarounds for browser and platform related issues.

### Sizmek uglification

Recently found an issue where the Sizmek platform was unable to scan an uglified version of the code to pick up `EB.clickthrough('interaction-name');` or `EB.userActionCounter('interaction-name');`.

I'm assuming it has something to do with how the RegEx in the parsing program is identifying these functions.

**Possible solutions**

**1. Beautify the JS**

In the javascript.js gulp task I used the following settings in the `uglify()` function.
```
uglify({
  mangle: false,
  output: {beautify: true},
  compress: {
    sequences: false,
    unused: false
  }
})
```

**2. Declare it in the HTML**

To keep the uglified version of the code, you could also place a copy of the interactions in the HTML in an uncalled function.
```
<script type="text/javascript">
  Banner.prototype.sizmekEventLoader = function() {
    EB.clickthrough('interaction-name');
    EB.userActionCounter('interaction-name');
  };
</script>
```

This will allow the platform to pick up the interactions and register them against the creative so the metrics can be tracked in the platform.

This method is also appropriate when using dynamic variables in a creative, such as:
```
var myVar = 'foo';
EB.clickthrough(myVar);
```
```
<script type="text/javascript">
  Banner.prototype.sizmekEventLoader = function() {
    EB.clickthrough('foo');
  };
</script>
```

### Webkit overflow

Recently a webkit bug was discovered which prevented border-radius from working as expected. The desired effect was to round the edges of a parent element which would mask the overflow of its child elements.

The solution was to create a webkit mask as demonstarted in this example:
```
/**
 * Create dom elements.
 */
Banner.prototype.createElements = function() {
  this.container = this.smartObject({
    height: 100,
    width: 100,
    parent: this.banner,
    overflow: 'hidden'
  });

    this.innerElement = this.smartObject({
      backgroundColor: 'red',
      height: 100,
      width: 100,
      parent: this.container
    });
};

/**
 * Setup initial element states.
 */
Banner.prototype.setup = function() {
  this.container.set({borderRadius: '20px'});
  this.container.style.webkitMask = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC)';
};
```

The webkit mask acts as a fallback for `border-radius` when rounding corners of an `overflow: hidden` element.

### Safari <img> centering

The `center()`, `centerHorizontal()`, or `centerVertical()` methods is unable to correctly position a `smartObject()` in Safari due to the time it takes the browser to calculate the objects `offsetWidth` or `offsetHeight` properties which are used to calculate negative margins.

This can be worked around by either explicitly setting `width` and `height` properties. Or simply call the methods after a short delay.

**1. Set width and height props**
```js
this.image = this.smartObject({
  src: 'images/my-image.png',
  width: 40,
  height: 40,
  parent: this.banner
});
```

**2. Call the method after a short delays**
```js
setTimeout(() => {
  this.image.center();
}, 100);
```
