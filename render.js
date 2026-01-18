// render.js
// =======================
// Отвечает ТОЛЬКО за отрисовку проектов
// =======================

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("projects");

  // Защита от ошибок
  if (!container) {
    console.error("❌ Элемент #projects не найден");
    return;
  }

  // Если проектов нет
  if (!window.PROJECTS || PROJECTS.length === 0) {
    container.innerHTML = "<p>Проекты скоро появятся 🚀</p>";
    return;
  }

  // Рендер проектов
  PROJECTS.forEach(project => {
    const div = document.createElement("div");
    div.className = "project";

    const tasksHTML = Array.isArray(project.tasks) && project.tasks.length
      ? `<ul>${project.tasks.map(task => `<li>${task}</li>`).join("")}</ul>`
      : "";

    div.innerHTML = `
      <h3>🧠 ${project.title}</h3>
      <p>${project.description}</p>
      ${tasksHTML}
      <p>🔗 <a href="${project.link}" target="_blank" rel="noopener">Открыть проект</a></p>
    `;

    container.appendChild(div);
  });
});
