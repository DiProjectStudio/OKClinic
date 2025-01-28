/** Добавление и отключение затемнения экрана */
export default class Overlay {
    // Включить
    static showOverlay() {
        this.overlay = document.getElementById('overlay');
        this.overlay.classList.add('show');
    }
    // Выключить
    static hideOverlay() {
        this.overlay.classList.remove('show');
    }
}