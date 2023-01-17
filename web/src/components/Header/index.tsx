import { useState } from 'react';
import { Link } from "react-router-dom";
import StyledNav, {
    DesktopMenu,
    HamburgerButton,
    MobileMenu,
} from './styles';

import logo from '../../assets/logo.png';
import iconmenu from '../../assets/icon-menu.png';

export function Header() {
    const [navOpen, setNav] = useState(false);

    return (
        <StyledNav>
            <HamburgerButton className="fas fa-bars" onClick={() => setNav(c => !c)}>
                <img src={iconmenu} alt="icon-menu" width="50" height="50" />
            </HamburgerButton>

            <MobileMenu open={navOpen}>
                <Link to="/home" onClick={() => setNav(false)}>
                    <img src={logo} alt="Logo" width="600" height="400" />
                </Link>
                <Link to="/cats" onClick={() => setNav(false)}>
                    <p>Cats</p>
                </Link>
                <Link to="/dogs" onClick={() => setNav(false)}>
                    <p>Dogs</p>
                </Link>
                <Link to="/clients">
                    <p>Clients</p>
                </Link>
            </MobileMenu>

            <DesktopMenu>
                <Link to="/home">
                    <img src={logo} alt="Logo" width="600" height="400" />
                </Link>
                <Link to="/cats">
                    <p>Cats</p>
                </Link>
                <Link to="/dogs">
                    <p>Dogs</p>
                </Link>
                <Link to="/clients">
                    <p>Clients</p>
                </Link>
            </DesktopMenu>
        </StyledNav>
    );
}
