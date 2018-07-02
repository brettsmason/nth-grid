# Nth Grid

## Nth Grid is a simple to use yet powerful Flexbox based Sass grid mixin framework.

Nth Grid allows you to create horizontal and vertical grid layouts using only 2 simple to use mixins.

You are free to use your own markup, and there are no negative margins, `.last` classes etc. We use the power of the `:nth-child` selector to create beautiful, semantic grids without any of the common layout hacks.

## Features
- Flexbox powered
- Semantic markup
- Horizontal and vertical layouts
- Fluid unit support (similar to using `fr` units in CSS grid)
- Mixed unit grids (eg pixel and fluid units in the same grid)
- Shrinking (auto width/height) cells
- And much more...

## What's included?
Nth Grid comes with just 2 mixins: `grid()` and `nth-grid()`.
Also included is `repeat()` - a function for creating repeating patterns. The syntax is the same as the CSS Grid function.

## How do I get started?

Lets start off with a simple 3 column blog layout using the following markup:

```
<div class="page">
    <div class="sidebar-left"></div>
    <div class="content"></div>
    <div class="sidebar-right"></div>
</div>
```

Firstly we apply our base flexbox properties to the container:
```
.page {
    @include nth-grid-base(row, wrap);
}
```

Notice we set the grid to the `row` direction (so our grid is horizontal) and `wrap` (so the grid can wrap if needed). Note these are the default values for the mixin.

Now we have the base properties we need to specify the column widths.
Again we apply this directly to the parent container like so:

```
.page {
    @include nth-grid-base(row, wrap);
    @include nth-grid(200px 2 1, 1rem);
}
```

The above code sets column 1 to 200px and column 2 to twice the size of column 3. Also included is a `1rem` gutter between each column.

`nth-grid()` supports a single value, a list of values or a map.
A single value, eg `nth-grid(3, 1rem)` will output 3 equal columns with a `1rem` gutter.