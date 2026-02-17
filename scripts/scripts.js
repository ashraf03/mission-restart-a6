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

const levelProduct = (category) => {
    // console.log(category);
    fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then(res => res.json())
    .then(data => levelProductShow(data))
}

const allProduct = async () => {

    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    allLevelProductShow(data);   
};

const allLevelProductShow = (products) => {

    const containerProduct = document.getElementById("containerProduct");

    products.forEach(ele => {

        const productDetails = document.createElement("div");

        productDetails.innerHTML = `
            <div class="space-y-5">
                <img src="${ele.image}" alt="" class="w-[300px]">
                
                <div class="flex justify-between">
                    <span>${ele.category}</span>
                    <span>
                        <i class="fa-regular fa-star"></i> ${ele.rating.rate}
                    </span>
                </div>

                <h2>${ele.title}</h2>
                <span>$${ele.price}</span>

                <div class="flex justify-between">
                    <button class="btn btn-soft">Default</button>
                    <button class="btn btn-primary">Primary</button>
                </div>
            </div>
        `;

        containerProduct.append(productDetails);
    });
};
const levelProductShow = (productShow) => {
    const containerProduct = document.getElementById("containerProduct")
    // containerProduct.innerHTML = "";
    
    productShow.forEach(ele => {
        const productDetails = document.createElement("div");
        console.log(productDetails)
        productDetails.innerHTML = `
                <div class="space-y-5">
        <img src="${ele.image}" alt="" class="w-[300px]">
        <div class="flex justify-between">
          <span>${ele.category}</span>
          <span><i class="fa-regular fa-star"></i> ${ele.rating.rate}</span>
        </div>
        <h2>Men's cotton Jens</h2>
        <span>${ele.price}</span>
        <div class="flex justify-between">
          <button class="btn btn-soft">Default</button>
          <button class="btn btn-primary">Primary</button>
        </div>
      </div>
        `;
    containerProduct.append(productDetails)
    });
}

levelProduct()
products();