// ============================
// ROLE BUTTONS
// ============================

const roleButtons = document.querySelectorAll(".role");
let selectedRole = "authority";

// Change active button
roleButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active from all buttons
        roleButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active to clicked button
        button.classList.add("active");

        // Save selected role
        selectedRole = button.dataset.role;

    });

});


// ============================
// SHOW / HIDE PASSWORD
// ============================

const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {

    if (password.type === "password") {

        password.type = "text";
        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");

    } else {

        password.type = "password";
        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");

    }

});


// ============================
// LOGIN
// ============================

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const pass = document.getElementById("password").value.trim();
    const error = document.getElementById("errorMessage");

    error.innerHTML = "";

    const user = users.find(u =>
        u.email === email &&
        u.password === pass &&
        u.role === selectedRole
    );

    if (user) {

        localStorage.setItem("role", user.role);

        switch (user.role) {

            case "authority":
                window.location.href = "authority/dashboard.html";
                break;

            case "school":
                window.location.href = "school/dashboard.html";
                break;

            case "parent":
                window.location.href = "parent/dashboard.html";
                break;

        }

    } else {

        error.innerHTML = "Invalid email, password, or selected role.";

    }

});