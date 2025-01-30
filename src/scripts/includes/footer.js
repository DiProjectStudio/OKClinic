export default class Footer {
    constructor() {
        this.onInit();
    }

    onInit() {
        this.showDown();
    }

    /** Открытие списка */
    showDown() {
        const showdownItems = document.querySelectorAll('.links-block--showdown .links-block__title');
        showdownItems.forEach(item => {
            item.addEventListener('click', (e) => {
                item.parentElement.classList.toggle('showdown');
            })
        })

    }
}