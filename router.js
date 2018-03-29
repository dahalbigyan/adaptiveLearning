const express = require('express');
const router = express.Router();
/*
  endpoint: http%3A%2F%2Flocalhost%3A8000%2F%0D%0A%0D%0A
  auth:DUMMYTOKEN%0D%0A
  actor:%7B%22name%22%3A%20%5B%22First%20Last%22%5D%2C%20%22mbox%22%3A%20%5B%22mailto%3Afirstlast%40mycompany.com%22%5D%7D
  activity_id:
  registration:


http://localhost:3000/SCORM-files/Week-4-Cultural-Differences/story_html5.html?endpoint=http%3A%2F%2Flocalhost%3A8000%2F%0D%0A%0D%0A&auth=DUMMYTOKEN%0D%0A&actor=%7B%22name%22%3A%20%5B%22First%20Last%22%5D%2C%20%22mbox%22%3A%20%5B%22mailto%3Afirstlast%40mycompany.com%22%5D%7D&activity_id=61XkSYC1ht2_course_id&registration=760e3480-ba55-4991-94b0-01820dbd23a2


/*
  http://localhost:3000/SCORM-files/Week-1-Global-Thinking/story_html5.html?
  &actor=%7B%22name%22%3A%20%5B%22First%20Last%22%5D%2C%20%22mbox%22%3A%20%5B%22mailto%3Afirstlast%40mycompany.com%22%5D%7D

  ?endpoint=http%3A%2F%2Flocalhost%3A8000%2F%0D%0A%0D%0A

  &auth=DUMMYTOKEN%0D%0A



  &activity_id=61XkSYC1ht2_course_id

  &registration=760e3480-ba55-4991-94b0-01820dbd23a2
*/

/*

actor=%7B"name"%3A%5B"Bigyan%20Dahal"%5D%2C"account"%3A%5B%7B"accountServiceHomePage"%3A"http%3A%2F%2Fcloud.scorm.com"%2C"accountName"%3A"67VGY0HQL1%7Cbigyan.dahal%40knovva.com"%7D%5D%2C"objectType"%3A"Agent"%7D&endpoint=https%3A%2F%2Fcloud.scorm.com%2Ftc%2F67VGY0HQL1%2Fsandbox%2F&auth=Basic%20OmRjODRhMjJkLWNhZDktNDk2Yi04ODY0LTIwZTQ0MDdiNTczNw%3D%3D&content_token=278fef89-1068-427a-bcde-b4cfc53a03cd&externalRegistration=MBCJJJEWGQ7KWVOZZ3O7MGGQADDDUQC7Q3IRR7GX37EXXZIVH6MJ5UJ6QXTTSG4ZI7G2J4OD7RBCCONAYTAENRTZORMDO3ZTEIZLWXIJFXZZ4KRRU7BA&activity_id=http%3A%2F%2F6NieVUtP5F4_course_id&registration=8664fdae-c24f-400e-8d2b-3a2c660bccde&externalConfiguration=4YSDFGITOAJTVC665M5XYPAN7OQIKJZ4NXBVSGBWKSN4PJKX66YFVH524SK5YYXMJRNVYKFJTLSQK&grouping=http%3A%2F%2F6NieVUtP5F4_course_id&content_endpoint=https%3A%2F%2Fcloud.scorm.com%2Ftc%2F67VGY0HQL1%2Fsandbox%2Fcontent%2F&width=988&height=724&left=466&top=0&width=988&height=724&left=466&top=0&tincan=true

*/

/*

  // with sandbox endpoint
  http://localhost:3000/SCORM-files/Week-1-Global-Thinking/story_html5.html?actor=%7B%22name%22%3A%5B%22Bigyan%20Dahal%22%5D%2C%22account%22%3A%5B%7B%22accountServiceHomePage%22%3A%22http%3A%2F%2Fcloud.scorm.com%22%2C%22accountName%22%3A%2267VGY0HQL1%7Cbigyan.dahal%40knovva.com%22%7D%5D%2C%22objectType%22%3A%22Agent%22%7D&endpoint=https%3A%2F%2Fcloud.scorm.com%2Ftc%2F67VGY0HQL1%2Fsandbox%2F&auth=Basic%20OmRjODRhMjJkLWNhZDktNDk2Yi04ODY0LTIwZTQ0MDdiNTczNw%3D%3D&content_token=278fef89-1068-427a-bcde-b4cfc53a03cd&externalRegistration=MBCJJJEWGQ7KWVOZZ3O7MGGQADDDUQC7Q3IRR7GX37EXXZIVH6MJ5UJ6QXTTSG4ZI7G2J4OD7RBCCONAYTAENRTZORMDO3ZTEIZLWXIJFXZZ4KRRU7BA&activity_id=http%3A%2F%2F6NieVUtP5F4_course_id&registration=8664fdae-c24f-400e-8d2b-3a2c660bccde&externalConfiguration=4YSDFGITOAJTVC665M5XYPAN7OQIKJZ4NXBVSGBWKSN4PJKX66YFVH524SK5YYXMJRNVYKFJTLSQK&grouping=http%3A%2F%2F6NieVUtP5F4_course_id&content_endpoint=https%3A%2F%2Fcloud.scorm.com%2Ftc%2F67VGY0HQL1%2Fsandbox%2Fcontent%2F&width=988&height=724&left=466&top=0&width=988&height=724&left=466&top=0&tincan=true
*/

/*
  // with localhost endpoint
  http://localhost:3000/SCORM-files/Week-1-Global-Thinking/story_html5.html
  ?actor=%7B%22name%22%3A%5B%22Bigyan%20Dahal%22%5D%2C%22account%22%3A%5B%7B%22accountServiceHomePage%22%3A%22http%3A%2F%2Fcloud.scorm.com%22%2C%22accountName%22%3A%2267VGY0HQL1%7Cbigyan.dahal%40knovva.com%22%7D%5D%2C%22objectType%22%3A%22Agent%22%7D
  &endpoint=http%3A%2F%2Flocalhost%3A8000%2F
*/

/*
  // with localhost endpoint
  http://localhost:3000/SCORM-files/Week-1-Global-Thinking/story_html5.html
  ?actor=%7B%0A%22name%22%3A%5B%22Bigyan%20Dahal%22%5D%2C%20%0A%22objectType%22%3A%20%22Agent%22%0A%7D
  &endpoint=http%3A%2F%2Flocalhost%3A8000%2F
\*/


/*
  When a call is made the request URL is:
  http://localhost:8000/activities/state
  ?stateId=resume
  &activityId=http%3A%2F%2F6NieVUtP5F4_course_id
  &agent=%7B%22objectType%22%3A%22Agent%22%2C%22account%22%3A%7B%22name%22%3A%2267VGY0HQL1%7Cbigyan.dahal%40knovva.com%22%2C%22homePage%22%3A%22http%3A%2F%2Fcloud.scorm.com%22%7D%2C%22name%22%3A%22Bigyan%20Dahal%22%7D
*/



/*
https://cloud.scorm.com/sandbox/content/courses/67VGY0HQL1/123456/0/story_html5.html
?actor=%7B%22name%22%3A%5B%22Bigyan%20Dahal%22%5D%2C%22account%22%3A%5B%7B%22accountServiceHomePage%22%3A%22http%3A%2F%2Fcloud.scorm.com%22%2C%22accountName%22%3A%2267VGY0HQL1%7Cbigyan.dahal%40knovva.com%22%7D%5D%2C%22objectType%22%3A%22Agent%22%7D
&endpoint=https%3A%2F%2Fcloud.scorm.com%2Ftc%2F67VGY0HQL1%2Fsandbox%2F
&auth=Basic%20OjRlZTJjYWVkLTY1ODMtNGIzZS1hNGM5LTZlZTcyNGFhOGJkMA%3D%3D
&content_token=3c85ea00-65d6-4964-9943-267e95c07b44
&externalRegistration=MBCJJJEWGQ7KWVOZZ3O7MGGQADDDUQC7Q3IRR7GX37EXXZIVH6MJ5UJ6QXTTSG4ZI7G2J4OD7RBCCONAYTAENRTZORMDO3ZTEIZLWXIJFXZZ4KRRU7BA
&activity_id=http%3A%2F%2F6NieVUtP5F4_course_id
&registration=8664fdae-c24f-400e-8d2b-3a2c660bccde&externalConfiguration=4YSDFGITOAJTVC665M5XYPAN7OQIKJZ4NXBVSGBWKSN4PJKX66YFVH524SK5YYXMJRNVYKFJTLSQK
&grouping=http%3A%2F%2F6NieVUtP5F4_course_id
&content_endpoint=https%3A%2F%2Fcloud.scorm.com%2Ftc%2F67VGY0HQL1%2Fsandbox%2Fcontent%2F&width=988&height=724&left=466&top=0&tincan=true

*/




router.get('/', (req, res)=>{
  console.log(req);
  res.send("LRS api home");
});


router.put('/statements', (req, res)=>{
  console.log(req);
});

module.exports = router;
