// Select the Elements
const list = document.getElementById("list");
const input = document.getElementById("input");

// Classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";



// add to do function
function addToDo(toDo, done){
    
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";
    
    const item = `<li class="item">
                    <i class="fa ${DONE} co" job="complete" ></i>
                    <p class="text ${LINE}">${toDo}</p>
                    <i class="fa fa-trash-o de" job="delete"></i>
                  </li>
                `;
    
    const position = "beforeend";
    
    list.insertAdjacentHTML(position, item);
}



function AddingTODO_LIST(){
    const toDo = input.value;
    if(toDo){
        addToDo(toDo,false);
    }
    input.value = "";
}


//When user click ADD Button
document.getElementById("button").addEventListener("click", AddingTODO_LIST);

// add an item to the list user the enter key
document.addEventListener("keyup",function(even){
    if(event.keyCode == 13){
        AddingTODO_LIST();
    }
});


// Check, uncheck and linethrough events
function completeToDo(element){
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
    
}

// remove todo
function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);
}

//Event on Check, Uncheck and Delete
list.addEventListener("click", function(event){
    const element = event.target; 
    const elementJob = element.attributes.job.value;
    
    if(elementJob == "complete"){
        completeToDo(element);
    }else if(elementJob == "delete"){
        removeToDo(element);
    }
});


$(document).ready(function(){
    $(".test i").on("click", function(){
          // var element = $(this).attr('data-id');
          var element = $(this).data('id');
          console.log(element);
          // element.classList.add("mystyle");
          element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
    });
});















