document.getElementById("application-form").addEventListener("submit", function(event) {
    event.preventDefault(); // stop normal submit

    const submitBtn = this.querySelector("button[type='submit']");
    submitBtn.textContent = "Submitting...";   // change text
    submitBtn.disabled = true;                 // prevent double-clicks

    const fileInput = document.getElementById("resume");
    const file = fileInput.files[0];

    // Collect form data
    const formData = {
        name: document.getElementById("name").value,
        fatherName: document.getElementById("Father-name").value,
        motherName: document.getElementById("Mother-name").value,
        cnic: document.getElementById("CNIC").value,
        fatherCnic: document.getElementById("Father-CNIC").value,
        motherCnic: document.getElementById("Mother-CNIC").value,
        fatherDesignation: document.getElementById("Father-Designation").value,
        fatherRank: document.getElementById("Father-Rank").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        position: document.getElementById("position").value,
        experience: document.getElementById("experience").value,
        image: null
    };

    // If user uploaded an image → process in background
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            formData.image = e.target.result; // Base64
            localStorage.setItem("applicationData", JSON.stringify(formData));
        };
        reader.readAsDataURL(file);
    }

    // Save data immediately (without image if not ready yet)
    localStorage.setItem("applicationData", JSON.stringify(formData));

    // Redirect after short delay
    setTimeout(() => {
        window.location.href = "show-submitted-application.html";
    }, 800); // ~0.8 sec for better UX
});
