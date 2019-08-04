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
    return "Your shopping cart is empty.";
        } else {
    var viewMessage = "In your cart, you have";
    // i will always represent the index of cart.
    for (var i = 0; i != cart.length; i++) {
      // cart.length - 1 will be the final index of the cart.
      if (i == cart.length - 1) {
        if (i == 0) {
          viewMessage = viewMessage + ` ${cart[i].itemName} at $${cart[i].itemPrice}.`;
        } else {
          viewMessage = viewMessage + ` and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
        }
      } else {
        viewMessage = viewMessage + ` ${cart[i].itemName} at $${cart[i].itemPrice},`;
      }
    }
    return viewMessage;
  }
}

function total() {
  var total = 0;
  for (var i = 0; i != cart.length; i++) {
     total = total + cart[i].itemPrice;
   }
   return total;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
