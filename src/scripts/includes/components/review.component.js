/** Функционал комментария */
export default class ReviewComponent {
    constructor() {
        this.reviewItems = document.querySelectorAll(".review");

        this.onInit();
    }

    onInit() {
        if (this.reviewItems) {
            this.reviewItems.forEach((reviewItem) => {
                this.hideZoomButton(reviewItem);
                reviewItem.addEventListener("click", () => {
                    this.hideZoomButton(reviewItem);
                });

                this.makeActiveSingleTab(reviewItem);
            })
        }

    }

    /** Скрывает кнопку открытия полного текста
     * комментария при выборе таба видео */
    hideZoomButton(reviewItem) {
        const videoTab = reviewItem.querySelector("[data-tab='video']");
        const zoomButton = reviewItem.querySelector(".btn-zoom.btn-zoom--in");
        if (videoTab && videoTab.classList.contains("active")) {
            zoomButton.style.display = "none";
        } else {
            zoomButton.style.display = "flex";
        }
    }

    /** При наличии одного таба, делает его активным по умолчанию */
    makeActiveSingleTab(reviewItem) {
        const reviewTabs = reviewItem.querySelectorAll(".tab");
        if (reviewTabs.length === 1) {
            reviewTabs[0].classList.add("active");
        }
    }


}