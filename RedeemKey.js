// Define the keys array
const keys = [
  { key: "KEY1", redeemedBy: null },
  { key: "KEY2", redeemedBy: null },
  { key: "KEY3", redeemedBy: null },
];

// Get the form element
const form = document.querySelector("#redeem-form");

// Add an event listener to the form
form.addEventListener("submit", e => {
  e.preventDefault();

  // Get the key and username from the form
  const key = form.elements.key.value;
  const username = form.elements.username.value;

  // Find the existing key in the array
  const existingKey = keys.find(k => k.key === key);

  // Check if the key is valid
  if (existingKey) {

    // Check if the key has already been redeemed
    if (existingKey.redeemedBy === null) {
      existingKey.redeemedBy = username;
      alert("Key redeemed successfully!");
      window.location.href = "PopsWebsite.html";
      form.reset();
    } 
    
    // Check if the key has already been redeemed by the same user
    else if (existingKey.redeemedBy === username) {
      alert("You have already redeemed this key!");
    } 
    
    // Key has already been redeemed by a different user
    else {
      alert("This key has already been redeemed by another user.");
    }
  } 
  
  // Invalid key
  else {
    alert("Invalid key!");
  }
});
