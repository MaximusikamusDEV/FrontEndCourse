document.querySelectorAll('.item__button').forEach(button => {
    button.addEventListener('click', () => {
        calcCart();
    });
});

function calcCart() {
    let cartTotal = document.querySelector('.cart__total');
    let total = parseInt(cartTotal.textContent);
    total++;
    cartTotal.textContent = total.toString();
}