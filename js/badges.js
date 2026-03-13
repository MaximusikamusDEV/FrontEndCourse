let favouriteItemIds = new Set();
let compareItemIds = new Set();
let hiddenItemIds = new Set();

function changeBadgeState(target, itemIds){
    target.classList.toggle('badge--active');

    const itemId = target.closest('.catalog__item').dataset.id;

    if (target.classList.contains(`badge--active`)) {
        itemIds.add(itemId);
    } else {
        itemIds.delete(itemId);
    }
}

document.querySelectorAll('.catalog__grid').forEach((item) => {
    item.addEventListener('click', (event) => {
        const badgeStates = {
            like: favouriteItemIds,
            compare: compareItemIds,
            hidden: hiddenItemIds
        }

        const target = event.target.closest('[data-badge]');

        if(!target){
            return;
        }

        const badge = target.dataset.badge;

        if(!badgeStates[badge]) {
            return;
        }

        changeBadgeState(target, badgeStates[badge]);
        updateCatalog();
    });
});
