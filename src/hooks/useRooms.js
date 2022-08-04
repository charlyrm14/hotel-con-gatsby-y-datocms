import { graphql, useStaticQuery } from "gatsby";

const useRooms = () => {

    const data = useStaticQuery( graphql`
    query {
        allDatoCmsRoom {
            nodes {
                id
                title
                slug
                content
                image {
                    gatsbyImageData 
                }
            }
        }
    }
    `);

    return data.allDatoCmsRoom.nodes.map( room => ({
        id:         room.id,
        title:      room.title,
        slug:       room.slug,
        content:    room.content,
        image:      room.image
    }));

}

export default useRooms;