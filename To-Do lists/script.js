let input = document.getElementById('input-box');
let text = document.querySelector(".text");

function addTask(){
    if(input.value == ""){
        alert("you must write something!");
    }
    else {
        let list = document.createElement("ul");
        list.innerHTML = `${input.value}`;
        text.appendChild(list);
        input.value = "";
        let span = document.createElement("span");
        span.innerHTML = `\u00d7`;
        list.appendChild(span);
        list.querySelector("span").addEventListener("click",remove);
        function remove(){
            list.remove();
        }
    }
}

text.addEventListener("click",function(e){
    if(e.target.tagName === "list"){
        e.target.classList.toggle("ul");
    }
    else if(e.target.tagName === "span"){
        e.target.parentElement.remove();
    }
},false);

function saveData(){
    localStorage.setItem("data",text.innerHTML);
}
saveData();