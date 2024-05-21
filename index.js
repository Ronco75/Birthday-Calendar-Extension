document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the birthday list from Chrome storage
    chrome.storage.sync.get('birthdayList', function(data) {
      var birthdayList = data.birthdayList || [];
      var tableBody = document.querySelector('#birthdayTable tbody');
      
      // Clear existing table rows
      tableBody.innerHTML = '';
      
      // Populate the table with birthday entries
      birthdayList.forEach(function(entry) {
        var row = document.createElement('tr');
        var nameCell = document.createElement('td');
        var birthdayCell = document.createElement('td');
        
        nameCell.textContent = entry.name;
        birthdayCell.textContent = entry.birthday;
        
        row.appendChild(nameCell);
        row.appendChild(birthdayCell);
        tableBody.appendChild(row);
      });
    });
  });