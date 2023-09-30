document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addButton = document.getElementById("addButton");
    const taskList = document.getElementById("task-list");

    addButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const listItem = createTaskElement(taskText);
            taskList.appendChild(listItem);
            taskInput.value = "";
        }
    });

    function createTaskElement(taskText) {
        const listItem = document.createElement("li");
        listItem.textContent = taskText;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "🗑️";
        deleteButton.classList.add("delete"); // Add delete class for styling
        deleteButton.addEventListener("click", function () {
            deleteTask(listItem);
        });

        listItem.appendChild(deleteButton);
        return listItem;
    }

    function deleteTask(listItem) {
        taskList.removeChild(listItem);
    }
});
