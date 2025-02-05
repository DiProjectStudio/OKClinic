export function buttonTagBlockClone() {
    const tagBlockInner = document.querySelector('.tag-block .tag-block__inner');
    const button = document.querySelector('.tag-block .btn');
    const buttonClone = button.cloneNode(true);
    buttonClone.classList.add('clone');
    tagBlockInner.append(buttonClone);
}