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

  // const query = `{
  //   allMovies{
  //     id,
  //     avgRating
  //   }
  // }`;

  // const query = `{
  //   Movie(id:"cje9c5o5rcakg0119pspv1zke"){
  //     id,
  //     avgRating
  //   }
  // }`

  // const query = `{
  //   Movie(description:"Shutter Island"){
  //     id,
  //     avgRating
  //   }
  // }`


  // const query = `query getMovie($id: ID!){
  //   Movie(id: $id){
  //     id,
  //     avgRating
  //   }
  // }
  // `;
  //
  // const variables = {
  //   id: "cje9c5o5rcakg0119pspv1zke"
  // }

  const mutation = `mutation createScorm($content: String!){
    createScorm(content: $content){
      id
    }
  }
  `;

  const variables = {
    content: "Hello"
  }

  request(endpoint, mutation, variables).then(data=>console.log(data)).catch(error=>console.log(error));
};


module.exports = {
  saveDataToTheGraphCool: saveDataToTheGraphCool
};
