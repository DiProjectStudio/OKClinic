export default class ServicesModule {
    constructor() {
        this.onInit();
    }

    onInit() {
        // this.searchTabsAction();
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

    /** Подставляет значение количества отзывов на странице услуги */
    reviewsCountSetup() {
        const reviews = document.querySelectorAll(".service-reviews .review");
        const reviewsCountElement = document.querySelector(".service-page-main .anchor-link[href='#reviews']");
        if (reviews && reviews.length > 0 && reviewsCountElement) {
            reviewsCountElement.textContent = `Отзывы (${reviews.length})`;
        } else if (reviews && reviews.length === 0 && reviewsCountElement){
            reviewsCountElement.textContent = `Отзывы (0)`;
        }
    }
}