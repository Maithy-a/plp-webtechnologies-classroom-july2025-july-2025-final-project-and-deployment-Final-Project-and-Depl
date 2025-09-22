
document.addEventListener('DOMContentLoaded', () => {
    const menuItemsContainer = document.querySelector('#menu-items');
    const searchInput = document.querySelector('#menu-search');
    const filterButtons = document.querySelectorAll('.filter-buttons button');

    const menuData = [
        { id: 1, name: 'Espresso', category: 'coffee', price: 2.50, description: 'A single shot of intense coffee.', tags: ['vegan', 'gf'] },
        { id: 2, name: 'Latte', category: 'coffee', price: 3.50, description: 'Espresso with steamed milk.', tags: [] },
        { id: 3, name: 'Cappuccino', category: 'coffee', price: 3.50, description: 'Espresso, steamed milk, and foam.', tags: [] },
        { id: 4, name: 'Green Tea', category: 'tea', price: 2.00, description: 'A light and refreshing tea.', tags: ['vegan', 'gf'] },
        { id: 5, name: 'Croissant', category: 'pastries', price: 2.50, description: 'A buttery, flaky pastry.', tags: [] },
        { id: 6, name: 'Muffin', category: 'pastries', price: 2.00, description: 'A sweet and moist muffin.', tags: [] },
        { id: 7, name: 'Turkey Sandwich', category: 'sandwiches', price: 6.50, description: 'Turkey, lettuce, and tomato on whole wheat.', tags: [] },
    ];

    function renderMenuItems(items) {
        menuItemsContainer.innerHTML = '';
        items.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'menu-item';
            itemElement.innerHTML = `
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p class="price">$${item.price.toFixed(2)}</p>
                <div class="tags">${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
            `;
            menuItemsContainer.appendChild(itemElement);
        });
    }

    function filterMenu() {
        const searchTerm = searchInput.value.toLowerCase();
        const activeFilter = document.querySelector('.filter-buttons button.active')?.dataset.filter || 'all';

        let filteredItems = menuData.filter(item => {
            const matchesCategory = activeFilter === 'all' || item.category === activeFilter;
            const matchesSearch = item.name.toLowerCase().includes(searchTerm) || item.description.toLowerCase().includes(searchTerm);
            return matchesCategory && matchesSearch;
        });

        renderMenuItems(filteredItems);
    }

    if (menuItemsContainer) {
        renderMenuItems(menuData);

        searchInput.addEventListener('input', filterMenu);

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                filterMenu();
            });
        });
    }
});
