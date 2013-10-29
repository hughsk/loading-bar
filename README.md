# loading-bar [![experimental](http://hughsk.github.io/stability-badges/dist/experimental.svg)](http://github.com/hughsk/stability-badges) #

![loading bar](http://i.imgur.com/ITc3qFX.png)

A quick-and-dirty loading bar for use in your larger demos.

## Usage ##

[![loading-bar](https://nodei.co/npm/loading-bar.png?mini=true)](https://nodei.co/npm/loading-bar)

### `require('loading-bar')([fill, width, height, border])` ###

Creates a new loading bar element, ready to be attached to the DOM. All
arguments are optional:

* `fill`: the color of the loading bar, as a CSS string. Defaults to `#fff`
* `width`: the width of the loading bar in pixels. Defaults to `500`
* `height`: the height of the loading bar in pixels. Defaults to `30`
* `border`: the size of the inner and outer border in pixels. Defaults to `4`.

### `bar.append([parent])` ###

Appends the loading bar to `parent`, which defaults to `document.body`.

### `bar.update(t)` ###

Pass a value between 0 and 1 to this function to update the progress of the
loading bar.

### `bar.remove()` ###

Removes the bar from the DOM.

### `bar.fadeout([duration])` ###

Fades the loading bar out over `duration` milliseconds. Defaults to 1 second.

## License ##

MIT. See [LICENSE.md](http://github.com/hughsk/loading-bar/blob/master/LICENSE.md) for details.
