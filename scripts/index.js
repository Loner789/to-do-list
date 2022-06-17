// ПЕРЕМЕННЫЕ:
const todos = [
  "Сделать проектную работу",
  "Полить цветы",
  "Пройти туториал по Реакту",
  "Сделать фронт для своего проекта",
  "Погулять с собакой",
  "Разобраться в замыканиях",
  "Решить задачу на Codewars",
]; // Массив задач "из коробки"

const todoListElement = document.querySelector(".todos__list"); // Список задач
const todoFormElement = document.querySelector(".todos__form"); // Форма добавления задачи
const todoInputElement = todoFormElement.querySelector(".todos__input"); // Поле ввода
const todoTemplateElement = document.querySelector(".todo-template"); // Шаблон элемента списка
const todoSubmitButtonElement = document.querySelector(".todos__submit-btn"); // Кнопка подтверждения

let editedTodo = null;

// ФУНКЦИИ:
// Деактивация кнопки
function disableButton(buttonElement) {
  buttonElement.disabled = true;
}

// Активация кнопки
function enableButton(buttonElement) {
  buttonElement.disabled = false;
}

// Переключение кнопки добавления
function toggleButton(buttonElement) {
  if (todoInputElement.value.length > 0) {
    return enableButton(buttonElement);
  }
  return disableButton(buttonElement);
}

// Выбранный элемент списка
function getTodoByEvent(e) {
  return e.currentTarget.closest(".todo");
}

// Текст элемента списка
function getTodoTextElement(todo) {
  return todo.querySelector(".todo__text");
}

// Удаление элемента списка
function deleteTodo(e) {
  const todo = getTodoByEvent(e);

  todo.remove();
}

// Редактирование элемента списка
function editTodo(e) {
  const todo = getTodoByEvent(e);

  editedTodo = todo;

  todoInputElement.value = getTodoTextElement(editedTodo).textContent;
  todoSubmitButtonElement.textContent = "Сохранить";
  enableButton(todoSubmitButtonElement);
}

// Копирование элемента списка
function duplicateTodo(e) {
  const todo = getTodoByEvent(e);
  const duplicatedTodo = todo.cloneNode(true);

  addTodoListeners(duplicatedTodo);

  todo.after(duplicatedTodo);
}

// Создание слушателей кнопок элемента списка
function addTodoListeners(todo) {
  todo
    .querySelector(".todo__btn_type_delete")
    .addEventListener("click", deleteTodo);
  todo
    .querySelector(".todo__btn_type_edit")
    .addEventListener("click", editTodo);
  todo
    .querySelector(".todo__btn_type_duplicate")
    .addEventListener("click", duplicateTodo);
}

// Создание элемента списка
function createTodo(text) {
  const todo = todoTemplateElement.content
    .querySelector(".todo")
    .cloneNode(true);

  getTodoTextElement(todo).textContent = text;
  addTodoListeners(todo);

  return todo;
}

// Добавление элемента в начало списка
function addTodo(text) {
  const todo = createTodo(text);

  todoListElement.prepend(todo);
}

// Поведение кнопки подтверждения
function handleTodoSubmit(e) {
  e.preventDefault();

  const text = todoInputElement.value;

  if (editedTodo) {
    getTodoTextElement(editedTodo).textContent = text;
    todoSubmitButtonElement.textContent = "Добавить";

    editedTodo = null;
  } else {
    addTodo(text);
  }

  todoFormElement.reset();
  disableButton(todoSubmitButtonElement);
}

// Добавление списка "из коробки"
todos.forEach(addTodo);

//СЛУШАТЕЛИ СОБЫТИЙ:
// Слушатель кнопки подтверждения
todoFormElement.addEventListener("submit", handleTodoSubmit);

// Слушатель поля ввода
todoInputElement.addEventListener("input", () => {
  toggleButton(todoSubmitButtonElement);
});
