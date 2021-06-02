import React from 'react'


const Header = (props) => {
    return (

        <header>
            <h2>this is a massive test {props.title}</h2>
            
        </header>
    )
}

// css in js
/* 
const headerStyle = {
    color: 'red', 
    backgroundColor: 'black'
}
*/

Header.defaultProps = {
    title: 'default title'
}

export default Header