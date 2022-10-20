const contact = document.querySelector(".contact")
const github = document.querySelector(".github")
const buttons = document.querySelectorAll(".btn")
const leftHeader = document.querySelector(".leftHeader")
const googleProjectImg = document.querySelector(".googleProjectImg")
const rest = document.querySelector(".rest")

rest.classList.remove("invisible")


function pressEffect(trigger,object){

    object.addEventListener(trigger, () => {
        object.classList.add("pressed")
        setTimeout(() => {object.classList.remove("pressed")}, 200)
    })}

pressEffect("click",contact)
pressEffect("click",github)
pressEffect("click",leftHeader)


buttons.forEach(btn => {pressEffect("click",btn)
    
});

