const input = document.getElementById("inputText");
const list = document.getElementById("todoList");
const itemList = document.querySelectorAll("label");
const inputChecked = document.querySelectorAll(".inputChecked");
const btnAddList = document.querySelector("#btnAdd");
const btnRemoveAll = document.querySelector("#btnRemoveAll");
const btnRemove = document.querySelectorAll(".btnRemove");
const btnEdit = document.querySelectorAll(".btnEdit");

/* FUNÇÃO PARA ADICIONAR OS ITENS NA LISTA */
btnAddList.addEventListener('click', () => {
  const label = document.createElement("label");
  label.classList.add("labelList");
  label.innerHTML = `
    <div class="divItemList">
      <input type="checkbox" class="inputChecked"> ${input.value}</input>
    </div>

    <div id="divBtnList">
      <button 
        type="button" 
        class="btnList btnRemove"
        onclick="removeItem(event)"
      >
        Exluir
      </button>

      <button 
        type="button" 
        class="btnList btnEdit"
      >
        Editar
      </button>
    </div>
  `
  list.appendChild(label);
  input.value = "";
})

/* FUNÇÃO PARA REMOVER TODOS OS ITENS DA LISTA */
btnRemoveAll.addEventListener('click', () => {
  //console.log(list.parentNode);
  list.parentNode.removeChild(list);
  document.location.reload(true);
}); 

/* FUNÇÃO PARA REMOVER INDIVIDUALMENTE OS ITENS DA LISTA */
const removeItem = (event) => {
  const element = event.target;
  //console.log(element.parentNode.parentNode);
  element.parentNode.parentNode.remove();
}
/* FUNÇÃO PARA EDITAR INDIVIDUALMENTE OS ITENS DA LISTA */

/* FUNÇÃO PARA LOCALSTOREGE */

