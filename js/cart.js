
 const button = document.querySelectorAll(".btn-small")
 console.log(button);

 const shoppingCart = document.querySelector("#cart");
console.log(shoppingCart);

 const products = document.querySelectorAll(".cards")
 console.log(products);


button.forEach(function (button) {
  button.onclick = function(event) {
    console.log(event.target.dataset);
  }
  
})
  
