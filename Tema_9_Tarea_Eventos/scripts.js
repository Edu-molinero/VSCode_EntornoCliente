// Objeto con validaciones (regex, mensajes de ayuda y error)
const validations = {
    username: {
        regex: /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/,
        help: "Introduce solo letras y espacios.",
        error: "Formato incorrecto"
    },
    email: {
        regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        help: "Debe ser un correo electrónico válido.",
        error: "Formato incorrecto"
    },
    password: {
        regex: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/,
        help: "Mín. 8 caracteres, 1 mayúscula, 1 número y 1 símbolo.",
        error: "Formato incorrecto"
    },
    age: {
        regex: /^\d+$/,
        help: "Introduce solo números.",
        error: "Formato incorrecto"
    }
};

// Funciones para manejar cookies
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
}

function getCookie(name) {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        const c = cookies[i].trim();
        if (c.startsWith(name + "=")) {
            return c.substring(name.length + 1);
        }
    }
    return "";
}

function deleteCookie(name) {
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
}

// Evento window.onload
window.onload = function() {
    // Comprobar cookie "username"
    const username = getCookie("username");
    if (username) {
        document.getElementById("welcome").innerText = "Bienvenido de nuevo, " + username;
        document.getElementById("username").value = username;
    }

    // Agregar event listeners a los campos
    const fields = ["username", "email", "password", "age"];
    fields.forEach(field => {
        const input = document.getElementById(field);
        input.addEventListener("focus", () => showHelp(field));
        input.addEventListener("blur", () => hideHelp(field));
        input.addEventListener("input", () => validateOnInput(field));
    });

    // Event listener para submit
    document.getElementById("myForm").addEventListener("submit", handleSubmit);

    // Event listener para eliminar cookie
    document.getElementById("deleteCookie").addEventListener("click", () => {
        deleteCookie("username");
        document.getElementById("welcome").innerText = "";
        document.getElementById("username").value = "";
        alert("Cookie eliminada correctamente.");
    });
};

// Función para mostrar mensaje de ayuda (onfocus)
function showHelp(field) {
    document.getElementById(field + "Help").innerText = validations[field].help;
}

// Función para ocultar mensaje de ayuda (onblur)
function hideHelp(field) {
    document.getElementById(field + "Help").innerText = "";
}

// Función para validación en vivo (oninput)
function validateOnInput(field) {
    const input = document.getElementById(field);
    const msgDiv = document.getElementById(field + "Msg");
    const value = input.value;
    const isValid = validations[field].regex.test(value);

    if (value === "") {
        // Si está vacío, no mostrar nada
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

// Función para manejar submit
function handleSubmit(e) {
    const fields = ["username", "email", "password", "age"];
    let allValid = true;

    fields.forEach(field => {
        const input = document.getElementById(field);
        const value = input.value;
        if (!validations[field].regex.test(value)) {
            allValid = false;
            validateOnInput(field); // Mostrar error si no es válido
        }
    });

    if (!allValid) {
        e.preventDefault();
        alert("Debe corregir los errores antes de enviar.");
    } else {
        // Crear cookie con el nombre de usuario (duración 7 días)
        const username = document.getElementById("username").value;
        setCookie("username", username, 7);
        alert("Formulario enviado correctamente.");
        // No se previene el envío, pero en un entorno real podrías manejarlo con AJAX
    }
}