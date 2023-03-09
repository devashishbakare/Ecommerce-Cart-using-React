import React from "react";
import './App.css';
import Cart from "./Cart";
import Nav from "./Nav";
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      products : [
        {
          price : 669,
          title : "Digital Watch",
          quantity : 1,
          img : "https://cdn.shopify.com/s/files/1/0997/6284/products/Side03_900x.png?v=1672316134",
          id : 1 
        }, 
        {
          price : 9999,
          title : "Mobile Phone",
          quantity : 1,
          img : "https://m.media-amazon.com/images/I/71AvQd3VzqL._SX425_.jpg",
          id : 2 
        }, 
        {
          price : 199,
          title : "Book",
          quantity : 10,
          img : "https://m.media-amazon.com/images/I/51kzUUHhMTL.jpg",
          id : 3 
        }
      ]
    }
  }
  increaseQuantity = (product) =>{
    const {products} = this.state;
    const index = products.indexOf(product);

    products[index].quantity += 1;

    this.setState({
      products : products
    });

  }
  decreaseQuantity = (product) => {
    const {products} = this.state;
    const index = products.indexOf(product);
    if(product.quantity === 0) return;
    products[index].quantity -= 1;

    this.setState({
      products : products
    });
    
  }

  deleteCartItem = (product) =>{
    const {products} = this.state;
    const newProducts = products.filter((item) => {
      return item.id !== product.id;
    });
    this.setState({
      products : newProducts
    });
  }

  getCartCount = () => {
    const {products} = this.state;
    let count = 0;
    for(let product of products){
        count += product.quantity;
    }
    return count;
  }
  
  getCartTotal = () => {
    let total = 0;
    const {products} = this.state;
    for(let product of products){
      total += product.quantity * product.price;
    }
    return total;
  }

  render(){
    const {products} = this.state;
    return(
      
      <>
      <div className = "App">
        <Nav count={this.getCartCount()} />
          <Cart 
            products = {products}
            onIncreaseQuantity = {this.increaseQuantity}
            onDecreaseQuantity = {this.decreaseQuantity}
            onDeleteItem = {this.deleteCartItem}
          />
        <div style={ {padding: 10, fontSize: 20} }>TOTAL: {this.getCartTotal()} </div>
      </div>
       
      </>
    );
  }


}

export default App;
