import React from "react";
import data from '../history';
import HistoryProducts from "./HistoryProducts";
import Filter from "./Filter";

export class ListHistory extends React.Component {
    constructor() {
        super();
        this.state = {
            products: data.products,
            pname: "",
            filter: ""
        }
    }

    filterProducts = (event) => {
        const filterKey = event.target.value;
        const filterDate = this.formatDate(filterKey);
        console.log(filterDate);
        console.log(filterKey);
        this.setState({filter:filterKey})
            if(filterKey == null || filterKey === '') {
                this.setState((state) =>({
                    products: data.products
                }))
            } else {
                this.setState((state) =>({
                    filter: filterKey,
                    products: data.products.filter((product)=>product.pname.toLowerCase().includes(filterKey.toLowerCase()) || product.pstore.toLowerCase().includes(filterKey.toLowerCase()) ||
                    this.formatDate(product.datetime) === filterDate)
                }))
            }
    }

    formatDate(string){
        return new Date(string).toLocaleDateString();
    }



    // sortProducts = (event) => {
    //     const sort = event.target.value;
    //     this.setState((state) => ({
    //         sort: sort,
    //         products: this.state.products
    //             .slice()
    //             .sort((a, b) =>
    //             sort === "lowest"
    //                 ? a.price > b.price
    //                 ? 1 : -1
    //             : sort === "highest"
    //                 ? a.price < b.price
    //                     ? 1 : -1
    //                 :a._id > b._id
    //                 ? 1 : -1
    //         ),
    //     }))
    // };

    render() {
        return (
            <div>
                <Filter filterProducts={this.filterProducts}></Filter>
                <HistoryProducts products={this.state.products}></HistoryProducts>
            </div>
        )
    }
}
