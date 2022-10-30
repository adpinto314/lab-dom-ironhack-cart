// ITERATION 1


function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotalPrice = quantity.value * price.innerText
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = subtotalPrice
  return subtotalPrice

}



function calculateAll() {

  // ITERATION 2
  const products = document.getElementsByClassName("product");
  let total=0;
  let totalDisplay= document.querySelector('#total-value span');

  for (i=0;i < products.length ; i++){
    updateSubtotal(products[i])
    total = total + updateSubtotal(products[i])
  }



  // ITERATION 3

  totalDisplay.innerText = total

}



// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const removeButtons = document.getElementsByClassName("btn btn-remove")
}



// ITERATION 5

function createProduct() {
 /* 
  let newProduct = document.createElement("TR");
  newProduct.setAttribute("class","newProduct");
  document.tbody.appendChild(newProduct);

  let newProductName = document.createElement("TD");
  newProductName.setAttribute("class","name");
  document.newProduct.appendChild(newProductName);

  let newProductNameSpan = document.createElement("span");
  document.newProductName.appendChild(newProductNameSpan);

  let newProductPrice = document.createElement("TD");
  newProductPrice.setAttribute("class","price");
  document.newProduct.appendChild(newProductPrice);

  let newProductPriceSpan = document.createElement("span");
  document.newProductPrice.appendChild(newProductPriceSpan);


  let newProductQuantity = document.createElement("TD");
  newProductQuantity.setAttribute("class","quantity");
  document.newProduct.appendChild(newProductQuantity);

  let newProductQInput = document.createElement("input");
  newProductQInput.setAttribute("type","number");
  newProductQInput.setAttribute("value","0");
  newProductQInput.setAttribute("min","0");
  newProductQInput.setAttribute("placeholder","Quantity");
  document.newProductQuantity.appendChild(newProductQInput);

  let newProductSubtotal = document.createElement("TD");
  newProductSubtotal.setAttribute("class", "subtotal");

  let newProductSubtotalSpan = document.createElement("span");
  document.newProductSubtotal.appendChild(newProductSubtotalSpan);

  let newProductAction = document.createElement("TD");
  newProductAction.setAttribute('class', 'action')
  document.newProduct.appendChild(newProductAction);

  let newProductAbutton = document.createElement("button");
  newProductAbutton.setAttribute("class", "btn btn-remove");
  document.newProductAction.appendChild(newProductAbutton);

  const productInputText = document.querySelector('.prdInputText');
  const productInputNumber = document.querySelector('.prdInputValue');
  const productName = productInputText.value
  const productPrice = productInputNumber.value
  newProductNameSpan.innerText = productName
  newProductPriceSpan.innerText = productPrice
*/
}

createProduct()

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
