var menuButton = document.querySelector('.header_nav-button')
var menuList = document.querySelector('.header_nav-menu')

menuButton.onclick = function() {
    menuList.classList.toggle('header_nav-menu--on')
}