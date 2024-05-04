chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    let name = request.name;
    let birthday = request.birthday;
    createCalendarEvent(name, birthday);
  });
  
  function createCalendarEvent(name, birthday) {
    chrome.identity.getAuthToken({interactive: true}, function(token) {
      let event = {
        summary: name + "'s Birthday",
        start: {
          date: birthday
        },
        end: {
          date: birthday
        },
        recurrence: [
          "RRULE:FREQ=YEARLY"
        ]
      };
  
      fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(event)
      })
      .then(function(response) {
        console.log('Birthday event created:', response);
      })
      .catch(function(error) {
        console.error('Error creating birthday event:', error);
      });
    });
  }