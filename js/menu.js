const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});











// CLICK POPUP CARD
const backdrop = document.getElementById('backdrop');
        const expandedCard = document.getElementById('expandedCard');
        const expandedIcon = document.getElementById('expandedIcon');
        const expandedTitle = document.getElementById('expandedTitle');
        const expandedDescription = document.getElementById('expandedDescription');
        const expandedButton = document.getElementById('expandedButton');
        const closeButton = document.getElementById('closeButton');

        // Add click listeners to all items
        document.querySelectorAll('.item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                
                // Get data from the clicked item
                const icon = item.getAttribute('data-icon');
                const title = item.getAttribute('data-title');
                const description = item.getAttribute('data-description');
                const buttonText = item.getAttribute('data-button');
                
                // Update expanded card content
                expandedIcon.className = icon;
                expandedTitle.textContent = title;
                expandedDescription.textContent = description;
                expandedButton.textContent = buttonText;
                
                // Show backdrop and expanded card
                backdrop.classList.add('active');
                expandedCard.classList.add('active');
            });
        });

        // Close modal functions
        function closeModal() {
            backdrop.classList.remove('active');
            expandedCard.classList.remove('active');
        }

        // Close on backdrop click
        backdrop.addEventListener('click', closeModal);

        // Close on close button click
        closeButton.addEventListener('click', closeModal);

        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        });
