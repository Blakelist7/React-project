import React from 'react'
import {Nav, NavLink,Bars,NavMenu,NavBtn,NavBtnLink} from './NavbarElements'
import mainlogo from '../../images/logo.png';


const Navbar = () => {
    return (
        <>
           <Nav>
             <NavLink to="/">
                 <img src={mainlogo} alt="logo" />
             </NavLink>
             <Bars />
             <NavMenu>
                 <NavLink to="/Services" activeStyle>
                     Services
                 </NavLink>
                 <NavLink to="/Product" activeStyle>
                     Product
                 </NavLink>
                 <NavLink to="/Technology" activeStyle>
                     Technology
                 </NavLink>
                 <NavLink to="/About" activeStyle>
                     About
                 </NavLink>
                 <NavLink to="/Client" activeStyle>
                     Client
                 </NavLink>
                 <NavLink to="/Partner" activeStyle>
                     Partner
                 </NavLink>
             </NavMenu>
             <NavBtn>
                 <NavBtnLink to='/signin'>Sign in</NavBtnLink>
             </NavBtn>
            </Nav> 
        </>
    )
}

export default Navbar;