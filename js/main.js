function initMap() {
    var location = { lat: 9.02027, lng: 38.78144 }; // Replace with your location
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

document.getElementById('addressSelect').addEventListener('change', function() {
    var selectedValue = this.value;
    if (selectedValue === "location1") {
        initMap({ lat: 9.02027, lng: 38.78144 }); // Replace with Jemo coordinates
    } else if (selectedValue === "location2") {
        initMap({ lat: 9.0354, lng: 38.7821 }); // Replace with Gurd Shola coordinates
    } else if (selectedValue === "location3") {
        initMap({ lat: 9.01027, lng: 38.77144 }); // Replace with Jemo 1 coordinates
    }
});
window.addEventListener('resize', function() {
    const screenWidth = window.innerWidth;
    const products = document.querySelectorAll('.featured-products .product');
    
    if (screenWidth <= 480) {
        products.forEach(product => {
            product.style.width = '90%';
        });
    } else if (screenWidth <= 768) {
        products.forEach(product => {
            product.style.width = '45%';
        });
    } else {
        products.forEach(product => {
            product.style.width = '30%';
        });
    }
});

// Initial layout setup
window.dispatchEvent(new Event('resize'));
