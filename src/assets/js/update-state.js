function updateState() {
    document.querySelectorAll('.catalog__item').forEach(item => {
        const id = item.dataset.id;

        if (favouriteItemIds.has(id)) {
            item.querySelector('.badge__like')
                .classList.add('badge--active');
        }

        if (hiddenItemIds.has(id)) {
            item.querySelector('.badge__hidden')
                .classList.add('badge--active');
        }

        if (compareItemIds.has(id)) {
            item.querySelector('.badge__compare')
                .classList.add('badge--active');
        }
    });
}