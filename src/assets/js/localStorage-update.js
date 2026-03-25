document.addEventListener('DOMContentLoaded', () => {
    favouriteItemIds = new Set(JSON.parse(localStorage.getItem('favouriteItemIds') || '[]'));
    hiddenItemIds =new Set(JSON.parse(localStorage.getItem('hiddenItemIds') || '[]'));
    compareItemIds = new Set(JSON.parse(localStorage.getItem('compareItemIds') || '[]'));

    updateState();
    updateCatalog();
});

window.addEventListener('beforeunload', () => {
    localStorage.setItem('favouriteItemIds', JSON.stringify(Array.from(favouriteItemIds)));
    localStorage.setItem('hiddenItemIds', JSON.stringify(Array.from(hiddenItemIds)));
    localStorage.setItem('compareItemIds', JSON.stringify(Array.from(compareItemIds)));
});