var newsletter = document.getElementById("newsletter");
var successMessage = document.getElementById("successMessage");
var dismissButton = document.getElementById("dismissButton");

dismissButton.addEventListener("click", function () {
  successMessage.classList.add("hidden");
  newsletter.classList.remove("hidden");
});
