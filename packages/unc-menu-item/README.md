# &lt;unc-menu-item&gt;

&lt;unc-menu-item&gt; is a sub-element for [&lt;unc-vertical-menu&gt;](https://github.com/unc-dsi/unc-web-components/tree/main/packages/unc-vertical-menu)

```html
<unc-vertical-menu>
    <unc-menu-item href="/search" icon="search" selected>Search</unc-menu-item>
    <unc-menu-separator></unc-menu-separator>
    <unc-menu-item href="/users" icon="social:people">Users</unc-menu-item>
</unc-vertical-menu>
```
FIXME
![screenshot](https://raw.githubusercontent.com/unc-dsi/unc-web-components/main/packages/unc-vertical-menu/screenshot.png)

## Dependencies

| Name | NPM | Usage |
|------|-----|-------|
| &lt;iron-icons&gt; | [![npm version](https://badgen.net/npm/v/@polymer/iron-icons/)](https://www.npmjs.com/package/@polymer/iron-icons) | To display icons

## Attributes / Properties

| Name | Type | Required |Description |
|------|------|----------|------------|
| icon | string | Optional | Icon to display. It must definie in an iron's iconset |
| selected | boolean | Optional | Indicates that item it's selected or not |
| textContent | string | Required | Text display inside the item |

## License

Apache License 2.0
