function renderCTA() {
    const ctaElement = document.getElementById('cta');
    
    ctaElement.classList.add('cta-section');
    
    ctaElement.innerHTML = `
        <div class="cta-content">
            <h2>Start Your Cameroon Adventure Today</h2>
            <p>Join thousands of travelers who trust EasyTrip Planner to make their 
               Cameroon journey unforgettable. Download now and start exploring!</p>
            <div class="cta-buttons">
                <button class="cta-btn-primary">📥 Download APK</button>
                <button class="cta-btn-secondary">👥 Share with Friends</button>
            </div>
            <div class="cta-stats">
                <div class="stat-item">
                    <span class="stat-number">100+</span>
                    <span class="stat-label">Happy Travelers</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">20+</span>
                    <span class="stat-label">Destinations Covered</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">4.8★</span>
                    <span class="stat-label">User Rating</span>
                </div>
            </div>
        </div>
    `;
}