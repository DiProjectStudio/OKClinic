import HeaderModule from "./header-module/header.module.js";
import FooterModule from "./footer-module/footer.module.js";
import SearchModule from "./search-module/search.module.js";
import DoctorsModule from "./doctors-module/doctors.module.js";

/** Общий класс для запуска остальных модулей */
export default class App {
    constructor() {
        this.onInit();
    }

    onInit() {
        new HeaderModule();
        new FooterModule();
        new SearchModule();
        new DoctorsModule();
    }
}