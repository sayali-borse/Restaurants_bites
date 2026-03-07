
        // Extended menu data with 50 more dishes
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
            },
            {
                id: 9,
                name: "Caprese Salad",
                category: "appetizer",
                description: "Fresh mozzarella, tomatoes, and basil with balsamic glaze",
                price: 12.99,
                image: "https://placehold.co/300x200/secondary/white?text=Caprese+Salad"
            },
            {
                id: 10,
                name: "Shrimp Scampi",
                category: "appetizer",
                description: "Garlic butter shrimp served with toasted bread",
                price: 15.99,
                image: "https://placehold.co/300x200/secondary/white?text=Shrimp+Scampi"
            },
            {
                id: 11,
                name: "Chicken Parmesan",
                category: "main",
                description: "Breaded chicken breast with marinara sauce and melted mozzarella",
                price: 24.99,
                image: "https://placehold.co/300x200/secondary/white?text=Chicken+Parmesan"
            },
            {
                id: 12,
                name: "Lamb Chops",
                category: "main",
                description: "Herb-crusted lamb chops with rosemary potatoes",
                price: 35.99,
                image: "https://placehold.co/300x200/secondary/white?text=Lamb+Chops"
            },
            {
                id: 13,
                name: "Crème Brûlée",
                category: "dessert",
                description: "Vanilla custard with caramelized sugar topping",
                price: 8.99,
                image: "https://placehold.co/300x200/secondary/white?text=Creme+Brulee"
            },
            {
                id: 14,
                name: "Panna Cotta",
                category: "dessert",
                description: "Silky vanilla custard with berry compote",
                price: 7.99,
                image: "https://placehold.co/300x200/secondary/white?text=Panna+Cotta"
            },
            {
                id: 15,
                name: "Sparkling Wine",
                category: "drink",
                description: "Champagne or prosecco with fruit infusion",
                price: 14.99,
                image: "https://placehold.co/300x200/secondary/white?text=Sparkling+Wine"
            },
            {
                id: 16,
                name: "Iced Tea",
                category: "drink",
                description: "Freshly brewed tea with lemon and mint",
                price: 4.99,
                image: "https://placehold.co/300x200/secondary/white?text=Iced+Tea"
            },
            {
                id: 17,
                name: "Bruschetta",
                category: "appetizer",
                description: "Toasted bread topped with tomato, basil, and garlic",
                price: 11.99,
                image: "https://placehold.co/300x200/secondary/white?text=Bruschetta"
            },
            {
                id: 18,
                name: "Mushroom Risotto",
                category: "main",
                description: "Creamy arborio rice with wild mushrooms and parmesan",
                price: 22.99,
                image: "https://placehold.co/300x200/secondary/white?text=Mushroom+Risotto"
            },
            {
                id: 19,
                name: "Chocolate Soufflé",
                category: "dessert",
                description: "Fluffy chocolate soufflé with raspberry coulis",
                price: 10.99,
                image: "https://placehold.co/300x200/secondary/white?text=Chocolate+Souffle"
            },
            {
                id: 20,
                name: "Espresso Martini",
                category: "drink",
                description: "Vodka, coffee liqueur, and espresso with a twist",
                price: 13.99,
                image: "https://placehold.co/300x200/secondary/white?text=Espresso+Martini"
            },
            {
                id: 21,
                name: "Caesar Salad",
                category: "appetizer",
                description: "Crisp romaine lettuce with parmesan and croutons",
                price: 10.99,
                image: "https://placehold.co/300x200/secondary/white?text=Caesar+Salad"
            },
            {
                id: 22,
                name: "Seafood Pasta",
                category: "main",
                description: "Fettuccine with shrimp, scallops, and white wine sauce",
                price: 26.99,
                image: "https://placehold.co/300x200/secondary/white?text=Seafood+Pasta"
            },
            {
                id: 23,
                name: "Apple Pie",
                category: "dessert",
                description: "Homemade apple pie with cinnamon and vanilla ice cream",
                price: 8.99,
                image: "https://placehold.co/300x200/secondary/white?text=Apple+Pie"
            },
            {
                id: 24,
                name: "Mojito",
                category: "drink",
                description: "Refreshing rum cocktail with mint and lime",
                price: 11.99,
                image: "https://placehold.co/300x200/secondary/white?text=Mojito"
            },
            {
                id: 25,
                name: "Stuffed Bell Peppers",
                category: "appetizer",
                description: "Bell peppers filled with quinoa and roasted vegetables",
                price: 13.99,
                image: "https://placehold.co/300x200/secondary/white?text=Stuffed+Peppers"
            },
            {
                id: 26,
                name: "Vegetable Lasagna",
                category: "main",
                description: "Layered pasta with ricotta, spinach, and marinara sauce",
                price: 21.99,
                image: "https://placehold.co/300x200/secondary/white?text=Vegetable+Lasagna"
            },
            {
                id: 27,
                name: "Cheesecake",
                category: "dessert",
                description: "New York style cheesecake with berry sauce",
                price: 9.99,
                image: "https://placehold.co/300x200/secondary/white?text=Cheesecake"
            },
            {
                id: 28,
                name: "Cosmopolitan",
                category: "drink",
                description: "Vodka, cranberry juice, and triple sec with citrus twist",
                price: 12.99,
                image: "https://placehold.co/300x200/secondary/white?text=Cosmopolitan"
            },
            {
                id: 29,
                name: "Garlic Bread",
                category: "appetizer",
                description: "Toasted bread with garlic butter and herbs",
                price: 7.99,
                image: "https://placehold.co/300x200/secondary/white?text=Garlic+Bread"
            },
            {
                id: 30,
                name: "BBQ Ribs",
                category: "main",
                description: "Slow-cooked pork ribs with BBQ sauce and coleslaw",
                price: 27.99,
                image: "https://placehold.co/300x200/secondary/white?text=BBQ+Ribs"
            },
            {
                id: 31,
                name: "Banana Bread",
                category: "dessert",
                description: "Moist banana bread with walnuts and cinnamon",
                price: 6.99,
                image: "https://placehold.co/300x200/secondary/white?text=Banana+Bread"
            },
            {
                id: 32,
                name: "Margarita",
                category: "drink",
                description: "Classic tequila cocktail with lime and triple sec",
                price: 11.99,
                image: "https://placehold.co/300x200/secondary/white?text=Margarita"
            },
            {
                id: 33,
                name: "Calamari Fritti",
                category: "appetizer",
                description: "Crispy fried squid with marinara dipping sauce",
                price: 14.99,
                image: "https://placehold.co/300x200/secondary/white?text=Calamari+Fritti"
            },
            {
                id: 34,
                name: "Chicken Alfredo",
                category: "main",
                description: "Fettuccine with grilled chicken and creamy Alfredo sauce",
                price: 23.99,
                image: "https://placehold.co/300x200/secondary/white?text=Chicken+Alfredo"
            },
            {
                id: 35,
                name: "Key Lime Pie",
                category: "dessert",
                description: "Tangy key lime pie with meringue topping",
                price: 8.99,
                image: "https://placehold.co/300x200/secondary/white?text=Key+Lime+Pie"
            },
            {
                id: 36,
                name: "Mulled Cider",
                category: "drink",
                description: "Spiced apple cider with cinnamon and cloves",
                price: 5.99,
                image: "https://placehold.co/300x200/secondary/white?text=Mulled+Cider"
            },
            {
                id: 37,
                name: "Spinach Artichoke Dip",
                category: "appetizer",
                description: "Creamy dip with spinach, artichokes, and melted cheese",
                price: 12.99,
                image: "https://placehold.co/300x200/secondary/white?text=Spinach+Dip"
            },
            {
                id: 38,
                name: "Fish & Chips",
                category: "main",
                description: "Battered cod with fries and tartar sauce",
                price: 25.99,
                image: "https://placehold.co/300x200/secondary/white?text=Fish+Chips"
            },
            {
                id: 39,
                name: "Chocolate Chip Cookies",
                category: "dessert",
                description: "Warm cookies with chocolate chips and vanilla ice cream",
                price: 6.99,
                image: "https://placehold.co/300x200/secondary/white?text=Chocolate+Cookies"
            },
            {
                id: 40,
                name: "Long Island Iced Tea",
                category: "drink",
                description: "Mixed spirits with cola and citrus",
                price: 13.99,
                image: "https://placehold.co/300x200/secondary/white?text=Long+Island"
            },
            {
                id: 41,
                name: "Stuffed Mushrooms",
                category: "appetizer",
                description: "Large mushroom caps stuffed with herbed cream cheese",
                price: 11.99,
                image: "https://placehold.co/300x200/secondary/white?text=Stuffed+Mushrooms"
            },
            {
                id: 42,
                name: "Vegetable Curry",
                category: "main",
                description: "Spiced vegetable curry with coconut milk and basmati rice",
                price: 19.99,
                image: "https://placehold.co/300x200/secondary/white?text=Vegetable+Curry"
            },
            {
                id: 43,
                name: "Peach Cobbler",
                category: "dessert",
                description: "Baked peaches with cinnamon and vanilla ice cream",
                price: 8.99,
                image: "https://placehold.co/300x200/secondary/white?text=Peach+Cobbler"
            },
            {
                id: 44,
                name: "Gin & Tonic",
                category: "drink",
                description: "Premium gin with tonic water and garnish",
                price: 12.99,
                image: "https://placehold.co/300x200/secondary/white?text=Gin+Tonic"
            },
            {
                id: 45,
                name: "Deviled Eggs",
                category: "appetizer",
                description: "Hard-boiled eggs with mayonnaise and paprika",
                price: 9.99,
                image: "https://placehold.co/300x200/secondary/white?text=Deviled+Eggs"
            },
            {
                id: 46,
                name: "Penne Arrabiata",
                category: "main",
                description: "Penne pasta with spicy tomato sauce and basil",
                price: 18.99,
                image: "https://placehold.co/300x200/secondary/white?text=Penne+Arrabiata"
            },
            {
                id: 47,
                name: "Crème Caramel",
                category: "dessert",
                description: "Caramel custard with vanilla sauce",
                price: 7.99,
                image: "https://placehold.co/300x200/secondary/white?text=Creame+Caramel"
            },
            {
                id: 48,
                name: "Orange Juice",
                category: "drink",
                description: "Freshly squeezed orange juice",
                price: 4.99,
                image: "https://placehold.co/300x200/secondary/white?text=Orange+Juice"
            },
            {
                id: 49,
                name: "Nachos Grande",
                category: "appetizer",
                description: "Loaded nachos with cheese, jalapeños, and guacamole",
                price: 13.99,
                image: "https://placehold.co/300x200/secondary/white?text=Nachos+Grande"
            },
            {
                id: 50,
                name: "Beef Lasagna",
                category: "main",
                description: "Classic lasagna with ground beef and ricotta cheese",
                price: 24.99,
                image: "https://placehold.co/300x200/secondary/white?text=Beef+Lasagna"
            },
            {
                id: 51,
                name: "Strawberry Shortcake",
                category: "dessert",
                description: "Fresh strawberries with whipped cream and shortcake",
                price: 9.99,
                image: "https://placehold.co/300x200/secondary/white?text=Strawberry+Shortcake"
            },
            {
                id: 52,
                name: "Whiskey Sour",
                category: "drink",
                description: "Whiskey with lemon juice and simple syrup",
                price: 12.99,
                image: "https://placehold.co/300x200/secondary/white?text=Whiskey+Sour"
            },
            {
                id: 53,
                name: "Burrata Salad",
                category: "appetizer",
                description: "Fresh burrata with heirloom tomatoes and basil oil",
                price: 16.99,
                image: "https://placehold.co/300x200/secondary/white?text=Burrata+Salad"
            },
            {
                id: 54,
                name: "Turkey Club",
                category: "main",
                description: "Roasted turkey with bacon, avocado, and mayo on toasted bread",
                price: 22.99,
                image: "https://placehold.co/300x200/secondary/white?text=Turkey+Club"
            },
            {
                id: 55,
                name: "Chocolate Mousse",
                category: "dessert",
                description: "Light chocolate mousse with fresh berries",
                price: 8.99,
                image: "https://placehold.co/300x200/secondary/white?text=Chocolate+Mousse"
            },
            {
                id: 56,
                name: "Sangria",
                category: "drink",
                description: "Red wine with fruit and sparkling water",
                price: 10.99,
                image: "https://placehold.co/300x200/secondary/white?text=Sangria"
            },
            {
                id: 57,
                name: "Hummus & Pita",
                category: "appetizer",
                description: "Traditional hummus with warm pita bread",
                price: 10.99,
                image: "https://placehold.co/300x200/secondary/white?text=Hummus+Pita"
            },
            {
                id: 58,
                name: "Mussels French",
                category: "main",
                description: "Steamed mussels with white wine and herbs",
                price: 25.99,
                image: "https://placehold.co/300x200/secondary/white?text=Mussels+French"
            },
            {
                id: 59,
                name: "Salted Caramel Tart",
                category: "dessert",
                description: "Buttery tart with salted caramel filling",
                price: 9.99,
                image: "https://placehold.co/300x200/secondary/white?text=Salted+Caramel"
            },
            {
                id: 60,
                name: "Ginger Ale",
                category: "drink",
                description: "Spicy ginger ale with citrus twist",
                price: 4.99,
                image: "https://placehold.co/300x200/secondary/white?text=Ginger+Ale"
            },
            {
                id: 61,
                name: "Prawn Cocktail",
                category: "appetizer",
                description: "Fresh prawns with cocktail sauce",
                price: 15.99,
                image: "https://placehold.co/300x200/secondary/white?text=Prawn+Cocktail"
            },
            {
                id: 62,
                name: "Eggplant Parmigiana",
                category: "main",
                description: "Breaded eggplant with marinara and melted mozzarella",
                price: 21.99,
                image: "https://placehold.co/300x200/secondary/white?text=Eggplant+Parm"
            },
            {
                id: 63,
                name: "Lemon Tart",
                category: "dessert",
                description: "Tangy lemon curd in a buttery crust",
                price: 8.99,
                image: "https://placehold.co/300x200/secondary/white?text=Lemon+Tart"
            },
            {
                id: 64,
                name: "Vodka Soda",
                category: "drink",
                description: "Premium vodka with soda and lemon",
                price: 11.99,
                image: "https://placehold.co/300x200/secondary/white?text=Vodka+Soda"
            },
            {
                id: 65,
                name: "Chicken Wings",
                category: "appetizer",
                description: "Spicy buffalo wings with ranch dip",
                price: 12.99,
                image: "https://placehold.co/300x200/secondary/white?text=Chicken+Wings"
            },
            {
                id: 66,
                name: "Vegetable Stir Fry",
                category: "main",
                description: "Seasonal vegetables in a savory sauce with rice",
                price: 18.99,
                image: "https://placehold.co/300x200/secondary/white?text=Stir+Fry"
            },
            {
                id: 67,
                name: "Blueberry Cheesecake",
                category: "dessert",
                description: "Creamy cheesecake with blueberry compote",
                price: 9.99,
                image: "https://placehold.co/300x200/secondary/white?text=Blueberry+Cheesecake"
            },
            {
                id: 68,
                name: "Mai Tai",
                category: "drink",
                description: "Rum-based cocktail with orange liqueur and mint",
                price: 13.99,
                image: "https://placehold.co/300x200/secondary/white?text=Mai+Tai"
            },
            {
                id: 69,
                name: "Tomato Soup",
                category: "appetizer",
                description: "Hearty tomato soup with grilled cheese crouton",
                price: 8.99,
                image: "https://placehold.co/300x200/secondary/white?text=Tomato+Soup"
            },
            {
                id: 70,
                name: "Pork Chop",
                category: "main",
                description: "Grilled pork chop with apple sauce and roasted potatoes",
                price: 26.99,
                image: "https://placehold.co/300x200/secondary/white?text=Pork+Chop"
            },
            {
                id: 71,
                name: "Apple Crisp",
                category: "dessert",
                description: "Baked apples with cinnamon and oat crumble",
                price: 8.99,
                image: "https://placehold.co/300x200/secondary/white?text=Apple+Crisp"
            },
            {
                id: 72,
                name: "Bloody Mary",
                category: "drink",
                description: "Vodka with tomato juice and spices",
                price: 12.99,
                image: "https://placehold.co/300x200/secondary/white?text=Bloody+Mary"
            },
            {
                id: 73,
                name: "Antipasto Platter",
                category: "appetizer",
                description: "Assorted cured meats, cheeses, and olives",
                price: 17.99,
                image: "https://placehold.co/300x200/secondary/white?text=Antipasto"
            },
            {
                id: 74,
                name: "Quinoa Bowl",
                category: "main",
                description: "Quinoa with roasted vegetables and tahini dressing",
                price: 19.99,
                image: "https://placehold.co/300x200/secondary/white?text=Quinoa+Bowl"
            },
            {
                id: 75,
                name: "Pumpkin Pie",
                category: "dessert",
                description: "Classic pumpkin pie with whipped cream",
                price: 8.99,
                image: "https://placehold.co/300x200/secondary/white?text=Pumpkin+Pie"
            }
        ];

        // State management
        let cart = [];
        let cartCount = 0;

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
                            <button onclick="addToCart(${item.id})" class="text-primary hover:text-red-700 font-bold flex items-center">
                                <i class="fas fa-plus mr-2"></i> Add to Order
                            </button>
                            <div class="flex space-x-2">
                                <button class="p-2 text-gray-400 hover:text-primary"><i class="fas fa-heart"></i></button>
                                <button onclick="showDetails(${item.id})" class="p-2 text-gray-400 hover:text-primary"><i class="fas fa-info-circle"></i></button>
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

        // Book table function
        function bookTable() {
            alert("Table booking feature would open a reservation form. For demo purposes, this alert is shown.");
            // In a real implementation, you would redirect to a booking page or open a modal
        }

        // Open booking modal
        function openBookingModal() {
            document.getElementById('bookingModal').classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

        // Close booking modal
        function closeBookingModal() {
            document.getElementById('bookingModal').classList.add('hidden');
            document.body.style.overflow = 'auto';
        }

        // Open payment modal
        function openPaymentModal(total) {
            document.getElementById('totalAmount').textContent = total.toFixed(2);
            document.getElementById('paymentModal').classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

        // Close payment modal
        function closePaymentModal() {
            document.getElementById('paymentModal').classList.add('hidden');
            document.body.style.overflow = 'auto';
        }

        // Add to cart function
        function addToCart(itemId) {
            // Find the item in menuData
            const item = menuData.find(item => item.id === itemId);
            if (item) {
                // Check if item already exists in cart
                const existingItem = cart.find(cartItem => cartItem.id === item.id);
                if (existingItem) {
                    existingItem.quantity += 1;
                } else {
                    cart.push({
                        ...item,
                        quantity: 1
                    });
                }
                
                // Update cart count
                cartCount++;
                document.getElementById('cart-count').textContent = cartCount;
                
                // Animation effect
                const itemElement = event.target.closest('.fa-plus').parentElement.parentElement;
                itemElement.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    itemElement.style.transform = 'scale(1)';
                }, 300);
                
                // Show notification
                alert(`${item.name} added to your order!`);
            }
        }

        // Show details function
        function showDetails(itemId) {
            // Find the item in menuData
            const item = menuData.find(item => item.id === itemId);
            if (item) {
                // Create modal
                const modal = document.createElement('div');
                modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
                modal.innerHTML = `
                    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-2xl transform transition-all duration-300 scale-95 animate-in fade-in zoom-in">
                        <div class="p-6">
                            <div class="flex justify-between items-center mb-4">
                                <h3 class="text-2xl font-bold text-dark">${item.name}</h3>
                                <button onclick="this.closest('div').remove()" class="text-gray-500 hover:text-gray-700">
                                    <i class="fas fa-times text-xl"></i>
                                </button>
                            </div>
                            <img src="${item.image}" alt="${item.name}" class="w-full h-64 object-cover rounded-lg mb-4">
                            <p class="text-gray-600 mb-4">${item.description}</p>
                            <div class="flex justify-between items-center mb-6">
                                <span class="text-xl font-bold text-primary">$${item.price.toFixed(2)}</span>
                                <button onclick="addToCart(${item.id}); this.closest('div').remove();" class="bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 transition-colors">
                                    Add to Order
                                </button>
                            </div>
                        </div>
                    </div>
                `;
                document.body.appendChild(modal);
                document.body.style.overflow = 'hidden';
            }
        }

        // Show cart function
        function showCart() {
            renderCart();
            document.getElementById('cartSection').classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

        // Hide cart function
        function hideCart() {
            document.getElementById('cartSection').classList.add('hidden');
            document.body.style.overflow = 'auto';
        }

        // Render cart items
        function renderCart() {
            const cartItemsContainer = document.getElementById('cart-items');
            const emptyCartMessage = document.getElementById('empty-cart-message');
            const cartTotalElement = document.getElementById('cart-total');
            
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = '';
                emptyCartMessage.classList.remove('hidden');
                cartTotalElement.textContent = '$0.00';
                return;
            }
            
            emptyCartMessage.classList.add('hidden');
            let total = 0;
            
            cartItemsContainer.innerHTML = cart.map(item => {
                const itemTotal = item.price * item.quantity;
                total += itemTotal;
                return `
                    <div class="flex items-center justify-between p-4 border-b">
                        <div class="flex items-center">
                            <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded mr-4">
                            <div>
                                <h4 class="font-bold text-dark">${item.name}</h4>
                                <p class="text-gray-600">$${item.price.toFixed(2)} × ${item.quantity}</p>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <span class="font-bold text-primary mr-4">$${itemTotal.toFixed(2)}</span>
                            <div class="flex space-x-2">
                                <button onclick="updateQuantity(${item.id}, 1)" class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                                    <i class="fas fa-plus text-sm"></i>
                                </button>
                                <button onclick="updateQuantity(${item.id}, -1)" class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                                    <i class="fas fa-minus text-sm"></i>
                                </button>
                                <button onclick="removeFromCart(${item.id})" class="ml-2 text-red-500">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
            
            cartTotalElement.textContent = `$${total.toFixed(2)}`;
        }

        // Update item quantity
        function updateQuantity(itemId, change) {
            const itemIndex = cart.findIndex(item => item.id === itemId);
            if (itemIndex !== -1) {
                if (change === 1) {
                    cart[itemIndex].quantity += 1;
                } else if (change === -1 && cart[itemIndex].quantity > 1) {
                    cart[itemIndex].quantity -= 1;
                } else if (change === -1 && cart[itemIndex].quantity === 1) {
                    removeFromCart(itemId);
                    return;
                }
                
                // Update cart count
                cartCount += change;
                document.getElementById('cart-count').textContent = cartCount;
                
                renderCart();
            }
        }

        // Remove from cart
        function removeFromCart(itemId) {
            const itemIndex = cart.findIndex(item => item.id === itemId);
            if (itemIndex !== -1) {
                // Update cart count
                cartCount -= cart[itemIndex].quantity;
                document.getElementById('cart-count').textContent = cartCount;
                
                // Remove item
                cart.splice(itemIndex, 1);
                renderCart();
            }
        }

        // Proceed to payment
        function proceedToPayment() {
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            openPaymentModal(total);
            hideCart();
        }

        // Handle booking form submission
        document.getElementById('bookingForm')?.addEventListener('submit', function(e) {
            e.preventDefault();
            // In a real app, this would submit to a server
            alert('Table booked successfully! We will send a confirmation to your email.');
            closeBookingModal();
        });

        // Handle payment form submission
        document.getElementById('paymentForm')?.addEventListener('submit', function(e) {
            e.preventDefault();
            // In a real app, this would process payment
            alert('Payment successful! Thank you for your order.');
            closePaymentModal();
            cart = [];
            cartCount = 0;
            document.getElementById('cart-count').textContent = '0';
            renderCart();
        });
   
