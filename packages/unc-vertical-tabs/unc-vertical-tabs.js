import './unc-vertical-tab';
import '../unc-vertical-menu/unc-vertical-menu';

const template = document.createElement('template');
template.innerHTML = `
<style>
:host {
    display: flex;
    flex-direction: row;
}
div {
    width: 100%;
}
</style>
<unc-vertical-menu>
</unc-vertical-menu>
<div></div>
`;

class UncVerticalTabs extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
            .appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        this._observer = new MutationObserver(_ => this._onChildrenChange());
        this._observer.observe(this, { childList: true, attributes: true, subtree: true });
        this.querySelectorAll('unc-vertical-tab').forEach(tab => {
            this._observer.observe(tab, { childList: true, attributes: true, subtree: true, characterData: true});
        });
        this._onChildrenChange();
        this.shadowRoot.querySelector('unc-vertical-menu')
            .addEventListener('select', event => this._onMenuSelectChange(event.detail.index));
    }

    disconnectedCallback() {
        this._observer.disconnect();
    }

    _onChildrenChange() {
        const menu = this.shadowRoot.querySelector('unc-vertical-menu');
        const selectedIndex = menu.selectedIndex !== -1 ? menu.selectedIndex : 0;
        menu.innerHTML = '';
        this.querySelectorAll('unc-vertical-tab').forEach(tab => {
            const menuItem = document.createElement('unc-menu-item');
            menuItem.setAttribute('icon', tab.getAttribute('icon'));
            menuItem.setAttribute('label', tab.getAttribute('label'));
            menu.appendChild(menuItem);
        });
        menu.select(selectedIndex);
        this._onMenuSelectChange(selectedIndex);
    }

    _onMenuSelectChange(index) {
        const tab = this.querySelectorAll('unc-vertical-tab').item(index);
        const wrapper = this.shadowRoot.querySelector('div');
        wrapper.innerHTML = '';
        tab.childNodes.forEach(node => {
            wrapper.appendChild(node.cloneNode(true))
        });
    }
}

if (customElements && !customElements.get('unc-vertical-tabs')) {
    customElements.define('unc-vertical-tabs', UncVerticalTabs);
}
