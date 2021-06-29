const generateItems = () =>
    '<li initial="*">*</li>' +
    [...Array(26)]
        .map((_, i) => String.fromCharCode('A'.charCodeAt(0) + i))
        .map(initial => `<li initial='${initial}'>${initial}</li>`)
        .reduce(((previousValue, currentValue) => previousValue + currentValue));

const template = document.createElement('template');
template.innerHTML = `
<style>
:host {
    --unc-initial-bar-padding: calc(var(--lumo-space-xs, 0.25rem) / 2);
    --unc-initial-bar-selected-color: var(--lumo-base-color, #fff);
    --unc-initial-bar-selected-background-color: var(--lumo-primary-color, hsl(214, 90%, 52%));
    --unc-initial-bar-border-color: var(--lumo-shade-20pct, hsla(214, 53%, 23%, 0.16));
    --unc-initial-bar-hover-color: var(--unc-initial-bar-border-color);
    display: inline-block;
}
ul {
    display: inline-block;
    margin: 0;
    padding: 0;
}
li {
    display: inline-block;
    padding: var(--unc-initial-bar-padding) var(--unc-initial-bar-padding);
    border: 1px solid var(--unc-initial-bar-border-color);
    width: 1em;
    text-align: center;
}
li:hover {
    cursor: pointer;
    background-color: var(--unc-initial-bar-hover-color);
}
li[selected] {
    color: var(--unc-initial-bar-base-color);
    background-color: var(--unc-initial-bar-selected-background-color);
}
</style>    
<ul>${generateItems()}</ul>
`;

class UncInitialBar extends HTMLElement {
    static get observedAttributes() {
        return ['selection'];
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'})
            .appendChild(template.content.cloneNode(true));
        this._itemClickCallback = event => this._onItemClicked(event);
    }

    connectedCallback() {
        this.shadowRoot.querySelectorAll('li')
            .forEach(item => item.addEventListener('click', this._itemClickCallback));
        this.selection = '*';
    }

    disconnectedCallback() {
        this.shadowRoot.querySelectorAll('li')
            .forEach(item => item.removeEventListener('click', this._itemClickCallback));
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'selection':
                this.selection = newValue;
                break;
        }
    }

    _onItemClicked(event) {
        this.selection = event.target.getAttribute('initial');
    }

    get selection() {
        const selectedItem = Array.from(this.shadowRoot.querySelectorAll('li'))
            .find(item => item.hasAttribute('selected'));
        return selectedItem ? selectedItem.getAttribute('initial') : undefined;
    }

    set selection(initial) {
        const oldSelection = this.selection;
        this.shadowRoot.querySelectorAll('li')
            .forEach(item => item.removeAttribute('selected'));
        const item = Array.from(this.shadowRoot.querySelectorAll('li'))
            .find(item => item.getAttribute('initial') === initial);
        if (item) {
            item.setAttribute('selected', '');
        }
        if (oldSelection !== this.selection) {
            this.setAttribute('selection', initial);
            this.dispatchEvent(new CustomEvent('select', {
                detail: {
                    oldSelection,
                    newSelection: this.selection
                }
            }));
        }
    }
}

if (customElements && !customElements.get('unc-initial-bar')) {
    customElements.define('unc-initial-bar', UncInitialBar);
}