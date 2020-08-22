import React from "react";
import data from '../data';
import Products from "./Products";
import Filter from "./Filter";

export class ListHistory extends React.Component {
    constructor() {
        super();
        this.state = {
            products: data.products,
            sort: "",
            pname: "",
            filter: ""
        }
    }

    filterProducts = (event) => {
        const filterKey = event.target.value;
        console.log(filterKey);
        this.setState({filter:filterKey})
            if(filterKey == null || filterKey === '') {
                this.setState((state) =>({
                    products: data.products
                }))
            } else {
                this.setState((state) =>({
                    filter: filterKey,
                    products: data.products.filter((product)=>product.pname.toLowerCase().includes(filterKey.toLowerCase()) || product.pstore.toLowerCase().includes(filterKey.toLowerCase()))
                }))
            }

            /*else if(data.pname.toLowerCase().includes(filterKey.toLowerCase()) || data.pstore.toLowerCase().includes(filterKey.toLowerCase())){
                return data
            }*/
        // this.state.pname.filter(d => this.state.filter === '' || d.includes(this.state.filter))

        // if (filter === "") {
        //     this.setState({pname: event.target.value, product: data.products});
        //     console.log('if d')
        // } else {
        //     this.setState({
        //         pname: event.target.value,
        //         products: data.products.filter(
        //             (product) => product.pname(event.target.value) >= 0
        //         ),
        //     })
        //     console.log('els')
        // }
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
                    :a._id > b._id
                    ? 1 : -1
            ),
        }))
    };

    render() {
        return (
            <div>
                <Filter count={this.state.products.length}
                        sort={this.state.sort}
                        filterProducts={this.filterProducts}
                        sortProducts={this.sortProducts}></Filter>
                <Products products={this.state.products}></Products>
            </div>
        )
    }
}
