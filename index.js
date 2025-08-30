document.addEventListener('DOMContentLoaded', () => {
    // ---- Dropdown Functionality ----
    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = document.querySelector('.dropdown-content');

    // This section is commented out because Bootstrap's JS already handles the dropdown on click.
    // If you were not using Bootstrap, this would be needed.
    // dropdown.addEventListener('click', (event) => {
    //     event.preventDefault();
    //     dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    // });

    // ---- Sticky Header Functionality ----
    const header = document.querySelector('header');
    const topBar = document.querySelector('.bg-dark');

    // Check if the top bar element exists before trying to get its height
    if (topBar) {
        const topBarHeight = topBar.offsetHeight;

        window.addEventListener('scroll', () => {
            if (window.scrollY > topBarHeight) {
                header.classList.add('scrolled-header');
            } else {
                header.classList.remove('scrolled-header');
            }
        });
    } else {
        // Fallback for when the top bar is not present (e.g., on a different page)
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) { // A fixed value as a fallback
                header.classList.add('scrolled-header');
            } else {
                header.classList.remove('scrolled-header');
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const focusItems = document.querySelectorAll('.focus-item');
    const tabPanes = document.querySelectorAll('.tab-pane');

    focusItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove 'active' class from all focus items
            focusItems.forEach(i => i.classList.remove('active'));
            // Add 'active' class to the clicked item
            item.classList.add('active');

            // Hide all content panes
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Get the ID of the target content pane
            const targetId = item.dataset.target;
            const targetPane = document.getElementById(targetId);

            // Show the target content pane
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });
});