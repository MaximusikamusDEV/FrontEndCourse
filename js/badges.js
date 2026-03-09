const likeButtons = document.querySelectorAll('.badge__like');

likeButtons.forEach(likeButton => {
    likeButton.addEventListener('click', () => {
        likeButton.classList.toggle('badge__like--active');
    })
})

const followButtons = document.querySelectorAll('.badge__follow');

followButtons.forEach(followButton => {
    followButton.addEventListener('click', () => {
        followButton.classList.toggle('badge__follow--active');
    })
})

const compareButtons = document.querySelectorAll('.badge__compare');

compareButtons.forEach(compareButton => {
    compareButton.addEventListener('click', () => {
        compareButton.classList.toggle('badge__compare--active');
    })
})