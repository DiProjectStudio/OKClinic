
/** Функционал строки поиска и страницы результатов поиска */
export default class SearchModule {
    constructor() {
        this.onInit();
    }

    onInit() {
        this.searchFilter();
        this.inputClear();
    }

    searchFilter() {
        const filterTabBlocks = document.querySelectorAll('.filter-tabs');
        if (filterTabBlocks && filterTabBlocks.length > 0) {
            filterTabBlocks.forEach((filterTabsBlock) => {
                const filterTabs = filterTabsBlock.querySelectorAll('.filter-tab');
                filterTabs.forEach(filterTab => {
                    filterTab.addEventListener('click', () => {
                        filterTabs.forEach(el => el.classList.remove('active'));
                        filterTab.classList.add('active');
                    })
                })
            })
        }
    }

    /** Функционал крестика в поле поиска для очистки текста */
    inputClear() {
        const clearButtons = document.querySelectorAll('.has--close-btn span');
        const inputs = document.querySelectorAll('.has--close-btn input');

        if (clearButtons) {
            clearButtons.forEach((clearButton) => {
                clearButton.addEventListener('click', function() {
                    const searchInput = clearButton.previousElementSibling;
                    searchInput.value = ''; // Очищаем поле ввода
                    searchInput.focus(); // Возвращаем фокус на поле ввода
                    clearButton.style.display = 'none'; // Скрываем кнопку очистки
                });
            })
        }

        if (inputs) {
            inputs.forEach(input => {
                input.addEventListener('input', function() {
                    const clearButton = input.nextElementSibling;
                    if (input.value.length > 0) {
                        clearButton.style.display = 'block'; // Показываем кнопку, если есть текст
                    } else {
                        clearButton.style.display = 'none'; // Скрываем кнопку, если текст отсутствует
                    }
                });
            })
        }
    }
}