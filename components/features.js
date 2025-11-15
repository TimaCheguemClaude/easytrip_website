function renderFeatures() {
    const featuresElement = document.getElementById('features');
    
    featuresElement.classList.add('features-section');
    featuresElement.setAttribute('id', 'features');
    
    const features = [
        {
            title: 'Trip Planning',
            description: 'Plan comprehensive routes, create detailed itineraries, and organize visits across Cameroon with our intuitive planning tools.',
            icon: '📍',
            image: 'images/trip-planning.png',
            highlights: ['Smart Planning', 'Local Insights', 'Real-time Updates'],
            imagePosition: 'right'
        },
        {
            title: 'Budget-Aware Recommendations',
            description: 'Receive personalized travel suggestions tailored to your budget and preferences, ensuring you get the most value from your trip.',
            icon: '$',
            image: 'images/budgetaware.jpg',
            highlights: ['Smart Planning', 'Local Insights', 'Real-time Updates'],
            imagePosition: 'left'
        },
        {
            title: 'AI Suggestions',
            description: 'Get smart travel tips, discover hidden gems, and receive AI-powered recommendations based on your interests and travel style.',
            icon: '⚡',
            image: 'images/ai_screen.jpg',
            highlights: ['Smart Planning', 'Local Insights', 'Real-time Updates'],
            imagePosition: 'right'
        }
    ];
    
    let html = `
        <div class="section-title">
            <h2>Powerful Features for Every Traveler</h2>
            <p>EasyTrip Planner combines cutting-edge technology with local expertise 
               to make your Cameroon adventure unforgettable.</p>
        </div>
        <div class="features-container">
    `;
    
    features.forEach((feature, index) => {
        const isReverse = index === 1 ? 'reverse' : '';
        html += `
            <div class="feature-row ${isReverse}">
                <div class="feature-image">
                   <img src="${feature.image}" alt="${feature.title}" style="width: 50%; height: 60%; object-fit: cover; border-radius: 10px;">
                  </div>
                <div class="feature-text">
                    <div class="feature-icon">${feature.icon}</div>
                    <h3>${feature.title}</h3>
                    <p>${feature.description}</p>
                    <ul class="feature-highlights">
                        ${feature.highlights.map(highlight => `
                            <li>
                                <div class="highlight-icon">✓</div>
                                ${highlight}
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `;
    });
    
    html += `</div>`;
    featuresElement.innerHTML = html;
}