// Engineered by Omonire (github.com/omonire)

// Grab the elements we need from the page
var input = document.getElementById("itemInput");
var addBtn = document.getElementById("addBtn");
var list = document.getElementById("list");
var empty = document.getElementById("empty");

// The key used to store items in localStorage
var STORAGE_KEY = "omonire-todos";

// Load saved items from localStorage (or start with an empty list)
var items = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

// Save the current items array back to localStorage
function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

// Draw all items into the <ul>
function render() {
  // Clear the list first
  list.innerHTML = "";

  // Show or hide the empty message
  if (items.length === 0) {
    empty.style.display = "block";
  } else {
    empty.style.display = "none";
  }

  // Loop through every item and build a row
  for (var i = 0; i < items.length; i++) {
    var li = document.createElement("li");

    // Text of the task
    var span = document.createElement("span");
    span.textContent = items[i];
    li.appendChild(span);

    // Delete button for this item
    var del = document.createElement("button");
    del.textContent = "Delete";
    del.onclick = makeDelete(i);
    li.appendChild(del);

    // Add the row to the list
    list.appendChild(li);
  }
}

// Create a delete handler for a specific index
function makeDelete(index) {
  return function () {
    items.splice(index, 1);
    save();
    render();
  };
}

// Add a new item from the input field
function addItem() {
  var text = input.value.trim();

  // Ignore empty input
  if (text === "") {
    return;
  }

  items.push(text);
  input.value = "";
  save();
  render();
}

// Add item when the button is clicked
addBtn.onclick = addItem;

// Add item when Enter is pressed in the input
input.onkeydown = function (e) {
  if (e.key === "Enter") {
    addItem();
  }
};

// Draw saved items when the page loads
render();
