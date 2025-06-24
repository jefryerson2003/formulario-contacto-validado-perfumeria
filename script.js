const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const messageError = document.getElementById("messageError");

nameInput.addEventListener("input", () => {
  const regex = /^[a-zA-Z\s]+$/;
  if (!nameInput.value.trim()) {
    nameError.textContent = "El nombre es obligatorio.";
    nameError.style.display = "block";
  } else if (!regex.test(nameInput.value)) {
    nameError.textContent = "Solo se permiten letras.";
    nameError.style.display = "block";
  } else {
    nameError.style.display = "none";
  }
});

emailInput.addEventListener("input", () => {
  const regex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailInput.value.trim()) {
    emailError.textContent = "El correo es obligatorio.";
    emailError.style.display = "block";
  } else if (!regex.test(emailInput.value)) {
    emailError.textContent = "Correo inválido.";
    emailError.style.display = "block";
  } else {
    emailError.style.display = "none";
  }
});

phoneInput.addEventListener("input", () => {
  const regex = /^\d{10}$/;
  if (phoneInput.value && !regex.test(phoneInput.value)) {
    phoneError.textContent = "Debe tener 10 dígitos.";
    phoneError.style.display = "block";
  } else {
    phoneError.style.display = "none";
  }
});

messageInput.addEventListener("input", () => {
  if (messageInput.value.trim().length < 10) {
    messageError.textContent = "El mensaje debe tener al menos 10 caracteres.";
    messageError.style.display = "block";
  } else {
    messageError.style.display = "none";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;

  // Validar nombre
  const nameRegex = /^[a-zA-Z\s]+$/;
  if (!nameInput.value.trim()) {
    nameError.textContent = "El nombre es obligatorio.";
    nameError.style.display = "block";
    isValid = false;
  } else if (!nameRegex.test(nameInput.value)) {
    nameError.textContent = "Solo se permiten letras.";
    nameError.style.display = "block";
    isValid = false;
  } else {
    nameError.style.display = "none";
  }

  // Validar correo
  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailInput.value.trim()) {
    emailError.textContent = "El correo es obligatorio.";
    emailError.style.display = "block";
    isValid = false;
  } else if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = "Correo inválido.";
    emailError.style.display = "block";
    isValid = false;
  } else {
    emailError.style.display = "none";
  }

  // Validar teléfono
  const phoneRegex = /^\d{10}$/;
  if (phoneInput.value && !phoneRegex.test(phoneInput.value)) {
    phoneError.textContent = "Debe tener 10 dígitos.";
    phoneError.style.display = "block";
    isValid = false;
  } else {
    phoneError.style.display = "none";
  }

  // Validar mensaje
  if (messageInput.value.trim().length < 10) {
    messageError.textContent = "El mensaje debe tener al menos 10 caracteres.";
    messageError.style.display = "block";
    isValid = false;
  } else {
    messageError.style.display = "none";
  }

  // Si todo está validado, mostrar mensaje de éxito
  if (isValid) {
    alert("Formulario enviado correctamente 🎉");
    form.reset();
  }
});
// Resetear errores al enviar
form.addEventListener("reset", () => {
  nameError.style.display = "none";
  emailError.style.display = "none";
  phoneError.style.display = "none";
  messageError.style.display = "none";
});
// Resetear errores al cambiar de campo
nameInput.addEventListener("change", () => nameError.style.display = "none");
emailInput.addEventListener("change", () => emailError.style.display = "none");
phoneInput.addEventListener("change", () => phoneError.style.display = "none");
messageInput.addEventListener("change", () => messageError.style.display = "none");
