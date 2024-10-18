import translations from '/js/translations.js';

const languageSelect = document.getElementById("languageSelect");
const elements = document.querySelectorAll("[data-key]");

// Function to change the language
function changeLanguage(language) {
    const translation = translations[language].aboutPage;

    // Loop through all elements with data-key and update content based on data-key value

    elements.forEach((element) => {
        const key = element.getAttribute("data-key");

        if (key === "aboutVideo") {
            element.src = translation[key]; // Update video source when available
        } else if (element.tagName.toLowerCase() === 'p') {
            element.innerHTML = translation[key];
        } else {
            element.textContent = translation[key];
        }
    });
}


languageSelect.addEventListener("change", function () {
    changeLanguage(this.value);
});

changeLanguage(); 
