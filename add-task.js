'use strict'

function addTask(){
    let item =[];
    if (localStorage.getItem('tasks')== null){
        item[0]={
            taskName : document.querySelector('.new-task').value,
            date : document.querySelector('.date').value,
            time : document.querySelector('.date-time').value,
            type : document.querySelector('.li').value,
            description : document.querySelector('.description').value,

        };
         localStorage.setItem('tasks', JSON.stringify(item));
     }else{
         item = JSON.parse(localStorage.getItem('tasks'));
         item.push({
             taskName : document.querySelector('.new-task').value,
             date : document.querySelector('.date').value,
             time : document.querySelector('.date-time').value,
             type : document.querySelector('.li').value,
             description : document.querySelector('.description').value,
         });

         localStorage.setItem("tasks" , JSON.stringify(item));
        }  
}

document.querySelector('.submit').addEventListener('click',addTask());








