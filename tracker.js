function calculateProgress() {
    // 1. Get input values
    const total = parseFloat(document.getElementById('totalPages').value);
    const read = parseFloat(document.getElementById('pagesRead').value);
    const speed = parseFloat(document.getElementById('readingSpeed').value);

    // 2. Perform Calculations (Requirement 36, 37)
    if (total > 0 && read <= total) {
        const percentage = (read / total) * 100;
        const remainingPages = total - read;
        const daysToFinish = Math.ceil(remainingPages / speed);

        // 3. Update UI (Requirement 38)
        document.getElementById('results').style.display = 'block';
        document.getElementById('percentText').innerText = Math.round(percentage);
        document.getElementById('progressBar').style.width = percentage + "%";
        
        document.getElementById('finishTime').innerText = 
            daysToFinish > 0 ? `Estimated finish in: ${daysToFinish} days` : "You've finished! Well done!";

        // 4. Save to localStorage (Requirement 39)
        const progressData = { total, read, speed, percentage };
        localStorage.setItem('userProgress', JSON.stringify(progressData));
    } else {
        alert("Please enter valid numbers. Pages read cannot exceed total pages.");
    }
}

// Optional: Load previous progress on start
window.onload = () => {
    const saved = localStorage.getItem('userProgress');
    if (saved) {
        const data = JSON.parse(saved);
        document.getElementById('totalPages').value = data.total;
        document.getElementById('pagesRead').value = data.read;
        document.getElementById('readingSpeed').value = data.speed;
        calculateProgress();
    }
};