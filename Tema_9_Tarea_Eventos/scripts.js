// Regex para validaciones
const regex_username = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/;
const regex_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regex_passwd = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
const regex_age = /^\d+$/;

// Mensajes de ayuda y error
const validations = {
    username: { 
        help: "Introduce solo letras y espacios.",
        error: "Formato incorrecto" },

    email: {
        help: "Debe ser un correo electrónico válido.",
        error: "Formato incorrecto" },

    password: {
        help: "Mín. 8 caracteres, 1 mayúscula, 1 número y 1 símbolo.",
        error: "Formato incorrecto" },

    age: {
        help: "Introduce solo números.",
        error: "Formato incorrecto" }
};

// Funciones básicas para cookies
function setCookie(name, value, days) {
    // Encode value to safely store spaces/special chars
    var encoded = encodeURIComponent(value);
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = name + "=" + encoded + ";expires=" + date.toUTCString() + ";path=/;SameSite=Lax";
}

function getCookie(name) {
    let cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i].trim();
        if (c.startsWith(name + "=")) {
            // Decode the cookie value before returning
            return decodeURIComponent(c.substring(name.length + 1));
        }
    }
    return "";
}

function deleteCookie(name) {
    // Expire the cookie (ensure same path)
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;SameSite=Lax";
}

// Cuando la página carga
window.addEventListener('load', function() {
    // Cargar username de la cookie si existe
    let username = getCookie("username");
    if (username) {
        var welcomeEl = document.getElementById("welcome");
        if (welcomeEl) welcomeEl.innerText = "Bienvenido de nuevo, " + username;
        var userInput = document.getElementById("username");
        if (userInput) userInput.value = username;
    }

    // Agregar eventos a los campos
    let fields = ["username", "email", "password", "age"];
    for (let i = 0; i < fields.length; i++) {
        let field = fields[i];
        let input = document.getElementById(field);
        input.addEventListener("focus", function() { showHelp(field); });
        input.addEventListener("blur", function() { hideHelp(field); });
        input.addEventListener("input", function() { validateOnInput(field); });
    }

    // Evento para el formulario
    let deleteBtn = document.getElementById("deleteCookie");
    if (deleteBtn) {  // Check si existe
        deleteBtn.addEventListener('click', function() {
            console.log("Botón clickeado");  // Para debug
            deleteCookie("username");
            var welcomeEl = document.getElementById("welcome");
            if (welcomeEl) welcomeEl.innerText = "";
            var userInput = document.getElementById("username");
            if (userInput) userInput.value = "";
            alert("Cookie eliminada correctamente.");
        });
    }

    // Añadir listener al envío del formulario (si existe)
    var form = document.getElementById('myForm');
    if (form) {
        form.addEventListener('submit', handleSubmit);
    }
});

// Mostrar ayuda
function showHelp(field) {
    document.getElementById(field + "Help").innerText = validations[field].help;
}

// Ocultar ayuda
function hideHelp(field) {
    document.getElementById(field + "Help").innerText = "";
}

// Validar mientras escribes
function validateOnInput(field) {
    let input = document.getElementById(field);
    let msgDiv = document.getElementById(field + "Msg");
    let value = input.value;
    let regex;
    
    // Asignar regex según el campo
    if (field === "username") regex = regex_username;
    else if (field === "email") regex = regex_email;
    else if (field === "password") regex = regex_passwd;
    else if (field === "age") regex = regex_age;
    
    let isValid = regex.test(value);

    if (value === "") {
        input.classList.remove("valid", "invalid");
        msgDiv.innerText = "";
    } else if (isValid) {
        input.classList.remove("invalid");
        input.classList.add("valid");
        msgDiv.innerText = "Correcto";
        msgDiv.classList.remove("error");
        msgDiv.classList.add("success");
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
        msgDiv.innerText = validations[field].error;
        msgDiv.classList.remove("success");
        msgDiv.classList.add("error");
    }
}

// Manejar envío del formulario
function handleSubmit(e) {
    // Prevent default submission to handle everything client-side
    if (e && typeof e.preventDefault === 'function') e.preventDefault();

    let fields = ["username", "email", "password", "age"];
    let allValid = true;

    for (let i = 0; i < fields.length; i++) {
        let field = fields[i];
        let input = document.getElementById(field);
        var value = input ? input.value : "";
        let regex;
        if (field === "username") regex = regex_username;
        else if (field === "email") regex = regex_email;
        else if (field === "password") regex = regex_passwd;
        else if (field === "age") regex = regex_age;

        if (!regex.test(value)) {
            allValid = false;
            validateOnInput(field);  // Mostrar error
        }
    }

    console.log("Funcionó");
    if (!allValid) {
        alert("Debe corregir los errores antes de enviar.");
        return;
    }

    // Si pasa validación, gestionar cookie según checkbox 'remember'
    var username = document.getElementById("username").value;
    var remember = document.getElementById("remember");
    if (remember && remember.checked) {
        setCookie("username", username, 7);
    } else {
        // Asegurarse de eliminar cualquier cookie previa
        deleteCookie("username");
    }

    // Mostrar mensaje de bienvenida inmediato
    var welcomeEl = document.getElementById("welcome");
    if (welcomeEl) welcomeEl.innerText = "Bienvenido de nuevo, " + username;

    alert("Formulario enviado correctamente.");
}