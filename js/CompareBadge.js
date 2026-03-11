let compareItemIds = new Set();

document.querySelectorAll('.catalog__item').forEach(item => {
    item.addEventListener('click', (event) => {
        const target = event.target;
        const badge = target.dataset.badge;

        if(badge === "compare"){
            target.classList.toggle('badge__compare--active');

            const itemId = target.closest('.catalog__item').dataset.id;

            if(target.classList.contains('badge__compare--active')){
                compareItemIds.add(itemId);
            } else {
                compareItemIds.delete(itemId);
            }
        }

        updateCatalog();
    });
});