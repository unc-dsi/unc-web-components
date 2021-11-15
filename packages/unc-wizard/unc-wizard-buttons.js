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
::slotted([slot=right]) {
    margin-left: var(--lumo-space-s);
}
::slotted([slot=left]) {
    margin-right: var(--lumo-space-s);
}
</style>
<vaadin-horizontal-layout theme="spacing">
    <div>
        <slot name="left"></slot>
    </div>
    <div class="align-right">
        <slot name="right"></slot>
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
