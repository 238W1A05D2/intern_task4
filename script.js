// This file provides interactive JavaScript functionality for the responsive webpage.

document.addEventListener('DOMContentLoaded', () => {
    console.log('Responsive page loaded!');

    // --- Mobile Navigation Toggle Feature ---
    // This feature allows the navigation menu to be toggled (shown/hidden)
    // on smaller screens by clicking a button (often a "hamburger" icon).

    // 1. Get references to the necessary DOM elements:
    //    - The navigation element itself (the 'nav' tag)
    //    - A button that will trigger the toggle (we'll add this to index.html)
    const nav = document.querySelector('.nav');
    // We'll assume a button with ID 'nav-toggle' exists in the HTML
    const navToggle = document.getElementById('nav-toggle');

    // Check if both elements exist before adding event listeners to prevent errors
    if (nav && navToggle) {
        // 2. Add an event listener to the toggle button
        navToggle.addEventListener('click', () => {
            // 3. Toggle a CSS class on the navigation element
            //    This class (e.g., 'nav-open') will be defined in styles.css
            //    to control the visibility and styling of the mobile menu.
            nav.classList.toggle('nav-open');

            // Optional: Change the button's text or icon to indicate state
            if (nav.classList.contains('nav-open')) {
                navToggle.textContent = 'Close'; // Or change to an 'X' icon
            } else {
                navToggle.textContent = 'Menu'; // Or change back to 'hamburger' icon
            }
        });

        // Optional: Close the menu if a navigation link is clicked
        // This improves user experience by automatically closing the menu
        // after they've selected a destination.
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (nav.classList.contains('nav-open')) {
                    nav.classList.remove('nav-open');
                    navToggle.textContent = 'Menu'; // Reset button text/icon
                }
            });
        });
    } else {
        console.warn("Navigation or toggle button not found. Mobile menu toggle feature may not work.");
    }
});
