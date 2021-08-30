# &lt;unc-initial-bar&gt;

&lt;unc-initial-bar&gt; is bar to select an initial. Useful for quick access by person's name.

```html
<unc-initial-bar label="Name" selection="R"></unc-initial-bar>
```
![screenshot](https://raw.githubusercontent.com/unc-dsi/unc-web-components/main/packages/unc-initial-bar/screenshot.png)

## Attributes / Properties

| Name | Description |
|------|-------------|
| label | Optional text on top of the bar |
| selection | Select or change the selected initial |

## Events

| Name | Description |
|------|-------------|
| select | Fire when the selection changed.<br> Contains the old selection and the new selection :  {detail: {oldSelection, newSelection }} |

## Styling

| Name                                        | Default Lumo value | Default value | Description |
|---------------------------------------------|--------------------|---------------|-------------|
| --unc-initial-bar-padding | --lumo-space-xs / 2 | 0.25rem / 2 | Padding around each initial |
| --unc-initial-bar-selected-color | --lumo-base-color | #fff | Foreground color of the selected initial |
| --unc-initial-bar-selected-background-color | --lumo-primary-color | hsl(214, 90%, 52%) | Background color of the selected initial |
| --unc-initial-bar-border-color | --lumo-shade-20pct | hsla(214, 53%, 23%, 0.16) | Color of grid's lines |
| --unc-initial-bar-hover-color | N/A | --unc-initial-bar-border-color | Color hovering of the initial |
| --unc-initial-bar-label-color | --lumo-secondary-text-color | hsla(214, 42%, 18%, 0.72) | Foreground color of the label |
| --unc-initial-bar-label-size | --lumo-font-size-s | .875rem | Font size of the label |

## License

Apache License 2.0
