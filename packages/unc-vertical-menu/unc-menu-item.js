const template = document.createElement('template');
template.innerHTML = `
<style>
:host {
    --unc-menu-item-icon-size: var(--lumo-icon-size-m, 24px);
    --unc-menu-item-padding: var(--lumo-space-s, 0.5rem);
    --unc-menu-item-selected-bgcolor: var(--lumo-contrast-20pct, hsla(214, 53%, 23%, 0.16));
    --unc-menu-item-selected-fgcolor: var(--lumo-primary-color, hsl(214, 90%, 52%));
    --unc-menu-item-hover-bgcolor: var(--lumo-contrast-10pct, hsla(214, 53%, 23%, 0.16));
    display: flex;
    height: var(--unc-menu-item-icon-size);
    padding: var(--unc-menu-item-padding) var(--unc-menu-item-icon-size);
    cursor: pointer;
    align-items: center;
}
:host(:hover) {
    background-color: var(--unc-menu-item-hover-bgcolor);
}
:host([selected]) {
    background-color: var(--unc-menu-item-selected-bgcolor);
    font-weight: bolder;
}
:host([selected])  iron-icon {
    color: var(--unc-menu-item-selected-fgcolor);
}
</style>
<iron-icon></iron-icon>
<span></span>
`;

export class UncMenuItem extends HTMLElement {
    static get observedAttributes() {
        return ['icon', 'label', 'selected'];
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'})
            .appendChild(template.content.cloneNode(true));
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            if (name === 'selected') {
                this.selected = newValue !== null;
            } else {
                this[name] = newValue;
            }
        }
    }

    get icon() {
        return this.shadowRoot.querySelector('iron-icon').getAttribute('icon');
    }

    set icon(icon) {
        return this.shadowRoot.querySelector('iron-icon').setAttribute('icon', icon);
    }

    get label() {
        return this.shadowRoot.querySelector('span').textContent;
    }

    set label(label) {
        this.shadowRoot.querySelector('span').textContent = label;
    }

    get selected() {
        return this.hasAttribute('selected');
    }

    set selected(selected) {
        if (Boolean(selected)) {
            this.setAttribute('selected', '');
        } else {
            this.removeAttribute('selected');
        }
    }
}

if (customElements && !customElements.get('unc-menu-item')) {
    customElements.define('unc-menu-item', UncMenuItem);
}
