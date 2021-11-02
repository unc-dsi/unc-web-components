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
.align-right::slotted(*) {
    margin-left: auto;
}
</style>
<vaadin-horizontal-layout theme="spacing">
    <slot id="previous" name="previous"></slot>
    <slot id="next" name="next" class="align-right"></slot>
</vaadin-horizontal-layout>
`

export class UncWizardButtons extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
            .appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        this.shadowRoot.querySelector('#previous')
            .addEventListener('slotchange', event => this._onPreviousChange(event));
        this.shadowRoot.querySelector('#next')
            .addEventListener('slotchange', event => this._onNextChange(event));
    }

    _onPreviousChange(e) {
        if (e.target.id === 'previous') {
            e.target.addEventListener("click", event => this._onPreviousClick(event));
        }
    }

    _onNextChange(e) {
        if (e.target.id === 'next') {
            e.target.addEventListener("click", event => this._onNextClick(event));
        }
    }

    _onPreviousClick(event) {
        if (this.wizard) {
            this.wizard.previous();
        }
    }

    _onNextClick(event) {
        if (this.wizard) {
            this.wizard.next();
        }
    }
}

if (customElements && !customElements.get('unc-wizard-buttons')) {
    customElements.define('unc-wizard-buttons', UncWizardButtons);
}
