import React, {Component, lazy, Suspense} from 'react';
const HistoryProduct = lazy(() => import('./HistoryProduct'));

class HistoryProducts extends Component {
    render() {
        return (
            <div className="ui-history">
                <ul className="ui-products">
                    {this.props.products.map(product => (
                        <li key={product._id} className="ui-product">
                            <Suspense fallback={<h1 className="ui-loading">loading...</h1>}>
                                <HistoryProduct
                                    image={product.image}
                                    pname={product.pname}
                                    pstore={product.pstore}
                                    date={product.datetime}
                                    />
                            </Suspense>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default HistoryProducts;
