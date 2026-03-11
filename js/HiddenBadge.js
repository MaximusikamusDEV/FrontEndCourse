let hiddenCartIds = new Set();

document.querySelectorAll('.catalog__item').forEach(item => {
    item.addEventListener('click', (e) => {
        const target = e.target;
        const badge = target.dataset.badge;

        if(badge === 'hidden'){
            target.classList.toggle('badge__hidden--active');

            const catalogItem = target.closest('.catalog__item');
            const itemId = catalogItem.dataset.id;

            if(target.classList.contains('badge__hidden--active')){
                hiddenCartIds.add(itemId);
            } else {
                hiddenCartIds.delete(itemId);
            }
        }

        updateCatalog();
    });
});