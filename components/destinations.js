function renderDestinations() {
    const destinationsElement = document.getElementById('destinations');
    
    destinationsElement.classList.add('destinations-section');
    destinationsElement.setAttribute('id', 'destinations');
    
    const destinations = [
        {
            name: 'Yaoundé',
            image: 'images/destinations/yaounde.jpg',
            description: 'The vibrant capital city with rich culture and modern attractions',
            attractions: ['National Museum', 'Unity Palace', 'Mvog-Betsi Zoo'],
            popular: true
        },
        {
            name: 'Douala',
            image: 'images/destinations/Douala.jpg',
            description: 'Economic hub and gateway to Cameroon with bustling markets',
            attractions: ['Central Market', 'Douala Port', 'La Pagode'],
            popular: true
        },
        {
            name: 'Mount Cameroon',
            image: 'images/destinations/cameroon.jpg',
            description: "West Africa's highest peak offering incredible hiking adventures",
            attractions: ['Hiking Trails', 'Volcanic Landscapes', 'Wildlife Viewing'],
            popular: true
        },
        {
            name: 'Kribi',
            image: 'images/destinations/Kribi.jpg',
            description: 'Beautiful coastal town with pristine beaches and waterfalls',
            attractions: ['Lobe Falls', 'Grand Batanga Beach', 'Fishing Villages'],
            popular: true
        },
        {
            name: 'Bamenda',
            image: 'images/destinations/Bamenda.jpg',
            description: 'Highland city known for its cool climate and scenic beauty',
            attractions: ['Ring Road', 'Traditional Markets', 'Highland Views'],
            popular: false
        },
        {
            name: 'Waza National Park',
            image: 'images/destinations/Waza.jpg',
            description: 'Premier wildlife destination with diverse African fauna',
            attractions: ['Safari Tours', 'Elephant Herds', 'Bird Watching'],
            popular: true
        }
    ];
    
    let html = `
        <div class="section-title">
            <h2>Explore Amazing Destinations in Cameroon</h2>
            <p>From bustling cities to pristine beaches, from volcanic peaks to wildlife reserves - 
               discover the incredible diversity that Cameroon has to offer.</p>
        </div>
        <div class="destinations-grid">
    `;
    
    destinations.forEach(dest => {
        html += `
            <div class="destination-card">
                <div class="destination-image" style="background-image: url('${dest.image}'); background-size: cover; background-position: center;">
                    <span style="background-color: rgba(0, 0, 0, 0.5); padding: 10px 15px; border-radius: 5px;">${dest.name}</span>
                    ${dest.popular ? '<span class="popular-badge">Popular</span>' : ''}
                </div>
                <div class="destination-content">
                    <h3>${dest.name}</h3>
                    <p>${dest.description}</p>
                    <p style="font-weight: 600; font-size: 0.9rem; margin: 1rem 0;">Top Attractions:</p>
                    <ul class="attractions-list">
                        ${dest.attractions.map(attr => `<li>${attr}</li>`).join('')}
                    </ul>
                    <button class="plan-trip-btn">Plan Trip Here</button>
                </div>
            </div>
        `;
    });
    
    html += `
        </div>
        <div class="destinations-cta">
            <p>Ready to explore these amazing destinations?</p>
            <a href="#" class="btn-primary">📥 Download EasyTrip Planner</a>
        </div>
    `;
    
    destinationsElement.innerHTML = html;
}