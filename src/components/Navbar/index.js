import React from 'react'
import {
    Nav,
    NavLink,
    Bars, 
    NavMenu,
    NavBtn,
    NavBtnLink
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/" activeStyle>
                    <h1>StockViewer</h1>
                </NavLink>

                <Bars />

                <NavMenu>
                    <NavLink to="/home1" activeStyle>
                        My Stocks
                    </NavLink>
                    <NavLink to="/secondary" activeStyle>
                        Search
                    </NavLink>   
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>
                        Sign In
                    </NavBtnLink>
                </NavBtn>

            </Nav>
        </>
    )
}

export default Navbar