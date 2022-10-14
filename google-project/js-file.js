const appOne = document.querySelector(".app.one")
const appTwo = document.querySelector(".app.two")
const appThree = document.querySelector(".app.three")
const appFour = document.querySelector(".app.four")

const appFive = document.querySelector(".app.five")
const appSix = document.querySelector(".app.six")
const appSeven = document.querySelector(".app.seven")
const appEight = document.querySelector(".app.eight")


const cornerMenuOne = document.querySelector(".corner-menu.one")
const cornerMenuTwo = document.querySelector(".corner-menu.two")
const cornerMenuThree = document.querySelector(".corner-menu.three")
const cornerMenuFour = document.querySelector(".corner-menu.four")

const cornerMenuFive = document.querySelector(".corner-menu.five")
const cornerMenuSix = document.querySelector(".corner-menu.six")
const cornerMenuSeven = document.querySelector(".corner-menu.seven")
const cornerMenuEight = document.querySelector(".corner-menu.eight")


const appList = [appOne,appTwo,appThree,appFour,appFive,appSix,appSeven,appEight]
const menuList = [cornerMenuOne,cornerMenuTwo,cornerMenuThree,cornerMenuFour,cornerMenuFive,cornerMenuSix,cornerMenuSeven,cornerMenuEight]



function appsMenus(app,menu){

    app.addEventListener("mouseover", () => {
        menu.classList.add("corner-new")
    })
    app.addEventListener("mouseout", () => {
        menu.classList.remove("corner-new")
    })
    }

for (let i = 0; i < appList.length; i++){
    appsMenus(appList[i], menuList[i])}