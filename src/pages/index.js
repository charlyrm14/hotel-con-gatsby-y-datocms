import * as React from "react";
import Layout from "../components/layout";
import ImageHotel from "../components/imageHotel";
import ContentHome from "../components/contentHome";
import PreviewRoom from "../components/previewRoom";
import useRooms from "../hooks/useRooms";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const RoomsList = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;

  @media ( min-width: 768px ) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }
`;


const IndexPage = () => {

  const rooms = useRooms();

  return(
    <Layout>

      <ImageHotel/>

      <ContentHome/>

      <h2 css={ css`
        text-align: center;
        margin-top: 5rem;
        font-size: 3rem;
        text-transform: uppercase;
      `}> 
        Nuestras habitaciones 
      </h2>

      <RoomsList>
        {
          rooms.map( room => (
            <PreviewRoom key={ room.id } room={ room }/>
          ))
        }
      </RoomsList>

    </Layout>
  );

}

export default IndexPage
