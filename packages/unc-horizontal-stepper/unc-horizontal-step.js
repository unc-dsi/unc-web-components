const template = document.createElement('template');
template.innerHTML = `
<style>
:host {
    cursor: pointer;
    position: relative;
    padding-top: 20px;
    color: hsla(0,0%, 100%,.4);
    text-align: center;
    text-transform: uppercase;
    word-wrap: break-word;
    font-weight: 500;
    font-size: .75rem;
}

:host([disabled]) {
    cursor: inherit;
}

/* Manage the dot */
::before {
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    width: 13px;
    height: 13px;
    background-color: #f48aaa;
    content: "";
    transform: translateX(-50%);
    transition: all .15s linear 0s,transform .15s cubic-bezier(.05,1.09,.16,1.4) 0s;
    border: 2px solid hsla(0,0%,100%,0);
    border-radius: 50%;
    box-sizing: border-box;
    z-index: 3;
}

/* Manage the line between dots */
::after {
    position: absolute;
    top: 5px;
    left: calc(-50% - 13px / 2);
    transition-property: all;
    transition-duration: .15s;
    transition-timing-function: linear;
    transition-delay: 0s;
    display: block;
    width: 100%;
    height: 2px;
    content: "";
    background-color: currentColor;
    z-index: 1;
}

:host([first]) ::after  {
    display: none;
}

span {
    color: hsla(0,0%,100%,.7);
}
</style>
<span><slot></slot></span>
`;

export class UncHorizontalStepper extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
            .appendChild(template.content.cloneNode(true));
    }
}

if (customElements && !customElements.get('unc-horizontal-step')) {
    customElements.define('unc-horizontal-step', UncHorizontalStepper);
}
