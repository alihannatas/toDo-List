const button = document.getElementById("addButton button-addon2");
const forms = document.getElementById("forms");
const list = document.getElementById("list1");
let deleteListElement = [];
let markElement = [];
let deleteLength = 0;

let text = "";
let id = 1;
const getToDo = () => {
  let textArea = document.getElementById("textArea");
  text = textArea.value;
};

const onloadPage = (event) => {
  event.preventDefault();
};

function removeListElement() {
  this.parentElement.remove();
}
function markListElement() {
  if (this.getAttribute("id") == "toDo") {
    this.setAttribute("id", "ok");
  } else {
    this.setAttribute("id", "toDo");
  }
}

const addNewToDo = () => {
  getToDo();
  if (text.trim() === "") {
    alert("Please enter correct text.");
  } else {
    const li = document.createElement("li");
    li.classList = "list-group-item";
    li.setAttribute("id", "toDo");
    li.innerHTML = `${text}  <button id="iconForDelete" class="btn btn-outline-secondary"><i class="bi bi-x-circle-fill"></i></button>`;
    textArea.value = "";
    list.appendChild(li);
    deleteListElement = document.querySelectorAll("#iconForDelete");
    markElement = document.querySelectorAll("#toDo");
    deleteLength++;
    for (let i = 0; i < deleteLength; i++) {
      deleteListElement[i].addEventListener("click", removeListElement);
      markElement[i].addEventListener("click", markListElement);
    }
  }
};

button.addEventListener("click", addNewToDo);
forms.addEventListener("click", onloadPage);

for (let i = 0; i < 5; i++) {
  textArea.value = +`${i}` + "Lorem ipsum dolor sit.";
  addNewToDo();
}
