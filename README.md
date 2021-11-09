# UNC Web Components

UNC Web Components is a set of web components provided by the University of New-Caledonia (U.N.C.).

## Components

All components are licensed under the Apache License 2.0.

| Component | NPM version | Status | Description |
|-----------|-------------|------- |-------------|
| <a href="https://github.com/unc-dsi/unc-web-components/tree/main/packages/unc-initial-bar">&lt;unc-initial-bar&gt;</a> | [![npm version](https://badgen.net/npm/v/@unc-dsi/unc-initial-bar/)](https://www.npmjs.com/package/@unc-dsi/unc-initial-bar) | Work in progress | A bar to select an initial. |
| <a href="https://github.com/unc-dsi/unc-web-components/tree/main/packages/unc-vertical-menu">&lt;unc-vertical-menu&gt;</a> | [![npm version](https://badgen.net/npm/v/@unc-dsi/unc-vertical-menu/)](https://www.npmjs.com/package/@unc-dsi/unc-vertical-menu) | Work in progress | A vertical menu. |
| <a href="https://github.com/unc-dsi/unc-web-components/tree/main/packages/unc-vertical-tabs">&lt;unc-vertical-tabs&gt;</a> | [![npm version](https://badgen.net/npm/v/@unc-dsi/unc-vertical-tabs/)](https://www.npmjs.com/package/@unc-dsi/unc-vertical-tabs) | Work in progress | A tabs system with an dynamic content area. |
| <a href="https://github.com/unc-dsi/unc-web-components/tree/main/packages/unc-horizontal-stepper">&lt;unc-horizontal-stepper&gt;</a> | [![npm version](https://badgen.net/npm/v/@unc-dsi/unc-horizontal-stepper/)](https://www.npmjs.com/package/@unc-dsi/unc-horizontal-stepper) | Work in progress | A stepper. |
| <a href="https://github.com/unc-dsi/unc-web-components/tree/main/packages/unc-wizard">&lt;unc-wizard&gt;</a> | [![npm version](https://badgen.net/npm/v/@unc-dsi/unc-wizard/)](https://www.npmjs.com/package/@unc-dsi/unc-wizard) | Work in progress | A wizard. |
| <a href="https://github.com/unc-dsi/unc-web-components/tree/main/packages/unc-push-button">&lt;unc-push-button&gt;</a> | [![npm version](https://badgen.net/npm/v/@unc-dsi/unc-push-button/)](https://www.npmjs.com/package/@unc-dsi/unc-push-button) | Work in progress | A button with pushed state. |

## Styling

All components try to be compatible with [Vaadin Lumo]((https://vaadin.com/docs/latest/ds/foundation)) styles.

## Browser support

UNC Web Components use Custom Elements and Shadow DOM that are natively supported by modern browsers.

## Demo

First clone the project
```shell
git clone https://github.com/unc-dsi/unc-web-components.git
```

Then install dependencies
```shell
npm install
```

Then run the demo
```shell
npm run demo
```

## Publishing

Before publishing a compent, ensure that $HOME/.npmrc use the npm public repository. Then:
```shell
npm login
cd packages/<component>
vim package.json # to increment version
npm publish --access public
```
