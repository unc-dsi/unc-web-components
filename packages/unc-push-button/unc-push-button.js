const template = document.createElement('template');
template.innerHTML = `
<style>
:host {
    --border-color: var(--unc-push-button-border-color, var(--lumo-shade-10pct, hsla(214, 57%, 24%, 0.1)));
    --border-radius: var(--unc-push-button-border-radius, var(--lumo-border-radius-l, 0.5rem));
    --hover-shadow: var(--unc-push-button-hover-shadow, var(--lumo-box-shadow-s, "0 2px 4px -1px hsla(214, 53%, 23%, 0.16), 0 3px 12px -1px hsla(214, 50%, 22%, 0.26"));
    --padding: var(--unc-push-button-padding, var(--lumo-space-m, 1rem));
    --font-size: var(--unc-push-button-font-size, var(--lumo-font-size-l, 1.125rem));
    --color: var(--unc-push-button-color, var(--lumo-body-text-color, hsla(214, 40%, 16%, 0.94)));
    --bg-color: var(--unc-push-button-bg-color, var(--lumo-base-color, #fff));
    --pushed-color: var(--unc-push-button-pushed-color, var(--lumo-base-color, #fff));
    --pushed-bg-color: var(--unc-push-button-pushed-bg-color, var(--lumo-primary-color, hsla(214, 100%, 49%, 0.76)));
    --pushed-shadow: var(--unc-push-button-pushed-shadow, inset 0px 0px var(--lumo-space-s, 0.5rem) var(--pushed-color));

    display: inline-flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    padding: var(--padding);
    font-size: var(--font-size);
    color: var(--color);
    background-color: var(--bg-color);

    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
}
:host(:hover) {
    box-shadow: var(--hover-shadow);
}
:host([pushed]) {
    color: var(--pushed-color);
    background-color: var(--pushed-bg-color);
    box-shadow: var(--pushed-shadow);
}
:host([disabled]) {
    color: var(--lumo-disabled-text-color);
    cursor: default;
    box-shadow: none;
}
</style>
<slot></slot>
`
export class UncPushButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
            .appendChild(template.content.cloneNode(true));
        this._clickListener = event => this._onClick();
    }

    connectedCallback() {
        this.addEventListener('click', this._clickListener);
    }

    disconnectedCallback() {
        this.removeEventListener('click', this._clickListener);
    }

    get pushed() {
        return this.hasAttribute('pushed');
    }

    set pushed(pushed) {
        if (Boolean(pushed)) {
            this.setAttribute('pushed', '');
        } else {
            this.removeAttribute('pushed');
        }
    }

    _onClick() {
        if (!this.hasAttribute('disabled')) {
            this.pushed = !this.pushed;
            this.dispatchEvent(new CustomEvent('push', {
                detail: {
                    pushed: this.pushed
                }
            }));
        }
    }
}

if (customElements && !customElements.get('unc-push-button')) {
    customElements.define('unc-push-button', UncPushButton);
}
