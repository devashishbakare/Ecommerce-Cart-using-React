import React from "react";
import CartItem from "./CartItem";
function Cart(props) {
    const {products} = props;
    return (
        <>
           <div className = "cart">
                {products.map( (product) => {
                    return(
                        <CartItem 
                            product = {product}
                            key = {product.id}
                            onIncreaseQuantity = {props.increaseQuantity}
                            onDecreaseQuantity = {props.decreaseQuantity}
                            onDeleteItem = {props.deleteCartItem}
                        />
                    );
                })}
           </div>
        </>
    );
}

export default Cart;