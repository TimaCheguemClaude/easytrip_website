function renderHeader() {
    const headerElement = document.getElementById('header');
    
    headerElement.innerHTML = `
        <div class="logo">EasyTrip Planner</div>
        <nav class="nav-menu">
            <a href="#features">Features</a>
            <a href="#destinations">Destinations</a>
            <a href="#about">About</a>
            <a href="#" class="download-btn">Download APK</a>
        </nav>
    `;
}