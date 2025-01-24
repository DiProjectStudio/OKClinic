export default class Header {
    constructor() {
        this.clickWrapper = document.getElementById("clickWrapper");
        this.headerElement = document.getElementById("header");
        this.navMenuJS = document.getElementById("navMenuJS");
        this.onInit();
    }

    onInit() {
        this.burgerClickHandler();
        this.copyAdditionalBottomBlock();
        this.createMobileNavbar();
        this.mobileMenuActions();
        this.insertSVGToMenuItems();
        // this.scrollHeader();
    }


    /** Функция обрабатывает клик по бургерному меню */
    burgerClickHandler() {
        if (this.clickWrapper) {
            this.clickWrapper.addEventListener('click', () => {
                this.clickWrapper.classList.toggle('active');
                this.navMenuJS.classList.toggle('active');
                if (this.clickWrapper.children[0].classList.contains("close")) {
                    this.clickWrapper.children[0].className = "menu animate"
                } else {
                    this.clickWrapper.children[0].className = "close animate"
                }
            })
            this.createSubmenu();
        }
    }

    /** Копирует элемент .header__inner-additional-bottom в .header__inner */
    copyAdditionalBottomBlock() {
        const additionalBottomElement = document.querySelector('.header__inner-additional-bottom');
        const headerInnerElement = document.querySelector('.header__inner');
        const clonedAdditionalBottomElement = additionalBottomElement.cloneNode(true);
        clonedAdditionalBottomElement.classList.add('copy');
        headerInnerElement.insertBefore(clonedAdditionalBottomElement, this.clickWrapper);
    }

    scrollHeader() {
        this.headerElement.addEventListener('scroll', () => {

        })
    }

    /** Создаем меню для мобильной версии */
    createMobileNavbar() {
        const headerNav = document.querySelector('.header__inner-nav-bottom');
        this.navMenuJS.append(headerNav.cloneNode(true));
    }

    mobileMenuActions() {
        // Функционал перехода на подпункты меню
    }

    createSubmenu(parent = null) {

    }


    /** Вставляем svg со стрелкой для каждого пункта меню, имеющего подменю */
    insertSVGToMenuItems() {
        const navMenuItemWithSubmenu = document.querySelectorAll('.nav-menu-js .header__inner-nav-bottom nav > ul > .with-submenu');
        const chevronSVG = `
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.21967 5.21967C8.51256 4.92678 8.98744 4.92678 9.28033 5.21967L13.5303 9.46967C13.8232 9.76256 13.8232 10.2374 13.5303 10.5303L9.28033 14.7803C8.98744 15.0732 8.51256 15.0732 8.21967 14.7803C7.92678 14.4874 7.92678 14.0126 8.21967 13.7197L11.9393 10L8.21967 6.28033C7.92678 5.98744 7.92678 5.51256 8.21967 5.21967Z" fill="#1C1C1C"/>
        </svg>`;

        navMenuItemWithSubmenu.forEach((item) => {
            item.insertAdjacentHTML('beforeend', chevronSVG);
        });
    }
}