// Set map
function initialize() {
    var mapOptions = {
        //zoom mapa
        zoom: 10,
        // centro inicial (São Paulo)
        center: new google.maps.LatLng(-23.55, -46.64),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        // zoom minimo
        minZoom: 2
    };

    // criar o mapa
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Criar info
    var infoWindow = new google.maps.InfoWindow();

    // Create a marker for example : Iran, Zanjan
    var marker = new google.maps.Marker({
        // Cordinates for Iran, Zanjan
        position: new google.maps.LatLng(-3.09, -60.01),
        // Attach the marker
        map: map,
        // Tooltip on hover
        title: 'AM, Manaus - Amazonas'
    });

    // Adicionar click
    marker.addListener('click', function () {
        infoWindow.setContent(marker.title);
        infoWindow.open(map, marker);
    });

    // ajuste do mapa
    google.maps.event.addDomListener(window, "resize", function () {
        map.setCenter(mapOptions.center);
    });


}

// Inicialização do mapa
google.maps.event.addDomListener(window, 'load', initialize);