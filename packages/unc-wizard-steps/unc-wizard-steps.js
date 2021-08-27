import './unc-wizard-step';

const template = document.createElement('template');
template.innerHTML = `
<style>
:host {
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(0, 1fr));

   border-radius: .5rem;
   box-shadow: 0 4px 20px 0 rgba(0,0,0,.14),0 7px 10px -5px rgba(233,30,99,.4);
   background-image: linear-gradient(195deg,#ec407a,#d81b60);

   padding-bottom: 1rem;
   padding-top: 1.5rem;
}
</style>
<slot></slot>
`;

export class UncWizardSteps extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
            .appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        const content = this.shadowRoot.querySelector('slot');
        content.addEventListener('slotchange', event => this._onContentChange(event));
    }

    _onContentChange(event) {
        const steps = this.querySelectorAll('unc-wizard-step');
        steps.forEach(step => {
            step.removeAttribute('first');
        });
        const first = steps.item(0);
        if (first) {
            first.setAttribute('first', '');
        }
    }
}

if (customElements && !customElements.get('unc-wizard-steps')) {
    customElements.define('unc-wizard-steps', UncWizardSteps);
}
