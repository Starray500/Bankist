'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
///////////////////////////////////////////////////////
// Modal window
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////////////
// Button scrolling
btnScrollTo.addEventListener('click', function (e) {
  // const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());

  // console.log('current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  // console.log(
  //   'height/width viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  // //scrolling first method
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  //scrolling second method
  section1.scrollIntoView({ behavior: 'smooth' });
});

////////////////////////////////////////////////////
// Page navigation
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({
//       behavior: 'smooth',
//     });
//   });
// });

////////////////////////////////////////////////////////////////////////////////
// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    });
  }
});

////////////////////////////Tapped component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  // e.preventDefault();
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  //Guard clause
  if (!clicked) return;
  tabs.forEach(t => t.classList.remove('operations__tab--ative'));
  clicked.classList.add('operations__tab--active');
});
/////////////////////////////////////////////
/*
//////////////Selecting Elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allsections = document.querySelectorAll('section');
console.log(allsections);

document.getElementById('sectoin--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);
console.log(document.getElementsByClassName('btn'));

////////////////////// Creating and insetting elements
// .inserAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent =
//   'We use cookied for improved functionality and alalyticals.';
message.innerHTML =
  'We use cookied for improved functionality and alalyticals. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));
// header.before(message);
// header.after(message);

//////////// Delete element
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });

/////////Styles

message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color);
console.log(message.style.backgroundColor);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).heigh, 10) + 40 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attribute
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

//Non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

// Relative getAttribute
console.log(logo.src);
// Absolute get Attrubute
console.log(logo.getAttribute('src'));

const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));

///////////////
const link2 = document.querySelector('.nav__link--btn');
console.log(link2.href);
console.log(link2.getAttribute('href'));

// Data Attribute
console.log(logo.dataset.versionNumber);

//Classes
logo.classList.add('j');
logo.classList.remove('j');
logo.classList.toggle('k');
logo.classList.contains('k'); // is not like include in arrays

// Don't use this
logo.className = 'Jonas';

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

// First Method
btnScrollTo.addEventListener('click', function (e) {
  // const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());
  
  // console.log('current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  
  // console.log(
  //   'height/width viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );
  
  // scrolling first method
  // window.scrollTo(
    //   s1coords.left + window.pageXOffset,
    //   s1coords.top + window.pageYOffset,
    // );
    // window.scrollTo({
      //   left: s1coords.left + window.pageXOffset,
      //   top: s1coords.top + window.pageYOffset,
      //   behavior: 'smooth',
      // });
      
      // scrolling second method
      section1.scrollIntoView({ behavior: 'smooth' });
    });
    
    //////////////////// Events in javascript

const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading :D');
};

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// h1.onmouseenter = function (e) {
  //   alert('addEventListener: Great! You are reading the heading :D');
// };

//rgba(255,255,255);
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)} , ${(0, 255)})`;
console.log(randomColor(0, 255));

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this);
  
  // Stop propagation
  // e.stopPropagation();
});
document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log('LINK');
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function (e) {
  console.log('LINK');
  this.style.backgroundColor = randomColor();
  console.log('NAV ', e.target, e.currentTarget);
});
*/
const h1 = document.querySelector('h1');

//Going downwards: child : first way of doing it.
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

//Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going sideways: Siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);

[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) {
    el.style.transform = 'scale(o.5)';
  }
});
