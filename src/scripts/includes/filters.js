function searchFilter() {
    const filterTabBlocks = document.querySelectorAll('.filter-tabs');
    if (filterTabBlocks && filterTabBlocks.length > 0) {
        filterTabBlocks.forEach((filterTabsBlock) => {
            const filterTabs = filterTabsBlock.querySelectorAll('.filter-tab');
            filterTabs.forEach(filterTab => {
                filterTab.addEventListener('click', () => {
                    filterTabs.forEach(el => el.classList.remove('active'));
                    filterTab.classList.add('active');
                })
            })
        })
    }
}

function doctorsFilter() {
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

export {searchFilter, doctorsFilter}

