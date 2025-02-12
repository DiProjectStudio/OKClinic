import HeaderModule from "./header-module/header.module.js";
import FooterModule from "./footer-module/footer.module.js";
import SearchModule from "./search-module/search.module.js";
import DoctorsModule from "./doctors-module/doctors.module.js";
import ReviewComponent from '../components/review.component.js';
import { NotesModule } from './notes-module/notes.module.js';
import ServicesModule from "./services-module/services.module.js";
import DropdownComponent from "../components/dropdown.component.js";
import FaqComponent from "../components/faq.component.js";

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
        new ReviewComponent();
        new DropdownComponent();
        new FaqComponent();
        new NotesModule();
        new ServicesModule();
    }
}