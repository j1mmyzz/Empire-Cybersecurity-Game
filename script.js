// Define container element outside event listener
const newContainerElement = document.createElement("div");
newContainerElement.classList.add("container");

const changeBackgroundBtn = document.getElementById("start");

changeBackgroundBtn.addEventListener("click", function () {
  // Clear existing content
  document.body.innerHTML = "";

  // Append container element to body
  document.body.appendChild(newContainerElement);

  // Add content to container element
  const mail = document.createElement("p");
  mail.textContent = "You received a new email";
  mail.style.fontSize = "3em"; // Set font size to 2em
  mail.style.textAlign = "center"; // Center the text
  mail.style.color = "white";
  newContainerElement.appendChild(mail);

  const newImageElement = document.createElement("img");
  newImageElement.src = "backgrounds/newemail.jpg";
  newImageElement.style.maxWidth = "50%"; // Set maximum width to 100%
  newImageElement.style.maxHeight = "50%"; // Set maximum height to 100%
  newContainerElement.appendChild(newImageElement);

  const wwyd = document.createElement("p");
  wwyd.textContent = "What will you do?";
  wwyd.style.fontSize = "3em"; // Set font size to 2em
  wwyd.style.textAlign = "center"; // Center the text
  wwyd.style.color = "white";
  newContainerElement.appendChild(wwyd);

  createOpenButton();
  const space = document.createElement("br");
  newContainerElement.appendChild(space);
  createDontOpenButton();

  // Center the container element
  newContainerElement.style.display = "flex";
  newContainerElement.style.justifyContent = "center";
  newContainerElement.style.alignItems = "center";
});

function createOpenButton() {
  const open = document.createElement("button");
  open.setAttribute("id", "open");
  open.textContent = "Open it";
  open.style.width = "200px";
  open.style.fontSize = "1em";
  open.style.textAlign = "center"; // Center the text
  open.style.color = "black";
  open.addEventListener("click", function () {
    const text = document.createElement("p");
    text.textContent = "You opened the email!";
    text.style.fontSize = "3em"; // Set font size to 2em
    text.style.textAlign = "center"; // Center the text
    text.style.color = "white";
    newContainerElement.appendChild(text);
    for (let i = 0; i < 80; i++) {
      const space = document.createElement("br");
      newContainerElement.appendChild(space);
    }
  });
  newContainerElement.appendChild(open);
}

function createDontOpenButton() {
  const dontopen = document.createElement("button");
  dontopen.setAttribute("id", "dontopen");
  dontopen.textContent = "Don't open it";
  dontopen.style.width = "200px";
  dontopen.style.fontSize = "1em";
  dontopen.style.textAlign = "center"; // Center the text
  dontopen.style.color = "black";
  dontopen.addEventListener("click", function () {
    const text = document.createElement("p");
    text.textContent = "You resisted the temptation!";
    text.style.fontSize = "3em"; // Set font size to 2em
    text.style.textAlign = "center"; // Center the text
    text.style.color = "white";
    newContainerElement.appendChild(text);
    for (let i = 0; i < 80; i++) {
      const space = document.createElement("br");
      newContainerElement.appendChild(space);
    }
  });
  newContainerElement.appendChild(dontopen);
}
