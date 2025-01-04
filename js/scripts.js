const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    hamburger.classList.toggle('toggle');
});

    // See More/See Less functionality
    var aboutText = document.getElementById("aboutText");
    var seeMoreBtn = document.getElementById("seeMore");

    var initialHeight = 150;
    aboutText.style.maxHeight = initialHeight + "px";
    aboutText.style.overflow = "hidden";

    seeMoreBtn.addEventListener("click", function() {
        if (aboutText.style.maxHeight !== "none") {
            aboutText.style.maxHeight = "none";
            seeMoreBtn.textContent = "See Less";
        } else {
            aboutText.style.maxHeight = initialHeight + "px";
            seeMoreBtn.textContent = "See More";
        }
    });

    // Product filtering functionality
    function filterProducts(category) {
        const products = document.querySelectorAll('.product-item');

        products.forEach(product => {
            if (product.classList.contains(category) || category === 'all') {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }

    // Initialize filter with "all" to show all products on page load
    filterProducts('all');

    // Back to top functionality
    const backToTop = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        backToTop.style.display = 'block';
      } else {
        backToTop.style.display = 'none';
      }
    });

    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

