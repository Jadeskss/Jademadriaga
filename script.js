 // Function to toggle the navbar
 function toggleNavbar() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}


// Function to toggle the visibility of additional works
function toggleWorks(categoryId) {
    const category = document.querySelector(`.work-category[data-category="${categoryId}"]`);
    const hiddenItems = category.querySelectorAll('.works-grid .work-item.hidden');
    const button = category.querySelector('.showMoreBtn');

    hiddenItems.forEach(item => {
        item.classList.toggle('hidden');
    });

    if (button.textContent === 'Show All Websites') {
        button.textContent = 'Show Less Websites';
    } else {
        button.textContent = 'Show All Websites';
    }
}
        // Function to enter full-screen mode on double-click
        function enterFullScreen(element) {
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.mozRequestFullScreen) { // Firefox
                element.mozRequestFullScreen();
            } else if (element.webkitRequestFullscreen) { // Chrome, Safari, and Opera
                element.webkitRequestFullscreen();
            } else if (element.msRequestFullscreen) { // IE/Edge
                element.msRequestFullscreen();
            }
        }

// Ensure the DOM is fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS (Animate On Scroll) library
    AOS.init();

    // Add click event listeners to work items for rotation
    const workItems = document.querySelectorAll('.work-item');
    workItems.forEach(item => {
        item.addEventListener('click', () => {
            const inner = item.querySelector('.work-inner');
            if (inner.style.transform === 'rotateY(180deg)') {
                inner.style.transform = 'rotateY(0deg)';
            } else {
                inner.style.transform = 'rotateY(180deg)';
            }
            item.addEventListener('dblclick', () => {
                enterFullScreen(item);
            });
        });
    });
});
<script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>