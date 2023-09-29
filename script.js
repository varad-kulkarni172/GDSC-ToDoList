document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addButton = document.getElementById("addButton");
    const taskList = document.getElementById("task-list");
    const completedList = document.getElementById("completed-list");

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

        const completeButton = document.createElement("button");
        completeButton.textContent = "✅";
        completeButton.addEventListener("click", function () {
            completeTask(listItem);
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "🗑️";
        deleteButton.addEventListener("click", function () {
            deleteTask(listItem);
        });

        listItem.appendChild(completeButton);
        listItem.appendChild(deleteButton);
        return listItem;
    }

    function completeTask(listItem) {
        taskList.removeChild(listItem);
        completedList.appendChild(listItem);
        listItem.classList.add("completed", "completed-enter");
    }

    function deleteTask(listItem) {
        if (taskList.contains(listItem)) {
            taskList.removeChild(listItem);
        } else if (completedList.contains(listItem)) {
            completedList.removeChild(listItem);
        }
    }
});
