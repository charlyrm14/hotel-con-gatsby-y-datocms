exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
  query {
    allDatoCmsRoom {
      nodes {
        slug
      }
    }
  }
  `);

  if ( result.errors ) {
    reporter.panic('Sin resultados' + result.errors );
  }

  const rooms = result.data.allDatoCmsRoom.nodes;

  rooms.forEach( room => {

    createPage({
      path: room.slug,
      component: require.resolve("./src/components/rooms.js"),
      context: {
        slug: room.slug
      },
      defer: true,
    });

  });


}
