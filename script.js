const burgerBtn = document.querySelector('.burger')
const nav = document.querySelector('ul')
const openBtn = document.querySelector('.fa-bars')
const closeBtn = document.querySelector('.fa-times')


const handleNav = () => {
	nav.classList.toggle('active')
	burgerBtn.classList.toggle('active')
	openBtn.classList.toggle('hide')
	closeBtn.classList.toggle('hide')
}


burgerBtn.addEventListener('click', handleNav)
