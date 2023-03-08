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
                            onIncreaseQuantity = {this.increaseQuantity}
                            onDecreaseQuantity = {this.decreaseQuantity}
                            onDeleteItem = {this.deleteCartItem}
                        />
                    );
                })}
           </div>
        </>
    );
}

export default Cart;