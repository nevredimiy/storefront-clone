const initApp = () => { 
    const burger = document.querySelector('[data-burger]');
    const menu = document.querySelector('[data-menu]');

    const toggleMenu = () => {
        menu.classList.toggle('invisible');
        menu.classList.toggle('visible');
        menu.classList.toggle('-translate-y-full');
        menu.classList.toggle('translate-y-0');
      burger.classList.toggle('toggle-burger');
      document.body.classList.toggle('overflow-hidden');
    };

    burger.addEventListener('click', toggleMenu);
    
};

document.addEventListener('DOMContentLoaded', initApp);


//Плавное появление текста при скролле - когда блок находиться в зоне видимости, то кнему применяеться определенный класс
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
  observer.observe(elm);
}