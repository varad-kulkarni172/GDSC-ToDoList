document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addButton = document.getElementById("addButton");
    const taskList = document.getElementById("task-list");

    addButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const listItem = document.createElement("li");
            listItem.textContent = taskText;

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", function () {
                removeTask(listItem);
            });

            listItem.appendChild(deleteButton);
            taskList.appendChild(listItem);
            taskInput.value = "";
        }
    });

    function removeTask(listItem) {
        taskList.removeChild(listItem);
    }
});
