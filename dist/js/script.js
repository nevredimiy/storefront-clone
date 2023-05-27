const initApp = () => { 
    const burger = document.querySelector('[data-burger]');
    const menu = document.querySelector('[data-menu]');

    const toggleMenu = () => {
        menu.classList.toggle('invisible');
        menu.classList.toggle('visible');
        menu.classList.toggle('-translate-y-full');
        menu.classList.toggle('translate-y-0');
        burger.classList.toggle('toggle-burger');
    };

    burger.addEventListener('click', toggleMenu);
    
};

document.addEventListener('DOMContentLoaded', initApp);
