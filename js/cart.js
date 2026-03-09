document.querySelectorAll('.item__button').forEach(button => {
    button.addEventListener('click', () => {
        let total = parseInt(document.querySelector('.cart__total').textContent);
        total += 1;
        document.querySelector('.cart__total').textContent = total.toString();
    })
})