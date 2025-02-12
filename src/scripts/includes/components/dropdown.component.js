export default class DropdownComponent {
    constructor() {
        this.dropdownComponents = document.querySelectorAll(".dropdown");
        this.onInit();
    }

    onInit() {
        if (this.dropdownComponents) {
            this.dropdownComponents.forEach(dropdownComponent => {
                this.dropdownClickHandler(dropdownComponent);
            });
        }
    }

    dropdownClickHandler(dropdownComponent) {
        const dropdownTop = dropdownComponent.querySelector(".dropdown__top");
        const dropdownContent = dropdownComponent.querySelector(".dropdown__content");
        dropdownTop.addEventListener("click", ()=> {
            if (dropdownComponent.classList.contains("opened")) {
                dropdownContent.style.height = "0";
                dropdownComponent.classList.remove("opened");

                setTimeout(() => {
                    dropdownContent.style.visibility = "hidden";
                }, 300);
            } else {
                dropdownContent.style.visibility = "visible";
                dropdownContent.style.height = dropdownContent.scrollHeight + "px";
                dropdownComponent.classList.add("opened");
            }
        });
    }
}