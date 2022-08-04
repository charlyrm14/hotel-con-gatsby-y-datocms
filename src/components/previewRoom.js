import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "gatsby";


const Button = styled( Link )`
    margin-top: 2rem;
    padding: 1rem;
    background-color: #ff8906;
    width: 100%;
    color: #fffffe;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
`;


const PreviewRoom = ( { room } ) => {

    const { title, slug, content, image } = room;

    return (
        <div css={ css`
            background-color: #0f0e17;
            border: 1px solid #0f0e17;
            margin-bottom: 2rem;
        `}>

            <GatsbyImage image={ image.gatsbyImageData } alt={ title }/>


            <div css={ css`
                padding: 1.5rem;
            `}>
                <h3 css={ css`
                    text-align: center;
                    color: #fffffe;
                    text-transform: uppercase;
                `}> 
                    { title } 
                </h3>

                <p css={ css`
                    color: #a7a9be;
                `}>
                    { content }
                </p>

                <Button to={ slug }>
                    Ver habitación
                </Button>
            </div>
        </div>
    )
}

export default PreviewRoom;