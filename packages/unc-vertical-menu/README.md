# &lt;unc-menu-item&gt;

&lt;unc-menu-item&gt; is a sub-element for [&lt;unc-vertical-menu&gt;](https://github.com/unc-dsi/unc-web-components/tree/main/packages/unc-vertical-menu)

```html
<unc-vertical-menu>
    <unc-menu-item href="/search" icon="search" selected>Search</unc-menu-item>
    <unc-menu-separator></unc-menu-separator>
    <unc-menu-item href="/users" icon="social:people">Users</unc-menu-item>
</unc-vertical-menu>
```
![screenshot](https://raw.githubusercontent.com/unc-dsi/unc-web-components/main/packages/unc-vertical-menu/screenshot.png)

## Dependencies

| Name | NPM | Usage |
|------|-----|-------|
| &lt;iron-icons&gt; | [![npm version](https://badgen.net/npm/v/@polymer/iron-icons/)](https://www.npmjs.com/package/@polymer/iron-icons) | To display icons

## Events

| Name | Description |
|------|-------------|
| select | Fire when the selection changed.<br> Contains the old selection and the new selection :  {detail: {oldSelection, newSelection }} |


## License

Apache License 2.0
