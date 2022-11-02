import {getTask,updateLocalStorage} from "./script.js"

let startindex;
let lastindex;
let listItems = document.querySelector('.list-item')

const dragstart = (e)=>{
    startindex = +e.target.getAttribute('data-index');
}

const dragdrop = (e)=>{
    e.preventDefault()
    lastindex = +e.target.getAttribute('data-index')
    swapitems(startindex,lastindex)

}

const swapitems = (from,to)=>{
    let itemOne = document.querySelector(`.li${from}`).querySelector('.list')
    let itemTwo = document.querySelector(`.li${to}`).querySelector('.list')
    console.log(itemOne)
    itemOne.setAttribute('data-index',to)
    itemTwo.setAttribute('data-index',from)

    let taskOne = getTask(itemOne.id)
    let taskTwo = getTask(itemTwo.id)

    let temp = taskOne.index;
    taskOne.index = taskTwo.index;
    taskTwo.index = temp;

    updateLocalStorage()
    

    document.querySelector(`.li${from}`).appendChild(itemTwo)
    document.querySelector(`.li${to}`).appendChild(itemOne)
}

const dragover = (e)=>{
    e.preventDefault()
}




export default ()=>{
    let listItem = document.querySelectorAll('.list')
    let drapLists = document.querySelectorAll("li")

    listItem.forEach(item=>{
        item.addEventListener('dragstart',dragstart)
   
    })

    drapLists.forEach(list=>{
        list.addEventListener('drop',dragdrop)
        list.addEventListener('dragover',dragover)
    })
}

