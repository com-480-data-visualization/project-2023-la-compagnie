
document.addEventListener('DOMContentLoaded', function() {
    // Sanity Check
    console.log('DOM loaded!');

    // Initialize the map
    var map = L.map('map').setView([0, 0], 2);

    // Add the tile layer (you can use your preferred tile provider)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
        maxZoom: 18,
    }).addTo(map);

    // Load the flood data from the JSON file
    fetch('./data/flood_data.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            // Clean the data by removing NaN values
            data = data.filter(function(record) {
                var beforeArea = parseFloat(record['Lake_area_before']);
                var afterArea = parseFloat(record['Lake_area_after']);
                return !isNaN(beforeArea) && !isNaN(afterArea);
            });

            // Create an empty marker layer group
            var markerGroup = L.featureGroup()
            markerGroup.addTo(map);
            
            // Object to store the markers by year
            markersByYear = {};

            // Iterate over the data and create markers

            var maxQuota = 0;
            var minQuota = 10000000
            data.forEach(function(record) {
                var lat = parseFloat(record['Latitude']);
                var lng = parseFloat(record['Longitude']);
                var year = parseInt(record['Year']);
                var areaAfter = parseFloat(record['Lake_area_after']);
                var areaBefore = parseFloat(record['Lake_area_before']);
                var markerSize = calculateMarkerSize(areaBefore / areaAfter);
                var markerColor = calculateMarkerColor(areaBefore / areaAfter);

                if (!isNaN(lat) && !isNaN(lng)) {
                    var marker = L.circleMarker([lat, lng], {
                        radius: markerSize,
                        fillColor: markerColor,
                        color: '#000',
                        weight: 1,
                        opacity: 1,
                        fillOpacity: 0.8
                    });

                    marker.bindPopup(
                        'Year: ' + record['Year'] +
                        '<br>Country: ' + record['Country'] +
                        '<br>Lake Area Before: ' + record['Lake_area_before'] +
                        '<br>Lake Area After: ' + record['Lake_area_after']
                    );

                    markerGroup.addLayer(marker);

                    if (!markersByYear[year]) {
                        markersByYear[year] = [];
                    }
                    markersByYear[year].push(marker);
                }
            });


            // Fit the map bounds to the marker layer group
            map.fitBounds(markerGroup.getBounds());

            // Add a slider event listener
            const slider = document.getElementById('the-slider');
            var output = document.getElementById('demo');
            output.innerHTML = "Year: " + slider.value;

            slider.oninput = function() {
                output.innerHTML = "Year: " + this.value;
                console.log(this.value)
                filterFloodsByYear(this.value);
            }

            // Only show data from 2019 first
            filterFloodsByYear(2019);

            // Function to filter the flood data by year
            function filterFloodsByYear(year) {                
                    // Hide all markers
                markerGroup.eachLayer(function(marker) {
                    markerGroup.removeLayer(marker);    
                });
                
                // Show markers for the selected year
                if (markersByYear[year]) {
                    markersByYear[year].forEach(function(marker) {
                        markerGroup.addLayer(marker);
                    });
                }
            }
        });

    // Function to calculate the marker size based on flood severity
    function calculateMarkerSize(area) {
        // Adjust the calculation based on your data and desired marker size range

        // Change marker size to reasonable values
        // return Math.log(area) * 10;
        size = (Math.log(area)) / 7;
        console.log(size)
        return Math.max(size*25, 10);
    }

    // Function to calculate the marker color based on flood severity

    function calculateMarkerColor(area) {
        var minArea = 0.6; // Minimum value of the area
        var maxArea = 2.2e7; // Maximum value of the area
    
        // Define the color scale
        var colorScale;
    
        // Choose linear or logarithmic scale
        if (area <= minArea) {
            // Below or equal to the minimum value, use the color for the minimum value
            colorScale = d3.scaleLinear().domain([minArea, minArea]).range(['#fee08b']);
        } else if (area >= maxArea) {
            // Above or equal to the maximum value, use the color for the maximum value
            colorScale = d3.scaleLinear().domain([maxArea, maxArea]).range(['#d73027']);
        } else {
            // In between the minimum and maximum values, use the linear or logarithmic scale
            // Uncomment the desired scale
    
            // Linear scale
            // colorScale = d3.scaleLinear().domain([minArea, maxArea]).range(['#fee08b', '#d73027']);
    
            // Logarithmic scale
            colorScale = d3.scaleLog().domain([minArea, maxArea]).range(['#fee08b', '#d73027']);
        }
    
        // Get the color based on the area value
        return colorScale(area);
    }

    const helpButton = document.getElementById("help-button");
      const helpDiv = document.getElementById("help-div");
      helpButton.onclick = function() {
        if(helpDiv.style.display !== "none") {
          helpDiv.style.display = "none";
          helpButton.innerHTML = "Show Help";
        } else {
          helpDiv.style.display = "block";
          helpButton.innerHTML = "Hide Help";
        }
      }
});

