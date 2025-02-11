export default class ServicesModule {
    constructor() {
        this.onInit();
    }

    onInit() {
        // this.searchTabsAction();
        this.copyRightSideContent();
        this.reviewsCountSetup();
    }

    searchTabsAction() {
        const searchTabs = document.querySelectorAll(".services-page__search-tabs .search-tab");
        if (searchTabs && searchTabs.length > 0) {
            searchTabs.forEach(searchTab => {
                searchTab.addEventListener("click", () => {
                    searchTabs.forEach(el => el.classList.remove("active"));
                    searchTab.classList.add("active");
                })
            })
        }
    }
    /** Копирует блок с ценой в боковую секцию */
    copyRightSideContent() {
        const rightSideContent = document.querySelector(".service-page-rightside-content");
        const rightSide = document.querySelector(".service-wrapper__rightside");
        if (rightSide && rightSideContent) {
            rightSide.append(rightSideContent.cloneNode(true));
        }
    }

    /** Подставляет значение количества отзывов на странице врача */
    reviewsCountSetup() {
        const reviewsCount = document.querySelectorAll(".reviews .review")?.length;
        const reviewsCountElement = document.querySelector(".service-page-main .anchor-link[href='#reviews']");
        if (reviewsCount && reviewsCountElement) {
            reviewsCountElement.textContent = `Отзывы (${reviewsCount})`;
        }
    }
}