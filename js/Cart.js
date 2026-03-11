document.querySelectorAll('.item__button').forEach(button => {
    button.addEventListener('click', () => {
        let cartTotal = document.querySelector('.cart__total');
        let total = parseInt(cartTotal.textContent);
        total += 1;
        cartTotal.textContent = total.toString();
    });
});