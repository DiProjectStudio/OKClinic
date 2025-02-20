// Import Plugins
import Inputmask from 'inputmask';

// Import Scripts
import {getBrowserName} from './includes/utils/checkbrowser.js';
import {initializeMap} from './includes/map.js';
import {initializePopup} from './includes/popup.js';
import {initializeSlider} from './includes/slider.js';
import {actualYear} from "./includes/utils/actual-year.js";
import App from "./includes/modules/app.js";
import {buttonTagBlockClone} from "./includes/utils/tag-block.js";
import tabActions from './includes/utils/tabs.js';
import anchorLinksAction from './includes/utils/anchor-links.js';

document.addEventListener('DOMContentLoaded', (event) => {
    getBrowserName();
    initializeMap();
    initializePopup();
    initializeSlider();
    actualYear();
    tabActions();
    buttonTagBlockClone();
    new App();
    anchorLinksAction();
});

// Если браузер определен, добавляем соответствующий класс к тегу html
const browser = getBrowserName();
if (browser) {
    document.documentElement.classList.add('browser-' + browser);
}


// Inputmask for phone number
Inputmask({
    mask: '+7 (999) 999-99-99',
    showMaskOnHover: false,
    showMaskOnFocus: true,

    onBeforePaste: (pastedValue, opts) => {
        return pastedValue.replace(/^8/, '');
    }
}).mask('[data-phone-number]');

// Inputmask for numbers
Inputmask({
    regex: '^[0-9]*$',
    allowMinus: false,
    showMaskOnHover: false,
    showMaskOnFocus: false,
    placeholder: ''
}).mask('[data-number-only]');

Inputmask({
    alias: 'numeric',
    groupSeparator: ' ',
    autoGroup: true,
    digits: 0,
    rightAlign: false
}).mask('[data-financial]');