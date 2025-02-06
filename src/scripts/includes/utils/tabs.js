/** Функционал переключения табов со сменой контента. Происходит поиск всех
 * блоков на странице с переданным в класс селектором. Используется на главной странице
 * и с компонентом комментария*/
export default class Tabs {
    constructor(selector) {
        this.selector = selector;
        this.tabsBlocks = document.querySelectorAll(this.selector); // [data-tabs-actions]
        this.onInit();
    }

    onInit() {
        this.tabActions();
    }

    /** Переключение самих табов и получение их значений data-tab */
    tabActions() {
        if (this.tabsBlocks && this.tabsBlocks.length > 0) {
            this.tabsBlocks.forEach((tabBlock) => {
                const tabs = tabBlock.querySelectorAll('.tab');

                if (tabs.length > 1) {
                    tabs.forEach(tab => {
                        const activeTabData = tab.dataset.tab;
                        // При загрузке комментария показываем контент только для активного таба
                        if (tab.classList.contains('active')) {
                            this.showContent(activeTabData, tabBlock);
                        }
                        // Переключаем контент по клику на таб
                        tab.addEventListener('click', () => {
                            tabs.forEach(el => el.classList.remove('active'));
                            tab.classList.add('active');
                            this.showContent(activeTabData, tabBlock);
                        })
                    })
                } else {
                    // Функционал для отзывов в случае, когда только текст или видео в отзыве
                    tabs.forEach(tab => {
                        // tab.classList.add('active');
                        const activeTabData = tab.dataset.tab;
                        this.showContent(activeTabData, tabBlock);
                    })
                }
            })
        }
    }

    /** Передаем значение активного таба и селектор всего блока с табами */
    showContent(dataTab, tabBlock) {
        const tabContentElements = tabBlock.parentElement.querySelectorAll('.tab-content');
        tabContentElements.forEach(tabContent => {
            const tabContentData = tabContent.dataset.content;

            if (tabContentData === dataTab) {
                tabContentElements.forEach(el => el.classList.remove('showed'));
                tabContent.classList.add('showed');
            }
        })
    }
}