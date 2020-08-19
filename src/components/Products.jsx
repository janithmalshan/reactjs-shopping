import React, {Component} from 'react';
import formatCurrency from "../util";

class Products extends Component {
    render() {
        return (
            <div>
                <ul className="ui-products">
                    {this.props.products.map( product => (
                        <li key={product._id}>
                            {product.title}
                            <a href={"#" + product._id}>d</a>
                            <h1>{formatCurrency(product.price)}</h1>
                            <button>add</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Products;
