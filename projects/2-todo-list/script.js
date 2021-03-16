function populateTodoList(todos) {
  let itemLi = document.getElementById("todo-list");
  for (let x = 0; x < todoList.length; x++) {
    let listItem = document.createElement("li");
    listItem.classitemLi.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );
    let listSpan = document.createElement("span");
    listSpan.classitemLi.add("badge", "bg-primary", "rounded-pill");
    let itemChk = document.createElement("i");
    itemChk.classitemLi.add("fa", "fa-check");
    itemChk.setAttribute("aria-hidden", "true");
    let itemNotNeeded = document.createElement("i");
    itemNotNeeded.classitemLi.add("fa", "fa-trash");
    itemNotNeeded.setAttribute("aria-hidden", "true");
    listItem.innerText = todoList[i].task;
    listSpan.append(itemChk);
    listSpan.append(itemNotNeeded);
    listItem.append(listSpan);
    itemLi.append(listItem);
    var liItemCompleted = () => {
      if (listItem.style.textDecoration === "") {
        listItem.style.textDecoration = "line-through";
      } else if (listItem.style.textDecoration === "line-through") {
        listItem.style.textDecoration = "";
      }
    };
    itemChk.addEventListener("click", liItemCompleted);
    var liItem = function (x) {
      let getLiParent = x.target.parentElement.parentElement;
      getLiParent.remove();
    };
    itemNotNeeded.addEventListener("click", liItem);
  }
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  event.preventDefault();
  let addItem = [];
  let addItemObj = new Object();
  let itemInput = document.getElementById("todoInput").value;
  let inputForm = document.getElementsByTagName("form")[0];
  addItemObj.task = itemInput;
  addItem.push(addItemObj);
  inputForm.reset();
  populateTodoList(addItem);
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
