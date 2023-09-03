const submit = document.getElementById("Submit");
const email = document.getElementById("Email");
const error_msg = document.getElementById("error-msg");
const user_mail = document.getElementById("user-mail");
const dismiss_btn = document.getElementById("dismiss-btn");
const form_section = document.getElementById("form-section");
const thankyou_section = document.getElementById("thankyou-section");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const email_id = email.value.trim();
  if (validateEmail(email_id)) {
    email.classList.remove("error");
    error_msg.style.display = "none";
    thankyou_section.style.display = "flex";
    form_section.style.display = "none";
    user_mail.innerHTML = email_id;
  } else {
    error_msg.style.display = "block";
    email.blur();
    email.classList.toggle("error");
  }
});

function validateEmail(email) {
  var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
}

dismiss_btn.addEventListener("click", () => {
  form_section.style.display = "grid";
  thankyou_section.style.display = "none";
});
