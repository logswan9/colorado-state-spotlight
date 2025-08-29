

document.getElementById("citiesTag").addEventListener("mouseover", (event) => {
    document.getElementById('capitalCity').style.visibility = 'visible'
    document.getElementById('city2').style.visibility = 'visible'
    document.getElementById('city3').style.visibility = 'visible'  
})

document.getElementById("citiesDropDown").addEventListener("mouseleave", (event) => {
    document.getElementById('capitalCity').style.visibility = 'hidden'
    document.getElementById('city2').style.visibility = 'hidden'
    document.getElementById('city3').style.visibility = 'hidden'  

})

function formSubmitted(event) {
    if (event.target.email.value !== event.target.emailConfirm.value && (event.target.email.value !== "" && event.target.emailConfirm.value !== "")) {
        alert("Error! Emails do not match!")
    }
}