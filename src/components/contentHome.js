import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const HomeText = styled.div`
    padding-top: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;

    @media ( min-width: 768px ) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }

    p {
        line-height: 2;
    }
`;


const ContentHome = () => {

    const information = useStaticQuery( graphql`
    query {
        allDatoCmsPage(filter: { slug: { eq: "home"} } ) {
            nodes {
                title
                content
                image {
                    gatsbyImageData
                }
            }
        }
    }
    `);

    const { title, content, image } = information.allDatoCmsPage.nodes[0];

    return (
        <>
            <h2 css={ css`
                text-align: center;
                font-size: 4rem;
                margin-top: 4rem;
                text-transform: uppercase;
            `}> 
                { title } 
            </h2>

            <HomeText>
                <p>
                    { content }
                </p>

                <GatsbyImage image={ image.gatsbyImageData } alt={ title }/>
            </HomeText>

        </>
    )
}

export default ContentHome;