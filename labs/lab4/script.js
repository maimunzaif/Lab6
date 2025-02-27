// In-memory JSON database
let users = {
    "user1": "Password1!",
    "user2": "Password2!",
    "user3": "Password3!"
};

// Set for unique usernames
const usernameSet = new Set(Object.keys(users));

// Map for error messages
const errorMessages = new Map([
    ["email", "Invalid email format."],
    ["username", "Username must not begin with a number or contain spaces or special characters."],
    ["password", "Password must contain at least one number, one uppercase letter, one lowercase letter, and one special character. It must be at least 12 characters long."],
    ["confirmPassword", "Passwords do not match."]
]);

// Registration Form Logic
const registrationForm = document.getElementById("registrationForm");
if (registrationForm) {
    registrationForm.addEventListener("submit", (e) => {
        e.preventDefault();
        try {
            // Destructure form values
            const { email, username, password, confirmPassword } = e.target.elements;

            // Validate inputs
            const errors = validateInputs(email.value, username.value, password.value, confirmPassword.value);

            if (errors.length > 0) {
                displayErrors(errors);
            } else {
                // Add user to database
                users[username.value] = password.value;
                usernameSet.add(username.value);
                console.log("User registered:", users);
                document.getElementById("successMessage").textContent = "Registration successful!";
            }
        } catch (error) {
            console.error("Error during registration:", error);
        }
    });
}

// Login Form Logic
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        try {
            // Destructure form values
            const { loginUsername, loginPassword } = e.target.elements;

            // Check credentials
            if (users[loginUsername.value] === loginPassword.value) {
                document.getElementById("loginMessage").textContent = "Login successful!";
            } else {
                document.getElementById("loginMessage").textContent = "Invalid username or password.";
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    });
}

// Input Validation
const validateInputs = (email, username, password, confirmPassword) => {
    const errors = [];

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,8}$/;
    if (!emailRegex.test(email)) {
        errors.push("email");
    }

    // Username validation
    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9]*$/;
    if (!usernameRegex.test(username) || usernameSet.has(username)) {
        errors.push("username");
    }

    // Password validation
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{12,}$/;
    if (!passwordRegex.test(password)) {
        errors.push("password");
    }

    // Confirm password validation
    if (password !== confirmPassword) {
        errors.push("confirmPassword");
    }

    return errors;
};

// Display Errors
const displayErrors = (errors) => {
    errors.forEach((error) => {
        const errorElement = document.getElementById(`${error}Error`);
        if (errorElement) {
            errorElement.textContent = errorMessages.get(error);
        }
    });
};