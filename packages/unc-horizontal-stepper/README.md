# &lt;unc-horizontal-stepper&gt;

&lt;unc-horizontal-stepper&gt; is helpful for creating wizard.

```html
<unc-horizontal-stepper current-step="1">
    <unc-horizontal-step>Step 1</unc-horizontal-step>
    <unc-horizontal-step>Step 2</unc-horizontal-step>
    <unc-horizontal-step>Step 3</unc-horizontal-step>
</unc-horizontal-stepper>
```
![screenshot](https://raw.githubusercontent.com/unc-dsi/unc-web-components/main/packages/unc-horizontal-stepper/screenshot.png)

## Attributes / Properties

| Attribute | Property | Description |
|-----------|----------|-------------|
| current-step | currentStep | Set/get the current step|

## Events

| Name | Description |
|------|-------------|
| select | Fire when the current step change.<br> Returns the new current step index :  {detail: { currentStep }} |

## Styling

| Name                                        | Default Lumo value | Default value | Description |
|---------------------------------------------|--------------------|---------------|-------------|
| --unc-horizontal-stepper-border-radius | --lumo-border-radius-l | .5em | Radius of the rounded corners |
| --unc-horizontal-stepper-box-shadow | --lumo-box-shadow-xl | 0 4px 24px -3px  hsla(214, 53%, 23%, 0.16), 0 18px 64px -8px  hsla(214, 47%, 21%, 0.38 | Shadow around the stepper |
| --unc-horizontal-stepper-background-color | --lumo-primary-color | hsl(214, 90%, 50%) | Background color of the stepper |
| --unc-horizontal-step-dot-color-active | --lumo-base-color | #fff | Dot's color of an active dot |
| --unc-horizontal-step-color-inactive |--lumo-disabled-text-color | hsla(214, 50%, 22%, 0.26) | Dot's color of an inactive dot |
| ----unc-horizontal-step-dot-size | N/A | 13px | Size of a dot |
| --unc-horizontal-step-line-height |N/A | 2px | Height of line between dots |

## License

Apache License 2.0
