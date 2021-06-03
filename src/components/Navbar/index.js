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
                <NavLink to="/">
                    <h1>StockViewer</h1>
                </NavLink>

                <Bars />

                <NavMenu>
                    <NavLink to="/Main" activeStyle>
                        My Stocks
                    </NavLink>
                    <NavLink to="/Search" activeStyle>
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