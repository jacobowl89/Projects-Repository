const menuBtn = document.querySelector(".menu-btn")
const orderBtn = document.querySelector(".order-btn")
const marketingMenuBtn = document.querySelector(".marketing-menu-btn")
const orderOnlineBtn = document.querySelector(".order-online-btn")




function pressEffect(trigger,object){

    object.addEventListener(trigger, () => {
        object.classList.add("pressed")
        setTimeout(() => {object.classList.remove("pressed")}, 200)
    })}

let pressedList = [menuBtn,orderBtn,marketingMenuBtn,orderOnlineBtn]

pressedList.forEach(btn => {pressEffect("click",btn)
});



// POPUP FUNCTION //
const popupContent = document.querySelector(".order-popup-js");


function fullOpacityEffect(object){
    object.style.opacity = "100%"
}

function htmlPopupDisappear() {

    const popupContent = document.querySelector(".order-popup-js");
    const mainPopup = document.querySelector(".main-popup");
    const headerPopup = document.querySelector(".header-popup");
    const numberPopup = document.querySelector(".number-popup");
    const descriptionPopup = document.querySelector(".description-popup");
    const buttonsPopup = document.querySelector(".buttons-popup");
    const orderOnlinePopup = document.querySelector(".order-online-popup");
    const closePopup = document.querySelector(".close-popup");

let showList = [popupContent,mainPopup,headerPopup,numberPopup, descriptionPopup, buttonsPopup, orderOnlinePopup, closePopup]

    showList.forEach(object => {object.style.opacity = "0%"})

    popupContent.innerHTML = ""
    popupContent.classList.remove("order-popup");
}


let orderButtons =[orderOnlineBtn, orderBtn]

function orderPopup(trigger,object){
    object.addEventListener(trigger,() => {

    popupContent.classList.add("order-popup");

    popupContent.innerHTML = "<div class='main-popup'> <div class='header-popup'>PHONE ORDERS</div> <div class='number-popup'>07470 348667</div> <div class='description-popup'><h2>FREE DELIVERY</h2> with orders over £20</div> <div class='buttons-popup'><button class='order-online-popup'>ORDER ONLINE</button> <button class='close-popup'>CLOSE</button> </div> </div>";

    const mainPopup = document.querySelector(".main-popup");
    const headerPopup = document.querySelector(".header-popup");
    const numberPopup = document.querySelector(".number-popup");
    const descriptionPopup = document.querySelector(".description-popup");
    const buttonsPopup = document.querySelector(".buttons-popup");
    const orderOnlinePopup = document.querySelector(".order-online-popup");
    const closePopup = document.querySelector(".close-popup");

    let showList = [popupContent,mainPopup,headerPopup,numberPopup, descriptionPopup, buttonsPopup, orderOnlinePopup, closePopup]
    
    showList.forEach(object => {fullOpacityEffect(object)})

    // orderPopup.addEventListener("click", () => {
    //     htmlPopupDisappear()
    // })

    closePopup.addEventListener("click", () => {
        htmlPopupDisappear()
    })

    })}

orderButtons.forEach(btn => {orderPopup("click",btn)
});