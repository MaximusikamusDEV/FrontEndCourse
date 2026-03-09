const addToCartButtons = document.querySelectorAll('.item__button');
const cartTotal = document.querySelector('.cart__total');
let total = 0;

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        total += 1;
        cartTotal.textContent = total;
    })
})