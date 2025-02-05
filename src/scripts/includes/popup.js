import { Fancybox } from '@fancyapps/ui';

export function initializePopup() {
    // Присваиваем Fancybox глобальной переменной
    window.Fancybox = Fancybox;
    Fancybox.bind('[data-fancybox]', {
        on: {
            init: (fancybox) => {
                if (fancybox.userSlides[0].src === '#doctorInfo') {
                    closePopup(fancybox);
                }
            }
        }
    });


}

function closePopup(fancybox) {
    const closeBtn = document.querySelector('#doctorInfo .btn-zoom.btn-zoom--out');
    closeBtn.addEventListener('click', ()=> {
        fancybox.close();
    });
}