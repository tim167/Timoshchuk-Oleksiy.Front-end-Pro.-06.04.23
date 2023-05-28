let productsData = {
  category1: [
    { name: "Товар 1-1", description: "Опис товару 1-1" },
    { name: "Товар 1-2", description: "Опис товару 1-2" },
    { name: "Товар 1-3", description: "Опис товару 1-3" },
    { name: "Товар 1-4", description: "Опис товару 1-4" },
  ],
  category2: [
    { name: "Товар 2-1", description: "Опис товару 2-1" },
    { name: "Товар 2-2", description: "Опис товару 2-2" },
    { name: "Товар 2-3", description: "Опис товару 2-3" },
    { name: "Товар 2-4", description: "Опис товару 2-4" },
  ],
  category3: [
    { name: "Товар 3-1", description: "Опис товару 3-1" },
    { name: "Товар 3-2", description: "Опис товару 3-2" },
    { name: "Товар 3-3", description: "Опис товару 3-3" },
    { name: "Товар 3-4", description: "Опис товару 3-4" }
  ],
  category4: [
    { name: "Товар 4-1", description: "Опис товару 4-1" },
    { name: "Товар 4-2", description: "Опис товару 4-2" },
    { name: "Товар 4-3", description: "Опис товару 4-3" },
    { name: "Товар 4-4", description: "Опис товару 4-4" }
  ]
};

function showProducts(category) {
  let productList = document.getElementById('productList');
  productList.innerHTML = '';

  let products = productsData[category];
  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    let productElement = document.createElement('div');
    productElement.textContent = product.name;
    productElement.onclick = (function(product) {
      return function() {
        showProductInfo(product);
      };
    })(product);
    productList.appendChild(productElement);
  }
}

function showProductInfo(product) {
  let productInfo = document.getElementById('productInfo');
  productInfo.innerHTML = '';

  let nameElement = document.createElement('h3');
  nameElement.textContent = product.name;
  productInfo.appendChild(nameElement);

  let descriptionElement = document.createElement('p');
  descriptionElement.textContent = product.description;
  productInfo.appendChild(descriptionElement);

  let buyButton = document.createElement('button');
  buyButton.textContent = 'Купити';
  buyButton.onclick = function() {
    buyProduct(product);
  };
  productInfo.appendChild(buyButton);
}

function buyProduct(product) {
  alert('Товар "' + product.name + '" куплений!');
  
  document.getElementById('productList').innerHTML = '';
  document.getElementById('productInfo').innerHTML = '';
}
