const nav = document.querySelector('.nav-mobile__box')
const navBtn = document.querySelector('.nav-mobile__box-burgerbtn')
const allNavItems = document.querySelectorAll('.nav-mobile__box--a')

const handleNav = () => {
	nav.classList.toggle('nav-mobile__box--active')

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav-mobile__box--active')
		})
	})
}

navBtn.addEventListener('click', handleNav)
