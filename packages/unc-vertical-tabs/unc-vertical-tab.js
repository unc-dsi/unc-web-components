import '@unc-dsi/unc-vertical-menu/unc-menu-item';

const template = document.createElement('template');
template.innerHTML = `
<style>
slot {
    display: none;
}
</style>
<unc-menu-item></unc-menu-item>
<slot></slot>
`;

export class UncVerticalTab extends HTMLElement {
    static get observedAttributes() {
        return ['icon', 'label'];
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'})
            .appendChild(template.content.cloneNode(true));
        this._content = this.shadowRoot.querySelector('slot');
        this._item = this.shadowRoot.querySelector('unc-menu-item');
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this[name] = newValue;
        }
    }

    get icon() {
        return this._item.getAttribute('icon');
    }

    set icon(icon) {
        this._item.setAttribute('icon', icon);
    }

    get label() {
        return this._item.getAttribute('label');
    }

    set label(label) {
        this._item.setAttribute('label', label);
    }

    getMenuItem() {
        return this._item;
    }

    show() {
        this._content.style.display = 'block';
    }

    hide() {
        this._content.style.display = 'none';
    }
}

if (customElements && !customElements.get('unc-vertical-tab')) {
    customElements.define('unc-vertical-tab', UncVerticalTab);
}
