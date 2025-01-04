// Your existing product data

const products = [

    {

        name: 'Dining Table',

        category: 'Dining Table',

        items: [

            { image: './image/dt1.jpg' },

            { image: './image/dt2.jpeg' },

            { image: './image/dt3.jpg' },

            { image: './image/dt4.jpg' },

             { image: './image/dt4.jpg' },

            { image: './image/dt5.jpg' },

            { image: './image/dt6.jpg' },

            { image: './image/dt7.jpg' },

            { image: './image/dt8.jpg' },

            { image: './image/dt9.jpg' },

            { image: './image/dt10.jpg' },

            { image: './image/dt11.jpg' },

        ]

    },

    {

        name: 'Sofa',

        category: 'Sofa',

        items: [

          { image: './image/so1.jpg' },

            { image: './image/so2.jpg' },

            { image: './image/dt19.jpg' },

            { image: './image/so4.jpg' },

            { image: './image/so5.jpg' },

            { image: './image/so6.jpg' },

            { image: './image/so7.jpg' },

            { image: './image/so8.jpg' },

            { image: './image/so9.jpg' },

            { image: './image/so10.jpg' },

            { image: './image/so11.jpg' },

            { image: './image/so12.jpg' },

        ]

    },

    {

        name: 'Coffee Table',

        category: 'Coffee Table',

        items: [

            { image: './image/ct1.webp' },

            { image: './image/ct2.webp' },

            { image: './image/ct3.webp' },

        ]

    },

    {

        name: 'Bed',

        category: 'Bed',

        items: [

            { image: './image/bed1.jpg' },

            { image: './image/bed2.jpg' },

            { image: './image/bed3.jpg' },

            { image: './image/bed4.jpg' },

            { image: './image/bed5.jpg' },

            { image: './image/bed6.jpg' },

            { image: './image/bed7.jpg' },

            { image: './image/bed8.jpg' },

            { image: './image/bed9.jpg' },


        ]

    },

    {

        name: 'Kitchen Cabins',

        category: 'Kitchen Cabins',

        items: [

            { image: './image/kt1.webp' },

            { image: './image/kt2.jpg' },

            { image: './image/kt3.jpg' },

        ]

    },

    {

        name: 'Meeting Tables',

        category: 'Meeting Tables',

        items: [

            { image: './image/mt.jpg' },

            { image: './image/mt1.jpg' },

            { image: './image/mt2.jpeg' },

        ]

    },

    {

        name: 'Shelve',

        category: 'Shelve',

        items: [

            { image: './image/sv.webp' },

            { image: './image/sv1.jpg' },

            { image: './image/sv2.webp' },

        ]

    },

    {

        name: 'Public Tables',

        category: 'Public Tables',

        items: [

            { image: './image/pt1.jpg' },

            { image: './image/pt2.webp' },

            { image: './image/pt.webp' },

        ]

    },

    {

        name: 'File Cabines',

        category: 'File Cabines',

        items: [

            { image: './image/fc.jpg' },

            { image: './image/fc1.webp' },

            { image: './image/fc2.webp' },

        ]

    },

    {

        name: 'Office Sofa',

        category: 'Office Sofa',

        items: [

            { image: './image/os.jpg' },

            { image: './image/os.webp' },

            { image: './image/os2.jpg' },

        ]

    }

    // Add other product data similarly...

];



// Initialize the product grid

function displayProducts(filterCategory = 'all') {

    const productGrid = document.querySelector('.product-grid');

    productGrid.innerHTML = ''; // Clear previous content



    products.forEach(product => {

        if (filterCategory === 'all' || product.category === filterCategory) {

            product.items.forEach(item => {

                const productItem = document.createElement('div');

                productItem.className = 'product-item';



                productItem.innerHTML = `

                    <div class="product-variant">

                        <img src="${item.image}" alt="${product.name}">

                    </div>

                    <div class="product-info">

                        <p>${product.name}</p>

                    </div>

                `;

                productGrid.appendChild(productItem);

            });

        }

    });

}



// Filter products by category

document.querySelectorAll('.filter-buttons button').forEach(button => {

    button.addEventListener('click', () => {

        displayProducts(button.dataset.category);

    });

});



// Initial display

displayProducts();



// Image Preview Feature

const modal = document.getElementById("image-preview-modal");

const modalImg = document.getElementById("preview-image");

const closeModal = document.querySelector(".modal .close");



document.querySelectorAll('.product-variant img').forEach(image => {

    image.addEventListener('click', (e) => {

        modal.style.display = "block";

        modalImg.src = e.target.src;

    });

});



closeModal.addEventListener('click', () => {

    modal.style.display = "none";

});



window.addEventListener('click', (e) => {

    if (e.target == modal) {

        modal.style.display = "none";

    }

});

