document.addEventListener("DOMContentLoaded", function () {
    // Initialize the map and set its view to a default location
    const map = L.map('map-container').setView([28.7041, 77.1025], 13); // Default to New Delhi, India

    // Add OpenStreetMap tiles to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19,
    }).addTo(map);

    // Example marker for a location
    const fromMarker = L.marker([28.7041, 77.1025]).addTo(map).bindPopup('From: New Delhi').openPopup();
    const toMarker = L.marker([28.5355, 77.3910]).addTo(map).bindPopup('To: Noida');

    // Add click listener to Search button
    const searchButton = document.getElementById("search-button");
    searchButton.addEventListener("click", function () {
        const fromLocation = document.getElementById("from-location").value;
        const toLocation = document.getElementById("to-location").value;

        if (fromLocation && toLocation) {
            alert(`Searching route from "${fromLocation}" to "${toLocation}".`);
            // Example: You can integrate APIs like Mapbox, OpenRouteService, or Google Directions API for routes.
        } else {
            alert("Please enter both 'From' and 'To' locations.");
        }
    });
});
