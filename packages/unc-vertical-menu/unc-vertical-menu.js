const template = document.createElement('template');
template.innerHTML = `
<style>
:host {
    display: block;
}
</style>
<slot></slot>
`;

class UncVerticalMenu extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
            .appendChild(template.content.cloneNode(true));
        this._slot = this.shadowRoot.querySelector('slot');
        this._onItemClickCallback = event => this._onItemClick(event);
    }

    connectedCallback() {
        this.shadowRoot.querySelector('slot')
            .addEventListener('slotchange', event => this._onSlotChange(event));
    }

    disconnectedCallback() {
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this[name] = newValue;
        }
    }

    _onSlotChange(event) {
        this.querySelectorAll('unc-menu-item')
            .forEach(item => item.removeEventListener('click', this._onItemClickCallback));
        this.querySelectorAll('unc-menu-item')
            .forEach(item => item.addEventListener('click', this._onItemClickCallback));
    }

    _onItemClick(event) {
        this.selected = event.target;
    }

    set selected(selected) {
        const old = this.selected;
        if (old !== selected) {
            this.querySelectorAll('unc-menu-item')
                .forEach(item => item.removeAttribute('selected'));
            selected.setAttribute('selected', '');
            this.dispatchEvent(new CustomEvent('select', {
                detail: {
                    oldSelection: old ? old.textContent : undefined,
                    newSelection: selected.textContent
                }
            }));
        }
    }

    get selected() {
        return Array.from(this.querySelectorAll('unc-menu-item'))
            .find(item => item.hasAttribute('selected'));
    }
}

if (customElements && !customElements.get('unc-vertical-menu')) {
    customElements.define('unc-vertical-menu', UncVerticalMenu);
}
