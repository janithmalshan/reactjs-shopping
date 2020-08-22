import React, {Component, lazy, Suspense} from 'react';
import formatCurrency from "../util";
const Product = lazy(() => import('./Product'));

class Products extends Component {
    render() {
        return (
            <div>
                <ul className="ui-products">
                    {this.props.products.map(product => (
                        <li key={product._id} className="ui-product">
                            <Suspense fallback={<h1 className="ui-loading">loading...</h1>}>
                                <Product
                                    image={product.image}
                                    pname={product.pname}
                                    pstore={product.pstore}
                                    href={"#" + product._id}
                                    price={formatCurrency(product.price)}/>
                            </Suspense>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Products;
