export class NotesModule {
    constructor() {

       this.onInit();
    }

    onInit() {
        this.copyPriceBlock();
    }

    copyPriceBlock() {
        const priceBlock = document.querySelector(".note-main .note-main__price");
        const rightSide = document.querySelector(".note-wrapper__rightside");
        if (rightSide && priceBlock) {
            rightSide.append(priceBlock.cloneNode(true));
        }
    }
}