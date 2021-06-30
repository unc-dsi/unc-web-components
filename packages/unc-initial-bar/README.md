# &lt;unc-initial-bar&gt;

&lt;unc-initial-bar&gt; is bar to select an initial. Useful for quick access by person's name.

```html
<unc-initial-bar label="Name" selection="R"></unc-initial-bar>
```
![screenshot](https://raw.githubusercontent.com/unc-dsi/unc-web-components/main/packages/unc-initial-bar/screenshot.png)

## Attributes

| Name | Description |
|------|-------------|
| label | Optional text on top of the bar |
| selection | Select or change the selected initial |

## Properties

| Name | Description |
|------|-------------|
| selection | Select or change the selected initial |

## Events

| Name | Description |
|------|-------------|
| select | Fire when the selection changed.<br> Contains the old selection and the new selection :  {detail: {oldSelection, newSelection }} |

## License

Apache License 2.0