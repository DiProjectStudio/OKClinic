import Swiper from "swiper";
import { Navigation, Pagination, Autoplay, FreeMode, Thumbs, Scrollbar, Grid } from "swiper/modules";
import { sliderClone } from "./utils/slider-clone.js";

export function initializeSlider() {

    sliderClone(".programs__slider .swiper");
    const programsSlider = new Swiper(".programs__slider .swiper", {
        modules: [Navigation],
        slidesPerView: 1.2,
        spaceBetween: 12,
        navigation: {
            prevEl: ".programs__slider .arrow-prev",
            nextEl: ".programs__slider .arrow-next"
        },
        loop: true,
        breakpoints: {
            744: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            }
        }
    });

    sliderClone(".specialists__inner-slider .swiper");
    const specialistsSlider = new Swiper(".specialists__inner-slider .swiper", {
        modules: [Navigation, Grid],
        slidesPerView: 1,
        grid: {
            rows: 3,
            fill: "row"
        },
        navigation: {
            prevEl: ".specialists__inner-top-nav .arrow-prev",
            nextEl: ".specialists__inner-top-nav .arrow-next"
        },
        spaceBetween: 4,
        breakpoints: {
            744: {
                slidesPerView: 3,
                spaceBetween: 12,
                grid: {
                    rows: 1
                }
            },
            1200: {
                slidesPerView: 4,
                grid: {
                    rows: 1
                },
                spaceBetween: 12
            }
        }
    });


    sliderClone(".reviews .swiper");
    const reviewsSlider = new Swiper(".reviews .swiper", {
        modules: [Navigation],
        slidesPerView: 1.05,
        spaceBetween: 4,
        navigation: {
            prevEl: ".reviews .arrow-prev",
            nextEl: ".reviews .arrow-next"
        },
        breakpoints: {
            744: {
                slidesPerView: 2,
                spaceBetween: 12
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 12
            }
        }
    });

    const noteCardsSlider = new Swiper(".note-additional__inner-swiper.swiper", {
        modules: [Navigation, Grid],
        slidesPerView: 1.25,
        spaceBetween: 4,
        navigation: {
            prevEl: ".note-additional__inner-top .arrow-prev",
            nextEl: ".note-additional__inner-top .arrow-next"
        },
        breakpoints: {
            744: {
                slidesPerView: 1,
                grid: {
                    rows: 3,
                    fill: "row"
                },
            }
        }
    });

    sliderClone(".service-page__specialization .swiper");
    const servicePageSpecialistsSlider = new Swiper(".service-page__specialization .swiper", {
        modules: [Navigation, Grid],
        slidesPerView: 1,
        grid: {
            rows: 3,
            fill: "row"
        },
        navigation: {
            prevEl: ".service-page__specialization .arrow-prev",
            nextEl: ".service-page__specialization .arrow-next"
        },
        spaceBetween: 4,
        breakpoints: {
            744: {
                slidesPerView: 3,
                spaceBetween: 12,
                grid: {
                    rows: 1
                }
            },
            1200: {
                slidesPerView: 3,
                grid: {
                    rows: 1
                },
                spaceBetween: 12
            }
        }
    });

    sliderClone(".direction-specialists .swiper");
    const directionPageSpecialistsSlider = new Swiper(".direction-specialists .swiper", {
        modules: [Navigation, Grid],
        slidesPerView: 1,
        grid: {
            rows: 3,
            fill: "row"
        },
        navigation: {
            prevEl: ".direction-specialists .arrow-prev",
            nextEl: ".direction-specialists .arrow-next"
        },
        spaceBetween: 4,
        breakpoints: {
            744: {
                slidesPerView: 3,
                spaceBetween: 12,
                grid: {
                    rows: 1
                }
            },
            1200: {
                slidesPerView: 4,
                grid: {
                    rows: 1
                },
                spaceBetween: 12
            }
        }
    })

    sliderClone(".checkups__slider .swiper");
    const checkupsPageSlider = new Swiper(".checkups__slider .swiper", {
        modules: [Navigation],
        slidesPerView: 1.2,
        spaceBetween: 12,
        navigation: {
            prevEl: ".checkups__slider .arrow-prev",
            nextEl: ".checkups__slider .arrow-next"
        },
        breakpoints: {
            744: {
                slidesPerView: 3,
            }
        }
    });

    const testCardsSlider = new Swiper(".test-additional__swiper.swiper", {
        modules: [Navigation, Grid],
        slidesPerView: 1.05,
        spaceBetween: 4,
        navigation: {
            prevEl: ".test-additional__top .arrow-prev",
            nextEl: ".test-additional__top .arrow-next"
        },
        breakpoints: {
            744: {
                slidesPerView: 1,
                spaceBetween: 12,
                grid: {
                    rows: 3,
                    fill: "row"
                },
            },
        }
    });

    const clinicPageLicensesSlider = new Swiper(".clinic-licenses .swiper", {
        modules: [Navigation],
        spaceBetween: 12,
        slidesPerView: 1.2,
        navigation: {
            prevEl: ".clinic-licenses .arrow-prev",
            nextEl: ".clinic-licenses .arrow-next"
        },
        breakpoints: {
            744: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 4,
            }
        }
    });

    const clinicPageNewsSlider = new Swiper(".clinic-news .swiper", {
        modules: [Navigation, Grid],
        spaceBetween: 12,
        slidesPerView: 1,
        grid: {
            rows: 3,
            fill: "row"
        },
        navigation: {
            prevEl: ".clinic-news .arrow-prev",
            nextEl: ".clinic-news .arrow-next"
        },
        breakpoints: {
            744: {
                slidesPerView: 2.55,
                grid: {
                    rows: 1,
                }
            },
            1200: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                }
            }
        }
    });

    const newsInnerPageSlider = new Swiper(".news-inner-another .swiper", {
        modules: [Navigation, Grid],
        slidesPerView: 1,
        spaceBetween: 10,
        grid: {
            rows: 3,
            fill: "row"
        },
        navigation: {
            prevEl: ".news-inner-another .arrow-prev",
            nextEl: ".news-inner-another .arrow-next"
        },
        breakpoints: {
            744: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                }
            }
        }
    });

    sliderClone(".promotions-checkups-popular .swiper");
    const promotionsPageCheckupsSlider = new Swiper(".promotions-checkups-popular .swiper", {
        modules: [Navigation, Grid],
        slidesPerView: 1,
        spaceBetween: 12,
        grid: {
            rows: 3,
            fill: "row"
        },
        navigation: {
            prevEl: ".promotions-checkups-popular .arrow-prev",
            nextEl: ".promotions-checkups-popular .arrow-next"
        },
        breakpoints: {
            744: {
                slidesPerView: 3,
                grid: {
                    rows: 1
                }
            }
        }
    });
    
    const promotionPagePromotionsSlider = new Swiper(".promotion-another .swiper", {
        modules: [Navigation, Grid],
        slidesPerView: 1,
        spaceBetween: 12,
        navigation: {
            prevEl: ".promotion-another .arrow-prev",
            nextEl: ".promotion-another .arrow-next"
        },
        breakpoints: {
            744: {
                slidesPerView: 1,
                grid: {
                    rows: 3,
                    fill: "row"
                }
            },
            1200: {
                slidesPerView: 3,
                grid: {
                    rows: 1
                }
            }
        }
    });
}
