const request = require('graphql-request').request;
const GraphQLClient = require('graphql-request').GraphQLClient;
const endpoint = `https://api.graph.cool/simple/v1/cjb88dwuv1s4b0191np9fmbn3`;

function getUseridAndContent(data){
  const actorLength = data.actor.name.length;
  actorid = data.actor.name.slice(actorLength-25, actorLength);
  const actorname = data.actor.name.slice(0, actorLength-25);
  return {actorname, actorid};
};

function saveDataToTheGraphCool(data){
  // const {actorname, actorid} = getUseridAndContent(data);
  // data.actor.name = actorname;
  const hardCodedd='cje8z1vkv0oje01916fddhi7g';
  const mutation = `mutation createScorm($content: Json!, $userId: ID!){
    createScorm(content: $content, userId: $userId){
      id
    }
  }
  `;

  const variables = {
    content: data,
    userId: hardCodedd
  };

  request(endpoint, mutation, variables)
  .then(function(data){
    console.log(data)
  })
  .catch(function(error){
    console.error(error)});
};

function resolveAfterDataComesBack(){
  const query = `{
    allUsers(orderBy: createdAt_DESC){
     id,
     firstName,
     lastName
     scorms(filter: {completion: true}){
       id,
       completion
     }
   }
  }`
;
  return new Promise(resolve=>{
    request(endpoint, query)
    .then(function(data){
      resolve(data) ;
    })
    .catch(function(error){
      console.error(error);
    });
  });
};

async function getStudentsList(res){
  const data = await resolveAfterDataComesBack();
  return data;
};

module.exports = {
  saveDataToTheGraphCool: saveDataToTheGraphCool,
  getStudentsList: getStudentsList
};
