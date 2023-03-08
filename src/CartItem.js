function CartItem(props){

    const { price, title, quantity, img, id} = props.product;
    const {product, onIncreaseQuantity, onDecreaseQuantity, onDeleteItem} = props;

    return (
        <>
         <div className="cart-item">
      
            <div className="left-block">
                <img style={styles.image} src={product.img} />
            </div>
            
            <div className="right-block">
                
                <div style={ { fontSize: 25 } }>{title}</div>
                <div style={ { color: '#777' } }>Rs {price} </div>
                <div style={ { color: '#777' } }>Qty: {quantity} </div>
                
                <div className="cart-item-actions">
                {/* Buttons */}
                
                <img
                    alt="increase"
                    className="action-icons"
                    src="https://cdn-icons-png.flaticon.com/512/4315/4315609.png"
                    onClick = { () => onIncreaseQuantity(product)}
                />
                <img
                    alt="decrease"
                    className="action-icons"
                    src="https://cdn-icons-png.flaticon.com/512/4315/4315581.png"
                    onClick = { () => onDecreaseQuantity(product)}
                />
                <img
                    alt="delete"
                    className="action-icons"
                    src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png"
                    onClick = {() => onDeleteItem(product)}
                />

                </div>

            </div>

            </div>   
        </>
    );
}


const styles = {
    image: {
      height: 110,
      width: 110,
      borderRadius: 4,
      background: '#ccc'
    }
  }

export default CartItem;