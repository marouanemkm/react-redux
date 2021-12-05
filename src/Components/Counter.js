import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Counter() {

    const [cartData, setCartData] = useState(0);

    const { cart, count } = useSelector(state => ({
        ...state.AddCartReducer,
        ...state.CounterReducer,
    }))

    const dispatch = useDispatch();

    const incrFunc = () => {
        dispatch({
            type: "INCR"
        })
    }

    const decrFunc = () => {
        dispatch({
            type: "DECR"
        })
    }

    const addToCartFunc = () => {
        dispatch({
            type: "ADDCART",
            payload: cartData,
        })
    }

    return (
        <div>
            <h1>Votre panier : {cart} {count} </h1>
            {/* <button onClick={decrFunc}>-1</button> */}
            {/* <button onClick={incrFunc}>+1</button> */}
            <input
                type="number"
                value={cartData}
                onInput={e => setCartData(e.target.value)}
            />
            <br />
            <button onClick={addToCartFunc}>Ajouter au panier</button>
        </div>
    );
};