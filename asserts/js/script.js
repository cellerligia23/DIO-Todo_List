const input = document.getElementById("inputText");
const button = document.getElementById("btn");
const list = document.getElementById("todoList");
const itemList = document.querySelectorAll("label");

function addItemList(){
  const label = document.createElement("label");
  label.classList.add("labelList");
  label.innerHTML = `
    <div class="divItemList">
      <input type="checkbox"> ${input.value}</input>
    </div>

    <div id="divBtnList">
      <button 
        type="button" 
        id="btnRemove"
        class="btnList"
        onclick="rmvItemList()"
      >
        Exluir
      </button>
      <button 
        type="button" 
        id="btnEdit"
        class="btnList"
        onclick="editItemList()"
      >
        Editar
      </button>
    </div>
  `
  list.appendChild(label);
  input.value = "";
}

function rmvItemList(){

}
