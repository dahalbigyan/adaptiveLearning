const request = require('graphql-request').request;
const GraphQLClient = require('graphql-request').GraphQLClient;
const endpoint = `https://api.graph.cool/simple/v1/cje4lfqbv55gk01570mjrcd44`;
const arr = [];

function saveDataToTheGraphCool(data){
  const mutation = `mutation createScorm($content: Json!){
    createScorm(content: $content){
      id
    }
  }
  `;

  const variables = {
    content: data
  }

  request(endpoint, mutation, variables).then(data=>console.log(data)).catch(error=>console.log(error));
};


module.exports = {
  saveDataToTheGraphCool: saveDataToTheGraphCool
};
