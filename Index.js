// Change font size dynamically based on range input
function changeFontSize() {
    const size = document.getElementById("font-size").value;
    document.execCommand("fontSize", false, size);
}

// Change font color dynamically based on color input
function changeFontColor() {
    const color = document.getElementById("font-color").value;
    document.execCommand("foreColor", false, color);
}

// Add text to the editor
function addText() {
    const textArea = document.querySelector(".text-area");
    const text = prompt("Enter the text to add:");
    if (text) {
        textArea.innerHTML += `<p>${text}</p>`;
    }
}

// Remove all text from the editor//
function removeText() {
    const textArea = document.querySelector(".text-area");
    textArea.innerHTML = "";
}
