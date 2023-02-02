
const items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('click', function() {
        this.classList.toggle('flipped');
    });
});
