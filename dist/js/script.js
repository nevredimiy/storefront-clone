/*  
*   @param {boolean} isTouchDevice - Detect device touch or desktop.
*/
const isTouchDevice = () => {
  return (('ontouchstart' in window) ||
    (navigator.maxTouchPoints > 0) ||
    (navigator.msMaxTouchPoints > 0));
}


// Burger Menu
const initApp = () => { 
  const burger = document.querySelector('[data-burger]');
  const menu = document.querySelector('[data-menu]');
  const subMenus = document.querySelectorAll('.sub-menu');
  subMenus.forEach(subMenu => {
  console.log(subMenu);
  });
  
 
  const toggleMenu = () => {
    menu.classList.toggle('invisible');
    menu.classList.toggle('visible');
    menu.classList.toggle('-translate-y-full');
    menu.classList.toggle('translate-y-0');
    burger.classList.toggle('toggle-burger');
    document.body.classList.toggle('overflow-hidden');
  };

  if (isTouchDevice()) {
    console.log('is touch');
  } else {
    console.log('is desktop');
    subMenus.forEach(subMenu => {
      subMenu.classList.add('_active');
      menu.querySelector('svg').classList.add('group-hover:rotate-180');
    });
  }
  
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


//Orbit
  const bgColorClass = [
    'bg-red-200',
    'bg-orange-200',
    'bg-amber-200',
    'bg-emerald-200',
    'bg-cyan-200',
    'bg-blue-200',
    'bg-violet-200',
    'bg-fuchsia-200',
    'bg-yellow-200',
    'bg-green-200',
    'bg-teal-200',
    'bg-sky-200',
    'bg-indigo-200',
    'bg-purple-200',
    'bg-pink-200',
    'bg-rose-200'
  ];

  const orbitLists = document.querySelectorAll('[data-orbit]');
  orbitLists.forEach(orbitList => {
    
    let itemsOrbit = orbitList.querySelectorAll(':scope > *'); //select all li insert ul

    for (let i = 0; i < itemsOrbit.length; i++) {
      let deg = 360 / itemsOrbit.length * i;
      itemsOrbit[i].style.transform = `rotate(${deg}deg)`;
      itemsOrbit[i].querySelector(':scope > a').style.transform = `rotate(${-deg}deg)`;
      itemsOrbit[i].querySelector(':scope > a').classList.add(bgColorClass[i]);
    }
  });


const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach((menuItem, i) => {
  if (menuItem.classList.contains('menu-item-has-children')) {
    menuItem.addEventListener('click', () => {
      menuItem.querySelector('.sub-menu').classList.toggle('invisible');
      menuItem.querySelector('.sub-menu').classList.toggle('opacity-0');
      menuItem.querySelector('.sub-menu').classList.toggle('group-hover:opacity-100');
      menuItem.querySelector('.sub-menu').classList.toggle('group-hover:visible');       
    });
  }
});

