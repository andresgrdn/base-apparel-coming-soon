/**
warning state
  form -> warning border
    :after -> warning msg
  span -> show warning icon

when invalid event is fired -> input control
  show warning state
*/

const emailForm = document.getElementById("emailForm");
const emailInput = document.getElementById("EmailInput");
const warningSpan = document.getElementById("warningSpan");

emailInput.addEventListener("invalid", () => {
  if (emailForm.classList.contains("warning-state")) return;

  emailForm.classList.toggle("warning-state");
  warningSpan.classList.toggle("hidden");
});