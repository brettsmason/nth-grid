<div class="grid-1">
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
</div>

```scss
.grid-1 {
    @include grid;
    @include nth-grid(1 2 3, 1rem);
}
```
---

<div class="grid-2">
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
</div>

```scss
.grid-2 {
    @include grid;
    @include nth-grid(5 4 3 2 1, 1rem);
}
```
---

<div class="grid-3">
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
</div>

```scss
.grid-3 {
    @include grid;
    @include nth-grid(1 3 2, 0);
}
```
---

<div class="grid-4">
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
</div>

```scss
.grid-4 {
    @include grid;
    @include nth-grid(1 200px 20vw, 1rem);
}
```
---

<div class="grid-5">
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
</div>

```scss
.grid-5 {
    @include grid;
    @include nth-grid(200px 1 100px 2, 1rem);
}
```
---

<div class="grid-6">
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
  <div class="grid-item">Item</div>
</div>

```scss
.grid-6 {
    $grid-6: (
        1: 1 5 2,
        2: 1,
        3: 1 1
    );
    @include grid;
    @include nth-grid($grid-1, 1rem);
}
```
---

<div class="grid-7">
  <div class="grid-item">Header</div>
  <div class="grid-item">Navigation</div>
  <div class="grid-main">
    <div class="grid-item">Content</div>
    <div class="grid-item">Sidebar</div>
  </div>
  <div class="grid-item">Footer</div>
</div>

```scss
.grid-7 {
    @include grid(column, nowrap);
    @include nth-grid(0 0 6 0, 1rem, $vertical: true);

    .grid-main {
        @include grid(row, wrap);
        @include nth-grid(3 1);
    }
}
```
---

<div class="grid-8">
  <div class="nav">
    <div class="new-message">New Message</div>
    <div class="nav-list">
      <ul>
        <li>Inbox</li>
        <li>Sent</li>
        <li>Draft</li>
        <li>Junk</li>
        <li>Trash</li>
      </ul>
    </div>
  </div>
  <div class="summary">
    <div class="sort">Sort by</div>
    <div class="summary-list scroll">
      <div class="preview">
        <h2>Title here</h2>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in consectetur lectus. Etiam tempus enim a posuere rhoncus. Vivamus id tortor quis eros volutpat ornare non sit amet elit. Nulla eget nisl dapibus, semper neque quis, blandit dolor. Fusce id purus vel purus tincidunt tristique. Donec lacinia purus at orci hendrerit, nec venenatis metus dignissim. Nullam ac laoreet nisl. Sed eu enim sit amet eros suscipit tempor ut et sem. Vivamus pulvinar venenatis nisi at ultricies. Sed scelerisque felis facilisis posuere molestie. Fusce sollicitudin turpis justo, in iaculis eros bibendum nec.</p>
      </div>
      <div class="preview">
        <h2>Title here</h2>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in consectetur lectus. Etiam tempus enim a posuere rhoncus. Vivamus id tortor quis eros volutpat ornare non sit amet elit. Nulla eget nisl dapibus, semper neque quis, blandit dolor. Fusce id purus vel purus tincidunt tristique. Donec lacinia purus at orci hendrerit, nec venenatis metus dignissim. Nullam ac laoreet nisl. Sed eu enim sit amet eros suscipit tempor ut et sem. Vivamus pulvinar venenatis nisi at ultricies. Sed scelerisque felis facilisis posuere molestie. Fusce sollicitudin turpis justo, in iaculis eros bibendum nec.</p>
      </div>
      <div class="preview">
        <h2>Title here</h2>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in consectetur lectus. Etiam tempus enim a posuere rhoncus. Vivamus id tortor quis eros volutpat ornare non sit amet elit. Nulla eget nisl dapibus, semper neque quis, blandit dolor. Fusce id purus vel purus tincidunt tristique. Donec lacinia purus at orci hendrerit, nec venenatis metus dignissim. Nullam ac laoreet nisl. Sed eu enim sit amet eros suscipit tempor ut et sem. Vivamus pulvinar venenatis nisi at ultricies. Sed scelerisque felis facilisis posuere molestie. Fusce sollicitudin turpis justo, in iaculis eros bibendum nec.</p>
      </div>
      <div class="preview">
        <h2>Title here</h2>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in consectetur lectus. Etiam tempus enim a posuere rhoncus. Vivamus id tortor quis eros volutpat ornare non sit amet elit. Nulla eget nisl dapibus, semper neque quis, blandit dolor. Fusce id purus vel purus tincidunt tristique. Donec lacinia purus at orci hendrerit, nec venenatis metus dignissim. Nullam ac laoreet nisl. Sed eu enim sit amet eros suscipit tempor ut et sem. Vivamus pulvinar venenatis nisi at ultricies. Sed scelerisque felis facilisis posuere molestie. Fusce sollicitudin turpis justo, in iaculis eros bibendum nec.</p>
      </div>
      <div class="preview">
        <h2>Title here</h2>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in consectetur lectus. Etiam tempus enim a posuere rhoncus. Vivamus id tortor quis eros volutpat ornare non sit amet elit. Nulla eget nisl dapibus, semper neque quis, blandit dolor. Fusce id purus vel purus tincidunt tristique. Donec lacinia purus at orci hendrerit, nec venenatis metus dignissim. Nullam ac laoreet nisl. Sed eu enim sit amet eros suscipit tempor ut et sem. Vivamus pulvinar venenatis nisi at ultricies. Sed scelerisque felis facilisis posuere molestie. Fusce sollicitudin turpis justo, in iaculis eros bibendum nec.</p>
      </div>
      <div class="preview">
        <h2>Title here</h2>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in consectetur lectus. Etiam tempus enim a posuere rhoncus. Vivamus id tortor quis eros volutpat ornare non sit amet elit. Nulla eget nisl dapibus, semper neque quis, blandit dolor. Fusce id purus vel purus tincidunt tristique. Donec lacinia purus at orci hendrerit, nec venenatis metus dignissim. Nullam ac laoreet nisl. Sed eu enim sit amet eros suscipit tempor ut et sem. Vivamus pulvinar venenatis nisi at ultricies. Sed scelerisque felis facilisis posuere molestie. Fusce sollicitudin turpis justo, in iaculis eros bibendum nec.</p>
      </div>
    </div>
  </div>
  <div class="message">
    <div class="details scroll">
    <h1>Email title</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in consectetur lectus. Etiam tempus enim a posuere rhoncus. Vivamus id tortor quis eros volutpat ornare non sit amet elit. Nulla eget nisl dapibus, semper neque quis, blandit dolor. Fusce id purus vel purus tincidunt tristique. Donec lacinia purus at orci hendrerit, nec venenatis metus dignissim. Nullam ac laoreet nisl. Sed eu enim sit amet eros suscipit tempor ut et sem. Vivamus pulvinar venenatis nisi at ultricies. Sed scelerisque felis facilisis posuere molestie. Fusce sollicitudin turpis justo, in iaculis eros bibendum nec.
        Nulla facilisi. Nam posuere id turpis eget suscipit. Donec odio sem, pretium vitae molestie sit amet, dictum vel lacus. Maecenas quis nunc ultricies, accumsan risus vitae, elementum ligula. Sed in diam dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla ut tellus non justo porttitor molestie. Integer quis risus sit amet est pellentesque feugiat.
        Aliquam porttitor elit suscipit dui ullamcorper porttitor. Nam rutrum ac nunc ut imperdiet. Maecenas dui orci, pulvinar eu consequat a, convallis at ipsum. Aliquam erat tellus, tincidunt et elit eu, viverra tincidunt erat. Nunc sem erat, sollicitudin interdum nisi id, condimentum tincidunt augue. Donec ullamcorper turpis a nibh ullamcorper ullamcorper. Mauris gravida, lorem vitae maximus iaculis, magna felis eleifend quam, non porttitor est dui quis ante. Aenean quis magna felis. Aliquam urna tellus, porttitor ut orci eu, ullamcorper tincidunt turpis. Nulla id scelerisque augue, sed sagittis est. Donec vestibulum porta neque, vitae rhoncus nunc elementum fermentum. Cras at nisi imperdiet, fermentum purus vel, luctus erat.
        Aliquam at tortor at sapien molestie rutrum vel vitae nisl. Integer vulputate porttitor mattis. Suspendisse eget dolor nulla. Quisque a viverra justo, sit amet dignissim risus. Curabitur sed justo nec nulla laoreet suscipit. Morbi tristique, ipsum sed rutrum finibus, ligula velit pulvinar nisl, in aliquam quam ex at tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Vivamus vehicula mattis blandit. Sed varius fermentum nibh efficitur rutrum. Fusce placerat rutrum lacinia. Ut sed augue nisi. Vestibulum pulvinar quis tortor at consectetur. Curabitur nisl sapien, hendrerit non gravida quis, condimentum sit amet purus. Etiam ornare ac erat hendrerit hendrerit.</p>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in consectetur lectus. Etiam tempus enim a posuere rhoncus. Vivamus id tortor quis eros volutpat ornare non sit amet elit. Nulla eget nisl dapibus, semper neque quis, blandit dolor. Fusce id purus vel purus tincidunt tristique. Donec lacinia purus at orci hendrerit, nec venenatis metus dignissim. Nullam ac laoreet nisl. Sed eu enim sit amet eros suscipit tempor ut et sem. Vivamus pulvinar venenatis nisi at ultricies. Sed scelerisque felis facilisis posuere molestie. Fusce sollicitudin turpis justo, in iaculis eros bibendum nec.
          Nulla facilisi. Nam posuere id turpis eget suscipit. Donec odio sem, pretium vitae molestie sit amet, dictum vel lacus. Maecenas quis nunc ultricies, accumsan risus vitae, elementum ligula. Sed in diam dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla ut tellus non justo porttitor molestie. Integer quis risus sit amet est pellentesque feugiat.
          Aliquam porttitor elit suscipit dui ullamcorper porttitor. Nam rutrum ac nunc ut imperdiet. Maecenas dui orci, pulvinar eu consequat a, convallis at ipsum. Aliquam erat tellus, tincidunt et elit eu, viverra tincidunt erat. Nunc sem erat, sollicitudin interdum nisi id, condimentum tincidunt augue. Donec ullamcorper turpis a nibh ullamcorper ullamcorper. Mauris gravida, lorem vitae maximus iaculis, magna felis eleifend quam, non porttitor est dui quis ante. Aenean quis magna felis. Aliquam urna tellus, porttitor ut orci eu, ullamcorper tincidunt turpis. Nulla id scelerisque augue, sed sagittis est. Donec vestibulum porta neque, vitae rhoncus nunc elementum fermentum. Cras at nisi imperdiet, fermentum purus vel, luctus erat.
          Aliquam at tortor at sapien molestie rutrum vel vitae nisl. Integer vulputate porttitor mattis. Suspendisse eget dolor nulla. Quisque a viverra justo, sit amet dignissim risus. Curabitur sed justo nec nulla laoreet suscipit. Morbi tristique, ipsum sed rutrum finibus, ligula velit pulvinar nisl, in aliquam quam ex at tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Vivamus vehicula mattis blandit. Sed varius fermentum nibh efficitur rutrum. Fusce placerat rutrum lacinia. Ut sed augue nisi. Vestibulum pulvinar quis tortor at consectetur. Curabitur nisl sapien, hendrerit non gravida quis, condimentum sit amet purus. Etiam ornare ac erat hendrerit hendrerit.</p>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in consectetur lectus. Etiam tempus enim a posuere rhoncus. Vivamus id tortor quis eros volutpat ornare non sit amet elit. Nulla eget nisl dapibus, semper neque quis, blandit dolor. Fusce id purus vel purus tincidunt tristique. Donec lacinia purus at orci hendrerit, nec venenatis metus dignissim. Nullam ac laoreet nisl. Sed eu enim sit amet eros suscipit tempor ut et sem. Vivamus pulvinar venenatis nisi at ultricies. Sed scelerisque felis facilisis posuere molestie. Fusce sollicitudin turpis justo, in iaculis eros bibendum nec.
          Nulla facilisi. Nam posuere id turpis eget suscipit. Donec odio sem, pretium vitae molestie sit amet, dictum vel lacus. Maecenas quis nunc ultricies, accumsan risus vitae, elementum ligula. Sed in diam dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla ut tellus non justo porttitor molestie. Integer quis risus sit amet est pellentesque feugiat.
          Aliquam porttitor elit suscipit dui ullamcorper porttitor. Nam rutrum ac nunc ut imperdiet. Maecenas dui orci, pulvinar eu consequat a, convallis at ipsum. Aliquam erat tellus, tincidunt et elit eu, viverra tincidunt erat. Nunc sem erat, sollicitudin interdum nisi id, condimentum tincidunt augue. Donec ullamcorper turpis a nibh ullamcorper ullamcorper. Mauris gravida, lorem vitae maximus iaculis, magna felis eleifend quam, non porttitor est dui quis ante. Aenean quis magna felis. Aliquam urna tellus, porttitor ut orci eu, ullamcorper tincidunt turpis. Nulla id scelerisque augue, sed sagittis est. Donec vestibulum porta neque, vitae rhoncus nunc elementum fermentum. Cras at nisi imperdiet, fermentum purus vel, luctus erat.
          Aliquam at tortor at sapien molestie rutrum vel vitae nisl. Integer vulputate porttitor mattis. Suspendisse eget dolor nulla. Quisque a viverra justo, sit amet dignissim risus. Curabitur sed justo nec nulla laoreet suscipit. Morbi tristique, ipsum sed rutrum finibus, ligula velit pulvinar nisl, in aliquam quam ex at tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Vivamus vehicula mattis blandit. Sed varius fermentum nibh efficitur rutrum. Fusce placerat rutrum lacinia. Ut sed augue nisi. Vestibulum pulvinar quis tortor at consectetur. Curabitur nisl sapien, hendrerit non gravida quis, condimentum sit amet purus. Etiam ornare ac erat hendrerit hendrerit.</p>
    </div>
    <div class="reply"><input type="text" placeholder="Reply"></div>
  </div>
</div>

```scss
.grid-8 {
    @include grid;
    @include nth-grid(170px 300px 1, 1rem);
    height: 100vh;

    .nav {
        background: #eee;
        padding: 2rem;
    }
    
    .summary {
        background: #eee;
        overflow-y: hidden;
        @include grid;
        @include nth-grid(50px 90vh, $vertical: true);
    }
    
    .preview {
        padding: 1rem;
    
        & + .preview {
            border-bottom: 1px solid #ddd;
        }
    }
    
    .scroll {
        overflow-y: auto;
        max-height: 100%;
    }
    
    .message {
        @include grid(column, nowrap);
        @include nth-grid(90vw 10vh, $vertical: true);
        max-height: 100%;
    }
    
    .details {
        padding: 2rem;
    }
    
    .sort {
        padding: 2rem;
    }
    
    .reply {
        padding: 1rem;
        background: #ddd;
    
        input {
            width: 100%;
        }
    }
}

```
---