fetch("https://dummyjson.com/products")
.then((response)=>response.json())
.then((data)=>{
    // console.log(data);
    let products = data.products;
    console.log("products",products)
    let divCard = document.getElementById('card');
    console.log(divCard);
    
    let cardData = "";
    products.map((product)=>{
        let image = product.images
       cardData += `<div class="card" style="width: 18rem;">
       <img src= "${image[0]}" class="card-img-top" height = "250px" width = "200px" alt="...">
        <div class="card-body">
          <h5 class="card-title">Title: ${product.title}</h5>
          <p class="card-text brand">Brand :${product.brand}</p>
          <p class="card-text price"> Price: $ ${product.price}</p>
          <p class="card-text rating">Rating: ${product.rating}</p>
          <p class="card-text stock">Stock: ${product.stock}</p>    
        </div> </div><br>`

        divCard.innerHTML = cardData;

    })

})
