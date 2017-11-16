# Mixins

Nth Grid included 2 powerful mixins to use in your projects.

## grid()

`grid()` sets the base flexbox properties to your grid.

### Arguements

| Parameter  | Type    | Default Value | Description                                                                  |
|------------|---------|---------------|------------------------------------------------------------------------------|
| $direction | keyword | row           | Sets the `flex-direction` property on the grid. Supports `row` or `column` . |
| $wrap      | keyword | wrap          | Sets the `flex-wrap` property on the grid. Supports `wrap` or `nowrap`.      |

### Example
```scss
.my-grid {
    @include grid(column, nowrap);
}
```
---

## grid-layout()

`grid-layout()` is where the real magic happens.  
Here you set the layout, the gutter, the child selector and set if its a vertical grid or not.

### Arguements

| Parameter  | Type            | Default Value  | Description                                                                  |
|------------|-----------------|----------------|------------------------------------------------------------------------------|
| $layout    | Number/List/Map | $grid-layout   | The column (or row if $vertical is `true`) size. Supports a single number which outputs that number of equal columns, a list or a map. Mixed units eg `px`, `em` are also supported. |
| $gutter    | Number          | $grid-gutter   | The size of the gutter between cells. |
| $selector  | String          | $grid-selector | The grid item selector. Accepts a class eg `.grid-item` or simply an element eg `div`. |
| $vertical  | Boolean         | false          | Set to `true` to output heights rather than widths. |

### $layout

The `$layout` arguement takes all sorts of configurations so lets break it down.  
When using single unitless numbers in a list or map they act just like [`fr`](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#The_fr_Unit) units from CSS Grid. The numbers are in relation to themselves, so writing `grid-layout(1 3)` will output column two as 75% of the width.

Some examples:

```scss
// Outputs 5 equal width columns
@include grid-layout(5);

// List: 3 columns - 25%, 50%, 25%
@include grid-layout(1 2 1);

// List: 4 columns
@include grid-layout(1 200px 2 400px);

// Map
$my-grid(
    1: 1 2 3,
    2: 200px 1 50px 100px,
    3: 3 2 1
);
@include grid-layout($my-grid);
```