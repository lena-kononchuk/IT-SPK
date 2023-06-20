export const openModal = () => {
   const modal = document.querySelector(".menu__body");
   modal.style.display = "block";
   console.log('openModal exp');
};

export const closeModal = () => {
   const modal = document.querySelector(".menu__body");
   modal.style.display = "none";
   console.log('closeModal exp');
};

export const scrollToSection = (e) => {
   e.preventDefault();
   const target = document.querySelector(e.target.getAttribute("href"));
   window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth"
   });
};
export const closeMenu = () => {
   const modalLink = document.querySelector(".menu__body");
   modalLink.style.display = "none";
};

export const iconMenu = () => {
   const iconBurger = document.querySelector(".icon-menu");
   console.log('try hide');
   iconBurger.style.display = "none";
};

export const toggleMenuBtn = () => {
   const burgerMenu = document.querySelector('.close-icon');
   const menuOpen = document.querySelector('.open-icon');

   console.log('try toggleMenuBtn: ' + burgerMenu);
};

export function menuClose() {

   document.documentElement.classList.remove("menu-open");
}






















