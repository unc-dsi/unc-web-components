const template = document.createElement('template');
template.innerHTML = `
<style>
:host {
    display: block;
    height: 1px;
    margin: var(--lumo-space-s, 0.25rem);
}
hr {
    margin: 0;
}
</style>
<hr>
`;

class UncMenuSeparator extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
            .appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
    }

    disconnectedCallback() {
    }
}

if (customElements && !customElements.get('unc-menu-separator')) {
    customElements.define('unc-menu-separator', UncMenuSeparator);
}