// Находим и сохраняем в константу кнопку Добавить и Очистить список задач
const addTaskButton = document.querySelector('.task__add-button');
const clearTasks = document.querySelector('.task-list__button');
const taskList = document.querySelector('.task-list');
const taskInput = document.getElementById('task_input');
const getInput = document.getElementById('task_input');

// Добавляю обработчик событий для добавления задач в список после нажатия кнопки Добавить
addTaskButton.addEventListener('click', () => {        
    // задаю переменную для получения данных, введенных пользователем
    let task = document.getElementById('task_input').value;

    //создаю контейнер, для добавления задач одну за одной
    const divContainer = document.createElement("div");
    divContainer.classList.add("list__container");

    // добавляю задачу, введенную пользователем, в список
    if (getInput.value.length > 0) {
        divContainer.innerHTML = `                                 
        <label class="label">            
            <input type="checkbox" id="checkbox" disabled>
            <span class="task_added">${task}<\span>
        </label>`;
    taskList.appendChild(divContainer);
    } else if (getInput.value === '') {
        alert('Введите задачу!');
    }

    //очищаю инпут после ввода
    getInput.value = '';
 
    //активизация кнопки Очистки задач  НЕ РАБОТАЕТ
    if(clearTasks.disabled == true) {
        clearTasks.disabled = false
    }    
});

// обработчик событий для кнопки Очищения задач
clearTasks.addEventListener('click', () => {
    taskList.innerHTML = ``;
})