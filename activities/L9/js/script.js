document.addEventListener("DOMContentLoaded", function () {
    const inputFields = [
        document.getElementById("firstName"),
        document.getElementById("lastName"),
        document.getElementById("email")
    ];

    function handleFocus(event) {
        event.target.style.backgroundColor = "lightgreen"; 
    }

    function handleBlur(event) {
        event.target.style.backgroundColor = "";
    }

    inputFields.forEach(input => {
        input.addEventListener("focus", handleFocus);
        input.addEventListener("blur", handleBlur);
    });
});
