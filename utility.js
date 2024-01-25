const productList = document.querySelector("#list");
const cartElement = document.querySelector("#cart");

const cart = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

const updateCartUI = () => {
  const cartContainer = document.querySelector("#cart");
  cartContainer.innerHTML = "";

  if (cart.totalItems === 0) {
    cartContainer.innerHTML = "<p>Il carrello è vuoto.</p>";
    return;
  }

  cart.items.forEach((item) => {
    const cartItemDiv = document.createElement("div");
    cartItemDiv.classList.add("cart-item");

    cartItemDiv.innerHTML = `
      <p><strong>Prodotto:</strong> ${item.name}</p>
      <p><strong>Prezzo:</strong> ${item.price} EUR</p>
      <hr>
    `;

    cartContainer.appendChild(cartItemDiv);
  });

  const totalDiv = document.createElement("div");
  totalDiv.classList.add("cart-total");

  totalDiv.innerHTML = `
    <p><strong>Totale articoli:</strong> ${cart.totalItems}</p>
    <p><strong>Prezzo totale:</strong> ${cart.totalPrice.toFixed(2)} EUR</p>
  `;

  cartContainer.appendChild(totalDiv);
};

const addToCart = (product) => {
  cart.items.push({
    name: product.name,
    price: parseFloat(product.price),
  });
  cart.totalItems += 1;
  cart.totalPrice += parseFloat(product.price);

  updateCartUI();

  console.log("Prodotto aggiunto al carrello:", product);
};
const getProduct = async () => {
  const response = await fetch(
    "https://striveschool-api.herokuapp.com/api/product/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmYzVjZTczMjBjNjAwMThiOGYwMjEiLCJpYXQiOjE3MDYwMTgyNTQsImV4cCI6MTcwNzIyNzg1NH0.adHhNogNz7-k_4h2Ybx9AUqGFW2wG1785jJPSzE1d-E",
      },
      body: JSON.stringify({
        name: "cellphone 3310",
        description: "An unforgettable icon",
        brand: "Nokia",
        imageUrl: "https://bit.ly/3CExjRa",
      }),
    }
  );

  const responseJson = await response.json();
  console.log(responseJson);

  displayData(responseJson);
};

const dammiLista = async () => {
  let response = await fetch(
    "https://striveschool-api.herokuapp.com/api/product/",
    {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmYzVjZTczMjBjNjAwMThiOGYwMjEiLCJpYXQiOjE3MDYwMTgyNTQsImV4cCI6MTcwNzIyNzg1NH0.adHhNogNz7-k_4h2Ybx9AUqGFW2wG1785jJPSzE1d-E",
      },
    }
  );

  let data = await response.json();
  console.log(data);

  addNewProduct(data);
};

const addNewProduct = (data) => {
  productList.innerHTML = `<div class="row"`;

  data.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("d-flex", "col-md-4", "col-lg-6", "mb-4");

    productDiv.innerHTML = `<div class="mt-4 d-flex gap-3">
    <div class="card ">
    <a href="product.html?id=${product.id}">
          <img src="${product.imageUrl}" class="card-img-top" alt="${
      product.name
    }">
        </a>
    <div class="card-body">
      <h5 class="card-title">${product.name}</h5>
      <p class="card-text">${product.description}</p>
      <p class="card-text">Brand: ${product.brand}</p>
      <p class="card-text">Price: ${product.price}</p>
      <button class="btn btn-primary mt-1" onclick="addToCart(${JSON.stringify(
        product
      )})">Aggiungi al carrello</button>
  </div>
  <div class="card ">
  <a href="product.html?id=${product.id}" data-product="${JSON.stringify(
      product
    )}">
    <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
  </a>
  <div class="card-body">
    <h5 class="card-title">${product.name}</h5>
    <p class="card-text">${product.description}</p>
    <p class="card-text">Brand: ${product.brand}</p>
    <p class="card-text">Price: ${product.price}</p>
    <button class="btn btn-primary mt-1" onclick="addToCart(${JSON.stringify(
      product
    )})">Aggiungi al carrello</button>
</div>
<div class="card ">
<a href="product.html?id=${product.id}">
      <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
    </a>
<div class="card-body">
  <h5 class="card-title">${product.name}</h5>
  <p class="card-text">${product.description}</p>
  <p class="card-text">Brand: ${product.brand}</p>
  <p class="card-text">Price: ${product.price}</p>

  <button class="btn btn-primary mt-1" onclick="addToCart(${JSON.stringify(
    product
  )})">Aggiungi al carrello</button>
</div>
</div>
<div class="card ">
<a href="product.html?id=${product.id}">
      <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
    </a>
<div class="card-body">
  <h5 class="card-title">${product.name}</h5>
  <p class="card-text">${product.description}</p>
  <p class="card-text">Brand: ${product.brand}</p>
  <p class="card-text">Price: ${product.price}</p>

  <button class="btn btn-primary mt-1" onclick="addToCart(${JSON.stringify(
    product
  )})">Aggiungi al carrello</button>
</div>
</div>
<div class="card ">
<a href="product.html?id=${product.id}">
      <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
    </a>
<div class="card-body">
  <h5 class="card-title">${product.name}</h5>
  <p class="card-text">${product.description}</p>
  <p class="card-text">Brand: ${product.brand}</p>
  <p class="card-text">Price: ${product.price}</p>

  <button class="btn btn-primary mt-1" onclick="addToCart(${JSON.stringify(
    product
  )})">Aggiungi al carrello</button></div>
</div>
<div class="card ">
<a href="product.html?id=${product.id}">
      <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
    </a>
<div class="card-body">
  <h5 class="card-title">${product.name}</h5>
  <p class="card-text">${product.description}</p>
  <p class="card-text">Brand: ${product.brand}</p>
  <p class="card-text">Price: ${product.price}</p>

  <button class="btn btn-primary mt-1" onclick="addToCart(${JSON.stringify(
    product
  )})">Aggiungi al carrello</button></div>
</div>

</div>

`;

    productList.appendChild(productDiv);

    const addToCartButtons = document.querySelectorAll(".addToCartButton");
    addToCartButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const productData = JSON.parse(event.target.dataset.product);
        addToCart(productData);
      });
    });

    const image = productDiv.querySelector(".card-img-top");
    image.addEventListener("click", () => {
      window.location.href = `product.html?id=${product.id}`;
    });
  });
};

getProduct();
dammiLista();
