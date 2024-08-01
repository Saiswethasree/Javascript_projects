let outputScreen = document.getElementById('inputvalues')

function display(num){
    outputScreen.value = outputScreen.value+num
}

function clearOneChar(){
    outputScreen.value = outputScreen.value.slice(0,-1) 
}

function clearScreen(){
    outputScreen.value = ""
}

function calculate(){
    outputScreen.value = eval(outputScreen.value)
}