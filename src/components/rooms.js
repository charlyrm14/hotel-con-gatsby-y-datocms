import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "./layout";
import { css } from "@emotion/react";

export const query = graphql`
    query($slug: String!) {
        allDatoCmsRoom(filter: { slug: { eq: $slug} }) {
            nodes {
                title
                content
                image {
                    gatsbyImageData
                }
            }
        }
    }
`; 

const TemplateRoom = ( { data } ) => {

    const { title, content, image } = data.allDatoCmsRoom.nodes[0];

    return (
        <Layout>
            <main css={ css`
                margin: 0 auto;
                max-width: 1200px;
                width: 95%;
            `}>
                <h1 css={ css`
                    text-align: center;
                    margin-top: 4rem;
                    text-transform: uppercase;
                `}> 
                    { title } 
                </h1>
                <p> { content } </p>
                <GatsbyImage image={ image.gatsbyImageData } alt={ title } css={ css` margin-bottom: 4rem;`}/>
            </main>
        </Layout>
    );
}

export default TemplateRoom;