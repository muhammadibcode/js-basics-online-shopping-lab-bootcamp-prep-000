var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function randomisePrice() {
  return Math.floor(Math.random() * 99) + 1;
}

function addToCart(item) {
  var itemTag = {};
  itemTag["itemName"] = item;
  itemTag["itemPrice"] = randomisePrice();
  cart.push(itemTag);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
        } else {
    viewMessage = "In your cart, you have";
    // i will always represent the index of cart.
    for (var i = 0; i != cart.length; i++) {
      // cart.length - 1 will be the final index of the cart.
      if (i == cart.length - 1) {
        if (i == 0) {
          console.log(viewMessage + ` ${cart[i].itemName} at ${cart[i].itemPrice}.`);
          console.log(viewMessage);
        } else {
          console.log(viewMessage + ` and ${cart[i].itemName} at ${cart[i].itemPrice}.`);
        }
      } else {
        console.log(viewMessage + ` ${cart[i].itemName} at ${cart[i].itemPrice},`);
      }
    }
  }
}

addToCart("bananas");

addToCart("pears");

viewCart();

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
