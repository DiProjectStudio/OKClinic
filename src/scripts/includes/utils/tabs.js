
/** Функционал переключения табов со сменой контента. Происходит поиск всех
 * блоков на странице с переданным в класс селектором*/
export default class Tabs {
    constructor(selector) {
        this.selector = selector;
        this.tabsBlocks = document.querySelectorAll(this.selector); // [data-tabs-actions]
        this.onInit();
    }

    onInit() {
        this.tabActions();
    }
    /** Переключение самих табов и получение их значений data-tab  */
    tabActions() {
        if (this.tabsBlocks && this.tabsBlocks.length > 0) {
            this.tabsBlocks.forEach((tabBlock) => {
                const tabs = tabBlock.querySelectorAll('.tab');
                tabs.forEach(tab => {
                    tab.addEventListener('click',  ()=> {
                        tabs.forEach(el => el.classList.remove('active'));
                        tab.classList.add('active');
                        const activeTabData = tab.dataset.tab;

                        this.showContent(activeTabData, tabBlock);
                    })
                })
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