import React from "react";
import Cart from "./Cart";
import PropTypes from 'prop-types';

export default function CartList({items}) {
    return (
        <div className="cart-box">
            {items.map(item => <Cart key={item.id} item={item} />)}
        </div>
    );
}

CartList.propTypes = {
    items:PropTypes.array.isRequired
}

CartList.defaultProps = {
    items: []
}