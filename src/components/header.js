import * as React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Navigation from "./nav";
import { Link } from "gatsby";

const LinkHome = styled( Link )`
    color: #fffffe;
    text-align: center;
    text-decoration: none;
`;
 
const Header = () => {

    return (
        <header
            css={ css`
                background-color: #0f0e17;
                padding: 1rem;
                color: #fffffe;
            ` } >

            <div css={ css`
                max-width: 1200px;
                margin: 0 auto;

                @media ( min-width: 768px ) {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
            `} >
                <LinkHome to="/"> 
                    <h1> Hotel Gatsby </h1>
                </LinkHome>

                <Navigation/>

            </div>

        </header>
    );
}

export default Header;