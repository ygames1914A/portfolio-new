function adjustMainHeight() {
    // Get the header element
    const header = document.querySelector('nav');

    // Get the height of the header
    const headerHeight = header.offsetHeight;

    // Get the main element
    const main = document.querySelector('main');

    // Set the height of the main element dynamically
    main.style.height = `calc(100svh - ${headerHeight}px)`;
}

// Adjust height on page load
window.addEventListener('load', adjustMainHeight);

// Adjust height on window resize to handle responsive layout changes
window.addEventListener('resize', adjustMainHeight);