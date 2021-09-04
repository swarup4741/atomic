# Atomic: Contributing

On this page:

- [Adding new styles](#adding-new-styles)
- [Extending existing styles](#extending-existing-styles)
  - [Extending another family](#extending-another-family)
  - [Extending from another function on the same family](#extending-from-another-function-on-the-same-family)

## Adding new styles

Styles are grouped together into a "component-family". Some families have only base and theme (light/dark) styling; while others contain many classes which should be spread accross many elements. For example, all of the *menu* classes are members of a single family.

A family is located in its own file and can be found in one of three directories, all located under `./src/`:

* `/base/`
* `/components/`
* `/utilities/`

> The meaning behind these directories is mostly structural; no real restraints are made on what *kind* of styles can be provided by a member of each directory, as highlighted below.

The name of a family - as designated by its file-name - should be unique accross the plugin.
Additionally, this name should be used as the first part of the family's classes (`menu-...`).
A shortened variation of the name can be used if a widely-accepted alternative exists ('button' -> 'btn').

This file should have a single, default export. The export should be an object, which can provide functions identified by the folowing keys:

* `base`
* `components`
* `utilities`

These functions should return an object, which will be added to the respective `add*` function, [provided by TailwindCSS](https://tailwindcss.com/docs/plugins). To not provide styling for a particular key, simply leave the key off of the exported object.

Each of these functions will have a `this` value assigned to their own object,
making referencing other functions on the object possible (resursive invocations are **not** recommended).
The function will also recieve an object which has the following members available:

* `theme` - As provided by [Tailwind](https://tailwindcss.com/docs/plugins) when the plugin is first invoked.

For example:

```JavaScript
const button = {
  components: function ({ theme }) {
    return {
      '.btn': {
        backgroundColor: theme('colors.gray.200'),
      }
    }
  }
}

module.exports = button
```

All that is left is to add the file to the list found in [`src/plugins.js`](src/plugin.js).

## Extending existing styles

### Extending another family

Extending the styles defined by another family is as easy as invoking the respective function that family exports manually.

Lets add the `'focus'` styling onto our button, we'll also make sure our button is theme-aware:

```JavaScript
// Supposing `button.js` has been added to `./src/components/` or `./src/utilities/`
const focus = require('../base/focus')

const button = {
  components: function ({ theme }) {
    return {
      '.btn': {
        backgroundColor: theme('colors.gray.200'),
        '&:focus': {
          ...focus.base({ theme }).focus,
        },
      },
      '.dark .btn': {
        backgroundColor: theme('colors.gray.200'),
        '&:focus': {
          ...focus.base({ theme }).focusDark,
        },
      },
    }
  }
}

module.exports = button
```

### Extending from another function on the same family

We can even take it a step further by extending the styles of one of our object's other functions:

> Keep in mind, recursive invocations are not supported or/have not been tested; experiment at your own discretion and feel free to share the results!

```JavaScript
const button = {
  base: function({ theme }) {
    return {
      '.btn': {
        fontFamily: ...
      }
    }
  },
  components: function ({ theme }) {
    return {
      '.btn': {
        backgroundColor: theme('colors.gray.200'),
        ...this.base({ theme })['.btn'],
      },
    }
  }
}

module.exports = button
```
