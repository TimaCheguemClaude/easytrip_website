/* ========================================
   APP INITIALIZATION (app.js)
   Initialize all components when DOM is loaded
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    // Render all components in order
    renderHeader();
    renderLanding();
    renderFeatures();
    renderDestinations();
    renderAbout();
    renderCTA();
    renderFooter();
    
    // Initialize event listeners
    initializeEventListeners();
});

/* ========================================
   EVENT LISTENERS & INTERACTIONS
   ======================================== */

function initializeEventListeners() {
    // Download APK buttons
    const downloadButtons = document.querySelectorAll('.btn-primary, .download-btn, .cta-btn-primary');
    downloadButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            // Check if it's a download button (has href="#" or is a button element)
            if (!href || href === '#' || this.tagName === 'BUTTON') {
                handleDownloadAPK();
            }
        });
    });
    
    // Watch Demo button
    const demoButtons = document.querySelectorAll('.btn-secondary');
    demoButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            // Check if it's a demo button (has href="#" or is a button element)
            if (!href || href === '#' || this.tagName === 'BUTTON') {
                handleWatchDemo();
            }
        });
    });
    
    // Plan Trip buttons
    const planTripButtons = document.querySelectorAll('.plan-trip-btn');
    planTripButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const destination = this.closest('.destination-card').querySelector('h3').textContent;
            handlePlanTrip(destination);
        });
    });
    
    // Share with Friends button
    const shareButtons = document.querySelectorAll('.cta-btn-secondary');
    shareButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            handleShareWithFriends();
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/* ========================================
   HANDLER FUNCTIONS
   ======================================== */

function handleDownloadAPK() {
    console.log('Download APK clicked');
    
    // Show a download confirmation
    const userConfirmed = confirm('Download EasyTrip Planner APK?\n\nFile size: ~25MB\nVersion: 1.0');
    
    if (userConfirmed) {
        // Google Drive direct download link
        const downloadUrl = 'https://drive.google.com/uc?export=download&id=1EzCXcLmQRUxRdT_M-8GEzYRJ0j_RX8Ch';
        
        // Open in new window/tab to trigger download
        // Google Drive links work better when opened directly
        window.open(downloadUrl, '_blank');
        
        // Optional: Show thank you message
        setTimeout(() => {
            alert('Thank you for downloading EasyTrip Planner!\n\nInstallation tips:\n1. Enable "Unknown Sources" in your Android settings\n2. Open the downloaded APK file\n3. Follow installation prompts');
        }, 1000);
        
        // Optional: Track download analytics
        trackDownload();
    }
}

// Optional analytics tracking function
function trackDownload() {
    // If you're using Google Analytics
    // gtag('event', 'download', { 'event_category': 'APK', 'event_label': 'EasyTrip v1.0' });
    
    // Or send to your own analytics
    console.log('Download tracked');
}

function handleWatchDemo() {
    console.log('Watch Demo clicked');
    // Open YouTube video in new tab
    window.open('https://youtube.com/shorts/J8Bs5PwzfDM?si=WhLzPH3IXA2QelnA', '_blank');
}

function handlePlanTrip(destination) {
    console.log('Plan trip for:', destination);
    alert(`Ready to plan your trip to ${destination}?\n\nDownload the EasyTrip Planner app to start planning!`);
}

function handleShareWithFriends() {
    console.log('Share with Friends clicked');
    if (navigator.share) {
        navigator.share({
            title: 'EasyTrip Planner',
            text: 'Check out EasyTrip Planner - your ultimate Android app for exploring Cameroon!',
            url: window.location.href
        }).catch(err => console.log('Error sharing:', err));
    } else {
        alert('Share this app with your friends!\nEasyTrip Planner - Your ultimate travel companion for Cameroon.\n' + window.location.href);
    }
}

/* ========================================
   UTILITY FUNCTIONS
   ======================================== */

// Add smooth scroll behavior to page
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Apply to all sections
    document.querySelectorAll('section, footer').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Call scroll animations on load
window.addEventListener('load', addScrollAnimations);

// Add active state to navigation links based on scroll position
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section, footer');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight) {
            const id = section.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + id) {
                    link.classList.add('active');
                }
            });
        }
    });
});