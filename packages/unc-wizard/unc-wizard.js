import '@vaadin/vaadin-ordered-layout/vaadin-vertical-layout';
import '@unc-dsi/unc-horizontal-stepper/unc-horizontal-stepper';
import '@unc-dsi/unc-horizontal-stepper/unc-horizontal-step';
import './unc-wizard-page';

const template = document.createElement('template');
template.innerHTML = `
<style>
:host {
    --wizard-margin: var(--unc-wizard-margin, var(--lumo-space-m, 1rem));
    --wizard-margin-top: var(--unc-wizard-margin-top, var(--lumo-space-l, 1.5rem));
    --wizard-border-color: var(--unc-wizard-border-color, var(--lumo-shade-10pct, hsla(214, 57%, 24%, 0.1)));
    --wizard-border-radius: var(--unc-wizard-border-radius, var(--lumo-border-radius-l, 0.5rem));
    --wizard-shadow: var(--unc-wizard-shadow, var(--lumo-box-shadow-s, "0 2px 4px -1px hsla(214, 53%, 23%, 0.16), 0 3px 12px -1px hsla(214, 50%, 22%, 0.26"));

    display: flex;
    justify-items: center;
}
vaadin-vertical-layout {
    width: 100%;
    margin: var(--wizard-margin);
    margin-top: var(--wizard-margin-top);
    border: 1px solid var(--wizard-border-color);
    border-radius: var(--wizard-border-radius);
    box-shadow: var(--wizard-shadow);
}
unc-horizontal-stepper {
    width: 100%;
    margin-top: calc(-1 * var(--wizard-margin));
}
::slotted(*) {
    display: none;
}

::slotted(.active) {
    display: block;
}

</style>
<vaadin-vertical-layout theme="spacing padding">
    <unc-horizontal-stepper></unc-horizontal-stepper>
    <slot></slot>
</vaadin-vertical-layout>
`;

export class UncWizard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
            .appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        const content = this.shadowRoot.querySelector('slot');
        content.addEventListener('slotchange', event => this._onContentChange(event));
        this._getStepper().addEventListener('select', event => this._onPageChange(event.detail.currentStep));
    }

    previous() {
        this._onPageChange(this._getCurrentPageIndex() - 1);
    }

    next() {
        this._onPageChange(this._getCurrentPageIndex() + 1);
    }

    _onContentChange() {
        const stepper = this._getStepper();
        const steps = this._getPages();
        steps.forEach(step => {
            step.wizard = this;
            const elt = document.createElement('unc-horizontal-step');
            elt.innerText = step.getAttribute('label');
            stepper.appendChild(elt);
        });
    }

    _onPageChange(newPageIndex) {
        const previousPageIndex = this._getCurrentPageIndex();
        const newPage = this._getPages()[newPageIndex];
        if (newPage) {
            this._getStepper().currentStep = newPageIndex;
            this._getPages().forEach(page => {
                page.classList.remove("active");
            });
            newPage.classList.add("active");
            this.dispatchEvent(new CustomEvent('page-change', {
                detail: {
                    previousIndex: previousPageIndex,
                    currentIndex: newPageIndex
                }
            }));
        }
    }


    _getCurrentPageIndex() {
        return +this._getStepper().getAttribute("current-step");
    }

    _getStepper() {
        return this.shadowRoot.querySelector('unc-horizontal-stepper');
    }

    _getPages() {
        return Array.from(this.querySelectorAll('unc-wizard-page'));
    }
}
if (customElements && !customElements.get('unc-wizard')) {
    customElements.define('unc-wizard', UncWizard);
}
