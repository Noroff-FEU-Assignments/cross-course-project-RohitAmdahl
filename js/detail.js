


 import { productsArray } from "/js/product.js"
 console.log(productsArray);



// const url =  product.html?id=123;


const linkCards = document.getElementById("detailsContainer");


 const url = "http://127.0.0.1:5501/products/product.js?id=123";
 console.log(url);
const params = new URLSearchParams(queryString);
console.log(params);
const id = params.get("id");
console.log(id);

// const product = products.find(product => product.id === id)
// console.log(product);

async function fetchData() {
  const response = await fetch( url);
  const link = await response.json();
console.log(link);

const property = all;
console.log(property);





  
}




fetchData()