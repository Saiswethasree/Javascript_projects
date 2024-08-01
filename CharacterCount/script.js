const textarea1 = document.getElementById("textplace")

const totalCharacters = document.getElementById("totalnumber")

const RemainingCharacter = document.getElementById("remainingnumber")

textarea1.addEventListener("keyup" , ()=>{
    UpdateText()
})
 
function UpdateText(){
    totalCharacters.innerText = textarea1.value.length ;
    RemainingCharacter.innerText = textarea1.getAttribute("maxLength") - textarea1.value.length; 
}