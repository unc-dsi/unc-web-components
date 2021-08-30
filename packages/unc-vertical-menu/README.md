# &lt;unc-vertical-menu&gt;

&lt;unc-vertical-menu&gt; is useful for menu bar.

```html
<unc-vertical-menu>
    <unc-menu-item href="/search" icon="search" label="Search" selected></unc-menu-item>
    <unc-menu-separator></unc-menu-separator>
    <unc-menu-item href="/users" icon="social:people" label="Users"></unc-menu-item>
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
| select | Fire when the selection changed.<br> Contains index and label of the current selected item:  {detail: {index, label }} |

## Styling

| Name                                        | Default Lumo value | Default value | Description |
|---------------------------------------------|--------------------|---------------|-------------|
| --unc-menu-item-icon-size | --lumo-icon-size-m | 24px | Icon size |
| --unc-menu-item-vertical-padding | --lumo-space-s | 0.5rem | Padding top and bottom around each menu item |
| --unc-menu-item-selected-bgcolor | --lumo-contrast-20pct | hsla(214, 53%, 23%, 0.16) | Background color of the selected item |
| --unc-menu-item-selected-fgcolor | --lumo-primary-color | hsl(214, 90%, 52%) | Color of the icon for the selected item |
| --unc-menu-item-hover-bgcolor | --lumo-contrast-10pct | hsla(214, 53%, 23%, 0.16) | Foreground color when hovering an item |


## License

Apache License 2.0
