// Toggle dark / light mode
const themeBtn = document.querySelector('.theme-btn');
if (localStorage.getItem('theme') === 'dark') {
	document.documentElement.setAttribute('data-theme', 'dark');
	themeBtn.classList.replace('light', 'dark');
	localStorage.setItem('theme', 'dark');
} else {
	themeBtn.classList.replace('dark', 'light');
	document.documentElement.setAttribute('data-theme', 'light');
	localStorage.setItem('theme', 'light');
}

themeBtn.addEventListener('click', function () {
	if (themeBtn.classList.contains('light')) {
		themeBtn.classList.replace('light', 'dark');
		document.documentElement.setAttribute('data-theme', 'dark');
		localStorage.setItem('theme', 'dark');
	} else {
		themeBtn.classList.replace('dark', 'light');
		document.documentElement.setAttribute('data-theme', 'light');
		localStorage.setItem('theme', 'light');
	}
});

// Navbar active
const navLink = document.querySelectorAll('.navLink');
navLink.forEach(function (item) {
	item.addEventListener('click', function (e) {
		document.querySelector('.nav__link.active').classList.remove('active');
		dropdownIcon.classList.remove('active');
		e.target.classList.add('active');
	});
});

const navDropdown = document.querySelectorAll('.navDropdown');
const dropdownIcon = document.querySelector('.dropdown-icon');
navDropdown.forEach(function (item) {
	item.addEventListener('click', function (e) {
		document.querySelector('.nav__link.active').classList.remove('active');
		const page = e.target.dataset.id;
		document.getElementById(page).classList.add('active');
		dropdownIcon.classList.add('active');
	});
});

// COUNT UP
$('.counter').countUp();

// FAQ according
const faqButton = document.querySelectorAll('.faq__button');
faqButton.forEach(function (button) {
	button.addEventListener('click', function (e) {
		let element = e.target.dataset.id;
		document.getElementById(element).classList.toggle('showText');
	});
});
