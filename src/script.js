const list = document.querySelector('.list-item');

let tasks = [];

const add = (task) =>{
    tasks.push(task)
    updateLocalStorage()
    render(task)
    ChangeEdit()
    removeDom()
}

const remove = (id) =>{
    let newtasks = []
    tasks = tasks.filter(task => task.id !== id)
    tasks.forEach((task,index)=>{
        newtasks.push({...task,index})
    })
    tasks = newtasks;
    updateLocalStorage()
}

const updateLocalStorage = ()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks)) 
}

const checkLocalStorage = ()=>{
    if(localStorage.getItem("tasks")){
        tasks = JSON.parse(localStorage.getItem("tasks"))
    } else {
        localStorage.setItem("tasks",JSON.stringify([]))
    }
}

const ChangeEdit = () =>{
    document.querySelectorAll("#edit").forEach(btn=>{
        btn.onclick = () =>{
            const trash = btn.nextElementSibling;
            const parentDiv = btn.parentElement.parentElement;
            const input = btn.parentElement.previousElementSibling;
            input.setAttribute('contenteditable', true)
            parentDiv.style.background = "#DCDBA9";
            trash.classList.remove('trash')
            btn.classList.add('trash')    
        }    
    })
}

const removeDom = () =>{
    document.querySelectorAll("#delete").forEach(btn=>{
        btn.onclick = () =>{
            const parentDiv = btn.parentElement.parentElement;
            remove(parentDiv.id)
            parentDiv.remove()
        }    
    })


}

const render = (task) => {
    const div = document.createElement('div');
    div.innerHTML = `
      <h3>
          <input type="checkbox" class="check">
              ${task.description}
      </h3>
          <div>
            <button id="edit">
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </button>
            <button id="delete" class="trash">
                <i class="fa-solid fa-trash-can"></i>
            </button>

             
          </div>
      `;
    div.classList.add('list');
    div.id = task.id
    list.appendChild(div);
  };


export {add,render, updateLocalStorage, checkLocalStorage, tasks, ChangeEdit, removeDom}