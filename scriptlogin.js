document.addEventListener("DOMContentLoaded", function () {
    // Get the radio buttons
    const studentRadio = document.getElementById("studentRadio");
    const teacherRadio = document.getElementById("teacherRadio");
    // Get the heading element
    const signInHeading = document.querySelector(".login-box h2");

    // Add event listeners to the radio buttons
    studentRadio.addEventListener("change", function () {
        if (this.checked) {
            signInHeading.textContent = "Sign In as Student";
        }
    });

    teacherRadio.addEventListener("change", function () {
        if (this.checked) {
            signInHeading.textContent = "Sign In as Teacher";
        }
    });
});
