let firstPassword = document.getElementById(`password`)
let confirmPassword = document.getElementById(`confirm-password`)



confirmPassword.addEventListener("click", checkPassword);

function checkPassword(){
    if (confirmPassword.textContent != firstPassword.textContent) {
        confirmPassword.classList.add(`wrong-password`)
    }}


    var check = function() {
        if (document.getElementById('password').value ==
        document.getElementById('confirm-password').value) {
        confirmPassword.style.border = `1px solid green`
        firstPassword.style.border = `1px solid green`

        document.getElementById('message').style.color = 'green';
        document.getElementById('message').innerHTML = '*Passwords Match';
        } else {
        confirmPassword.style.border = `solid red 1px`
        firstPassword.style.border = `solid red 1px`
        
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = '*Passwords do not match';
        }
      }