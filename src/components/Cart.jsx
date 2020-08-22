import React, {Component} from 'react';
import formatCurrency from "../util";

class Cart extends Component {
    render() {
        const {cartItems} = this.props
        return (
            <div>
                {cartItems.length === 0 ? (<p>Cart is empty</p>) : (<p>{cartItems.length} in the cart{" "}</p>)}
                <div className="ui-cart">
                    <ul>
                        {cartItems.map(item => (
                            <li key={item._id} className="ui-cart__item">
                                <img src={item.image} alt={item.pname}/>
                                <p>{item.pname}</p>
                                <p>{formatCurrency(item.price)} X {item.count}</p>
                                <button onClick={() => this.props.removeFromCart(item)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <h1>{formatCurrency(cartItems.reduce((a, c) => a + c.price * c.count, 0))}</h1>
                <button>Checkout</button>
            </div>
        );
    }
}

export default Cart;
