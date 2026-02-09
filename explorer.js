/* 1. Display Books as Cards (image, title, Author) */
function displayBooks(books) {
    const grid = document.getElementById('bookGrid');
    if (!grid) return;
    grid.innerHTML = ''; 

    books.forEach(book => {
        const card = document.createElement('div');
        card.className = 'book-card';
        card.innerHTML = `
            <img src="${book.image}" alt="${book.title}" style="width:100%; border-radius: 8px;">
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <button onclick="openModal(${book.id})">View Details</button>
        `;
        grid.appendChild(card);
    });
}

/* 2. Filter & Search Logic (by genre, title, or author) */
function filterBooks() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const genreTerm = document.getElementById('genreFilter').value.toLowerCase();

    const filtered = bookData.filter(book => {
        const matchesSearch = book.title.toLowerCase().includes(searchTerm) || 
                              book.author.toLowerCase().includes(searchTerm);
        const matchesGenre = genreTerm === 'all' || book.genre.toLowerCase() === genreTerm;
        return matchesSearch && matchesGenre;
    });
    displayBooks(filtered);
}

// Event Listeners for search and filter
document.getElementById('searchInput').addEventListener('input', filterBooks);
document.getElementById('genreFilter').addEventListener('change', filterBooks);

/* 3. Modal Details (Synopsis, Reviews Table, and Buttons) */
function openModal(id) {
    const book = bookData.find(b => b.id === id);
    const modal = document.getElementById('bookModal');
    const details = document.getElementById('modalDetails');

    details.innerHTML = `
        <h2 style="color: var(--primary);">${book.title}</h2>
        <p class="synopsis"><strong>Synopsis:</strong> ${book.synopsis}</p>
        
        <h4>User Reviews:</h4>
        <table class="reviews-table" style="width:100%; border-collapse: collapse; margin-bottom: 20px;">
            <thead>
                <tr style="background-color: #f2f2f2;">
                    <th>User</th><th>Rating</th><th>Comment</th>
                </tr>
            </thead>
            <tbody>
                ${book.reviews.map(r => `
                    <tr>
                        <td>${r.user}</td><td>${r.rating}</td><td>${r.comment}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>

        <div style="display: flex; gap: 10px; margin-top: 20px;">
            <button class="save-btn" onclick="saveBook(${book.id})">
                Add to My Library
            </button>
            
            <button class="finish-btn" onclick="markAsFinished(${book.id})" 
                    style="background-color: #27ae60; color: white; border: none; padding: 10px 15px; border-radius: 5px; cursor: pointer; font-weight: bold;">
                Mark as Finished ✔️
            </button>
        </div>
    `;
    modal.style.display = "block";
}
// This function must be globally accessible
function markAsFinished(bookId) {
    // 1. Convert ID to a number just in case it's a string from the HTML
    const id = parseInt(bookId);

    // 2. Get existing finished books
    let finishedBooks = JSON.parse(localStorage.getItem('finishedBooks')) || [];

    // 3. Add and Save
    if (!finishedBooks.includes(id)) {
        finishedBooks.push(id);
        localStorage.setItem('finishedBooks', JSON.stringify(finishedBooks));
        
        // Custom Alert (Requirement 5)
        alert("Success! Book added to your Finished Collection. ✅");
    } else {
        alert("You have already finished this book! 📚");
    }
}
/* 4. LocalStorage Save Logic */
function saveBook(bookId) {
    // Get existing data or initialize empty array
    let saved = JSON.parse(localStorage.getItem('readifyLibrary')) || [];
    
    if (!saved.includes(bookId)) {
        saved.push(bookId);
        // Save back to local storage as a JSON string
        localStorage.setItem('readifyLibrary', JSON.stringify(saved));
        alert("Book successfully saved to your library!");
    } else {
        alert("This book is already in your library.");
    }
}

// Close Modal functionality
document.querySelector('.close-btn').onclick = () => {
    document.getElementById('bookModal').style.display = "none";
};

// Close modal if user clicks outside of the modal content
window.onclick = (event) => {
    const modal = document.getElementById('bookModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

/* 5. Initial Load - Runs when page opens */
document.addEventListener('DOMContentLoaded', () => {
    if (typeof bookData !== 'undefined') {
        displayBooks(bookData);
    } else {
        console.error("Error: bookData is not defined. Check your books.js file.");
    }
});