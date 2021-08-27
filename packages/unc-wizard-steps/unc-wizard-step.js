const template = document.createElement('template');
template.innerHTML = `
<style>
:host {
    word-wrap: break-word;
    cursor: pointer;
    color: #fff;
    text-align: center
}

button {
    width: 100%;
    position: relative;
    padding-top: 20px;
    color: hsla(0,0%,100%,.4);
    text-transform: uppercase;
    font-weight: 500;
    font-size: .75rem;
    border: none;
    background-color: transparent;
    outline: none;
    margin: 0;
    font-family: inherit;
    line-height: inherit;
    border-radius: 0;
}

button:not(:disabled) {
    cursor: pointer;
}

/* Manage the dot */
button:before {
    background-color: #f48aaa;
    position: absolute;
    top: 0;
    left: 50%;
    display: block;
    width: 13px;
    height: 13px;
    content: "";
    transform: translateX(-50%);
    transition: all .15s linear 0s,transform .15s cubic-bezier(.05,1.09,.16,1.4) 0s;
    border: 2px solid hsla(0,0%,100%,0);
    border-radius: 50%;
    box-sizing: border-box;
    z-index: 3;
}

/* Manage the line between dots */
button:after {
    position: absolute;
    top: 5px;
    left: calc(-50% - 13px / 2);
    transition-property: all;
    transition-duration: .15s;
    transition-timing-function: linear;
    transition-delay: 0s;
    display: block;
    width: 100%;
    height: 2px;
    content: "";
    background-color: currentColor;
    z-index: 1;
}

button.first:after {
    display: none;
}

span {
    color: hsla(0,0%,100%,.7);
}
</style>
<button><span><slot></slot></span></button>
`;

export class UncWizardStep extends HTMLElement {
    static get observedAttributes() {
        return ['first'];
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'})
            .appendChild(template.content.cloneNode(true));
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'first') {
            this.first = newValue !== null;
        } else {
            this[name] = newValue;
        }
    }

    set first(first) {
        const btn = this.shadowRoot.querySelector('button');
        if (first) {
            btn.classList.add('first');
        } else {
            btn.classList.remove('first')
        }
    }
}

if (customElements && !customElements.get('unc-wizard-step')) {
    customElements.define('unc-wizard-step', UncWizardStep);
}
