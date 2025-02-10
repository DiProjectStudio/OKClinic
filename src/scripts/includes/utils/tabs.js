/** Функционал переключения табов со сменой контента. Происходит поиск всех
 * блоков на странице с переданным в класс селектором. Используется на главной странице
 * и с компонентом комментария*/
export default function tabActions()  {

    /** Переключение самих табов и получение их значений data-tab */
    const tabsBlocks = document.querySelectorAll("[data-tabs-actions]");
    if (tabsBlocks && tabsBlocks.length > 0) {
        tabsBlocks.forEach((tabBlock) => {
            const tabs = tabBlock.querySelectorAll(".tab");

            if (tabs.length >= 2) {
                tabs.forEach(tab => {
                    const activeTabData = tab.dataset.tab;

                    // Переключаем контент по клику на таб
                    tab.addEventListener("click", () => {
                        tabs.forEach(el => el.classList.remove("active"));
                        tab.classList.add("active");
                        showContent(activeTabData, tabBlock);
                    })
                })
            }
        })
    }
}

/** Передаем значение активного таба и селектор всего блока с табами */
function showContent(dataTab, tabBlock) {
    const tabContentElements = tabBlock.parentElement.querySelectorAll(".tab-content");
    tabContentElements.forEach(tabContent => {
        const tabContentData = tabContent.dataset.content;

        if (tabContentData === dataTab) {
            tabContentElements.forEach(el => el.classList.remove("showed"));
            tabContent.classList.add("showed");
        }
    })
}