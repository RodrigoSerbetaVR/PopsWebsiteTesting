const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", function() {
  localStorage.removeItem("username"); // remove saved username
  window.location.href = "LoggingOut.html"; // redirect to login page
});