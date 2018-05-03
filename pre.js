const students = require('./students.json');

function preProcessStudentList(students){
  const updatedStudentList = {};
  const users = [];
  const {allUsers} = students;
  allUsers.forEach((user)=>{
    const student = {};
    student.id = user.id;
    student.firstName = user.firstName;
    student.lastName = user.lastName;
    var courseStartedCount=0;
    var coursePassedCount=0;
    var hasStartedCourse = (user.scorms.length>1) ? true: false;
    var hasPassedCourse = false;
    if(hasStartedCourse){
      courseStartedCount++;
      for(let i = 0; i<user.scorms.length; i++){
        if(user.scorms[i].completion === true){
          coursePassedCount++;
          hasPassedCourse = true;
          return;
        }else{
          hasPassedCourse = false;
        }
      }
    };
    student.hasStartedCourse = hasStartedCourse;
    student.hasPassedCourse = hasPassedCourse;
    student.courseStartedCount = courseStartedCount;
    student.coursePassedCount = coursePassedCount;
    users.push(student);
  });
  return users;
};

console.log(preProcessStudentList(students));
