let textArea = document.getElementById("text-area");
let undoStack = [];
let redoStack = [];

function insertText() {
  let text = prompt("Enter text to insert:");
  if (text !== null) {
    undoStack.push(textArea.value);
    textArea.value += text;
    redoStack = [];
  }
}

function deleteText() {
  let numChars = prompt("Enter the number of characters to delete:");
  if (numChars !== null && !isNaN(numChars) && numChars > 0) {
    undoStack.push(textArea.value);
    textArea.value = textArea.value.slice(0, -numChars);
    redoStack = [];
  }
}

function undo() {
  if (undoStack.length > 0) {
    redoStack.push(textArea.value);
    textArea.value = undoStack.pop();
  }
}

function redo() {
  if (redoStack.length > 0) {
    undoStack.push(textArea.value);
    textArea.value = redoStack.pop();
  }
}
