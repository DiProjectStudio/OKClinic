
/** Функционал комментария */
export default class ReviewComponent {
    constructor() {
        this.reviewItems = document.querySelectorAll('.review');
        this.onInit();
    }

    onInit() {
        if (this.reviewItems) {
            this.reviewItems.forEach((reviewItem) => {
                this.tabActions(reviewItem);
                this.hideZoomButton(reviewItem);
                reviewItem.addEventListener('click', () => {
                    this.hideZoomButton(reviewItem);
                });
                this.makeActiveSingleTab(reviewItem);
            });
        }

    }

    /** Скрывает кнопку открытия полного текста
     * комментария при выборе таба видео */
    hideZoomButton(reviewItem) {
        const videoTab = reviewItem.querySelector('[data-tab=\'video\']');
        const zoomButton = reviewItem.querySelector('.btn-zoom.btn-zoom--in');
        if (videoTab && videoTab.classList.contains('active')) {
            zoomButton.style.display = 'none';
        } else {
            zoomButton.style.display = 'flex';
        }
    }

    /** При наличии одного таба, делает его активным по умолчанию */
    makeActiveSingleTab(reviewItem) {
        const reviewTabs = reviewItem.querySelectorAll('.tab');
        if (reviewTabs.length === 1) {
            reviewTabs[0].classList.add('active');
        }
    }

    /** Переключение самих табов и получение их значений data-tab */
    tabActions(reviewItem) {
        const tabs = reviewItem.querySelectorAll(".tab");

        if (tabs.length > 1) {
            tabs.forEach(tab => {
                const activeTabData = tab.dataset.tab;
                // При загрузке комментария показываем контент только для активного таба
                if (tab.classList.contains("active")) {
                    this.showContent(activeTabData, reviewItem);
                }
                // Переключаем контент по клику на таб
                tab.addEventListener("click", () => {
                    tabs.forEach(el => el.classList.remove("active"));
                    tab.classList.add("active");
                    this.showContent(activeTabData, reviewItem);
                });
            });
        } else {
            // Функционал для отзывов в случае, когда только текст или видео в отзыве
            tabs.forEach(tab => {
                // Строчка нужна, если эти классы не будут добавлены в шаблоне
                // tab.classList.add("active");
                const activeTabData = tab.dataset.tab;
                this.showContent(activeTabData, reviewItem);
            });
        }
    }

    /** Передаем значение активного таба и селектор всего блока с табами */
    showContent(dataTab, reviewItem) {
        const tabContentElements = reviewItem.querySelectorAll('.tab-content');
        tabContentElements.forEach(tabContent => {
            const tabContentData = tabContent.dataset.content;

            if (tabContentData === dataTab) {
                tabContentElements.forEach(el => el.style.display = 'none');
                tabContent.style.display = 'block';
            }
        });
    }

}