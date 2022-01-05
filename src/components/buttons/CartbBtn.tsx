import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const CartBtn = () => {
    // We get a state of addItems
    // Write the name of the file not the function
    const state = useSelector((state:any)=> state.addItem);
    return (
        <>
            <NavLink to="/cart" className="btn btn-outline-primary ms-2">
                <span className="fa fa-shopping-cart me-1"></span> Cart ({state.length})
            </NavLink>
        </>
    )
}

export default CartBtn
