
/** Функционал страниц всех врачей и одного врача */
export default class DoctorsModule {
    constructor() {
        this.onInit();
    }

    onInit() {
        this.doctorsFilter();
        this.aboutDoctorLinks();
    }

    /** Фильтр по специальностям на странице всех врачей*/
    doctorsFilter() {
        const doctorsFilterTabs = document.querySelectorAll('.doctors__inner .filter-item');

        if (doctorsFilterTabs && doctorsFilterTabs.length > 0) {
            doctorsFilterTabs.forEach((filterTab) => {
                filterTab.addEventListener('click', function () {
                    this.classList.add('active');
                    const closeBtn = this.querySelector('.close-btn');
                    const that = this;
                    closeBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        that.classList.remove('active');
                    })
                })
            })
        }
    }
    /** Функционал табов с анкерными ссылками на контент на странице врача */
    aboutDoctorLinks() {
        const aboutLinks = document.querySelectorAll('.doctor .doctor__link');
        aboutLinks.forEach((aboutLink) => {
            aboutLink.addEventListener('click', function () {
                aboutLinks.forEach(el => el.classList.remove('active'));
                aboutLink.classList.add('active');
            })
        })
    }
}