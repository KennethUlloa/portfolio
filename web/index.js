function copyToClipboard() {
    return atob("dWxsb2FrZW50aEBnbWFpbC5jb20=")
}

const btn = document.querySelector("#email");
const text = document.querySelector("#email-text");
let timeout;

text.innerHTML = "Copiar correo al portapapeles";

btn.addEventListener("click", () => {
    navigator.clipboard.writeText(copyToClipboard());
    btn.classList.remove("disabled");
    text.innerHTML = "Correo copiado al portapapeles";
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        text.innerHTML = "Copiar correo al portapapeles";
        btn.classList.add("disabled");
    }, 3000)
})