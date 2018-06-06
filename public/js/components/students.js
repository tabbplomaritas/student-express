"use strict";
const students = {
  // TODO: Create a template to display all the students from this class
  template: `
  <section ng-repeat="student in $ctrl.students">
   <input ng-blur="$ctrl.updateStudent(student);" ng-model="student.name"> 
   <input ng-blur="$ctrl.updateStudent(student);" ng-model="student.course">
    <a href="" class="button_delete" ng-click="$ctrl.deleteStudent(student.id);">Delete</a>
  </section>

  <form ng-submit="$ctrl.addStudent($ctrl.newStudent)">
    <label>Name</label>
    <input type="text" placeholder="Name" ng-model="$ctrl.newStudent.name">

    <label>Course Name</label>
    <input type="text" placeholder="Course Name" ng-model="$ctrl.newStudent.course">


    <button>Add Course</button>

  </form>
  `,
  controller: ["StudentService", function(StudentService) {
    const vm = this;
    // TODO Call the StudentService to retrieve the list of the students
    StudentService.getStudents().then((response) =>{
      vm.students = response.data;
    });
      vm.addStudent = (newStudent) =>{
        StudentService.addStudent(newStudent).then((response) =>{
          vm.students = response.data;
          vm.newStudent = {};
        })
      };
      vm.deleteStudent = (id) =>{
        console.log("i'm a delete button!");
        
        StudentService.deleteStudent(id).then((response) =>{
          vm.students = response.data;
        })
      };
      vm.updateStudent = (student) =>{
        StudentService.updateStudent(student).then((response) =>{
          vm.students = response.data;
        })
      };
  }]
};

angular
  .module("GCApp")
  .component("students", students); 