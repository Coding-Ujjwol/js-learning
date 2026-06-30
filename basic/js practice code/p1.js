document.addEventListener("DOMContentLoaded", () => {

  const addBtn = document.getElementById("addBtn");
  const input = document.getElementById("taskInput");
  const desc = document.getElementById("desc");
  const priority = document.getElementById("priority");
  const dueDate = document.getElementById("dueDate");
  const tag = document.getElementById("tag");
  const imageInput = document.getElementById("imageInput");
  const search = document.getElementById("search");
  const columns = document.querySelectorAll(".column");

  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");

  let dragged = null;

  // ADD TASK
  addBtn.onclick = () => {
    if (!input.value.trim()) return;

    const file = imageInput.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        createTask(input.value, desc.value, priority.value, dueDate.value, tag.value, e.target.result, "todo");
        save(); updateUI();
      };
      reader.readAsDataURL(file);
    } else {
      createTask(input.value, desc.value, priority.value, dueDate.value, tag.value, null, "todo");
      save(); updateUI();
    }

    input.value = "";
    desc.value = "";
    imageInput.value = "";
  };

  // CREATE TASK
  function createTask(title, descText, prio, date, tagText, image, colId) {

    const task = document.createElement("div");
    task.className = `task ${prio}`;
    task.draggable = true;

    const overdue = date && new Date(date) < new Date();

    task.innerHTML = `
      <strong>${title}</strong>
      <small>${descText || ""}</small>
      <small>${date || ""}</small>
      <span>#${tagText || ""}</span>
      ${image ? `<img src="${image}">` : ""}
      <br>
      <button class="edit">✏️</button>
      <button class="delete">❌</button>
    `;

    if (overdue) task.style.background = "#ffe4e4";

    // DRAG
    task.addEventListener("dragstart", () => dragged = task);

    // DELETE
    task.querySelector(".delete").onclick = () => {
      task.remove();
      save(); updateUI();
    };

    // EDIT
    task.querySelector(".edit").onclick = () => {
      const newTitle = prompt("Edit task:", title);
      if (newTitle) {
        task.querySelector("strong").innerText = newTitle;
        save();
      }
    };

    // IMAGE MODAL
    const img = task.querySelector("img");
    if (img) {
      img.onclick = () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
      };
    }

    document.getElementById(colId).appendChild(task);
  }

  // CLOSE MODAL
  modal.onclick = () => {
    modal.style.display = "none";
  };

  // DRAG DROP
  columns.forEach(col => {
    col.addEventListener("dragover", e => e.preventDefault());

    col.addEventListener("drop", () => {
      if (dragged) {
        col.appendChild(dragged);
        save(); updateUI();
      }
    });
  });

  // SEARCH
  search.oninput = () => {
    const val = search.value.toLowerCase();

    document.querySelectorAll(".task").forEach(task => {
      task.style.display = task.innerText.toLowerCase().includes(val)
        ? "block"
        : "none";
    });
  };

  // SAVE
  function save() {
    const data = {};
    columns.forEach(col => {
      data[col.id] = [];
      col.querySelectorAll(".task").forEach(task => {
        data[col.id].push(task.innerHTML);
      });
    });
    localStorage.setItem("tasks", JSON.stringify(data));
  }

  // LOAD
  function load() {
    const data = JSON.parse(localStorage.getItem("tasks"));
    if (!data) return;

    for (let col in data) {
      data[col].forEach(html => {
        const wrapper = document.createElement("div");
        wrapper.innerHTML = html;
        const task = wrapper.firstElementChild;

        task.draggable = true;
        task.addEventListener("dragstart", () => dragged = task);

        const img = task.querySelector("img");
        if (img) {
          img.onclick = () => {
            modal.style.display = "flex";
            modalImg.src = img.src;
          };
        }

        document.getElementById(col).appendChild(task);
      });
    }

    updateUI();
  }

  // UI UPDATE
  function updateUI() {
    const total = document.querySelectorAll(".task").length;

    columns.forEach(col => {
      const count = col.querySelectorAll(".task").length;
      col.querySelector(".count").innerText = count;

      const percent = total ? (count / total) * 100 : 0;
      col.querySelector(".bar").style.width = percent + "%";
    });
  }

  load();

});


