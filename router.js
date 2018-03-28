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
http://localhost:3000/SCORM-files/Week-4-Cultural-Differences/story_html5.html

?endpoint=http%3A%2F%2Flocalhost%3A8000%2F%0D%0A%0D%0A

&auth=DUMMYTOKEN%0D%0A

&actor=%7B%22name%22%3A%20%5B%22First%20Last%22%5D%2C%20%22mbox%22%3A%20%5B%22mailto%3Afirstlast%40mycompany.com%22%5D%7D

&activity_id=61XkSYC1ht2_course_id

&registration=760e3480-ba55-4991-94b0-01820dbd23a2

*/

// */

/*
    http://localhost:3000/SCORM-files/Week-4-Cultural-Differences/story_html5.html?endpoint=http://localhost:8000/&auth=DUMMYTOKEN&actor={%22name%22:%20[%22First%20Last%22],%20%22mbox%22:%20[%22mailto:firstlast@mycompany.com%22]}&activity_id=61XkSYC1ht2_course_id&registration=760e3480-ba55-4991-94b0-01820dbd23a2
*/
// router.get('/', (req, res){
//   console.log(req);
//   res.send("root home");
// });
//

router.get('/', (req, res)=>{
  console.log(req);
  // res.send("LRS api home");
});

module.exports = router;
