function olustur() {
    let todoData = document.getElementById('input-title').value;
    if (todoData === '') {
        alert('toDo boş olamaz')
    }
   
    else{
        let todoDiv = document.createElement('div')
        let todo = document.createElement('h5')
        let checkbox = document.createElement('input')
        let deleteButton = document.createElement('button')
        let editButton = document.createElement('button')
        let buttonDiv = document.createElement('div')
        let checkboxDiv = document.createElement('div')
        let contentDiv = document.createElement('div')
        let flags = document.createElement('div')
        let redflag = document.createElement('button')
        let yellowflag = document.createElement('button')
        let greenflag = document.createElement('button')
    
        
        todoDiv.className = ' d-flex bg-light rounded-6 mt-2 mb-2 align-items-center pt-0 tododiv ms-2'
        checkboxDiv.className = 'col checkboxDiv'
        contentDiv.className = 'col ps-2 pe-2'
        buttonDiv.className = 'col btn-group-vertical buttondiv'

        deleteButton.innerText = 'Sil'
        editButton.innerText = 'Değiştir'

        flags.id = 'flags'
        flags.className = 'col btn-group-vertical flags'
        redflag.className = 'btn btn-danger d-flex redflag'
        yellowflag.className = 'btn btn-warning d-flex yellowflag'
        greenflag.className = 'btn btn-success d-flex greenflag'

        todo.className = 'todo'
        deleteButton.className = 'btn btn-danger btn-sm d-flex deletebutton'
        editButton.className = 'btn btn-warning btn-sm d-flex editbutton'
        checkbox.className = 'btn mt-0 checkbox bg-primary'

        todoDiv.style.borderRadius = '50px'
        deleteButton.type = 'button'
        editButton.type = 'button'
        checkbox.type = 'checkbox'
        todo.textContent = todoData
        todoDiv.style.borderRadius = '50px 50px 50px 50px'

        flags.appendChild(redflag)
        flags.appendChild(yellowflag)
        flags.appendChild(greenflag)
        checkboxDiv.appendChild(checkbox)
        contentDiv.appendChild(todo)
        buttonDiv.appendChild(editButton)
        buttonDiv.appendChild(deleteButton)
        
        todoDiv.appendChild(flags)
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
        checkbox.onclick = function () {
            checkboxDiv.style.display = 'none'
            flags.style.display = 'flex'
        };
        
        redflag.onclick = function() {
            flags.style.display = 'none'
            checkboxDiv.style.display = 'flex'
            checkbox.className = 'btn mt-0 checkbox bg-danger'
        }
        yellowflag.onclick = function() {
            flags.style.display = 'none'
            checkboxDiv.style.display = 'flex'
            checkbox.className = 'btn mt-0 checkbox bg-warning'
        }
        greenflag.onclick = function() {
            flags.style.display = 'none'
            checkboxDiv.style.display = 'flex'
            checkbox.className = 'btn mt-0 checkbox bg-success'
        }
    }
}