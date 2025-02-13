import { _ as _default, O as Oe, S as Swiper, N as Navigation, G as Grid, I as Inputmask } from "./vendor.min.js";

function getBrowserName() {
    const userAgent = navigator.userAgent;
    if (userAgent.includes("Firefox")) return "firefox"; else if (userAgent.includes("Chrome")) return "chrome"; else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) return "safari"; else if (userAgent.includes("Edge")) return "edge"; else return null;
}

function initializeMap() {
    const map = document.getElementById("map");
    if (map) {
        let init = function() {
            myMap = new ymaps.Map("map", {
                center: [ 59.90526160099391, 30.322832279052324 ],
                zoom: 17,
                controls: []
            });
            $.each(placemarks, (function(index, obj) {
                let myPlacemark = new ymaps.Placemark(obj.coordinates, {}, {
                    iconLayout: "default#image",
                    iconImageHref: "assets/images/icon_placemark.svg",
                    iconImageSize: [ 68, 68 ]
                });
                myMap.geoObjects.add(myPlacemark);
            }));
            _default(myMap, {
                preventScroll: true,
                preventTouch: true
            });
        };
        let myMap;
        ymaps.ready(init);
        let resizeTimer;
        window.addEventListener("resize", (() => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout((function() {
                if (myMap) {
                    myMap.destroy();
                    myMap = null;
                }
                init();
            }), 100);
        }));
    }
}

function initializePopup() {
    window.Fancybox = Oe;
    Oe.bind("[data-fancybox]");
}

function sliderClone(parent) {
    const allSlides = document.querySelectorAll(`${parent} .swiper-slide`);
    const slidesCount = allSlides.length;
    let iterationCount = 0;
    if (slidesCount >= 9 || !slidesCount) return;
    iterationCount = Math.floor(9 / slidesCount);
    for (let i = 0; i < iterationCount - 1; i++) allSlides.forEach((slide => {
        const slidesParent = slide.parentElement;
        let clonedSlide = slide.cloneNode(true);
        slidesParent.append(clonedSlide);
    }));
}

function initializeSlider() {
    sliderClone(".programs__slider .swiper");
    new Swiper(".programs__slider .swiper", {
        modules: [ Navigation ],
        slidesPerView: 1.2,
        spaceBetween: 12,
        navigation: {
            prevEl: ".programs__slider .arrow-prev",
            nextEl: ".programs__slider .arrow-next"
        },
        loop: true,
        breakpoints: {
            744: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            }
        }
    });
    sliderClone(".specialists__inner-slider .swiper");
    new Swiper(".specialists__inner-slider .swiper", {
        modules: [ Navigation, Grid ],
        slidesPerView: 1,
        grid: {
            rows: 3,
            fill: "row"
        },
        navigation: {
            prevEl: ".specialists__inner-top-nav .arrow-prev",
            nextEl: ".specialists__inner-top-nav .arrow-next"
        },
        spaceBetween: 4,
        breakpoints: {
            744: {
                slidesPerView: 3,
                spaceBetween: 12,
                grid: {
                    rows: 1
                }
            },
            1200: {
                slidesPerView: 4,
                grid: {
                    rows: 1
                },
                spaceBetween: 12
            }
        }
    });
    sliderClone(".reviews .swiper");
    new Swiper(".reviews .swiper", {
        modules: [ Navigation ],
        slidesPerView: 1.05,
        spaceBetween: 4,
        navigation: {
            prevEl: ".reviews .arrow-prev",
            nextEl: ".reviews .arrow-next"
        },
        breakpoints: {
            744: {
                slidesPerView: 2,
                spaceBetween: 12
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 12
            }
        }
    });
    new Swiper(".note-additional__inner-swiper.swiper", {
        modules: [ Navigation, Grid ],
        slidesPerView: 1.25,
        spaceBetween: 4,
        navigation: {
            prevEl: ".note-additional__inner-top .arrow-prev",
            nextEl: ".note-additional__inner-top .arrow-next"
        },
        breakpoints: {
            744: {
                slidesPerView: 1,
                grid: {
                    rows: 3,
                    fill: "row"
                }
            }
        }
    });
    sliderClone(".service-page__specialization .swiper");
    new Swiper(".service-page__specialization .swiper", {
        modules: [ Navigation, Grid ],
        slidesPerView: 1,
        grid: {
            rows: 3,
            fill: "row"
        },
        navigation: {
            prevEl: ".service-page__specialization .arrow-prev",
            nextEl: ".service-page__specialization .arrow-next"
        },
        spaceBetween: 4,
        breakpoints: {
            744: {
                slidesPerView: 3,
                spaceBetween: 12,
                grid: {
                    rows: 1
                }
            },
            1200: {
                slidesPerView: 3,
                grid: {
                    rows: 1
                },
                spaceBetween: 12
            }
        }
    });
    sliderClone(".direction-specialists .swiper");
    new Swiper(".direction-specialists .swiper", {
        modules: [ Navigation, Grid ],
        slidesPerView: 1,
        grid: {
            rows: 3,
            fill: "row"
        },
        navigation: {
            prevEl: ".direction-specialists .arrow-prev",
            nextEl: ".direction-specialists .arrow-next"
        },
        spaceBetween: 4,
        breakpoints: {
            744: {
                slidesPerView: 3,
                spaceBetween: 12,
                grid: {
                    rows: 1
                }
            },
            1200: {
                slidesPerView: 4,
                grid: {
                    rows: 1
                },
                spaceBetween: 12
            }
        }
    });
    sliderClone(".checkups__slider .swiper");
    new Swiper(".checkups__slider .swiper", {
        modules: [ Navigation ],
        slidesPerView: 1.2,
        spaceBetween: 12,
        navigation: {
            prevEl: ".checkups__slider .arrow-prev",
            nextEl: ".checkups__slider .arrow-next"
        },
        breakpoints: {
            744: {
                slidesPerView: 3
            }
        }
    });
}

function actualYear() {
    const actualDate =  new Date;
    const year = actualDate.getFullYear();
    const footerDate = document.querySelector(".footer__rights span");
    if (footerDate) footerDate.innerText = year;
}

class Overlay {
    // Включить
    static showOverlay() {
        this.overlay = document.getElementById("overlay");
        this.overlay.classList.add("show");
    }
    // Выключить
    static hideOverlay() {
        this.overlay.classList.remove("show");
    }
}

class HeaderModule {
    constructor() {
        this.clickWrapper = document.getElementById("clickWrapper");
        this.headerElement = document.getElementById("header");
        this.navMenuJS = document.getElementById("navMenuJS");
        this.headerNav = document.querySelector(".header__inner-nav-bottom");
        this.chevronSVG = `\n        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.21967 5.21967C8.51256 4.92678 8.98744 4.92678 9.28033 5.21967L13.5303 9.46967C13.8232 9.76256 13.8232 10.2374 13.5303 10.5303L9.28033 14.7803C8.98744 15.0732 8.51256 15.0732 8.21967 14.7803C7.92678 14.4874 7.92678 14.0126 8.21967 13.7197L11.9393 10L8.21967 6.28033C7.92678 5.98744 7.92678 5.51256 8.21967 5.21967Z" fill="#1C1C1C"/>\n        </svg>`;
        this.headerContacts = document.querySelector(".header__inner-nav-top");
        this.headerSearch = document.querySelector(".header__inner-additional-bottom");
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
    /** Функция обрабатывает клик по бургерному меню */    burgerClickHandler() {
        if (this.clickWrapper) {
            this.clickWrapper.addEventListener("click", (() => {
                this.clickWrapper.classList.toggle("active");
                this.navMenuJS.classList.toggle("active");
                document.body.classList.toggle("overflow-hidden");
                if (this.navMenuJS.classList.contains("active")) {
                    Overlay.showOverlay();
                    this.overlayClickHandler();
                } else Overlay.hideOverlay();
                this.burgerAnimate();
            }));
            this.createSubmenu();
        }
    }
    overlayClickHandler() {
        document.getElementById("overlay").addEventListener("click", (() => {
            this.closeBurger();
            this.burgerAnimate();
        }));
    }
    closeBurger() {
        this.navMenuJS.classList.remove("active");
        this.clickWrapper.classList.remove("active");
        Overlay.hideOverlay();
        document.body.classList.remove("overflow-hidden");
    }
    /** Копирует элемент .header__inner-additional-bottom в .header__inner */    copyAdditionalBottomBlock() {
        const additionalBottomElement = document.querySelector(".header__inner-additional-bottom");
        const headerInnerElement = document.querySelector(".header__inner");
        const clonedAdditionalBottomElement = additionalBottomElement.cloneNode(true);
        clonedAdditionalBottomElement.classList.add("copy");
        if (headerInnerElement) headerInnerElement.insertBefore(clonedAdditionalBottomElement, this.clickWrapper);
    }
    /** Изменение стилей хедера при скролле */    scrollHeader() {
        window.addEventListener("scroll", (e => {
            if (window.scrollY > 0) this.headerElement.classList.add("scroll"); else this.headerElement.classList.remove("scroll");
        }));
    }
    /** Создаем меню для мобильной версии */    createMobileNavbar() {
        if (this.navMenuJS) {
            this.navMenuJS.append(this.headerNav.cloneNode(true));
            this.navMenuJS.append(this.headerContacts.cloneNode(true));
            this.navMenuJS.append(this.headerSearch.cloneNode(true));
        }
    }
    /** Функционал закрытия и открытия подменю */    mobileMenuActions() {
        const submenuActionElements = document.querySelectorAll(".submenu-action");
        const submenuBlock = document.querySelector(".submenu-block");
        if (submenuActionElements && submenuBlock) submenuActionElements.forEach((element => {
            element.addEventListener("click", (event => {
                submenuBlock.style.display = "block";
                const submenuTitle = document.createElement("div");
                submenuTitle.classList.add("submenu-block__title");
                submenuTitle.append(element.parentElement.querySelector("a").cloneNode(true));
                const submenuClose = document.createElement("div");
                submenuClose.classList.add("submenu-close");
                submenuClose.insertAdjacentHTML("afterbegin", this.chevronSVG);
                submenuTitle.prepend(submenuClose);
                submenuBlock.append(submenuTitle);
                submenuBlock.append(element.previousElementSibling.cloneNode(true));
                const headerNavInJsBlock = document.querySelector(".nav-menu-js .header__inner-nav-bottom");
                headerNavInJsBlock.classList.add("submenu-opened");
                submenuClose.addEventListener("click", (event2 => {
                    submenuBlock.querySelector(".submenu-block__title").remove();
                    submenuBlock.querySelector(".submenu").remove();
                    submenuBlock.style.display = "none";
                    headerNavInJsBlock.classList.remove("submenu-opened");
                }));
            }));
        }));
    }
    /** Создаем блок для пунктов подменю */    createSubmenu() {
        const submenuBlock = document.createElement("div");
        submenuBlock.classList.add("submenu-block");
        this.navMenuJS.append(submenuBlock);
    }
    /** Вставляем svg со стрелкой для каждого пункта меню, имеющего подменю */    insertSVGToMenuItems() {
        const navMenuItemWithSubmenu = document.querySelectorAll(".nav-menu-js .header__inner-nav-bottom nav > ul > .with-submenu");
        if (navMenuItemWithSubmenu) navMenuItemWithSubmenu.forEach((item => {
            const submenuAction = document.createElement("div");
            submenuAction.classList.add("submenu-action");
            submenuAction.insertAdjacentHTML("afterbegin", this.chevronSVG);
            item.append(submenuAction);
        }));
    }
    /** Отвечает за переключение состояния бургера */    burgerAnimate() {
        if (!this.clickWrapper.classList.contains("active")) this.clickWrapper.children[0].className = "menu animate"; else this.clickWrapper.children[0].className = "close animate";
    }
}

class FooterModule {
    constructor() {
        this.onInit();
    }
    onInit() {
        this.showDown();
    }
    /** Открытие списка */    showDown() {
        const showdownItems = document.querySelectorAll(".links-block--showdown .links-block__title");
        showdownItems.forEach((item => {
            item.addEventListener("click", (e => {
                item.parentElement.classList.toggle("showdown");
            }));
        }));
    }
}

class SearchModule {
    constructor() {
        this.onInit();
    }
    onInit() {
        this.searchFilter();
        this.inputClear();
    }
    searchFilter() {
        const filterTabBlocks = document.querySelectorAll(".filter-tabs");
        if (filterTabBlocks && filterTabBlocks.length > 0) filterTabBlocks.forEach((filterTabsBlock => {
            const filterTabs = filterTabsBlock.querySelectorAll(".filter-tab");
            filterTabs.forEach((filterTab => {
                filterTab.addEventListener("click", (() => {
                    filterTabs.forEach((el => el.classList.remove("active")));
                    filterTab.classList.add("active");
                }));
            }));
        }));
    }
    /** Функционал крестика в поле поиска для очистки текста */    inputClear() {
        const clearButtons = document.querySelectorAll(".has--close-btn span");
        const inputs = document.querySelectorAll(".has--close-btn input");
        if (clearButtons) clearButtons.forEach((clearButton => {
            clearButton.addEventListener("click", (function() {
                const searchInput = clearButton.previousElementSibling;
                searchInput.value = "";
                searchInput.focus();
                clearButton.style.display = "none";
            }));
        }));
        if (inputs) inputs.forEach((input => {
            input.addEventListener("input", (function() {
                const clearButton = input.nextElementSibling;
                if (input.value.length > 0) clearButton.style.display = "block"; else clearButton.style.display = "none";
            }));
        }));
    }
}

class DoctorsModule {
    constructor() {
        this.onInit();
    }
    onInit() {
        this.doctorsFilter();
        this.reviewsCountSetup();
    }
    /** Фильтр по специальностям на странице всех врачей*/    doctorsFilter() {
        const doctorsFilterTabs = document.querySelectorAll(".doctors__inner .filter-item");
        if (doctorsFilterTabs && doctorsFilterTabs.length > 0) doctorsFilterTabs.forEach((filterTab => {
            filterTab.addEventListener("click", (function() {
                this.classList.add("active");
                const closeBtn = this.querySelector(".close-btn");
                const that = this;
                closeBtn.addEventListener("click", (e => {
                    e.stopPropagation();
                    that.classList.remove("active");
                }));
            }));
        }));
    }
    /** Подставляет значение количества отзывов на странице врача */    reviewsCountSetup() {
        const reviews = document.querySelectorAll(".doctor-reviews .review");
        const doctorReviewsCountElement = document.querySelector(".doctor .anchor-link[href='#reviews']");
        if (reviews && reviews.length > 0 && doctorReviewsCountElement) doctorReviewsCountElement.textContent = `Отзывы (${reviews.length})`; else if (reviews && reviews.length === 0 && doctorReviewsCountElement) doctorReviewsCountElement.textContent = `Отзывы (0)`;
    }
}

class ReviewComponent {
    constructor() {
        this.reviewItems = document.querySelectorAll(".review");
        this.onInit();
    }
    onInit() {
        if (this.reviewItems) this.reviewItems.forEach((reviewItem => {
            this.tabActions(reviewItem);
            this.hideZoomButton(reviewItem);
            reviewItem.addEventListener("click", (() => {
                this.hideZoomButton(reviewItem);
            }));
            this.makeActiveSingleTab(reviewItem);
        }));
    }
    /** Скрывает кнопку открытия полного текста
   * комментария при выборе таба видео */    hideZoomButton(reviewItem) {
        const videoTab = reviewItem.querySelector("[data-tab='video']");
        const zoomButton = reviewItem.querySelector(".btn-zoom.btn-zoom--in");
        if (videoTab && videoTab.classList.contains("active")) zoomButton.style.display = "none"; else zoomButton.style.display = "flex";
    }
    /** При наличии одного таба, делает его активным по умолчанию */    makeActiveSingleTab(reviewItem) {
        const reviewTabs = reviewItem.querySelectorAll(".tab");
        if (reviewTabs.length === 1) reviewTabs[0].classList.add("active");
    }
    /** Переключение самих табов и получение их значений data-tab */    tabActions(reviewItem) {
        const tabs = reviewItem.querySelectorAll(".tab");
        if (tabs.length > 1) tabs.forEach((tab => {
            const activeTabData = tab.dataset.tab;
            if (tab.classList.contains("active")) this.showContent(activeTabData, reviewItem);
            tab.addEventListener("click", (() => {
                tabs.forEach((el => el.classList.remove("active")));
                tab.classList.add("active");
                this.showContent(activeTabData, reviewItem);
            }));
        })); else tabs.forEach((tab => {
            const activeTabData = tab.dataset.tab;
            this.showContent(activeTabData, reviewItem);
        }));
    }
    /** Передаем значение активного таба и селектор всего блока с табами */    showContent(dataTab, reviewItem) {
        const tabContentElements = reviewItem.querySelectorAll(".tab-content");
        tabContentElements.forEach((tabContent => {
            const tabContentData = tabContent.dataset.content;
            if (tabContentData === dataTab) {
                tabContentElements.forEach((el => el.style.display = "none"));
                tabContent.style.display = "block";
            }
        }));
    }
}

class NotesModule {
    constructor() {
        this.onInit();
    }
    onInit() {
        this.copyPriceBlock();
    }
    copyPriceBlock() {
        const priceBlock = document.querySelector(".note-main .note-main__price");
        const rightSide = document.querySelector(".note-wrapper__rightside");
        if (rightSide && priceBlock) rightSide.append(priceBlock.cloneNode(true));
    }
}

class ServicesModule {
    constructor() {
        this.onInit();
    }
    onInit() {
        this.reviewsCountSetup();
    }
    searchTabsAction() {
        const searchTabs = document.querySelectorAll(".services-page__search-tabs .search-tab");
        if (searchTabs && searchTabs.length > 0) searchTabs.forEach((searchTab => {
            searchTab.addEventListener("click", (() => {
                searchTabs.forEach((el => el.classList.remove("active")));
                searchTab.classList.add("active");
            }));
        }));
    }
    /** Подставляет значение количества отзывов на странице услуги */    reviewsCountSetup() {
        const reviews = document.querySelectorAll(".service-reviews .review");
        const reviewsCountElement = document.querySelector(".service-page-main .anchor-link[href='#reviews']");
        if (reviews && reviews.length > 0 && reviewsCountElement) reviewsCountElement.textContent = `Отзывы (${reviews.length})`; else if (reviews && reviews.length === 0 && reviewsCountElement) reviewsCountElement.textContent = `Отзывы (0)`;
    }
}

class DropdownComponent {
    constructor() {
        this.dropdownComponents = document.querySelectorAll(".dropdown");
        this.onInit();
    }
    onInit() {
        if (this.dropdownComponents) this.dropdownComponents.forEach((dropdownComponent => {
            this.dropdownClickHandler(dropdownComponent);
        }));
    }
    dropdownClickHandler(dropdownComponent) {
        const dropdownTop = dropdownComponent.querySelector(".dropdown__top");
        const dropdownContent = dropdownComponent.querySelector(".dropdown__content");
        dropdownTop.addEventListener("click", (() => {
            if (dropdownComponent.classList.contains("opened")) {
                dropdownContent.style.height = "0";
                dropdownComponent.classList.remove("opened");
                setTimeout((() => {
                    dropdownContent.style.visibility = "hidden";
                }), 300);
            } else {
                dropdownContent.style.visibility = "visible";
                dropdownContent.style.height = dropdownContent.scrollHeight + "px";
                dropdownComponent.classList.add("opened");
            }
        }));
    }
}

class FaqComponent {
    constructor() {
        this.faqItems = document.querySelectorAll(".faq-item");
        this.onInit();
    }
    onInit() {
        if (this.faqItems && this.faqItems.length > 0) this.faqItems.forEach((faqItem => {
            this.faqClickHandler(faqItem);
        }));
    }
    faqClickHandler(faqItem) {
        faqItem.addEventListener("click", (() => {
            const text = faqItem.querySelector(".faq-item__text");
            const button = faqItem.querySelector(".faq-item .btn-accordeon");
            if (text.classList.contains("opened")) {
                text.style.height = "0";
                text.classList.remove("opened");
                button.classList.remove("btn-accordeon--out");
                button.classList.add("btn-accordeon--in");
                setTimeout((() => {
                    text.style.visibility = "hidden";
                }), 300);
            } else {
                text.style.visibility = "visible";
                text.style.height = text.scrollHeight + "px";
                text.classList.add("opened");
                button.classList.remove("btn-accordeon--in");
                button.classList.add("btn-accordeon--out");
            }
        }));
    }
}

class App {
    constructor() {
        this.onInit();
    }
    onInit() {
        new HeaderModule;
        new FooterModule;
        new SearchModule;
        new DoctorsModule;
        new ReviewComponent;
        new DropdownComponent;
        new FaqComponent;
        new NotesModule;
        new ServicesModule;
    }
}

function buttonTagBlockClone() {
    const tagBlockInner = document.querySelector(".tag-block .tag-block__inner");
    const button = document.querySelector(".tag-block .btn");
    if (button && tagBlockInner) {
        const buttonClone = button.cloneNode(true);
        buttonClone.classList.add("clone");
        tagBlockInner.append(buttonClone);
    }
}

function tabActions() {
    const tabsBlocks = document.querySelectorAll("[data-tabs-actions]");
    if (tabsBlocks && tabsBlocks.length > 0) tabsBlocks.forEach((tabBlock => {
        const tabs = tabBlock.querySelectorAll(".tab");
        if (tabs.length >= 2) tabs.forEach((tab => {
            const activeTabData = tab.dataset.tab;
            tab.addEventListener("click", (() => {
                tabs.forEach((el => el.classList.remove("active")));
                tab.classList.add("active");
                showContent(activeTabData, tabBlock);
            }));
        }));
    }));
}

function showContent(dataTab, tabBlock) {
    const tabContentElements = tabBlock.parentElement.querySelectorAll(".tab-content");
    tabContentElements.forEach((tabContent => {
        const tabContentData = tabContent.dataset.content;
        if (tabContentData === dataTab) {
            tabContentElements.forEach((el => el.classList.remove("showed")));
            tabContent.classList.add("showed");
        }
    }));
}

function anchorLinksAction() {
    const anchorLinksSections = document.querySelectorAll(".anchor-links");
    anchorLinksSections.forEach((anchorLinksSection => {
        const anchorLinks = anchorLinksSection.querySelectorAll(".anchor-link");
        anchorLinks.forEach((anchorLink => {
            anchorLink.addEventListener("click", (() => {
                anchorLinks.forEach((el => el.classList.remove("active")));
                anchorLink.classList.add("active");
            }));
        }));
    }));
}

document.addEventListener("DOMContentLoaded", (event => {
    getBrowserName();
    initializeMap();
    initializePopup();
    initializeSlider();
    actualYear();
    tabActions();
    buttonTagBlockClone();
    new App;
    anchorLinksAction();
}));

const browser = getBrowserName();

if (browser) document.documentElement.classList.add("browser-" + browser);

Inputmask({
    mask: "+7 (999) 999-99-99",
    showMaskOnHover: false,
    showMaskOnFocus: true,
    onBeforePaste: (pastedValue, opts) => pastedValue.replace(/^8/, "")
}).mask("[data-phone-number]");

Inputmask({
    regex: "^[0-9]*$",
    allowMinus: false,
    showMaskOnHover: false,
    showMaskOnFocus: false,
    placeholder: ""
}).mask("[data-number-only]");

Inputmask({
    alias: "numeric",
    groupSeparator: " ",
    autoGroup: true,
    digits: 0,
    rightAlign: false
}).mask("[data-financial]");
