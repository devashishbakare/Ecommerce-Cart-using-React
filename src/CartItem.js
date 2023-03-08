import React from "react";

class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            price : 9999,
            title : "Mobile Phone",
            quantity : 1,
            img : '',
            number : 1
        }
      

    }
   
  

    increaseQuantity = () => {
        //first form 
        // this.setState({
            
        //     quantity : this.state.quantity +1
        // });
        
        //second form 
        this.setState((oldState) => {
            return {
                quantity : oldState.quantity + 1
            }
        });
        console.log(this.state.quantity);
    }

    decreaseQuantity = () => {
        if(this.state.quantity > 0){
            this.setState((preState) => {
                return{
                    quantity : preState.quantity - 1
                }
        });
        }
        
    }

    render(){
        const {price, title, quantity} = this.state;
        return(
            <>
                <div className="cart-item">
                    <div className="left-block">
                    <img 
                    src = "https://media.wired.com/photos/62d75d34ddaaa99a1df8e61d/3:2/w_2400,h_1600,c_limit/Phone-Camera-Webcam-Gear-GettyImages-1241495650.jpg"
                    style={styles.image} />
                    </div>
                    <div className="right-block">
                    <div style={ { fontSize: 25 }  }>{title}</div>
                    <div style={ { color: '#777', textAlign : "left"} }>Rs {price} </div>
                    <div style={ { color: '#777', textAlign : "left" } }>Qty: {quantity} </div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img
                        alt="increase"
                        className="action-icons"
                        src="https://cdn-icons-png.flaticon.com/512/4315/4315609.png"
                        onClick={this.increaseQuantity}
                        />
                        <img
                        alt="decrease"
                        className="action-icons"
                        src="https://cdn-icons-png.flaticon.com/512/2569/2569198.png"
                        onClick={this.decreaseQuantity}
                        />
                        <img
                        alt="delete"
                        className="action-icons"
                        src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png"
                        />
                    </div>
                    </div>
                </div>
            </>
        );
    }
}

const styles = {
    image : {
        height : 110, 
        width : 110,
        borderRadius : 4,
        background : "#ccc"
    }
}

export default CartItem;