import React from "react";

export default function Product(props) {
    return (
        <div>
            <div className="ui-product__img" style={{backgroundImage: `url(${props.image})`}}></div>
            <label className="ui-product__name">{props.pname}</label>
            <a target="_blank" rel="noopener noreferrer" href={props.href} className="ui-product__store">{props.pstore}</a>
            <div className="ui-product__price">{props.price}
                <button onClick={props.onClick}>add</button>
            </div>
        </div>
    )
}
