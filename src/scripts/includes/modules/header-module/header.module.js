import Overlay from "../../utils/overlay.js";

export default class HeaderModule {
    constructor() {
        this.clickWrapper = document.getElementById("clickWrapper");
        this.headerElement = document.getElementById("header");
        this.navMenuJS = document.getElementById("navMenuJS");
        this.headerNav = document.querySelector('.header__inner-nav-bottom');
        this.chevronSVG = `
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.21967 5.21967C8.51256 4.92678 8.98744 4.92678 9.28033 5.21967L13.5303 9.46967C13.8232 9.76256 13.8232 10.2374 13.5303 10.5303L9.28033 14.7803C8.98744 15.0732 8.51256 15.0732 8.21967 14.7803C7.92678 14.4874 7.92678 14.0126 8.21967 13.7197L11.9393 10L8.21967 6.28033C7.92678 5.98744 7.92678 5.51256 8.21967 5.21967Z" fill="#1C1C1C"/>
        </svg>`;
        this.headerContacts = document.querySelector('.header__inner-nav-top');
        this.headerSearch = document.querySelector('.header__inner-additional-bottom');
        this.onInit();
    }

    onInit() {
        this.burgerClickHandler();
        this.copyAdditionalBottomBlock();
        this.createMobileNavbar();
        this.insertSVGToMenuItems();
        this.mobileMenuActions();
        this.scrollHeader();
    }


    /** Функция обрабатывает клик по бургерному меню */
    burgerClickHandler() {
        if (this.clickWrapper) {
            this.clickWrapper.addEventListener('click', () => {
                this.clickWrapper.classList.toggle('active');
                this.navMenuJS.classList.toggle('active');
                document.body.classList.toggle('overflow-hidden');

                if (this.navMenuJS.classList.contains('active')) {
                    Overlay.showOverlay();
                    this.overlayClickHandler();
                } else {
                    Overlay.hideOverlay();
                }

                this.burgerAnimate();
            })
            this.createSubmenu();
        }


    }

    overlayClickHandler() {
        document.getElementById('overlay').addEventListener('click', () => {
            this.closeBurger();
            this.burgerAnimate();
        })
    }

    closeBurger() {
        this.navMenuJS.classList.remove('active');
        this.clickWrapper.classList.remove('active');
        Overlay.hideOverlay();
        document.body.classList.remove('overflow-hidden');
    }

    /** Копирует элемент .header__inner-additional-bottom в .header__inner */
    copyAdditionalBottomBlock() {
        const additionalBottomElement = document.querySelector('.header__inner-additional-bottom');
        const headerInnerElement = document.querySelector('.header__inner');
        const clonedAdditionalBottomElement = additionalBottomElement.cloneNode(true);
        clonedAdditionalBottomElement.classList.add('copy');
        if (headerInnerElement) {
            headerInnerElement.insertBefore(clonedAdditionalBottomElement, this.clickWrapper);
        }
    }
    /** Изменение стилей хедера при скролле */
    scrollHeader() {
        window.addEventListener('scroll', (e) => {
            if (window.scrollY > 0) {
                this.headerElement.classList.add('scroll');
            } else {
                this.headerElement.classList.remove('scroll');
            }
        })
    }

    /** Создаем меню для мобильной версии */
    createMobileNavbar() {
        if (this.navMenuJS) {
            this.navMenuJS.append(this.headerNav.cloneNode(true));
            this.navMenuJS.append(this.headerContacts.cloneNode(true));
            this.navMenuJS.append(this.headerSearch.cloneNode(true));
        }
    }


    /** Функционал закрытия и открытия подменю */
    mobileMenuActions() {
        // Функционал перехода на подпункты меню
        const submenuActionElements = document.querySelectorAll('.submenu-action');
        const submenuBlock = document.querySelector('.submenu-block');
        if (submenuActionElements && submenuBlock) {
            submenuActionElements.forEach(element => {
                element.addEventListener('click', (event) => {
                    submenuBlock.style.display = 'block';
                    // Создаем блок с заголовком подменю
                    const submenuTitle = document.createElement('div');
                    // Вставляем этот блок в основной блок подменю
                    submenuTitle.classList.add('submenu-block__title');
                    submenuTitle.append(element.parentElement.querySelector('a').cloneNode(true));
                    // Создаем блок со стрелкой для возврата в основной меню
                    const submenuClose = document.createElement('div');
                    submenuClose.classList.add('submenu-close');
                    // Вставляем в него svg
                    submenuClose.insertAdjacentHTML('afterbegin', this.chevronSVG);
                    // Вставляем блок со стрелкой в заголовок
                    submenuTitle.prepend(submenuClose);
                    submenuBlock.append(submenuTitle);
                    submenuBlock.append(element.previousElementSibling.cloneNode(true));
                    const headerNavInJsBlock = document.querySelector('.nav-menu-js .header__inner-nav-bottom');
                    headerNavInJsBlock.classList.add('submenu-opened');

                    // Возврат из подменю в основное меню
                    submenuClose.addEventListener('click', (event) => {
                        submenuBlock.querySelector('.submenu-block__title').remove();
                        submenuBlock.querySelector('.submenu').remove();
                        submenuBlock.style.display = 'none';
                        headerNavInJsBlock.classList.remove('submenu-opened');
                    })
                })
            })
        }
    }

    /** Создаем блок для пунктов подменю */
    createSubmenu() {
        // Создаем блок для подпунктов
        const submenuBlock = document.createElement('div');
        submenuBlock.classList.add('submenu-block');
        this.navMenuJS.append(submenuBlock);
    }


    /** Вставляем svg со стрелкой для каждого пункта меню, имеющего подменю */
    insertSVGToMenuItems() {
        const navMenuItemWithSubmenu = document.querySelectorAll('.nav-menu-js .header__inner-nav-bottom nav > ul > .with-submenu');

        if (navMenuItemWithSubmenu) {
            navMenuItemWithSubmenu.forEach((item) => {
                const submenuAction = document.createElement('div');
                submenuAction.classList.add('submenu-action');
                submenuAction.insertAdjacentHTML('afterbegin', this.chevronSVG);
                item.append(submenuAction);
            });
        }
    }


    /** Отвечает за переключение состояния бургера */
    burgerAnimate() {
        if (!this.clickWrapper.classList.contains("active")) {
            this.clickWrapper.children[0].className = "menu animate"
        } else {
            this.clickWrapper.children[0].className = "close animate"
        }
    }
}