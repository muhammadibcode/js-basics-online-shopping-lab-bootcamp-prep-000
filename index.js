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
    for (var i = 0; i != cart.length; i++) {
      console.log(viewMessage + ` ${cart[i].itemName} at ${cart[i].itemPrice},`);
    }

  }
}

addToCart("bananas");

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
