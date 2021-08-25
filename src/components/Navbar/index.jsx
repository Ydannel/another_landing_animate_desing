import {Nav, NavbarContainer, LogoNav, NavMenu, NavItem, NavLinks, MobileIcon, Navbtn, NavbtnLink} from './styles'
import {FaBars} from 'react-icons/fa'
const Navbar = () => {
    return ( 
        <>
            <Nav>
                <NavbarContainer>
                    <LogoNav to='/'>Carnibal fantasy</LogoNav>
                    <MobileIcon>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='discover'>Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services'>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='singup'>Sing Up</NavLinks>
                        </NavItem>
                    </NavMenu>
                   <Navbtn>
                         <NavbtnLink to='/singin'>Sing In</NavbtnLink>
                    </Navbtn> 
                </NavbarContainer>
            </Nav>
        </>
     );
}
 
export default Navbar;