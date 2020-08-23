import React from "react";
import data from '../data';
import Products from "./Products";
import Cart from "./Cart";

export class ListShopping extends React.Component {
    constructor() {
        super();
        this.state = {
            products: data.products,
            cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
            sort: "",
            pname: ""
        }
    }

    createOrder = (order) => {
        alert('let')
    }

    addToCart = (product) => {
        const cartItems = this.state.cartItems.slice();
        let alreadyInCart = false;
        cartItems.forEach(item => {
            if (item._id === product._id) {
                item.count++;
                alreadyInCart = true;
            }
        });
        if (!alreadyInCart) {
            cartItems.push({...product, count: 1})
        }
        this.setState({cartItems});
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }

    removeFromCart = (product) => {
        const cartItems = this.state.cartItems.slice();
        this.setState({
            cartItems: cartItems.filter((x) => x._id !== product._id),
        });
        localStorage.setItem("cartItems", JSON.stringify(cartItems.filter((x) => x._id !== product._id)));
    }

    sortProducts = (event) => {
        const sort = event.target.value;
        this.setState((state) => ({
            sort: sort,
            products: this.state.products
                .slice()
                .sort((a, b) =>
                    sort === "lowest"
                        ? a.price > b.price
                        ? 1 : -1
                        : sort === "highest"
                        ? a.price < b.price
                            ? 1 : -1
                        : a._id > b._id
                            ? 1 : -1
                ),
        }))
    };

    render() {
        return (
            <div className="ui-shopping-wr">
                <div>
                    <h1>{this.props.count}</h1>
                    <div>sort {""}
                        <select value={this.state.sort} onChange={this.sortProducts}>
                            <option value="latest">Latest</option>
                            <option value="lowest">Lowest</option>
                            <option value="highest">Highest</option>
                        </select>
                    </div>
                    <Products products={this.state.products} addToCart={this.addToCart}></Products>
                </div>
                <div className="ui-shopping-cart">
                    <h1>Cart</h1>
                    <Cart cartItems={this.state.cartItems}
                          removeFromCart={this.removeFromCart}
                    />
                </div>
            </div>
        )
    }
}
