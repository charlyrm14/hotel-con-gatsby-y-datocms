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
 
const Footer = ( { title } ) => {

    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer
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

                    <Navigation/>
                    
                    <LinkHome to="/"> 
                        <h1> { title } </h1>
                    </LinkHome>
    
                </div>

            </footer>

            <p css={ css`
                text-align: center;
                text-transform: uppercase;
                background-color: #0f0e17;
                padding: 2rem;
                color: #fffffe;
                margin: 0;
            `}>
                { title } - Todos los derechos reservados { currentYear } &copy;
            </p>
        </>
    );
}

export default Footer;