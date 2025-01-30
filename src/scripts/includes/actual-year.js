export function actualYear() {
    const actualDate = new Date();
    const year = actualDate.getFullYear();
    const footerDate = document.querySelector('.footer__rights span');
    if (footerDate) {
        footerDate.innerText = year;
    }
}