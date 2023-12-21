const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const submitButton = document.querySelector(".submit-button");
const emailValue = emailInput.value;
const emailValueCap = emailValue.toLowerCase();

const errorMessage = document.querySelector(".error-message");

function validate(emailInput) {
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailPattern.test(emailInput);
}

submitButton.addEventListener("click", (event) => {
  if (validate(emailInput.value)) {
    emailInput.classList.add("border-green-500");
    errorMessage.classList.add("hidden");
  } else {
    event.preventDefault();
    inputs.forEach((input) => {
      if (!input.value) {
        input.classList.add("border-red-500");
      } else {
        input.classList.add("border-green-500");
      }
    });
    errorMessage.classList.remove("hidden");
    emailInput.classList.add("border-red-500");
  }
});

nameInput.addEventListener("keyup", (event) => {
  if (nameInput.value.length < 1) {
    nameInput.classList.add("border-red-500");
    messageInput.classList.remove("border-green-500");
  } else {
    nameInput.classList.add("border-green-500");
    messageInput.classList.remove("border-red-500");
  }
});

emailInput.addEventListener("keyup", (event) => {
  if (emailInput.value.length < 1) {
    emailInput.classList.add("border-red-500");
    messageInput.classList.remove("border-green-500");
  } else {
    emailInput.classList.add("border-green-500");
    messageInput.classList.add("border-red-500");
  }
});

messageInput.addEventListener("keyup", (event) => {
  if (messageInput.value.length < 1) {
    messageInput.classList.add("border-red-500");
    messageInput.classList.remove("border-green-500");
  } else {
    messageInput.classList.remove("border-red-500");
    messageInput.classList.add("border-green-500");
  }
});
