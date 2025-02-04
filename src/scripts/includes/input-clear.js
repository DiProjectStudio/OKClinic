export function inputClear() {
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