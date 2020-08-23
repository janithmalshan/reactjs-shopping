import React, {Component} from 'react';
import formatCurrency from "../util";

class Cart extends Component {
    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    render() {
        const {cartItems} = this.props
        return (
            <div>
                {cartItems.length === 0 ? (<p className="ui-cart-info">Cart is empty</p>) : (
                    <span>
                    <div className="ui-cart-checkout">
                        <h2>{formatCurrency(cartItems.reduce((a, c) => a + c.price * c.count, 0))}</h2>
                        <button className="ui-checkout">Checkout</button>
                    </div>
                    <p className="ui-cart-info">{cartItems.length} in the cart</p>
                    </span>)}
                <div className="ui-cart">
                    <ul>
                        {cartItems.map(item => (
                            <li key={item._id} className="ui-cart__item">
                                <div className="ui-cart__item-img" style={{backgroundImage: `url(${item.image})`}}/>
                                <p className="ui-cart__item-name">{item.pname}</p>
                                <p className="ui-cart__item-price">{formatCurrency(item.price)} X {item.count}</p>
                                <button className="ui-cart__item-btn"
                                        onClick={() => this.props.removeFromCart(item)}>Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Cart;
