<div class="example-1">
  <div class="grid-header">Header</div>
  <div class="grid-navigation">Navigation</div>
  <div class="grid-main">
    <div class="grid-content">Content</div>
    <div class="grid-sidebar">Sidebar</div>
  </div>
  <div class="grid-footer">Footer</div>
</div>

```scss
.example-1 {
    @include grid(column, nowrap);
    @include nth-grid(0 0 6 0, 1rem, $vertical: true);

    .grid-main {
        @include grid;
        @include nth-grid(3 1);
    }
}
```