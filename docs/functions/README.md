# Functions

Nth Grid only has a single function - most of its power comes from mixins.

## repeat()

`repeat()` works a lot like the [CSS Grid function with the same name](https://developer.mozilla.org/en-US/docs/Web/CSS/repeat). This simplifies writing out a longer pattern of cells.
Simply define the number of times to repeat the pattern, followed by the pattern.

```scss
repeat(4, 200px);

repeat(2, 1 2 3);

repeat(5, 50px 1);
```