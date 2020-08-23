import React, {Component} from 'react';

class Filter extends Component {
    render() {
        return (
            <div className="ui-filter">
                <input className="ui-input" type="date" onChange={this.props.filterProducts}/>
                <input className="ui-input" type="text" placeholder="Filter by Product or Store" onChange={this.props.filterProducts}/>
            </div>
        );
    }
}

export default Filter;
