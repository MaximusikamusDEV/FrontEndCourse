document.querySelector('.catalog__grid').addEventListener('click', (event) => {
    const target = event.target;
    const badge = target.dataset.badge;

    if (badge) {
        target.classList.toggle(`badge__${badge}--active`);
    }
});

