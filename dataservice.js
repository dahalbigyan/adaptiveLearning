const request = require('graphql-request').request;
const GraphQLClient = require('graphql-request').GraphQLClient;
const endpoint = `https://api.graph.cool/simple/v1/cje4lfqbv55gk01570mjrcd44`;
const arr = [];

function saveDataToTheGraphCool(data){
    // console.log(data);
  // const mutation = `{
  //   createScorm($content:Json!){
  //     content: $content
  //   }{
  //     id
  //   };
  // }`;
  //
  // const variables = {
  //   content: JSON.stringify(data)
  // }

  const query = `{
  allMovies{
    id,
    avgRating
  }
}`;
  request(endpoint, query).then(data=>console.log(data)).catch(error=>console.log(error));
};


module.exports = {
  saveDataToTheGraphCool: saveDataToTheGraphCool
};
