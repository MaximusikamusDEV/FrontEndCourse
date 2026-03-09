document.querySelectorAll('.badge__like').forEach(likeButton => {
    likeButton.addEventListener('click', () => {
        likeButton.classList.toggle('badge__like--active');
    })
})

document.querySelectorAll('.badge__follow').forEach(followButton => {
    followButton.addEventListener('click', () => {
        followButton.classList.toggle('badge__follow--active');
    })
})

document.querySelectorAll('.badge__compare').forEach(compareButton => {
    compareButton.addEventListener('click', () => {
        compareButton.classList.toggle('badge__compare--active');
    })
})