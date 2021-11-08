import '@unc-dsi/unc-wizard/unc-wizard-buttons';

const template = document.createElement('template');
template.innerHTML = `
<style>
:host {
    display: block;
    width: 100%
}
unc-wizard-buttons {
    width: 100%;
}
</style>
<slot></slot>
<unc-wizard-buttons>
    <slot name="right" slot="right"></slot>
    <slot name="left" slot="left"></slot>
</unc-wizard-buttons>
`
export class UncWizardPage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
            .appendChild(template.content.cloneNode(true));
    }


    set wizard(wizard) {
        this.shadowRoot.querySelector('unc-wizard-buttons')
            .wizard = wizard;
    }
}
if (customElements && !customElements.get('unc-wizard-page')) {
    customElements.define('unc-wizard-page', UncWizardPage);
}
