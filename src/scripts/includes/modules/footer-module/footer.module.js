export default class FooterModule {
    constructor() {
        this.onInit();
    }

    onInit() {
        this.showDown();
    }

    /** Открытие списка */
    showDown() {
        const showdownItems = document.querySelectorAll(".links-block--showdown .links-block__title");

        showdownItems.forEach(item => {
            item.addEventListener("click", (e) => {
                const showdownContent = item.nextElementSibling;
                if (item.parentElement.classList.contains("showdown")) {
                    showdownContent.style.height = "0";
                    item.parentElement.classList.remove("showdown");

                    setTimeout(()=> {
                        showdownContent.style.visibility = "hidden";
                    }, 300);
                } else {
                    showdownContent.style.visibility = "visible";
                    showdownContent.style.height = showdownContent.scrollHeight + "px";
                    item.parentElement.classList.add("showdown");
                }
            })
        })

    }
}