const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

addBtn.addEventListener("click", () => {
    const task = todoInput.value.trim();

    if (task !== "") {
        const li = document.createElement("li");
        li.append(task + " ");

        const completeBtn = document.createElement("button");
        completeBtn.textContent = "Complete";

        completeBtn.addEventListener("click", () => {
            li.style.textDecoration =
                li.style.textDecoration === "line-through"
                    ? "none"
                    : "line-through";
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", () => {
            li.remove();
        });

        li.append(completeBtn, deleteBtn);
        todoList.appendChild(li);

        todoInput.value = "";
    }
});
