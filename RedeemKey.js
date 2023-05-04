$(document).ready(function() {
  // Define the array of keys
  var keys = ['ABC123', 'DEF456', 'GHI789'];

  // Listen for the button click event
  $('#redeem-btn').click(function() {
    // Get the inputted key
    var key = $('#key').val();

    // Check if the key has already been redeemed or is invalid
    if (keys.indexOf(key) === -1) {
      alert('This key is invalid or has already been redeemed by another user.');
      return;
    }

    // Remove the redeemed key from the array
    keys.splice(keys.indexOf(key), 1);

    // Display a success message and update the keys array
    alert('Key redeemed successfully!');
    window.location.href = "PopsWebsite.html";
    console.log(keys);
  });
});
