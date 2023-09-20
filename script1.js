document.addEventListener("DOMContentLoaded", function () {
    // Add animations to CTA button and feature icons (assuming you have CSS animations defined)
    // Highlight active link in the navigation
    // Your existing code...
    
    // Subscribe form handling (localStorage usage)
    const subscribeForm = document.getElementById("subscribe-form");
    const emailInput = document.getElementById("email-input");
    const successMessage = document.getElementById("subscribe-success");
    const errorMessage = document.getElementById("subscribe-error");

    subscribeForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const email = emailInput.value;

        if (email) {
            localStorage.setItem("subscribedEmail", email);
            successMessage.style.display = "block";
            errorMessage.style.display = "none";
            emailInput.value = "";
        } else {
            errorMessage.style.display = "block";
            successMessage.style.display = "none";
        }
    });

    // Dark mode toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Display a random quote
    const quoteContainer = document.getElementById("quote-container");
    const quoteText = document.getElementById("quote-text");

    function displayRandomQuote() {
        const randomQuote = getRandomQuote();
        quoteText.textContent = randomQuote;
    }

    // Call the function to display a random quote when the page loads
    displayRandomQuote();
});

const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
    "The future depends on what you do today. – Mahatma Gandhi",
    // Add more quotes as needed
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}
