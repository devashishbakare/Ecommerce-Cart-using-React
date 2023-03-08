import React from "react";
import './App.css';
import Cart from "./Cart"

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      products : [
        {
          price : 669,
          title : "Digital Watch",
          quantity : 1,
          img : "",
          id : 1 
        }, 
        {
          price : 9999,
          title : "Mobile Phone",
          quantity : 1,
          img : "",
          id : 2 
        }, 
        {
          price : 199,
          title : "Book",
          quantity : 10,
          img : "",
          id : 3 
        }
      ]
    }
  }
  increaseQuantity = (product) =>{
    const {products} = this.state;
    const index = products.indexOf(product);

    products[index].quantity += 1;

    this.setState((oldState) => {
      return {
        quantity : product[index].quantity
      }
    });

  }
  decreaseQuantity = (product) => {
    const {products} = this.state;
    const index = products.indexOf(product);

    products[index] -= 1;

    this.setState({
      products : products
    });
    
  }

  deleteCartItem = (product) =>{
    const {products} = this.state;
    const newProducts = products.filter((item) => {
      return item.id != item;
    });
    this.setState({
      products : newProducts
    });
  }


  render(){
    const {products} = this.state;
    return(
      //I need cart where I can put all my cartIem
      <>
        <Cart 
          products = {products}
          onIncreaseQuantity = {this.increaseQuantity}
          onDecreaseQuantity = {this.decreaseQuantity}
          onDeleteItem = {this.deleteCartItem}
        />
      </>
    );
  }


}

export default App;
