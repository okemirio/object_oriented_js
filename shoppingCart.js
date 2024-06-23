// Define the Product class
class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }
  
  // Define the ShoppingCartItem class
  class ShoppingCartItem {
    constructor(product, quantity) {
      this.product = product;
      this.quantity = quantity;
    }
  
    calculateTotalPrice() {
      return this.product.price * this.quantity;
    }
  }
  
  // Define the ShoppingCart class
  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    getTotalItems() {
      return this.items.length;
    }
  
    addItem(product, quantity) {
      const item = new ShoppingCartItem(product, quantity);
      this.items.push(item);
    }
  
    removeItem(productId) {
      this.items = this.items.filter(item => item.product.id !== productId);
    }
  
    displayCartItems() {
      this.items.forEach(item => {
        console.log(`Product: ${item.product.name}, Quantity: ${item.quantity}, Total Price: ${item.calculateTotalPrice()}`);
      });
    }
  
    getTotalCartPrice() {
      return this.items.reduce((total, item) => total + item.calculateTotalPrice(), 0);
    }
  }
  
  // Test the functionality
  
  // Create products
  const product1 = new Product(1, 'Laptop', 1000);
  const product2 = new Product(2, 'Phone', 500);
  const product3 = new Product(3, 'Headphones', 200);
  
  // Create a shopping cart
  const cart = new ShoppingCart();
  
  // Add items to the cart
  cart.addItem(product1, 1);
  cart.addItem(product2, 2);
  cart.addItem(product3, 3);
  
  // Display the cart items
  console.log('Cart Items:');
  cart.displayCartItems();
  console.log(`Total Cart Price: ${cart.getTotalCartPrice()}`);
  
  // Remove an item from the cart
  cart.removeItem(2);
  
  // Display the cart items after removal
  console.log('Cart Items after removal:');
  cart.displayCartItems();
  console.log(`Total Cart Price after removal: ${cart.getTotalCartPrice()}`);
  