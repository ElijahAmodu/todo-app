"use strict";


let inputField = document.getElementById('input-sentence')
let addButton = document.getElementById('add-button')
let unOrderedList = document.getElementById('Unordered-list')

document.getElementById('form').addEventListener('submit', function(e) {
       e.preventDefault();
    
    }) 
// Array.forEach((item) => {
//     let list = document.createElement('li');
//     list.innerHTML = `<div style="display: flex; align-items: center; justify-content: space-between"><p>${inputField.value}</p><p id="${inputField.value}-delete-btn" style="cursor: pointer">x</p></div>`;
//     unOrderedList.appendChild(list)
// })
 

//list styling
function listStyle(){
    list.style.border = "solid #000000";
    list.style.borderRadius = "5px";
    list.style.padding = "5px 50px 5px 50px";
    list.style.marginBottom = "1em";  
    list.style.boxShadow = "4px 6px 8px gray";
    list.style.listStyleType = "none";
    list.style.width = '200px'
}


function addTodo () {
    if(inputField.value === ''){
        return console.log('input field cannot be empty')
    }
    let list = document.createElement('li');
    list.innerHTML = `<div style="display: flex; align-items: center; justify-content: space-between"><p>${inputField.value}</p><p id="${inputField.value}-delete-btn" style="cursor: pointer">x</p></div>`;
    unOrderedList.appendChild(list)

    listStyle()
    
    
    list.addEventListener("click", function(){
        list.style.textDecoration = "line-through";
        
    })
    document.getElementById(`${inputField.value}-delete-btn`).onclick =  function () {
        unOrderedList.removeChild(list)
    }
    list.addEventListener("dblclick", function(){
        unOrderedList.removeChild(list)
    })
    inputField.value = '';
    event.preventDefault(); 
}

    function removeTodo (event) {
        console.log(event)
    }

    inputField.addEventListener('keypress', event => {

    if(event.key === "Enter") {
        let list = document.createElement('li');
        unOrderedList.appendChild(list)
        list.innerText = inputField.value;
        inputField.value = '';

        //styling the list element input field enter button.
        listStyle()

        //event listener to enter button
        list.addEventListener("click", function(){
            list.style.textDecoration = "line-through";
            
        })

        list.addEventListener("dblclick", function(){
            unOrderedList.removeChild(list)
            })
    }

    
})
     
 













  