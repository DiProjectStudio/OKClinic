import ymapsTouchScroll from 'ymaps-touch-scroll';

export function initializeMap() {
    const map = document.getElementById('map');

    if (map) {
        let myMap;
        ymaps.ready(init);

        function init() {
            myMap = new ymaps.Map('map', {
                center: [59.90526160099391,30.322832279052324],
                zoom: 17,
                controls: []
            });

            $.each(placemarks, function (index, obj) {
                let myPlacemark = new ymaps.Placemark(obj.coordinates, {},
                    {
                        iconLayout: 'default#image',
                        iconImageHref: 'assets/images/icon_placemark.svg',
                        iconImageSize: [68, 68],
                    }
                );

                myMap.geoObjects.add(myPlacemark);
            });

            ymapsTouchScroll(myMap, {preventScroll: true, preventTouch: true});

        }

        // Обработчик изменения размера окна, иницализация карты снова
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function () {
                if (myMap) {
                    myMap.destroy();
                    myMap = null;
                }
                init();
            }, 100);
        })
    }

}
