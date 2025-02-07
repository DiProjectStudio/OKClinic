import { Fancybox } from '@fancyapps/ui';

export function initializePopup() {
    // Присваиваем Fancybox глобальной переменной
    window.Fancybox = Fancybox;
    Fancybox.bind('[data-fancybox]');
}
