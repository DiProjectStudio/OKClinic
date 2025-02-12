export default class FaqComponent{
    constructor(){
        this.faqItems = document.querySelectorAll(".faq-item");
        this.onInit();
    }

    onInit() {
       if (this.faqItems && this.faqItems.length > 0) {
           this.faqItems.forEach(faqItem => {
                this.faqClickHandler(faqItem)
           })
       }
    }

    faqClickHandler(faqItem) {
        faqItem.addEventListener("click", () => {
            const text = faqItem.querySelector(".faq-item__text");
            const button = faqItem.querySelector(".faq-item .btn-accordeon");

            // Переключение класса open для плавного открытия и закрытия
            if (text.classList.contains("opened")) {
                text.style.height = "0"; // Скрыть текст
                text.classList.remove("opened");
                button.classList.remove("btn-accordeon--out");
                button.classList.add("btn-accordeon--in");

                // После завершения перехода, скрыть элемент
                setTimeout(() => {
                    text.style.visibility = "hidden"; // Скрыть элемент
                }, 300); // Время должно совпадать с длительностью перехода
            } else {
                text.style.visibility = "visible"; // Сделать элемент видимым
                text.style.height = text.scrollHeight + "px"; // Установить высоту на scrollHeight
                text.classList.add("opened");
                button.classList.remove("btn-accordeon--in");
                button.classList.add("btn-accordeon--out");
            }
        });
    }
}