function renderLanding() {
    const landingElement = document.getElementById('landing');
    
    landingElement.classList.add('landing-section');
    landingElement.innerHTML = `
        <div class="landing-content">
            <h2>Discover Cameroon with</h2>
            <h1>EasyTrip Planner</h1>
            <p class="description">
                Your ultimate Android app for planning trips, managing budgets, 
                and receiving AI-driven travel suggestions tailored specifically 
                for Cameroon's amazing destinations.
            </p>
            <div class="button-group">
                <a href="#" class="btn-primary">📥 Download APK</a>
                <a href="#" class="btn-secondary">▶ Watch Demo</a>
            </div>
            <div class="features-preview">
                <div class="feature-card-preview">
                    <div class="feature-icon">🗺️</div>
                    <h3>Smart Trip Planning</h3>
                    <p>Plan routes and itineraries across Cameroon with intelligent suggestions</p>
                </div>
                <div class="feature-card-preview">
                    <div class="feature-icon">💰</div>
                    <h3>Budget Management</h3>
                    <p>Get personalized recommendations based on your budget and preferences</p>
                </div>
                <div class="feature-card-preview">
                    <div class="feature-icon">✨</div>
                    <h3>AI Suggestions</h3>
                    <p>Smart travel tips and personalized recommendations powered by AI</p>
                </div>
            </div>
        </div>
    `;
}