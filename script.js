const addForm = document.querySelector(".add");
const ul = document.querySelector(".todos");
const search = document.querySelector(".search input");

const generateTemplate = function (todo) {
  const li = `<li
class="list-group-item d-flex justify-content-between align-items-center"
>
<span>${todo}</span>
<i class="far fa-trash-alt delete"></i>
</li>`;

  ul.insertAdjacentHTML("beforeend", li);
  // ul.innerHTML += li;
};

addForm.addEventListener("submit", function (e) {
  //getting the value from the input
  const todo = addForm.add.value.trim();

  // console.log(todo);

  //Making sure the first letter is capitalized, just funzies really
  const capitalizeText = (text) => {
    return text.toLowerCase().charAt(0).toUpperCase() + text.slice(1);
  };

  if (capitalizeText(todo).length) {
    generateTemplate(capitalizeText(todo));

    //resting the input bar after each input
    addForm.reset();
  }

  e.preventDefault();
});

//Delete todos
ul.addEventListener("click", function (e) {
  // console.log(e);
  if (e.target.tagName === "I") {
    e.target.parentElement.remove();
  }

  // //Alternative
  // if (e.target.classList.contains("delete")) {
  //   e.target.parentElement.remove();
  // }
});

//Search functionality

// filtering through
const filterTodos = function (term) {
  // console.log(term);
  // console.log(ul.children);

  //convert it to an array
  // console.log(Array.from(ul.children));
  Array.from(ul.children)

    //Adds the class
    .filter((todo) => {
      // console.log(todo.textContent);
      // return true;
      return !todo.textContent.toLocaleLowerCase().includes(term);
    })
    .forEach((todo) => {
      todo.classList.add("filtered");
    });

  //Removes the class
  Array.from(ul.children)
    .filter((todo) => {
      return todo.textContent.toLocaleLowerCase().includes(term);
    })
    .forEach((todo) => {
      todo.classList.remove("filtered");
    });
};

//keyup event
search.addEventListener("keyup", function () {
  const term = search.value.trim().toLowerCase();

  filterTodos(term);
});
