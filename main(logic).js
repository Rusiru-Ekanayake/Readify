if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('Service Worker Registered!'))
            .catch(err => console.log('Service Worker Failed', err));
    });
}


document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Auto-Rotating Quotes ---
    const quotes = [
       "Between the pages of a book is a lovely place to be.",
        "Sleep is good, but books are better.",
        "I have lived a thousand lives and I’ve loved a thousand loves.",
        "Not all those who wander are lost—some are just in the library.",
        "A book is a dream that you hold in your hands."
    ];

    let currentQuoteIndex = 0;
    const quoteElement = document.getElementById('quote-text');

    if (quoteElement) {
        // Set initial opacity so transition works
        quoteElement.style.opacity = 1; 
        
        setInterval(() => {
            // Step 1: Fade out
            quoteElement.style.opacity = 0;

            // Step 2: Change text while invisible
            setTimeout(() => {
                currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
                quoteElement.textContent = `"${quotes[currentQuoteIndex]}"`;
                
                // Step 3: Fade back in
                quoteElement.style.opacity = 1;
            }, 500); 
        }, 4000); 
    }

 
// --- 2. Author of the Day (Updated with Images) ---
const authorsList = [
    { 
        name: "J.R.R. Tolkien", 
        bio: "The father of modern fantasy literature.",
        img: "J.R.R. Tolkien.webp" 
    },
    { 
        name: "Jane Austen", 
        bio: "Famous for her sharp wit and social commentary.",
        img: "Jane Austen.webp"
    },
    { 
        name: "Stephen King", 
        bio: "The master of contemporary horror.",
        img: "Stephen King.webp"
    },
    { 
        name: "George Orwell", 
        bio: "Iconic dystopian novelist and essayist.",
        img: "George Orwell.jpg"
    }
];

const display = document.getElementById('author-display');
if (display) {
    const day = new Date().getDate();
    const author = authorsList[day % authorsList.length];
    
    // Updated HTML structure to include the image
    display.innerHTML = `
        <div class="author-container">
            <img src="${author.img}" alt="${author.name}" class="author-photo">
            <div class="author-info">
                <h2>Featured Author of the Day</h2>
                <h3>${author.name}</h3>
                <p>${author.bio}</p>
            </div>
        </div>
    `;
}


    // --- 3. Newsletter LocalStorage ---
    const newsForm = document.getElementById('newsletter-form');
    if (newsForm) {
        newsForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('news-email').value;
            localStorage.setItem('newsletterEmail', email);
            alert("Email saved to storage! Subscribed successfully.");
            newsForm.reset();
        });
    }

    // --- 4. Hamburger Toggle ---
    const hb = document.getElementById('hamburger');
    const menu = document.getElementById('nav-menu');
    if (hb && menu) {
        hb.addEventListener('click', () => {
            menu.classList.toggle('active');
            hb.classList.toggle('toggle');
        });
    }
}); // <--- This closing bracket must be at the very end!