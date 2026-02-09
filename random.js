function getRecommendation() {
    const genre = document.getElementById('genreSelect').value;
    const length = document.getElementById('lengthSelect').value;
    const resultDiv = document.getElementById('recommendationResult');

    // 1. Filter the JSON data
    const filteredBooks = bookData.filter(book => {
        const genreMatch = genre === 'all' || book.genre === genre;
        const lengthMatch = length === 'all' || book.length === length;
        return genreMatch && lengthMatch;
    });

    if (filteredBooks.length > 0) {
        // 2. Random Selection
        const randomIndex = Math.floor(Math.random() * filteredBooks.length);
        const book = filteredBooks[randomIndex];

        // 3. Animation Trigger
        resultDiv.style.display = 'block';
        resultDiv.classList.remove('fade-in'); 
        void resultDiv.offsetWidth; // This "magic" line resets the animation
        resultDiv.classList.add('fade-in');

        // 4. Update UI
        resultDiv.innerHTML = `
            <div class="card-content">
                <img src="${book.image}" alt="${book.title}" style="width:150px;">
                <h2>${book.title}</h2>
                <p><strong>Author:</strong> ${book.author}</p>
                <div class="button-group">
                    <button class="save-btn" onclick="saveToLibrary(${book.id})">Save to Reading List</button>
                    <button class="retry-btn" onclick="getRecommendation()">Pick Again!</button>
                </div>
            </div>
        `;
    } else {
        alert("No books found! Try selecting 'Any Genre' or 'Any Length'.");
    }
}

// 5. LocalStorage Saving
function saveToLibrary(bookId) {
    let library = JSON.parse(localStorage.getItem('readifyLibrary')) || [];
    if (!library.includes(bookId)) {
        library.push(bookId);
        localStorage.setItem('readifyLibrary', JSON.stringify(library));
        alert("Saved to your Reading List!");
    } else {
        alert("Already in your list!");
    }
}