function olustur() {
    let counter = 1;
    let todoData = document.getElementById('input-title').value;
    if (todoData === '') {
        alert('toDo boş olamaz')
    }
   
    else{
        let todoDiv = document.createElement('div')
        todoDiv.className = ' input-group-text bg-light rounded-5 p-2 mt-2 mb-2'
        todoDiv.id = counter;
        let todo = document.createElement('h2')
        let checkbox = document.createElement('input')
        let deleteButton = document.createElement('button')
        let editButton = document.createElement('button')
        
        deleteButton.className = 'btn btn-danger'
        editButton.className = 'btn btn-warning'
        checkbox.className = 'form-check-input mt-0'
        deleteButton.type = 'button'
        editButton.type = 'button'
        checkbox.type = 'checkbox'
        todo.textContent = todoData
        
        todoDiv.appendChild(checkbox)
        todoDiv.appendChild(todo)
        todoDiv.appendChild(editButton)
        todoDiv.appendChild(deleteButton)
        document.querySelector('.contents').appendChild(todoDiv)
        counter++

    }
}
