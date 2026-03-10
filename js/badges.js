const hiddenCheckbox = document.querySelector('.header__check');
let isHiddenVisible = hiddenCheckbox.checked;
let hiddenCartIds = new Set();

hiddenCheckbox.addEventListener('change', () => {
    isHiddenVisible = hiddenCheckbox.checked;

    document.querySelectorAll('.catalog__item').forEach(item => {
        if(item.querySelector('.badge__hidden--active')) {
            item.classList.toggle('catalog__item--hidden', !isHiddenVisible);
            item.classList.toggle('catalog__item--shadow', isHiddenVisible);
        }
    })
});

document.querySelectorAll('.catalog__item').forEach(item => {
    item.addEventListener('click', (e) => {
        const target = e.target;
        const badge = target.dataset.badge;

        if(badge === 'hidden'){
            target.classList.toggle('badge__hidden--active');

            const catalogItem = target.closest('.catalog__item');

            if(!isHiddenVisible){
                catalogItem.classList.toggle('catalog__item--hidden');
            } else {
                catalogItem.classList.toggle('catalog__item--shadow');
            }

            const itemId = catalogItem.dataset.id;

            if(target.classList.contains('badge__hidden--active')){
                hiddenCartIds.add(itemId);
            } else {
                hiddenCartIds.delete(itemId);
            }
        }
    })
})

document.querySelectorAll('.badge__like').forEach(likeButton => {
    likeButton.addEventListener('click', () => {
        likeButton.classList.toggle('badge__like--active');
    })
});

document.querySelectorAll('.badge__compare').forEach(compareButton => {
    compareButton.addEventListener('click', () => {
        compareButton.classList.toggle('badge__compare--active');
    })
});

