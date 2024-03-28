const apiUrl = 'https://crudcrud.com/api/36a090a5a3c84ec89e35b4dea015ee72/unicorns';

async function fetchProducts() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

async function displayProducts() {
    const productListDiv = document.getElementById('product-list');
    const products = await fetchProducts();

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>Price: ${product.price}</p>
        `;
        productListDiv.appendChild(productItem);
    });
}

displayProducts();