let favouriteCartIds = new Set();

document.querySelectorAll('.catalog__item').forEach((item) => {
    item.addEventListener('click', (event) => {
        const target = event.target;
        const badge = target.dataset.badge;

        if (badge === "like") {
            target.classList.toggle('badge__like--active');

            const itemId = target.closest('.catalog__item').dataset.id;

            if (target.classList.contains('badge__like--active')) {
                favouriteCartIds.add(itemId);
            } else {
                favouriteCartIds.delete(itemId);
            }
        }

        updateCatalog();
    });
});