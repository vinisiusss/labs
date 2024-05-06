let inputs = document.getElementById("inp");
let text = document.querySelector(".text");
let har = document.querySelector(".har");

let chet = 0;

let dat = new Date();
let date = dat.toLocaleDateString("de-RU");

function Add(){
    chet ++;
    if(inputs.value == ""){
        alert("Задача не написана")
    }else{
        let newEle = document.createElement("ul");
        newEle.innerHTML=`${inputs.value} <i class="x">X</i>`;
        text.appendChild(newEle);
        inputs.value="";
        newEle.querySelector("i").addEventListener("click" , remove);
        function remove(){
            newEle.remove()
        }
    }
    console.log(chet)
    let newEle = document.createElement("ul");
newEle.innerHTML=` <i>Всего записей(${chet})</i>`;
har.appendChild(newEle);
}




document.getElementById("button-o").onclick = function ss(){
    
    document.getElementById("spisok").textContent = "";
    document.getElementById("spisok").innerHTML = "<p>Список пуст</p>"
}   