import * as React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    padding: 3rem;

    @media ( min-width: 768px ) {
        padding: 0;
    }
`;

const NavLink = styled( Link )`
    color: #fffffe;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1;
    text-decoration: none;
    padding: 1rem;
    margin-right: 1rem;
    text-transform: uppercase;

    &:last-of-type: {
        margin: 0;
    }

    &.current-page {
        border-bottom: 2px solid #f25f4c;
    }
`;

const Navigation = () => {

    return (
        <Nav>
            <NavLink    to="/"
                        activeClassName="current-page"> 
                Inicio 
            </NavLink>

            <NavLink    to="/about-us"
                        activeClassName="current-page"> 
                Nosotros 
            </NavLink>
        </Nav>
    )
}

export default Navigation;