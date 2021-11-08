# &lt;unc-wizard&gt;

&lt;unc-wizard&gt; is a wizard with stepper on top.

```html
<unc-wizard>
    <unc-wizard-page label="User Info">
        <div>
            <h3>Some user info form</h3>
        </div>
        <vaadin-button slot="next" theme="primary">Next</vaadin-button>
    </unc-wizard-page>
    <unc-wizard-page label="Address">
        <div>
            <h3>Address form</h3>
        </div>
        <vaadin-button slot="left" theme="secondary">Previous</vaadin-button>
        <vaadin-button slot="right" theme="primary">Finish</vaadin-button>
    </unc-wizard-page>
</unc-wizard>
```
![screenshot](https://raw.githubusercontent.com/unc-dsi/unc-web-components/main/packages/unc-wizard/screenshot.png)

## Dependencies

| Name | NPM | Usage |
|------|-----|-------|
| &lt;vaadin-vertical-layout&gt; | [![npm version](https://badgen.net/npm/v/@vaadin/vaadin-ordered-layout/)](https://www.npmjs.com/package/@vaadin/vaadin-ordered-layout) | To arrange the wizard |
| &lt;vaadin-horizontal-layout&gt; | [![npm version](https://badgen.net/npm/v/@vaadin/vaadin-ordered-layout/)](https://www.npmjs.com/package/@vaadin/vaadin-ordered-layout) | To arrange the wizard |


## Events

| Name | Description |
|------|-------------|
| page-change | Fire when the displayed page changed. <br> Contains indexes of the previous and the new current page: ```detail: {previousIndex, currentIndex }``` |

## Styling

| Name                                        | Default Lumo value | Default value | Description |
|---------------------------------------------|--------------------|---------------|-------------|
| --unc-wizard-margin | --lumo-space-m | 1rem | Margin around the wizard|
| --unc-wizard-margin-top | --lumo-space-l | 1.5rem | Margin on top of the wizard |
| --unc-wizard-border-color | --lumo-shade-10pct | hsla(214, 57%, 24%, 0.1) | Color of the border around the wizard |
| --unc-wizard-border-radius | --lumo-border-radius-l | 0.5rem | Radius of the border around the wizard |
| --wizard-shadow | --lumo-box-shadow-s | 0 2px 4px -1px hsla(214, 53%, 23%, 0.16), 0 3px 12px -1px hsla(214, 50%, 22%, 0.26 | Shadow around the wizard |

See also [Styling section](https://github.com/unc-dsi/unc-web-components/tree/main/packages/unc-horizontal-stepper#styling) in ```<unc-horizontal-stepper>```.

## License

Apache License 2.0
