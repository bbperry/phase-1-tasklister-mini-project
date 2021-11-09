document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("#createTaskForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    buildToDo();
    form.reset();
  });
});

const makeEl = (el) => document.createElement(el);

function buildToDo() {
    
  let btn = makeEl("button"); 
  let newListRow = makeEl("tr");
  let newTaskData = makeEl("td");
  let newPriorityData = makeEl("td");
  let btnContainer = makeEl("td");
  let priority = document.querySelector("#priority").value;
  let currentEntry = document.querySelector("#newTaskDescription").value;
  let taskTable = document.querySelector("#tasks");

  if (currentEntry == "") {
    alert("Please Enter A Task Description!");
    return false;
  }

 if (newPriorityData == 'Low Priority') {
    newPriorityData.style.color = 'red'
 }

  btn.addEventListener("click", handleDelete);
  btn.textContent = "Remove List Item";
  newTaskData.textContent = currentEntry;
  newPriorityData.textContent = `${priority}`;
  newListRow.className = `${priority}`;

console.log(`p-${newPriorityData}`)
  // document.querySelector("#list").appendChild(newListRow, priority);

  newListRow.append(newTaskData, newPriorityData, btn);
  taskTable.appendChild(newListRow);
  // p.appendChild(priority)

  console.log(currentEntry);

  // document.querySelector('#priority').appendChild(priority)
}

function handleDelete(e) {
  e.target.parentNode.remove();
}
