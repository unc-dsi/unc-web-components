import './unc-menu-item';
import './unc-menu-separator';

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
        this._onItemClickCallback = event => this._onItemClick(event);
    }

    connectedCallback() {
        this.shadowRoot.querySelector('slot')
            .addEventListener('slotchange', event => this._onSlotChange(event));
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

    get _items() {
        return Array.from(this.querySelectorAll('unc-menu-item'));
    }

    set selected(selected) {
        const old = this.selected;
        if (old !== selected) {
            this._items.forEach(item => item.removeAttribute('selected'));
            selected.setAttribute('selected', '');
            const selectedIndex = this._items.indexOf(selected);
            this.dispatchEvent(new CustomEvent('select', {
                detail: {
                    index: this.selectedIndex,
                    label: selected.label
                }
            }));
        }
    }

    get selected() {
        return this._items.find(item => item.hasAttribute('selected'));
    }

    get selectedIndex() {
        return this._items.indexOf(this.selected);
    }

    select(index) {
        this.selected = this._items[index];
    }
}

if (customElements && !customElements.get('unc-vertical-menu')) {
    customElements.define('unc-vertical-menu', UncVerticalMenu);
}
