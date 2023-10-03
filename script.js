document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addButton = document.getElementById("addButton");
    const taskList = document.getElementById("task-list");

    // Load tasks from localStorage when the page loads
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach(taskText => {
        const listItem = createTaskElement(taskText);
        taskList.appendChild(listItem);
    });

    addButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const listItem = createTaskElement(taskText);
            taskList.appendChild(listItem);

            // Save tasks to localStorage
            const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            tasks.push(taskText);
            localStorage.setItem("tasks", JSON.stringify(tasks));

            taskInput.value = "";
        }
    });

    function createTaskElement(taskText) {
        const listItem = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                listItem.classList.add("completed-task");
            } else {
                listItem.classList.remove("completed-task");
            }
        });

        const taskLabel = document.createElement("label");
        taskLabel.textContent = taskText;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "🗑️";
        deleteButton.classList.add("delete");
        deleteButton.addEventListener("click", function () {
            deleteTask(listItem, taskText);
        });

        listItem.appendChild(checkbox);
        listItem.appendChild(taskLabel);
        listItem.appendChild(deleteButton);

        return listItem;
    }

    function deleteTask(listItem, taskText) {
        taskList.removeChild(listItem);

        // Remove task from localStorage
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        const updatedTasks = tasks.filter(task => task !== taskText);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }
});
