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

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                listItem.classList.add("completed-task"); // Add the class if checkbox is checked
            } else {
                listItem.classList.remove("completed-task"); // Remove the class if checkbox is unchecked
            }
        });

        const taskLabel = document.createElement("label");
        taskLabel.textContent = taskText;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "🗑️";
        deleteButton.classList.add("delete"); // Add delete class for styling
        deleteButton.addEventListener("click", function () {
            deleteTask(listItem);
        });

        listItem.appendChild(checkbox);
        listItem.appendChild(taskLabel);
        listItem.appendChild(deleteButton);

        return listItem;
    }

    function deleteTask(listItem) {
        taskList.removeChild(listItem);
    }
});