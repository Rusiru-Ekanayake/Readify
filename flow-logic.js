// --- 1. Cozy Sounds Toggle ---
function toggleSound(type) {
    const sound = document.getElementById(`${type}-audio`);
    const btn = document.getElementById(`${type}-btn`);
    
    if (sound.paused) {
        // Stop other sounds first for a clean experience
        document.querySelectorAll('audio').forEach(a => { 
            a.pause(); 
            a.currentTime = 0; 
        });
        document.querySelectorAll('.flow-btn').forEach(b => b.classList.remove('active'));

        sound.play();
        btn.classList.add('active');
    } else {
        sound.pause();
        btn.classList.remove('active');
    }
}

// --- 2. Load Finished Books & Progress Counter ---
function loadFinishedBooks() {
    const listElement = document.getElementById('finished-list');
    const counterElement = document.getElementById('progress-counter');
    
    // Get unique IDs from localStorage
    const finishedIds = JSON.parse(localStorage.getItem('finishedBooks')) || [];
    
    // Update Counter (X out of 12)
    if (counterElement) {
        counterElement.innerText = `You have finished ${finishedIds.length} out of ${bookData.length} books!`;
    }

    if (finishedIds.length === 0) {
        listElement.innerHTML = "<li>No books completed yet.</li>";
        return;
    }

    // Filter bookData to show only finished ones
    const finishedBooks = bookData.filter(book => finishedIds.includes(book.id));

    listElement.innerHTML = finishedBooks.map(book => `
        <li class="finished-item">
            <strong>${book.title}</strong> - ${book.author} ✅
        </li>
    `).join('');
}

// --- 3. Form Validation ---
function validateForm(event) {
    event.preventDefault();
    const email = document.getElementById('emailInput').value;
    
    if (!email.includes('@')) {
        alert("Please enter a valid email address!"); 
    } else {
        localStorage.setItem('newsletterEmail', email); 
        alert("Success! You've been subscribed to Readify.");
    }
}

// Initialize on Load
window.addEventListener('DOMContentLoaded', loadFinishedBooks);