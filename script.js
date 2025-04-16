// Change text content dynamically
document.getElementById("change-text").addEventListener("click", function () {
    const title = document.getElementById("page-title");
    title.textContent = "You changed the title!";
  });
  
  // Modify CSS styles via JavaScript
  document.getElementById("change-style").addEventListener("click", function () {
    const desc = document.getElementById("description");
    desc.style.color = "purple";
    desc.style.fontWeight = "bold";
    desc.style.backgroundColor = "#f0f0f0";
    desc.style.padding = "10px";
  });
  
  // Add or remove an element when a button is clicked
  document.getElementById("toggle-box").addEventListener("click", function () {
    const container = document.getElementById("box-container");
    const existingBox = document.getElementById("magic-box");
  
    if (existingBox) {
      container.removeChild(existingBox);
    } else {
      const box = document.createElement("div");
      box.id = "magic-box";
      box.style.width = "150px";
      box.style.height = "150px";
      box.style.backgroundColor = "skyblue";
      box.style.margin = "20px auto";
      container.appendChild(box);
    }
  });
  