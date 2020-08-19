import React from "react";
import data from '../data';
import Products from "./Products";

export class ListShopping extends React.Component {
    constructor() {
        super();
        this.state = {
            products: data.products,
            sort: ""
        }
    }
    render() {
        return (
            <div>hi
                <Products products={this.state.products}></Products>
            </div>
        )
    }
}
