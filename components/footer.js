function renderFooter() {
    const footerElement = document.querySelector('footer');
    
    const currentYear = new Date().getFullYear();
    
    footerElement.innerHTML = `
        <div class="footer-container">
            <div class="footer-section">
                <h3>EasyTrip Planner</h3>
                <p class="footer-text">
                    Your ultimate travel companion for exploring Cameroon. 
                    Plan trips, manage budgets, and discover amazing destinations 
                    with AI-powered recommendations.
                </p>
            </div>
            <div class="footer-section">
                <h3>Quick Links</h3>
                <div class="footer-links">
                    <a href="#features">Features</a>
                    <a href="#destinations">Destinations</a>
                    <a href="#about">About</a>
                    <a href="#">Support</a>
                </div>
            </div>
            <div class="footer-section">
                <h3>Resources</h3>
                <div class="footer-links">
                    <a href="#">Help Center</a>
                    <a href="#">Contact Us</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>© ${currentYear} EasyTrip Planner. All rights reserved.</p>
        </div>
    `;
}