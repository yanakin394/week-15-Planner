// Находим и сохраняем в константу кнопку Добавить и Очистить список задач
const addTaskButton = document.querySelector('.task__add-button');
const clearTasks = document.querySelector('.task-list__button');
const taskList = document.querySelector('.task-list');

// Добавляю обработчик событий для добавления задач в список после нажатия кнопки Добавить
addTaskButton.addEventListener('click', () => {    
    // задаю переменную для получения данных, введенных пользователем
    let task = document.getElementById('task_input').value;

    //создаю контейнер, для добавления задач одну за одной
    const divContainer = document.createElement("div_container");
    divContainer.classList.add("list__container");

    // добавляю задачу, введенную пользователем, в список
    divContainer.innerHTML = `                                 
        <label class="label">            
            <input type="checkbox" id="checkbox">
            <span class="task_added">${task}<\span>
        </label>`;
    taskList.appendChild(divContainer);


    // создаю функцию, чтобы инпут был пустым после нажатия кнопки
    const cleanInput = () => {
        const getInput = document.getElementById('task_input');
        getInput.value = '';
    }
    cleanInput();

    //ЦИКЛ для проверки чекбоксов
    /* const checkboxes = document.getElementById('checkbox');
    const checkboxesArr = Array.from(checkboxes); */
    function enableClearTasks () {
        const checkboxes = document.getElementById('checkbox');
        for (let i= 0; i < checkboxes.clientHeight; i++) {
            checkboxes[i].addEventListener('change', function() {
                if(checkboxes[i].checked) {
                    clearTasks.removeAttribute("disabled");
                }
            })
        }
    }
    enableClearTasks();
})


/* document.getElementById('checkbox').addEventListener('change', () => {
    clearTasks.disabled = !checkbox.checked;
}) */

/* function activeCleanButton () {
    const checkbox = document.getElementById('checkbox');
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            clearTasks.disabled = false;
        } else {
            clearTasks.disabled = true;
        }
    })
}
activeCleanButton (); */