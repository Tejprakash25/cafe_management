function openLoginModal() {
    document.getElementById("loginModal").style.display = "flex";
}

function closeLoginModal() {
    document.getElementById("loginModal").style.display = "none";
}

function toggleForms() {
    let loginForm = document.getElementById("loginForm");
    let signupForm = document.getElementById("signupForm");

    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        signupForm.style.display = "none";
    } else {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
    }
}

window.onclick = function(event) {
    let modal = document.getElementById("loginModal");
    if (event.target == modal) {
        closeLoginModal();
    }
};

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("#loginForm form");
    const signupForm = document.querySelector("#signupForm form");

    loginForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        const username = document.getElementById("login-username").value;
        const password = document.getElementById("login-password").value;

        try {
            const response = await fetch("http://localhost:8080/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams({
                    username,
                    password
                })
            });

            const message = await response.text();
            alert(message);

            if (message.includes("Successful")) {
                closeLoginModal();
                // Optionally: redirect or update UI
            }

        } catch (error) {
            console.error("Login error:", error);
            alert("Login failed. Try again.");
        }
    });

    signupForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        const fullname = document.getElementById("fullname").value;
        const email = document.getElementById("signup-email").value;
        const username = document.getElementById("signup-username").value;
        const password = document.getElementById("signup-password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const response = await fetch("http://localhost:8080/auth/signUp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams({
                    name: fullname,
                    email,
                    username,
                    password
                })
            });

            const message = await response.text();
            alert(message);

            if (message.includes("Successful")) {
                toggleForms(); // Show login form
            }

        } catch (error) {
            console.error("Signup error:", error);
            alert("Signup failed. Try again.");
        }
    });
});
