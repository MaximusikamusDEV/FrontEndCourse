function updateCatalog() {
    document.querySelectorAll('.catalog__item').forEach(item => {
        const id = item.dataset.id;

        let isHidden = hiddenItemIds.has(id);
        let visible = true;

        if (activeFilter === "Compare") {
            visible = compareItemIds.has(item.dataset.id);
        }

        if (activeFilter === "Like") {
            visible = favouriteItemIds.has(item.dataset.id);
        }

        if (isHidden && !isHiddenVisible) {
            visible = false;
        }

        item.classList.toggle('catalog__item--hidden', !visible);
        item.classList.toggle('catalog__item--shadow', isHidden && isHiddenVisible);
    });
}