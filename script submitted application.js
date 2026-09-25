// script submitted application.js

window.onload = function () {
    const storedData = localStorage.getItem("applicationData");

    if (storedData) {
        const data = JSON.parse(storedData);
        let html = "";

        // Loop through fields (except image)
        for (const key in data) {
            if (key !== "image") {
                const label = key.replace(/([A-Z])/g, " $1")  // add space before capital letters
                                 .replace(/-/g, " ")          // replace dashes with spaces
                                 .replace(/^./, str => str.toUpperCase()); // capitalize first letter
                html += `<h3>${label}:</h3><p>${data[key]}</p>`;
            }
        }

        // Show uploaded image
        if (data.image) {
            html += `<h3>Uploaded Image:</h3>
                     <img src="${data.image}" alt="Uploaded Image" style="max-width:200px; border-radius:8px;">`;
        }

        document.getElementById("submitted-data").innerHTML = html;
    } else {
        document.getElementById("submitted-data").innerHTML =
            "<p>No application data found. Please submit the form first.</p>";
    }
};

// ✅ Add this part at the bottom
document.getElementById("clear-btn").addEventListener("click", function () {
    localStorage.removeItem("applicationData");
    window.location.href = "apply.html";
});
