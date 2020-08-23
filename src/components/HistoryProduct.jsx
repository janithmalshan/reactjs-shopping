import React from "react";
import Moment from 'react-moment';

export default function HistoryProduct(props) {
    return (
        <div>
            <div className="ui-product__img" style={{backgroundImage: `url(${props.image})`}}></div>
            <div>
                <label className="ui-product__name">{props.pname}</label>
                <a target="_blank" rel="noopener noreferrer" href="//www.google.com" className="ui-product__store">{props.pstore}</a>
            </div>
            <Moment className="ui-date" format="dddd, MMMM Do YYYY, k:mm">{props.date}</Moment>
        </div>
    )
}
