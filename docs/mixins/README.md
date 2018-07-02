# Mixins

Nth Grid included 2 powerful mixins to use in your projects.

## nth-grid-base()

`nth-grid-base()` sets the base flexbox properties to your grid.

### Arguements

| Parameter  | Type    | Default Value | Description                                                                  |
|------------|---------|---------------|------------------------------------------------------------------------------|
| $direction | keyword | row           | Sets the `flex-direction` property on the grid. Supports `row` or `column` . |
| $wrap      | keyword | wrap          | Sets the `flex-wrap` property on the grid. Supports `wrap` or `nowrap`.      |

### Example
```scss
.my-grid {
    @include nth-grid-base(column, nowrap);
}
```
---

## nth-grid()

`nth-grid()` is where the real magic happens.
Here you set the layout, the gutter, the selector type (`nth-child` or `nth-of-type`), set if its a vertical grid or not and if the grid should continue looping the same layout.

### Arguements

| Parameter  | Type            | Default Value  | Description                                                                  |
|------------|-----------------|----------------|------------------------------------------------------------------------------|
| $layout    | Number/List/Map | $grid-layout   | The column (or row if $vertical is `true`) size. Supports a single number which outputs that number of equal columns, a list or a map. Mixed units eg `px`, `em` are also supported. |
| $gutter    | Number          | $grid-gutter   | The size of the gutter between cells. |
| $selector  | Keyword         | $grid-selector | The grid item selector. Accepts a class eg `.grid-item` or simply an element eg `div`. |
| $vertical  | Boolean         | $grid-vertical | Set to `true` to output heights rather than widths. |
| $loop      | Boolean         | $grid-loop     | Set to `false` to stop the grid looping infinitely. |

### $layout

The `$layout` arguement takes all sorts of configurations so lets break it down.  
When using single unitless numbers in a list or map they act just like [`fr`](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#The_fr_Unit) units from CSS Grid. The numbers are in relation to themselves, so writing `nth-grid(1 3)` will output column two as 75% of the width.

Some examples:

```scss
// Outputs 5 equal width columns
.my-grid > * {
    @include nth-grid(5);
}

// List: 3 columns - 25%, 50%, 25%
.my-grid > * {
    @include nth-grid(1 2 1);
}

// List: 4 columns
.my-grid > * {
    @include nth-grid(1 200px 2 400px);
}

// Map
$my-grid(
    1: 1 2 3,
    2: 200px 1 50px 100px,
    3: 3 2 1
);

.my-grid > * {
    @include nth-grid($my-grid);
}
```