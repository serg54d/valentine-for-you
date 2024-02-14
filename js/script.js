const burger = document.querySelector('.menu__burger');
const menu = document.querySelector('.menu');

burger.addEventListener("click", function (e) {
	menu.classList.toggle('_active')
});


