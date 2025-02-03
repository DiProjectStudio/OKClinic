// Import Plugins
import Inputmask from 'inputmask';
// import './includes/jquery-pincode-autotab.js';

// Import Scripts
import { getBrowserName } from './includes/checkbrowser.js';
import { initializeMap } from './includes/map.js';
import { initializePopup } from './includes/popup.js';
import { initializeSlider } from './includes/slider.js';
import Header from "./includes/header.js";
import Footer from './includes/footer.js';
import {actualYear} from "./includes/actual-year.js";
import Tabs from "./includes/tabs.js";

document.addEventListener('DOMContentLoaded', (event) => {
    getBrowserName();
    initializeMap();
    initializePopup();
    initializeSlider();
    new Header();
    new Footer();
    actualYear();
    new Tabs();

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
    showMaskOnFocus: false,

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