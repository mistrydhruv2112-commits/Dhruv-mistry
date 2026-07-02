function checkPassword() {
    let password = document.getElementById("password").value;
    let result = document.getElementById("result");

    if (password.length < 6) {
        result.innerHTML = "🔴 Weak Password";
        result.style.color = "red";
    } else if (
        password.length >= 8 &&
        /[A-Z]/.test(password) &&
        /[0-9]/.test(password) &&
        /[!@#$%^&*]/.test(password)
    ) {
        result.innerHTML = "🟢 Strong Password";
        result.style.color = "lightgreen";
    } else {
        result.innerHTML = "🟡 Medium Password";
        result.style.color = "orange";
    }
}

function generatePassword() {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let password = "";

    for (let i = 0; i < 12; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    document.getElementById("generatedPassword").innerHTML = password;
}

function encryptText() {
    let text = document.getElementById("textInput").value;
    let encrypted = btoa(text);
    document.getElementById("encryptedText").innerHTML = "Encrypted: " + encrypted;
}

function decryptText() {
    let text = document.getElementById("textInput").value;

    try {
        let decrypted = atob(text);
        document.getElementById("encryptedText").innerHTML = "Decrypted: " + decrypted;
    } catch (e) {
        document.getElementById("encryptedText").innerHTML = "Invalid encrypted text!";
    }
}
function checkPassword() {
    let password = document.getElementById("password").value;
    let result = document.getElementById("result");

    if (password.length < 6) {
        result.innerHTML = "🔴 Weak Password";
        result.style.color = "red";
    } else if (
        password.length >= 8 &&
        /[A-Z]/.test(password) &&
        /[a-z]/.test(password) &&
        /[0-9]/.test(password) &&
        /[!@#$%^&*]/.test(password)
    ) {
        result.innerHTML = "🟢 Strong Password";
        result.style.color = "lightgreen";
    } else {
        result.innerHTML = "🟡 Medium Password";
        result.style.color = "orange";
    }
}

function generatePassword() {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let password = "";

    for (let i = 0; i < 12; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    document.getElementById("generatedPassword").innerHTML = password;
}

function copyPassword() {
    let text = document.getElementById("generatedPassword").innerText;

    navigator.clipboard.writeText(text);

    alert("✅ Password Copied Successfully!");
}

function togglePassword() {
    let input = document.getElementById("password");

    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}

function encryptText() {
    let text = document.getElementById("textInput").value;

    let encrypted = btoa(text);

    document.getElementBy