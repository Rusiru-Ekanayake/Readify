/* --- 1. Feedback Form & LocalStorage Logic --- */
const feedbackForm = document.getElementById('feedbackForm');

if (feedbackForm) {
    feedbackForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Stop page refresh

        // Grab values
        const name = document.getElementById('userName').value.trim();
        const email = document.getElementById('userEmail').value.trim();
        const msg = document.getElementById('userMessage').value.trim();
        const status = document.getElementById('formStatus');

        // Simple Validation Check
        if (name === "" || email === "" || msg === "") {
            status.innerHTML = "<p style='color:red;'>Please fill in all fields!</p>";
            return;
        }

        // Email Format Validation
        if (!email.includes("@") || !email.includes(".")) {
            status.innerHTML = "<p style='color:red;'>Please enter a valid email address!</p>";
            return;
        }

        // Create Feedback Object
        const newFeedback = {
            id: Date.now(),
            name: name,
            email: email,
            message: msg,
            timestamp: new Date().toLocaleString()
        };

        // Store in LocalStorage
        let allFeedback = JSON.parse(localStorage.getItem('userFeedback')) || [];
        allFeedback.push(newFeedback);
        localStorage.setItem('userFeedback', JSON.stringify(allFeedback));

        // Display Confirmation Message
        status.innerHTML = "<p style='color: #27ae60; font-weight: bold;'>Thank you, " + name + "! Your feedback has been saved. ✅</p>";
        
        // Reset the form fields
        this.reset();
    });
}
/* --- 2. FAQ Accordion Logic --- */
document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const accordionItem = button.parentElement;
        
        // Close all other accordion items for a clean experience
        document.querySelectorAll('.accordion-item').forEach(item => {
            if (item !== accordionItem) {
                item.classList.remove('active');
                const otherSpan = item.querySelector('span');
                if (otherSpan) otherSpan.textContent = '+';
            }
        });

        // Toggle 'active' class on the clicked item
        accordionItem.classList.toggle('active');
        
        // Change Icon based on state
        const span = button.querySelector('span');
        if (span) {
            span.textContent = accordionItem.classList.contains('active') ? '−' : '+';
        }
    });
});