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
    --padding: var(--unc-initial-bar-padding, calc(var(--lumo-space-xs, 0.25rem) / 2));
    --selected-color: var(--unc-initial-bar-selected-color, var(--lumo-base-color, #fff));
    --selected-background-color: var(--unc-initial-bar-selected-background-color, var(--lumo-primary-color, hsl(214, 90%, 52%)));
    --border-color: var(--unc-initial-bar-border-color, var(--lumo-shade-20pct, hsla(214, 53%, 23%, 0.16)));
    --hover-color: var(--unc-initial-bar-hover-color, var(--border-color));
    --label-color: var(--unc-initial-bar-label-color, var(--lumo-secondary-text-color, hsla(214, 42%, 18%, 0.72)));
    --label-size: var(--unc-initial-bar-label-size, var(--lumoe-font-size-s, .875rem));
    display: inline-block;
}
ul {
    display: inline-block;
    margin: 0;
    padding: 0;
}
li {
    display: inline-block;
    padding: var(--padding) var(--padding);
    border: 1px solid var(--border-color);
    width: 1em;
    text-align: center;
}
li:hover {
    cursor: pointer;
    background-color: var(--hover-color);
}
li[selected] {
    color: var(--selected-color);
    background-color: var(--selected-background-color);
}
div {
    display: flex;
    flex-direction: column;
}
label {
    align-self: flex-start;
    color: var(--label-color);
    font-weight: 500;
    font-size: var(--label-size);
    padding-bottom: 0.5em;
    line-height: 1;
}
label:empty {
    display: none;
}
</style>
<div>
    <label></label>
    <ul>${generateItems()}</ul>
</div>
`;

export class UncInitialBar extends HTMLElement {
    static get observedAttributes() {
        return ['label', 'selection'];
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
            case 'label':
                this.label = newValue
                break;
            case 'selection':
                this.selection = newValue;
                break;
        }
    }

    _onItemClicked(event) {
        this.selection = event.target.getAttribute('initial');
    }

    get label() {
        return this.shadowRoot.querySelector('label').textContent;
    }

    set label(newLabel) {
        this.shadowRoot.querySelector('label').textContent = newLabel;
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
