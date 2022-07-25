let items = [
  {
    name: "T-Shirt",
    price: 10,
    image:
      "https://interactive-examples.mdn.mozilla.net/media/examples/firefox-logo.svg",
  },
  {
    name: "Special Hoodie",
    price: 29,
    image:
      "https://interactive-examples.mdn.mozilla.net/media/examples/firefox-logo.svg",
  },
  {
    name: "420 Sticker",
    price: 2,
    image:
      "https://interactive-examples.mdn.mozilla.net/media/examples/firefox-logo.svg",
  },
  {
    name: "Mate-Mug",
    price: 8,
    image:
      "https://interactive-examples.mdn.mozilla.net/media/examples/firefox-logo.svg",
  },
];

let cart = [];

let list = document.querySelector("#items");

items.forEach((item, i) => {
  list.innerHTML += `<li>
  <div>Name: ${item.name}</div>
  <div>Price: $${item.price}</div>
  <input type="number" placeholder="quantity" onchange='inputChange(${i}, "${item.name}", "${item.price}", "${item.image}" )' />
  <img src="${item.image}" />
  <button>BuyMe</button>
  </li>`;
});

function showCart() {
  let cartItems = document.querySelector("#cart");
  let cartSumTotal = 0;
  cartItems.innerHTML = "";
  cart.forEach((item, i) => {
    cartSumTotal += item.price * item.quantity;
    cartItems.innerHTML += `<li>
    <div>Name: ${item.name}</div>
    <div>Quantity: ${item.quantity}</div>
   <!--<div>Price: ${item.price}</div> -->
    <img src="${item.image}" />
    </li>`;
  });
  document.querySelector("#cartSumTotal").innerHTML = "$" + cartSumTotal;
}

function inputChange(i, name, price, image) {
  console.log("I want to buy the ", i, "item name", name, "that costs", price);
  let listItem = document.querySelectorAll("li")[i];
  let input = listItem.querySelector("input");
  let button = listItem.querySelector("button");

  button.onclick = function () {
    cart.push({
      quantity: input.value,
      name: name,
      price: price,
      image: image,
    });
    console.log(cart);
    showCart();
  };
}
