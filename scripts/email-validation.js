/**
warning state
  form -> warning border
    :after -> warning msg
  span -> show warning icon

warning event -> submit btn
  when clicking
    if input > "" or input > "(a-z)@"
      show warning state
*/

const form = document.getElementById("emailForm");
const input = document.getElementById("EmailInput");
const warningSpan = document.getElementById("warningSpan");
const btnSubmit = document.getElementById("submitBtn");

btnSubmit.addEventListener("click", (e) => {
  if (form.classList.contains("warning-state")) return;
  if (input.value === "") {
    form.classList.toggle("warning-state");
    warningSpan.classList.toggle("hidden");
  }
});