
// add new item when you click submit 
function newItem(){
var grid = document.createElement("div");
grid.className = "grid-item";
grid.setAttribute("id", "one");
var iconDiv = document.createElement("div");
iconDiv.className = "delete";
var icon = document.createElement("i");
icon.className = "fas fa-trash-alt";
icon.setAttribute("id", "icon");
iconDiv.appendChild(icon);
var p = document.createElement("p");
var inputValue = document.getElementById("input").value;
var t = document.createTextNode(inputValue);
p.appendChild(t);
grid.appendChild(p);
grid.appendChild(iconDiv);
if (inputValue === "") {
    alert("Enter an item");
}else{
    document.getElementById("grid-container").appendChild(grid);
}
document.getElementById("input").value = "";
}

// add event listener to the button 
document.getElementById("submit").addEventListener("click", newItem);

// add event listener to the input 
document.getElementById("input").addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      // code for enter
      newItem();
    }
});

// delete function 
function removeItem(){
    var grid = document.getElementById("one");
    grid.remove();
}

document.getElementById("icon").addEventListener("click", removeItem);


const card = document.querySelector('grid-item');

card.addEventListener('dblclick', function (e) {
  card.style.color = "green";
});