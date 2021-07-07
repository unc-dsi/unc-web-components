const template = document.createElement('template');
template.innerHTML = `
<slot></slot>
`;

export class UncVerticalTab extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
            .appendChild(template.content.cloneNode(true));
    }
}

if (customElements && !customElements.get('unc-vertical-tab')) {
    customElements.define('unc-vertical-tab', UncVerticalTab);
}
