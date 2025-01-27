export default class Overlay {
    static showOverlay() {
        this.overlay = document.getElementById('overlay');
        this.overlay.classList.add('show');
    }

    static hideOverlay() {
        this.overlay.classList.remove('show');
    }
}