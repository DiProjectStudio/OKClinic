
/** Функционал переключения табов со сменой контента */
export default class Tabs {
    constructor(selector) {
        this.selector = selector;
        this.tabsBlocks = document.querySelectorAll(this.selector);
        this.onInit();
    }

    onInit() {
        this.tabActions();
    }

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

    showContent(dataTab, tabBlock) {
        const tabContentElements= tabBlock.parentElement.querySelectorAll('.tab-content');
        tabContentElements.forEach(tabContent => {
            const tabContentData = tabContent.dataset.content;

            if (tabContentData === dataTab) {
                tabContentElements.forEach(el => el.classList.remove('showed'));
                tabContent.classList.add('showed');
            }
        })
    }
}