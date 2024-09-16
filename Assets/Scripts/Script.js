// The purpose of the code is to create new to-do-list items. It will take the string inside of the to-do-list item in the html, and store it into a separate list item. It will
// be able to be deleted and edited. The final to-do list will be an ordered list, with the ability to move the positions of the list items.
//
//
// 1. Get the input string from the html and store it inside of a variable. DONE but not checked
// 2. Create new ordered list with an item containing the variable string value.
// 3. Delete button that removes the specific list item from the to-do list.
// 4. Edit button that allows you to input a new string into the list item.
// 5. 

document.querySelector('.btn-add').addEventListener('click', function() {
    const inputValue = document.getElementById('input-field').value;

    if (inputValue.trim() !== "") {
        const newListItem = document.createElement('li');
        const btnContainer = document.createElement('div');
        const deleteBtn = document.createElement('button');
        const editBtn = document.createElement('button');
        const deleteIcon = document.createElement('i');
        const editIcon = document.createElement('i');

        const textContainer = document.createElement('span');
        textContainer.textContent = inputValue;
        textContainer.classList.add('text-content');

        newListItem.classList.add('list-item');

        btnContainer.classList.add('container', 'btn-container');
        deleteBtn.classList.add('btn-delete');
        editBtn.classList.add('btn-edit');

        editIcon.classList.add('fa-solid', 'fa-pen-to-square');
        deleteIcon.classList.add('fa-solid', 'fa-trash');

        deleteBtn.addEventListener('click', function() {
            newListItem.remove();
        });

        editBtn.addEventListener('click', function() {
            
            textContainer.style.display = 'none';
            btnContainer.style.display = 'none';

            
            const editInput = document.createElement('input');
            editInput.type = 'text';
            editInput.value = textContainer.textContent.trim();
            newListItem.insertBefore(editInput, btnContainer); 

            
            const saveBtn = document.createElement('button');
            saveBtn.textContent = 'Save';
            saveBtn.classList.add('btn-save');
            newListItem.insertBefore(saveBtn, btnContainer); 

            
            saveBtn.addEventListener('click', function() {
                
                textContainer.textContent = editInput.value.trim();
                textContainer.style.display = 'block'; 
                btnContainer.style.display = 'block';

                
                newListItem.removeChild(editInput);
                newListItem.removeChild(saveBtn);
            });
        });

        editBtn.appendChild(editIcon);
        deleteBtn.appendChild(deleteIcon);

        btnContainer.appendChild(editBtn);
        btnContainer.appendChild(deleteBtn);
        newListItem.appendChild(textContainer); 
        newListItem.appendChild(btnContainer);

        document.getElementById('item-list').appendChild(newListItem);

        document.getElementById('input-field').value = "";
    }
});


var fileName = "myfile.txt";
var dlBtn = document.getElementById("download");

dlBtn.addEventListener('click', function() {
    var fileContent = "";

    
    var listItems = document.querySelectorAll('#item-list li');

    
    listItems.forEach(function(item) {
        fileContent += item.textContent.trim() + "\n";
    });

    var myFile = new Blob([fileContent], { type: 'text/plain' });

    dlBtn.setAttribute("href", window.URL.createObjectURL(myFile));
    dlBtn.setAttribute("download", fileName);
});


