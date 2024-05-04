document.addEventListener('DOMContentLoaded', function() {
    let addButton = document.getElementById('addButton');
    addButton.addEventListener('click', function() {
      let name = document.getElementById('name').value;
      let birthday = document.getElementById('birthday').value;

      if (name.trim() === '' || birthday.trim() === '') {
        showError('Please enter both name and birthday.');
      } else {
        chrome.runtime.sendMessage({name: name, birthday: birthday});
      }

    });
  });
  
  function showError(message) {
    let errorElement = document.createElement('p');
    errorElement.className = 'error';
    errorElement.style.color = 'red';
    errorElement.textContent = message;
    document.body.appendChild(errorElement);
    setTimeout(function() {
      errorElement.remove();
    }, 3000);
  }