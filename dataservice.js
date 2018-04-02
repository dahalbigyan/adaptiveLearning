const request = require('graphql-request').request;
const GraphQLClient = require('graphql-request').GraphQLClient;
const endpoint = `https://api.graph.cool/simple/v1/cje4lfqbv55gk01570mjrcd44`;
const arr = [];

function getUseridAndContent(data){
  const actorLength = data.actor.name.length;
  actorid = data.actor.name.slice(actorLength-25, actorLength);
  const actorname = data.actor.name.slice(0, actorLength-25);
  const responseObjectAfterIdRemoval={...data};
  responseObjectAfterIdRemoval.name = actorname;
  return {responseObjectAfterIdRemoval, actorid};
};

function saveDataToTheGraphCool(data
  const mutation = `mutation createScorm($content: Json!){
    createScorm(content: $content){
      id,
      content
    }
  }
  `;

  const variables = {
    content: responseObjectAfterIdRemoval
  }

  request(endpoint, mutation, variables).then(data=>console.log(data)).catch(error=>console.log(error));
};


module.exports = {
  saveDataToTheGraphCool: saveDataToTheGraphCool
};
