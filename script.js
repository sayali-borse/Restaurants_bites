

        // Sample menu data
        const menuData = [
            {
                id: 1,
                name: "Truffle Arancini",
                category: "appetizer",
                description: "Crispy risotto balls with black truffle and parmesan cheese",
                price: 14.99,
                image: "https://placehold.co/300x200/secondary/white?text=Truffle+Arancini"
            },
            {
                id: 2,
                name: "Grilled Octopus",
                category: "appetizer",
                description: "Tender octopus with smoked paprika and lemon aioli",
                price: 16.99,
                image: "https://placehold.co/300x200/secondary/white?text=Grilled+Octopus"
            },
            {
                id: 3,
                name: "Beef Tenderloin",
                category: "main",
                description: "8oz grass-fed beef with roasted vegetables and red wine reduction",
                price: 32.99,
                image: "https://placehold.co/300x200/secondary/white?text=Beef+Tenderloin"
            },
            {
                id: 4,
                name: "Wild Salmon",
                category: "main",
                description: "Pan-seared salmon with herb butter and seasonal vegetables",
                price: 28.99,
                image: "https://placehold.co/300x200/secondary/white?text=Wild+Salmon"
            },
            {
                id: 5,
                name: "Chocolate Lava Cake",
                category: "dessert",
                description: "Warm chocolate cake with molten center and vanilla ice cream",
                price: 9.99,
                image: "https://placehold.co/300x200/secondary/white?text=Chocolate+Lava"
            },
            {
                id: 6,
                name: "Tiramisu",
                category: "dessert",
                description: "Classic Italian dessert with espresso-soaked ladyfingers and mascarpone",
                price: 8.99,
                image: "https://placehold.co/300x200/secondary/white?text=Tiramisu"
            },
            {
                id: 7,
                name: "House Wine",
                category: "drink",
                description: "Selection of local and international wines by the glass",
                price: 9.99,
                image: "https://placehold.co/300x200/secondary/white?text=House+Wine"
            },
            {
                id: 8,
                name: "Craft Cocktail",
                category: "drink",
                description: "Seasonal ingredients with premium spirits and house-made syrups",
                price: 12.99,
                image: "https://placehold.co/300x200/secondary/white?text=Craft+Cocktail"
            }
        ];

        // Function to show sections
        function showSection(sectionId) {
            // Hide all sections
            document.querySelectorAll('section').forEach(section => {
                section.classList.add('hidden');
            });
            
            // Show selected section
            document.getElementById(sectionId).classList.remove('hidden');
            
            // Scroll to top
            window.scrollTo(0, 0);
        }

        // Filter categories
        function filterCategory(category) {
            const menuItemsContainer = document.getElementById('menu-items');
            menuItemsContainer.innerHTML = '';
            
            const filteredItems = category === 'all' 
                ? menuData 
                : menuData.filter(item => item.category === category);
            
            filteredItems.forEach(item => {
                const menuItem = document.createElement('div');
                menuItem.className = 'bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300';
                menuItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <div class="flex justify-between items-start mb-2">
                            <h3 class="text-xl font-bold text-dark">${item.name}</h3>
                            <span class="text-lg font-bold text-primary">$${item.price.toFixed(2)}</span>
                        </div>
                        <p class="text-gray-600 mb-4">${item.description}</p>
                        <div class="flex justify-between items-center">
                            <button class="text-primary hover:text-red-700 font-bold flex items-center">
                                <i class="fas fa-plus mr-2"></i> Add to Order
                            </button>
                            <div class="flex space-x-2">
                                <button class="p-2 text-gray-400 hover:text-primary"><i class="fas fa-heart"></i></button>
                                <button class="p-2 text-gray-400 hover:text-primary"><i class="fas fa-share-alt"></i></button>
                            </div>
                        </div>
                    </div>
                `;
                menuItemsContainer.appendChild(menuItem);
            });
        }

        // Initialize the page
        document.addEventListener('DOMContentLoaded', () => {
            // Show home section by default
            showSection('home');
            
            // Load menu items
            filterCategory('all');
        });

        // Simulate adding to cart functionality
        document.addEventListener('click', (e) => {
            if (e.target.closest('.fa-plus')) {
                const cartCount = document.querySelector('.absolute');
                let count = parseInt(cartCount.textContent);
                cartCount.textContent = count + 1;
                
                // Animation effect
                e.target.closest('.fa-plus').parentElement.parentElement.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    e.target.closest('.fa-plus').parentElement.parentElement.style.transform = 'scale(1)';
                }, 300);
            }
        });
  
