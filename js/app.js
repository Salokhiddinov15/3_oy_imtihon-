const addformStyle = document.querySelector(".menu-style");
const addInput = document.querySelector("#input")
const addbtn = document.querySelector("#btn_add");
const todoListtasksEl = document.querySelector("#todolist-tasks");
const iptEllink = document.querySelector(".input_link");
const inputNomi = document.querySelector(".input_nomi");
const inputNarxi = document.querySelector(".input_narxi");
const oshpazName = document.querySelector(".oshpaz_name");
const restoranName = document.querySelector(".retoran_name")



addformStyle.addEventListener("submit", (e) =>{

  

  e.preventDefault();
  let addivEl = document.createElement("div");
  todoListtasksEl.appendChild(addivEl);
  addivEl.classList.add("list");

  let imgEl = document.createElement("img");
  imgEl.classList = "image";
  imgEl.src = iptEllink.value;
  addivEl.appendChild(imgEl);


  let textdevEl = document.createElement("div");
  textdevEl.classList = "text_dev"
  let onePEl = document.createElement("p");
  let twoPEl = document.createElement("p");
  let threPEl = document.createElement("p");
  let foPEl = document.createElement("p");
  onePEl.classList.add("one_text");
  onePEl.textContent = inputNomi.value;
  twoPEl.textContent = inputNarxi.value;
  threPEl.textContent = oshpazName.value;
  foPEl.textContent = restoranName.value;
  twoPEl.classList.add("two_text");
  threPEl.classList.add("thre_text");
  foPEl.classList.add("four_text");
  textdevEl.appendChild(onePEl);
  textdevEl.appendChild(twoPEl);
  textdevEl.appendChild(threPEl);
  textdevEl.appendChild(foPEl);
  console.log(textdevEl);
  addivEl.appendChild(textdevEl);

  let btnDiv = document.createElement("div");
  console.log(btnDiv);
  addivEl.appendChild(btnDiv);
  btnDiv.classList.add("btn-div-last")


  let boxEl = document.createElement("div");
  
  addivEl.appendChild(boxEl);

  let btnEl = document.createElement("button");
  let btntwoEl = document.createElement("button");
  let btnthreeEl = document.createElement("button");

  boxEl.appendChild(btnEl);
  boxEl.appendChild(btntwoEl);
  boxEl.appendChild(btnthreeEl);

  btnEl.classList.add("delete");
  btntwoEl.classList.add("data");
  btnthreeEl.classList.add("stop");

  const data = new Date();
  console.log(data);
  const time = data.getDate() + "/" + data.getMonth() + "/" + data.getFullYear();
  console.log(time);

  btnEl.textContent = "Delete";
  btntwoEl.textContent = time;
  btnthreeEl.textContent = "Done";

  boxEl.addEventListener("click", () =>{
    if(btnthreeEl.hasAttribute("contenteditable")){
      btnthreeEl.removeAttribute("contenteditable");
      addivEl.style.background = '#ffff'
      btnthreeEl.innerHTML = 'Done';
    }
    else{
      btnthreeEl.setAttribute("contenteditable",true)
      btnthreeEl.innerHTML = '<i class="bi bi-check2-all"></i>'

    }
  })


  onePEl.textContent = "Taom nomi: " + inputNomi.value;
  twoPEl.textContent = "Taom narxi: $" + inputNarxi.value;
  threPEl.textContent = "Taom oshpazi: " + oshpazName.value;
  foPEl.textContent = "Taom restorani: " + restoranName.value;



  btnEl.addEventListener("click", () => {
    addivEl.remove();
  })

  btnthreeEl.addEventListener("click", () =>{
    addivEl.style.background = "#C9F4A7";
  })

  




 })

// addbtn.addEventListener("click", () =>{
//   addInput.value = "";
//   // inputNomi.value = "";
//   // inputNarxi.value = "";
//   // iptEllink.value = "";
//   // oshpazName.value = "";
//   // restoranName.value = "";
// })