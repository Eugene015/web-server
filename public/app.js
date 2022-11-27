document.addEventListener("click", (event) => {
  if (event.target.dataset.type === "remove") {
    const id = event.target.dataset.id;

    remove(id).then(() => {
      event.target.closest("li").remove();
    });
  }
  if (event.target.dataset.type === "edit") {
    const id = event.target.dataset.id;
    const newTitle = prompt("Enter new title");
    const newObjTitle = { title: newTitle, id: id };

    edit(id, newObjTitle).then(() => {
      window.history.replaceState(null, null, window.location.href);
      window.location.reload();
    });
  }
});

async function remove(id) {
  await fetch(`/${id}`, { method: "DELETE" });
}

async function edit(id, newObjTitle) {
  await fetch(`/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newObjTitle),
  });
}
