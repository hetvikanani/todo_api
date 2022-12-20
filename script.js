const input = document.getElementById("inputVal");
const addBtn = document.getElementById("addBtn");
const todoUL = document.getElementById("todoUL");
const deleteBtn = document.getElementById("delete");




const liDiv = document.getElementById("liDiv");

addBtn.addEventListener("click", () => {
    const inputVal = input.value;
    if (inputVal) {
        const li = document.createElement("li");
        li.innerHTML = `
    <input type="checkbox">  ${inputVal}
    `;
        const btn = document.createElement("button");
        btn.innerHTML = ` <i id="delete" class="fa fa-trash text-danger"></i> 
        </div>
        `
        btn.classList.add("btnAdd")
        liDiv.append(li);
        liDiv.append(btn);

        todoUL.append(liDiv)
    }


    input.value = "";
});

todoUL.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.id === "delete") {

    }
})
