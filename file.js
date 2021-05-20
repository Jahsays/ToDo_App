function removeItem (e){
  // var grid = document.getElementById("one");
  // grid.remove();
  e.parentElement.parentElement.remove();
  console.log(e)
}
window.addEventListener("load",function (e) {
// add new item when you click submit 
function newItem(title){
  var grid = document.createElement("div");
  grid.className = "grid-item";
  grid.setAttribute("id", "incomplete");
  grid.addEventListener("dblclick", e =>{
    console.log(e.target.className)
  e.stopPropagation()
    if(e.target.id === "incomplete"){
      e.target.id = "complete"
    }else{
      e.target.id = "incomplete"
    }
  })
  grid.innerHTML = `
  <p>${title}</p>
  <div class="delete"><i class="fas fa-trash-alt" onclick="removeItem(this)"></i></div> 
  `
  document.getElementById("grid-container").appendChild(grid);
  // var iconDiv = document.createElement("div");
  // iconDiv.className = "delete";
  // var icon = document.createElement("i");
  // icon.className = "fas fa-trash-alt";
  // icon.setAttribute("id", "icon");
  // iconDiv.appendChild(icon);
  // var p = document.createElement("p");
  // var inputValue = document.getElementById("input").value;
  // var t = document.createTextNode(inputValue);
  // p.appendChild(t);
  // grid.appendChild(p);
  // grid.appendChild(iconDiv);
  // if (inputValue === "") {
  //     alert("Enter an item");
  // }else{
  //     // document.getElementById("grid-container").appendChild(grid);
  // }
  // document.getElementById("input").value = "";
  }
  
  // add event listener to the button 
  document.querySelector(".input-button").addEventListener("submit", function (e) {
    e.preventDefault()
    var inputValue = document.getElementById("input").value;
     if (inputValue === "") {
          alert("Enter an item");
      }else{
        newItem(inputValue)
      }
      document.getElementById("input").value = "";
  });
  
  // add event listener to the input 
  // document.getElementById("input").addEventListener('keypress', function (e) {
  //     if (e.key === 'Enter') {
  //       // code for enter
  //       newItem();
  //     }
  // });
  
  // delete function 
  
  
  // document.getElementById("icon").addEventListener("click", removeItem);
  
  
  // const card = document.querySelector('grid-item');
  
  // card.addEventListener('dblclick', function (e) {
  //   card.style.color = "";
  // });
})