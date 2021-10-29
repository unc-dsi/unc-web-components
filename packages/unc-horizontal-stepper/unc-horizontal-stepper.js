import './unc-horizontal-step';

const template = document.createElement('template');
template.innerHTML = `
<style>
:host {
    --border-radius: var(--unc-horizontal-stepper-border-radius, var(--lumo-border-radius-l, .5em));
    --box-shadow: var(--unc-horizontal-stepper-box-shadow, var(--lumo-box-shadow-xl, "0 4px 24px -3px  hsla(214, 53%, 23%, 0.16), 0 18px 64px -8px  hsla(214, 47%, 21%, 0.38"));
    --background-color: var(--unc-horizontal-stepper-background-color, var(--lumo-primary-color, hsl(214, 90%, 50%)));
}
:host {
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(0, 1fr));

   border-radius: var(--border-radius);
   box-shadow: var(--box-shadow);
   background-color: var(--background-color);

   padding-bottom: 1rem;
   padding-top: 1.5rem;
}
</style>
<slot></slot>
`;

export class UncHorizontalStepper extends HTMLElement {
    static get observedAttributes() {
        return [ 'current-step' ];
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'})
            .appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        const content = this.shadowRoot.querySelector('slot');
        content.addEventListener('slotchange', event => this._onContentChange(event));
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            if (name === 'current-step') {
                this.currentStep = newValue;
            }
        }
    }

    set currentStep(index) {
        this._selectStep(index);
    }

    get currentStep() {
        return this._getSteps()
            .map(step => step.hasAttribute("active"))
            .lastIndexOf(true);
    }

    _onContentChange(event) {
        const steps = this._getSteps();
        steps.forEach(step => {
            step.removeAttribute('first');
        });
        const first = steps[0];
        if (first) {
            first.setAttribute('first', '');
        }
        steps.forEach(step => {
            step.addEventListener("click", event => {
                const clickIndex = Array.from(steps).findIndex(value => value === event.target);
                this._selectStep(clickIndex);
            });
        })
        this.setAttribute("current-step", this.currentStep);
    }

    _getSteps() {
        return Array.from(this.querySelectorAll('unc-horizontal-step'));
    }

    _selectStep(selectedIndex) {
        const selectedStep = this._getSteps()[selectedIndex];
        if (selectedStep && selectedStep.hasAttribute("disabled")) {
            return;
        }
        this.setAttribute("current-step", selectedIndex);
        this._getSteps().forEach((step, index) => {
            if (index <= selectedIndex) {
                step.setAttribute("active", "");
            } else {
                step.removeAttribute("active");
            }
        });
        this.dispatchEvent(new CustomEvent('select', {
            detail: {
                currentStep: selectedIndex
            }
        }));
    }
}

if (customElements && !customElements.get('unc-horizontal-stepper')) {
    customElements.define('unc-horizontal-stepper', UncHorizontalStepper);
}
