# &lt;unc-push-button&gt;

&lt;unc-push-button&gt; is a button with a pushed state.

```html
<unc-push-button>Click Me!</unc-push-button>
<unc-push-button pushed>Already pushed</unc-push-button>
```
![screenshot](https://raw.githubusercontent.com/unc-dsi/unc-web-components/main/packages/unc-push-button/screenshot.png)

## Attributes / Properties

| Name | Description |
|------|-------------|
| pushed | State of the button |
| disabled | To disabled the button |

## Events

| Name | Description |
|------|-------------|
| push | Fire when the button is pushed :  {detail: { pushed }} |

## Styling

| Name                                        | Default Lumo value | Default value | Description |
|---------------------------------------------|--------------------|---------------|-------------|
| --unc-push-button-border-color | --lumo-shade-10pct |  hsla(214, 57%, 24%, 0.1) | Border color around the button |
| --unc-push-button-border-radius | --lumo-border-radius-l |  0.5rem | Border radius around the button |
| --unc-push-button-hover-shadow | --lumo-box-shadow-s |  "0 2px 4px -1px hsla(214, 53%, 23%, 0.16), 0 3px 12px -1px hsla(214, 50%, 22%, 0.26" | Shadow when the button is hover |
| --unc-push-button-padding | --lumo-space-m |  1rem | Padding inside the button |
| --unc-push-button-font-size | --lumo-font-size-l |  1.125rem | Font size of the text inside the button |
| --unc-push-button-color | --lumo-body-text-color | hsla(214, 40%, 16%, 0.94) | Color of the text inside the button when is not pushed |
| --unc-push-button-bg-color | --lumo-base-color | #fff | Background color of the text inside the button when is not pushed |
| --unc-push-button-pushed-color | --lumo-base-color | #fff | Color of the text inside the button when is pushed |
| --unc-push-button-pushed-bg-color | --lumo-primary-color | hsla(214, 100%, 49%, 0.76) | Background color of the text inside the button when is pushed |
| --unc-push-button-pushed-shadow | N/A | inset 0px 0px var(--lumo-space-s, 0.5rem) var(--pushed-color) | Shadow of the button when is pushed |

## License

Apache License 2.0
