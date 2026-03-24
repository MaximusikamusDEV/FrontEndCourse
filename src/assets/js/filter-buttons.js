let activeFilter = 'All';
const hiddenCheckbox = document.querySelector('.header__check');
let isHiddenVisible = hiddenCheckbox.checked;

hiddenCheckbox.addEventListener('change', () => {
    isHiddenVisible = hiddenCheckbox.checked;
    updateCatalog();
});

document.querySelectorAll('.header__btn').forEach(item => {
    item.addEventListener('click', (e) => {
        const target = e.target;

        document.querySelectorAll('.header__btn').forEach(item => {
            item.classList.remove('header__btn--active');
        });

        activeFilter = target.dataset.button;
        target.classList.add('header__btn--active');
        updateCatalog(activeFilter);
    });
});