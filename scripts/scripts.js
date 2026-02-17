const products = () => {
    fetch('https://fakestoreapi.com/products/categories')
    .then(res => res.json())
    .then(data => productsLoad(data))
}

const productsLoad = (products) => {
    const showProduct = document.getElementById("showProduct");
    // showProduct.innerHTML = "";

   products.forEach(product => {
    const loadBtn = document.createElement("div");
        // console.log(product)
        loadBtn.innerHTML = `
            <button onclick="levelProduct(\`${product}\`)" class="btn btn-neutral btn-outline rounded-2xl"> ${product}</button>
        `;
        showProduct.append(loadBtn);
    });
}


products();