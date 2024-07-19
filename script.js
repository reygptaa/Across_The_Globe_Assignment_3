document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('submitForm');
    const inputField = form.querySelector('.input-field');
    const submitBtn = document.getElementById('submitBtn');
    const submittedData = document.getElementById('submittedData');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      if (inputField.value.trim() === "") {
        alert("Please input valid context");
        return;
      }
  
      submitBtn.classList.add('loading');
      submitBtn.disabled = true;
  
      setTimeout(() => {
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
  
        // Add the submitted data to the list
        const listItem = document.createElement('li');
        listItem.classList.add('list-item');
        
        const listText = document.createElement('span');
        listText.classList.add('list-text');
        listText.innerText = inputField.value;
  
        const editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.innerText = 'Edit';
  
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.innerText = 'Delete';
  
        listItem.appendChild(listText);
        listItem.appendChild(editBtn);
        listItem.appendChild(deleteBtn);
  
        submittedData.appendChild(listItem);
  
        // Reset input field
        inputField.value = '';
  
        // Edit button event
        editBtn.addEventListener('click', () => {
          const newValue = prompt("Edit your input:", listText.innerText);
          if (newValue !== null) {
            listText.innerText = newValue;
          }
        });
  
        // Delete button event
        deleteBtn.addEventListener('click', () => {
          submittedData.removeChild(listItem);
        });
      }, 2000);
    });
  });
  