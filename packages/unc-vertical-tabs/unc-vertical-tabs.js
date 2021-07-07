import './unc-vertical-tab';
import '@unc-dsi/unc-vertical-menu';

const template = document.createElement('template');
template.innerHTML = `
<style>
:host {
    display: flex;
    flex-direction: row;
}
slot[name=content] {
    display: block;
    width: 100%;
}
</style>
<unc-vertical-menu>
</unc-vertical-menu>
<slot></slot>
<slot name="content"></slot>
`;

export class UncVerticalTabs extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
            .appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        this._menu = this.shadowRoot.querySelector('unc-vertical-menu');
        this._menu.addEventListener('select', event => this._onSelectedTabChange(event));
        const content = this.shadowRoot.querySelector('slot');
        content.addEventListener('slotchange', event => this._onContentChange(event));
    }

    get _tabs() {
        return this.querySelectorAll('unc-vertical-tab');
    }

    _onSelectedTabChange(event) {
        if (this._selectedTab) {
            this._selectedTab.hide();
        }
        this._selectedTab = this._tabs.item(event.detail.index);
        this._selectedTab.setAttribute('slot', 'content');
        this._selectedTab.show();
    }

    _onContentChange(event) {
        this._tabs.forEach(tab => this._menu.appendChild(tab.getMenuItem()));
        if (!this._selectedTab) {
            this._menu.select(0);
        }
    }
}

if (customElements && !customElements.get('unc-vertical-tabs')) {
    customElements.define('unc-vertical-tabs', UncVerticalTabs);
}
