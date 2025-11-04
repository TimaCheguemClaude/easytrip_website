function renderAbout() {
    const aboutElement = document.getElementById('about');
    
    aboutElement.classList.add('about-section');
    aboutElement.setAttribute('id', 'about');
    
    const aboutFeatures = [
        {
            icon: '🌍',
            title: 'Local Expertise',
            description: 'Built by locals who know Cameroon inside and out, ensuring authentic and reliable recommendations.'
        },
        {
            icon: '📱',
            title: 'Offline Functionality',
            description: 'Access your travel plans and maps even without internet connection, perfect for remote areas.'
        },
        {
            icon: '⚡',
            title: 'Real-time Updates',
            description: 'Get live updates on weather, road conditions, and local events to make informed decisions.'
        },
        {
            icon: '💡',
            title: 'Budget Optimization',
            description: 'Smart algorithms help you maximize your travel experience while staying within budget.'
        }
    ];
    
    let html = `
        <div class="about-container">
            <div class="about-text">
                <h2>Why Choose EasyTrip Planner?</h2>
                <p class="about-intro">
                    EasyTrip Planner is specifically designed for travelers exploring Cameroon. 
                    Our app combines local expertise with cutting-edge technology to provide you 
                    with the most accurate, up-to-date, and personalized travel recommendations.
                </p>
                <div class="about-features">
    `;
    
    aboutFeatures.forEach(feature => {
        html += `
            <div class="about-feature">
                <div class="about-feature-icon">${feature.icon}</div>
                <div class="about-feature-content">
                    <h3>${feature.title}</h3>
                    <p>${feature.description}</p>
                </div>
            </div>
        `;
    });
    
    html += `
                </div>
                <a href="#" class="cta-btn">📱 Get Started Today</a>
            </div>
            <div class="about-image" style="background-image: url('images/phone.png'); background-size: contain; background-repeat: no-repeat; background-position: center;">
            </div> 
        </div>
    `;
    
    aboutElement.innerHTML = html;
}