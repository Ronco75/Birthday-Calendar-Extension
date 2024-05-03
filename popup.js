document.addEventListener('DOMContentLoaded', function() {
    var addButton = document.getElementById('addButton');
    addButton.addEventListener('click', function() {
      var name = document.getElementById('name').value;
      var birthday = document.getElementById('birthday').value;
      chrome.runtime.sendMessage({name: name, birthday: birthday});
    });
  });