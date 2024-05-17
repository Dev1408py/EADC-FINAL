// document.getElementById('showDateTimeBtn').addEventListener('click', () => {
//     const dateTimeDisplay = document.getElementById('dateTimeDisplay');
//     const currentDateTime = getCurrentDateTime();
//     dateTimeDisplay.textContent = `Current Date and Time: ${currentDateTime}`;
//   });
  
  function getCurrentDateTime() {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZoneName: 'short',
    };
    const currentDateTime = new Date().toLocaleString('en-US', options);
    return currentDateTime;
  }
  
// const getCurrentDateTime = getCurrentDateTime;
exports.getCurrentDateTime = getCurrentDateTime;