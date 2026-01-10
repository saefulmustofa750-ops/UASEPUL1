// ===============================
// FORM ANIMATION ON LOAD
// ===============================
window.addEventListener("load", () => {
    document.querySelector(".card").style.opacity = "1";
});


// ===============================
// FORM SUBMIT HANDLER
// ===============================
document.getElementById("formReservasi").addEventListener("submit", function (e) {
    e.preventDefault();

    // Ambil semua input wajib
    const inputs = this.querySelectorAll("input[required], select[required]");
    let valid = true;

    inputs.forEach(input => {
        if (!input.value) {
            input.style.borderColor = "#ff5252";
            valid = false;
        } else {
            input.style.borderColor = "#00c853";
        }
    });

    if (!valid) {
        showNotification("Harap lengkapi semua data!", "error");
        return;
    }

    showNotification("Reservasi berhasil dikirim 🎉", "success");
    this.reset();
});


// ===============================
// NOTIFICATION (MODERN ALERT)
// ===============================
function showNotification(message, type) {
    const notif = document.createElement("div");
    notif.className = `notif ${type}`;
    notif.innerText = message;

    document.body.appendChild(notif);

    setTimeout(() => notif.classList.add("show"), 50);

    setTimeout(() => {
        notif.classList.remove("show");
        setTimeout(() => notif.remove(), 300);
    }, 3000);
}


// ===============================
// LIVE INPUT EFFECT
// ===============================
document.querySelectorAll("input, select, textarea").forEach(input => {
    input.addEventListener("input", () => {
        input.style.borderColor = "#00c853";
    });
});
