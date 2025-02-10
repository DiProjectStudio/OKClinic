export default function anchorLinksAction() {
    const anchorLinksSections = document.querySelectorAll(".anchor-links");

    anchorLinksSections.forEach(anchorLinksSection => {
        const anchorLinks = anchorLinksSection.querySelectorAll(".anchor-link");

        anchorLinks.forEach(anchorLink => {
            anchorLink.addEventListener("click", () => {
                anchorLinks.forEach(el => el.classList.remove("active"));
                anchorLink.classList.add("active");
            });
        });

    });
}