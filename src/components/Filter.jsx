import React, {Component} from 'react';

class Filter extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.count}</h1>
                <div>sort {""}
                    <select value={this.props.sort} onChange={this.props.sortProducts}>
                        <option value="latest">Latest</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>
                    </select>
                </div>
                <div>filter {""}<select>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select><input onChange={this.props.filterProducts}/></div>
            </div>
        );
    }
}

export default Filter;
