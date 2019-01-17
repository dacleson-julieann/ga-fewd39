// append it the parent


// setting up the grabbing things...

// grab the form element
// grab the input element
// grab the button element
var form = document.querySelector("#new-todo-item-form");
var input = document.querySelector("#new-todo-item-input");
var list = document.querySelector("#todo-list");

var $form = $("#new-todo-item-form");
var $input = $("#new-todo-item-input");
var $list = $("#todo-list")


// append it to the element
// append it to the parent(adding stuff tpo the list)
// identify the parent(ul)
// attach child(li)
// create more children(li)
// we place input.value inside the newly child element

// JavaScript
function newItem(todo) {
  var listItem = document.createElement("li");
  listItem.textContent = todo;
  list.appendChild(listItem);
}

function formSub(event) {
  event.preventDefault();
  newItem(input.value);
  form.reset();
}

form.addEventListener("submit", formSub);

// function itemNew(todoNew) {
//   var itemList = "<li>" + todoNew + "</li>;"
//   list.appendChild(todoNew);
// }

// jQuery
// $form.on("submit", formClick);
//
// function formClick(event) {
//   event.preventDefault();
//   // var newList = document.createElement("li");
//   var newList = "<li>" + $input.val() + "</li>";
//   $list.append(newList);
//   $form[0].reset();
// }
// click: listen for the click of the button
// add: or onclick - under list tag
