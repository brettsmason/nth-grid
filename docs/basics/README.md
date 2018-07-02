# The Basics

Using Nth Grid is (hopefully!) really simple.
Lets start off with a simple 3 column blog layout using the following markup:

```html
<div class="page">
    <div class="sidebar-left"></div>
    <div class="content"></div>
    <div class="sidebar-right"></div>
</div>
```

Firstly we apply our base flexbox properties to the container:

```scss
.page {
    @include nth-grid-base(row, wrap);
}
```

Notice we set the grid to the row direction (so our grid is horizontal) and wrap (so the grid can wrap if needed). *Note these are the default values for the mixin.*

Now we have the base properties we need to specify the column widths. Again we apply this directly to the parent container like so:

```scss
.page {
    @include nth-grid-base(row, wrap);

    > * {
        @include nth-grid(200px 2 1, 1rem);
    }
}
```
The above code sets the first column (`.sidebar-left`) to 200px and the 2nd column (`.content`) to twice the size of the 3rd column (`.sidebar-right`). Also included is a 1rem gutter between each column.

`nth-grid()` supports a single value, a list of values or a map. A single value, eg `nth-grid(3, 1rem)` will output 3 equal columns with a 1rem gutter.
[Read more about nth-grid() here.](/mixins/?id=nth-grid)