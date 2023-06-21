document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('submit', (event)=>{
    event.preventDefault()
    addToDo(document.getElementById('new-task-description').value)
    form.reset()
  })

});
function addToDo(todo){
  let item = document.createElement('li')
  item.textContent=`${todo}  `

  let btn = document.createElement('button')
  btn.textContent = 'x'
  btn.addEventListener('click', deletesTask)

  item.appendChild(btn)
  document.querySelector("#tasks").appendChild(item)

}

function deletesTask(event){
  event.target.parentNode.remove()

}
