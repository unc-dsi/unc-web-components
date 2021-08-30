const template = document.createElement('template');
template.innerHTML = `
<style>
:host {
    --icon-size: var(--unc-menu-item-icon-size, var(--lumo-icon-size-m, 24px));
    --vertical-padding: var(--unc-menu-item-vertical-padding, var(--lumo-space-s, 0.5rem));
    --selected-bgcolor: var(--unc-menu-item-selected-bgcolor, var(--lumo-contrast-20pct, hsla(214, 53%, 23%, 0.16)));
    --selected-fgcolor: var(--unc-menu-item-selected-fgcolor, var(--lumo-primary-color, hsl(214, 90%, 52%)));
    --hover-bgcolor: var(--unc-menu-item-hover-bgcolor, var(--lumo-contrast-10pct, hsla(214, 53%, 23%, 0.16)));
}
:host {
    display: flex;
    height: var(--icon-size);
    padding: var(--vertical-padding) var(--icon-size);
    cursor: pointer;
    align-items: center;
}
:host(:hover) {
    background-color: var(--hover-bgcolor);
}
:host([selected]) {
    background-color: var(--selected-bgcolor);
    font-weight: bolder;
}
:host([selected]) iron-icon {
    color: var(--selected-fgcolor);
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
