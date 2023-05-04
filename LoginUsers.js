const users = [
  { username: "RodrigoSerbeta", password: "ImCoolGus" },
  { username: "test1", password: "test2" }
];

const form = document.querySelector("form");
form.addEventListener("submit", e => {
  e.preventDefault();
  const username = form.elements.username.value;
  const password = form.elements.password.value;
  const user = users.find(user => user.username === username && user.password === password);
  if (user) {
    alert("Login successful!");
    window.location.href = "BotActivation.html";
    form.reset();
  } else {
    alert("Invalid username or password!");
  }
});