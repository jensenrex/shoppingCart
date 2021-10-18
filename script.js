let shop = [
  { "product": "Berimbau", "image": "img/berimbau.jpeg", "id": 1, count: 1 },
  { "product": "Uniform Tshirt Padrão", "image": "img/shirt1.png", "id": 1, count: 1 },
  { "product": "Uniform Tshirt Redondo", "image": "img/shirt2.png", id": 1, count: 1 },
];

let cart = [];

function appendNode(parent, element) {
  parent.appendChild(element); 
}; 

function getDiv(container) {
  return document.getElementById(container);
}; 

function createNode(node) {
  let element = document.createElement(node); 
  return element; 
}; 

function displayProducts(product, container) {
 let items_container = getDiv(container);
 items_container.innerHTML = '';
}

