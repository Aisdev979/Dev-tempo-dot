/*
 To-do list
 - Adds tasks from the form and shows them in the list
 - Saves task texts in localStorage and rebuilds the list on page load
 - Handles ticking a task as done and deleting a task
*/

//DOM references
const newTaskInput = document.querySelector('#new-task');
const taskListElement = document.querySelector('#task-list');
const addTaskButton = document.querySelector('#task-form__submit');

// Key used to store the task texts in localStorage.
const STORAGE_KEY = 'todo-task-texts';

// For counting tasks as they are added, so we can display a number alongside the text.
let nextTaskIndex = 0;

// Building the task HTML

/* Creates the <li> for one task. It does NOT add it to the page;
 the caller decides where to append it.

 Resulting structure:
   <li class="task-list__item">
     <div class="task">
      <input type="checkbox" class="task__checkbox">
       <label class="task__label">...</label>
       <button class="task__delete"></button>
     </div>
  </li>
*/
const createTaskElement = (taskText) => {
    const taskIndex = nextTaskIndex++;
    const checkboxId = `added-task-${taskIndex}`;

    const listItem = document.createElement('li');
    const taskWrapper = document.createElement('div');
    const checkbox = document.createElement('input');
    const label = document.createElement('label');
    const deleteButton = document.createElement('button');

    listItem.classList.add('task-list__item');
    taskWrapper.classList.add('task');

    checkbox.classList.add('task__checkbox');
    checkbox.type = 'checkbox';
    checkbox.id = checkboxId;

    /* htmlFor links the label to the checkbox, so clicking the text ticks it.
     The "+ 1" makes it dynamic, as the task grows so is the number.
    */
    label.classList.add('task__label');
    label.htmlFor = checkboxId;
    label.textContent = `${taskText} #${taskIndex + 1}`;

    /* The delete button has no visible text (the icon is presumably added in CSS),
     so aria-label gives screen readers something to announce.
    */
    deleteButton.classList.add('task__delete');
    deleteButton.type = 'button';
    deleteButton.setAttribute('aria-label', `Delete ${taskText}`);

    taskWrapper.append(checkbox, label, deleteButton);
    listItem.append(taskWrapper);

    return listItem;
};

const addTaskToPage = (taskText) => {
    taskListElement.append(createTaskElement(taskText));
};

// Tasks are stored as a JSON array of strings, e.g. ["Buy milk", "Call mum"].
const loadSavedTaskTexts = () => {
    try {
        const savedJson = localStorage.getItem(STORAGE_KEY);

        // getItem returns null when nothing has been saved yet (first visit)
        return savedJson ? JSON.parse(savedJson) : [];
    } catch (error) {
        /* Storage was corrupted or edited by hand. Start with an empty list
           rather than letting the whole page crash on load.
        */
        return [];
    }
};

const saveNewTaskText = (taskText) => {
    const savedTaskTexts = loadSavedTaskTexts();
    savedTaskTexts.push(taskText);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedTaskTexts));
};

// Removes ONE task from storage, identified by its position in the list.
const removeSavedTaskAtPosition = (taskPosition) => {
    const savedTaskTexts = loadSavedTaskTexts();
    savedTaskTexts.splice(taskPosition, 1); // remove exactly 1 item at that position
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedTaskTexts));
};

/*
  Event handlers
*/

const handleAddTaskSubmit = (event) => {
    // Stop the browser from reloading the page when the form is submitted
    event.preventDefault();

    const taskText = newTaskInput.value.trim();

    // Ignore empty or whitespace-only input
    if (!taskText) return;

    saveNewTaskText(taskText);
    addTaskToPage(taskText);

    // Clear the input field text.
    newTaskInput.value = '';
};

/* Event delegation: one listener on the whole list handles every checkbox,
   including tasks added later. `closest` makes sure we only react to clicks
   that actually came from a checkbox.
*/
const handleTaskCheckboxChange = (event) => {
    const checkbox = event.target.closest('.task__checkbox');
    if (!checkbox) return;

    // Adds the "completed" style when ticked, removes it when unticked
    checkbox.closest('.task').classList.toggle('task--completed', checkbox.checked);
};

/* Removes the task from the page AND from localStorage, so it does not
   come back after a refresh.
*/
const handleDeleteButtonClick = (event) => {
    const deleteButton = event.target.closest('.task__delete');
    if (!deleteButton) return;

    const taskListItem = deleteButton.closest('.task-list__item');

    /* Work out the task's position BEFORE removing it from the page,
       because once it is removed we can no longer find where it was.
    */
    const taskPosition = Array.from(taskListElement.children).indexOf(taskListItem);

    removeSavedTaskAtPosition(taskPosition);
    taskListItem.remove();
};

// Rebuilds the list from localStorage when the page opens
const showSavedTasksOnPage = () => {
    const savedTaskTexts = loadSavedTaskTexts();

    for (const taskText of savedTaskTexts) {
        addTaskToPage(taskText);
    }
};

// Wiring everything up - listen for events and show the saved tasks when the page loads
window.addEventListener('DOMContentLoaded', showSavedTasksOnPage);
addTaskButton.addEventListener('click', handleAddTaskSubmit);
taskListElement.addEventListener('change', handleTaskCheckboxChange);
taskListElement.addEventListener('click', handleDeleteButtonClick);