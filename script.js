function olustur() {
    let todoData = document.getElementById('input-title').value;
    if (todoData === '') {
        alert('toDo boş olamaz')
    }
   
    else{
        let todoDiv = document.createElement('div')
        let todo = document.createElement('h3')
        let checkbox = document.createElement('button')
        let deleteButton = document.createElement('button')
        let editButton = document.createElement('button')
        let buttonDiv = document.createElement('div')
        let checkboxDiv = document.createElement('div')
        let contentDiv = document.createElement('div')

        todoDiv.className = ' d-flex bg-light rounded-5 mt-2 mb-2 align-items-center pt-0'
        checkboxDiv.className = 'col'
        contentDiv.className = 'col ps-2 pe-2'
        buttonDiv.className = 'col btn-group-vertical'

        deleteButton.innerText = 'Sil'
        editButton.innerText = 'Değiştir'

        todo.className = 'text-nowrap'
        deleteButton.className = 'btn btn-danger btn-sm d-flex deletebutton'
        editButton.className = 'btn btn-warning btn-sm d-flex editbutton'
        checkbox.className = 'btn mt-0 btn-lg d-flex checkbox bg-primary'
        
        deleteButton.type = 'button'
        editButton.type = 'button'
        checkbox.type = 'checkbox'
        todo.textContent = todoData
        

        checkboxDiv.appendChild(checkbox)
        contentDiv.appendChild(todo)
        buttonDiv.appendChild(editButton)
        buttonDiv.appendChild(deleteButton)

        todoDiv.appendChild(checkboxDiv)
        todoDiv.appendChild(contentDiv)
        todoDiv.appendChild(buttonDiv)
        document.querySelector('.contents').appendChild(todoDiv)
        
        deleteButton.onclick = function() {
            todoDiv.remove();
        };

        editButton.onclick = function() {
            if (todo.contentEditable === 'true') {
                todo.contentEditable = 'false';
                editButton.innerText = 'Düzenle';
            } else {
                todo.contentEditable = 'true';
                editButton.innerText = 'Kaydet';
            }
        };

        


    }
}