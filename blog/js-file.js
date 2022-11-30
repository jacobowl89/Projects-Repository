const nav = document.querySelector("nav")

const dropdownMenu = document.querySelector(".header-menu-nav")
const searchMenu = document.querySelector(".header-menu-magnifier")


const menuIcon = `<svg class="svg-icon open" width="24" height="24" aria-hidden="true" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M3,6 C2.44771525,6 2,5.55228475 2,5 C2,4.44771525 2.44771525,4 3,4 L21,4 C21.5522847,4 22,4.44771525 22,5 C22,5.55228475 21.5522847,6 21,6 L3,6 Z M3,13 C2.44771525,13 2,12.5522847 2,12 C2,11.4477153 2.44771525,11 3,11 L21,11 C21.5522847,11 22,11.4477153 22,12 C22,12.5522847 21.5522847,13 21,13 L3,13 Z M3,20 C2.44771525,20 2,19.5522847 2,19 C2,18.4477153 2.44771525,18 3,18 L21,18 C21.5522847,18 22,18.4477153 22,19 C22,19.5522847 21.5522847,20 21,20 L3,20 Z"></path></svg>`

const magnifierIcon = `<svg class="svg-icon open" width="24" height="24" aria-hidden="true" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M17.400801,15.9865874 L23.7071068,22.2928932 C24.0976311,22.6834175 24.0976311,23.3165825 23.7071068,23.7071068 C23.3165825,24.0976311 22.6834175,24.0976311 22.2928932,23.7071068 L15.9865874,17.400801 C14.2995052,18.775646 12.1460217,19.6 9.8,19.6 C4.38760945,19.6 1.81188398e-13,15.2123905 1.81188398e-13,9.8 C1.81188398e-13,4.38760945 4.38760945,1.0658141e-14 9.8,1.0658141e-14 C15.2123905,1.0658141e-14 19.6,4.38760945 19.6,9.8 C19.6,12.1460217 18.775646,14.2995052 17.400801,15.9865874 Z M9.8,17.6 C14.107821,17.6 17.6,14.107821 17.6,9.8 C17.6,5.49217895 14.107821,2 9.8,2 C5.49217895,2 2,5.49217895 2,9.8 C2,14.107821 5.49217895,17.6 9.8,17.6 Z"></path></svg>`


const closeIcon = `<svg class="svg-icon close" width="24" height="24" aria-hidden="true" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12,10.5857864 L22.2928932,0.292893219 C22.6834175,-0.0976310729 23.3165825,-0.0976310729 23.7071068,0.292893219 C24.0976311,0.683417511 24.0976311,1.31658249 23.7071068,1.70710678 L13.4142136,12 L23.7071068,22.2928932 C24.0976311,22.6834175 24.0976311,23.3165825 23.7071068,23.7071068 C23.3165825,24.0976311 22.6834175,24.0976311 22.2928932,23.7071068 L12,13.4142136 L1.70710678,23.7071068 C1.31658249,24.0976311 0.683417511,24.0976311 0.292893219,23.7071068 C-0.0976310729,23.3165825 -0.0976310729,22.6834175 0.292893219,22.2928932 L10.5857864,12 L0.292893219,1.70710678 C-0.0976310729,1.31658249 -0.0976310729,0.683417511 0.292893219,0.292893219 C0.683417511,-0.0976310729 1.31658249,-0.0976310729 1.70710678,0.292893219 L12,10.5857864 Z"></path></svg>`

dropdownMenu.innerHTML = menuIcon
searchMenu.innerHTML = magnifierIcon

dropdownMenu.addEventListener("click", () => {
    nav.classList.toggle("hidden")
    dropdownMenu.classList.toggle("no-borders")

    if (dropdownMenu.innerHTML == menuIcon) {
        dropdownMenu.innerHTML = closeIcon
    } else {
        dropdownMenu.innerHTML = menuIcon
    }
})


searchMenu.addEventListener("click", () => {
    searchMenu.classList.toggle("no-borders");

    if (searchMenu.innerHTML == magnifierIcon) {
        searchMenu.innerHTML = closeIcon
    } else {
        searchMenu.innerHTML = magnifierIcon
    }
})