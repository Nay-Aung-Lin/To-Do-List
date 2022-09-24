const form = document.querySelector(".input-box");

const tasks = document.querySelector(".tasks");

const starter = document.querySelector(".start");

form.addEventListener('submit',addTask);
let countLi = 0;

function addTask(e){
    console.log(countLi);
    e.preventDefault();
    let value = document.querySelector('#input').value;
    if(value){
        let li = document.createElement("li");
        li.className = 'task';
        li.innerHTML = ` <p class="done">${value}</p><i class="fa-solid fa-trash remove"></i>`;
        tasks.appendChild(li);
        document.querySelector('#input').value = "";
        starter.classList.add('hide');
        countLi++;

         }
        
        
   
}

tasks.addEventListener("click",removeTask);
function removeTask(e){
    let rem = e.target;
    if(rem.classList.contains("remove")){
        rem.parentElement.remove();
        countLi--;
        console.log(countLi);
       
    }if(countLi === 0){
        starter.classList.remove('hide');
console.log(countLi);
         }
    else if(rem.classList.contains("done")){
        rem.parentElement.style.backgroundColor = "#222";
        rem.style.textDecoration = "line-through";
    }
}
