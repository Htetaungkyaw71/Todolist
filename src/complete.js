import { getTask,updateLocalStorage } from "./script";

const checkbox = () =>{
    document.querySelectorAll('.check').forEach(check=>{  
        let h3 = check.nextElementSibling;
        let parent = check.parentElement.parentElement;        
        let task = getTask(parent.id)

        if(task.complete){
            h3.classList.add('select')
            check.checked = true
        }else{
            h3.classList.remove('select')
            check.checked = false
        }


        check.onchange = ()=>{
            if(check.checked === true){
                h3.classList.add('select')
                checking(true,parent.id)
            }
            else{
                h3.classList.remove('select')
                checking(false,parent.id)

            }
        }
    })
}



const checking = (bool,id) => {
    let task = getTask(id)
    task.complete = bool;
    updateLocalStorage()
  };
  

export {checkbox}