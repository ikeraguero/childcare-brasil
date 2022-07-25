const navSlide = () => {
    const burguer = document.querySelector('.burguer');
    const nav = document.querySelector('.nav-links');

    burguer.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
}

navSlide();