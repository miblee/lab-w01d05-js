

// --console logs information so I can see what I need to target --
var input = document.querySelector('.new-todo');

var handleKeyup = function(event) {
  console.log('TARGET: ',event.target, 'CHARS: ',event.target.value, 'KEYCODE: ', event.keyCode);
}

input.addEventListener('keyup', handleKeyup);



// --------------creates li -----------------

var list = document.querySelector('.todos');

var createLi = function(event) {
  if(event.keyCode === 13){
    var newLi = document.createElement('li');
    var liX = document.createElement('span');

    newLi.setAttribute('class', 'todo');
    newLi.textContent = event.target.value;
    list.appendChild(newLi);

    liX.setAttribute('class', 'remove');
    liX.textContent = 'X';
    newLi.appendChild(liX);

    event.target.value = ''; //supposed to reset input text
    addListener(liX, 'click', handleXClick);
    todoCounter();
  };
}

input.addEventListener('keyup', createLi);



// -------------adds/removes .complete from todo text-------------

// var textToStrike = document.querySelectorAll('li.todo');
// ^why doesn't this variable work?
// NodeList returned is length 0....


var handleTextClick = function(event){
  event.target.classList.toggle('complete');
  todoCounter();
}


list.addEventListener('click', handleTextClick);


// --------------------click X to remove li----------------------

var removeLi = document.querySelectorAll('span') === null;

// console.log(removeLi);

var handleXClick = function(event){
  event.target.parentNode.remove();
  todoCounter();
}

function addListener(element, type, func) {
  element.addEventListener(type, func);
}


// --------------------------task counter ------------------------

var counter = document.querySelector('#counter');

var todoCounter = function(){
  var tasksCompleted = document.querySelectorAll('.complete').length;
  var taskCount = document.querySelectorAll('.todo').length;
  counter.textContent = ((taskCount - tasksCompleted) + " out of " + taskCount + " tasks remaining");
};




