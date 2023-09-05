let $ = document
let inputElem = $.querySelector('input')
let addForm = $.querySelector('.add')
let newUl =$.querySelector('.todos')


function addNewTodo(inputValue){
    let newLi = $.createElement('li')
    newLi.className='list-group-item d-flex justify-content-between align-items-center'

    let newSpan= $.createElement('span')
    newSpan.innerHTML = inputValue

    let Trash=$.createElement('i')
    Trash.className ='fa fa-trash-o delete'

    newLi.append(newSpan,Trash)
    newUl.append(newLi)

    Trash.addEventListener('click', function(event){
        event.target.parentElement.remove()
    })
}

addForm.addEventListener('submit', function(event){
    event.preventDefault()
})

// console.log(inputElem)
inputElem.addEventListener('keydown', function(event){
    let inputValue = event.target.value.trim()
    console.log(inputValue)

    if(event.keyCode ===13){
        if(inputValue){
            //console.log(inputValue)
            inputElem.value=''
            addNewTodo(inputValue)
        }else{
            alert('Please Enter a ToDo')
        }
    }
    
})