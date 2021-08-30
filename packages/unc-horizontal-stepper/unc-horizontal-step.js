const template = document.createElement('template');
template.innerHTML = `
<style>
:host {
    --color-active: var(--unc-horizontal-step-dot-color-active, var(--lumo-base-color, #fff));
    --color-inactive: var(--unc-horizontal-step-color-inactive, var(--lumo-disabled-text-color, hsla(214, 50%, 22%, 0.26)));
    --dot-size: var(--unc-horizontal-step-dot-size, 13px);
    --line-height: var(--unc-horizontal-step-line-height, 2px);
}
:host {
    cursor: pointer;
    position: relative;
    padding-top: 20px;
    text-align: center;
    text-transform: uppercase;
    word-wrap: break-word;
    font-weight: 500;
    font-size: .75rem;
}

:host([disabled]) {
    cursor: inherit;
}

/* Manage the dot */
::before {
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    width: var(--dot-size);
    height: var(--dot-size);
    background-color: var(--color-inactive);
    content: "";
    transform: translateX(-50%);
    border-radius: 50%;
    box-sizing: border-box;
    z-index: 3;
}

:host([active]) ::before  {
    background-color: var(--color-active);
}

/* Manage the line between dots */
::after {
    position: absolute;
    top: 5px;
    left: calc(-50% - var(--dot-size) / 2);
    display: block;
    width: 100%;
    height: var(--line-height);
    content: "";
    background-color: var(--color-inactive);
    z-index: 1;
}

:host([first]) ::after  {
    display: none;
}

:host([active]) ::after  {
    background-color: var(--color-active);
}

span {
    color: var(--color-active);
}
</style>
<span><slot></slot></span>
`;
export class UncHorizontalStep extends HTMLElement {
    static get observedAttributes() {
        return [ 'active', 'first'];
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'})
            .appendChild(template.content.cloneNode(true));
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            if (name === 'active') {
                this.active = newValue !== null;
            } else if (name === 'first') {
                this.first = newValue  !== null;
            } else {
                this[name] = newValue;
            }
        }
    }

    get active() {
        return Boolean(this.getAttribute("active"));
    }

    set active(active) {
        if (Boolean(active)) {
            this.setAttribute("active", "");
        } else {
            this.removeAttribute("active");
        }
    }

    get first() {
        return Boolean(this.getAttribute("first"));
    }

    set first(first) {
        if (Boolean(first)) {
            this.setAttribute("first", "");
        } else {
            this.removeAttribute("first");
        }
    }
}

if (customElements && !customElements.get('unc-horizontal-step')) {
    customElements.define('unc-horizontal-step', UncHorizontalStep);
}
