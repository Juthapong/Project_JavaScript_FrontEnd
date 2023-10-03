document.addEventListener('DOMContentLoaded', function() {
  const dropdown = document.getElementById('playerId');

  // Fetch data from the backend (assuming it's in JSON format)
  fetch('/backend/endpoint') // Replace with your actual backend endpoint
    .then(response => response.json())
    .then(data => {
      // Iterate over the data and add options to the dropdown
      data.forEach(player => {
        const option = document.createElement('option');
        option.value = player.playerId;
        option.text = player.playerName; // Adjust this based on your data structure
        dropdown.appendChild(option);
      });
    })
    .catch(error => console.error('Error fetching data:', error));
});
