import '@vaadin/vaadin-ordered-layout/vaadin-horizontal-layout';

const template = document.createElement('template');
template.innerHTML = `
<style>
:host {
    display: flex;
    width: 100%;
}
vaadin-horizontal-layout {
    width: 100%;
}
.align-right {
    margin-left: auto;
}
</style>
<vaadin-horizontal-layout theme="spacing">
    <slot name="previous"></slot>
    <div class="align-right">
        <slot name="skip"></slot>
        <slot name="next"></slot>
    </div>
</vaadin-horizontal-layout>
`

export class UncWizardButtons extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
            .appendChild(template.content.cloneNode(true));
    }
}

if (customElements && !customElements.get('unc-wizard-buttons')) {
    customElements.define('unc-wizard-buttons', UncWizardButtons);
}
