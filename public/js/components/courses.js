"use strict";
const courses = {
  // TODO: Create a template to display all the students from this class
  template: `
  <section ng-repeat="course in $ctrl.courses">
   <input ng-blur="$ctrl.updateCourse(course);" ng-model="course.name"> 
   <input ng-blur="$ctrl.updateCourse(course);" ng-model="course.startDate">
   <input ng-blur="$ctrl.updateCourse(course);" ng-model="course.endDate">
    <a href="" class="button_delete" ng-click="$ctrl.deleteCourse(course.id);">Delete</a>
  </section>

  <form ng-submit="$ctrl.addCourse($ctrl.newCourse)">
    <label>Name</label>
    <input type="text" placeholder="Name" ng-model="$ctrl.newCourse.name">

    <label>Start Date</label>
    <input type="text" placeholder="Start Date" ng-model="$ctrl.newCourse.startDate">

    <label>End Date</label>
    <input type="text" placeholder="End Date" ng-model="$ctrl.newCourse.endName">

    <button>Add Course</button>

  </form>
  `,
  controller: ["CourseService", function(CourseService) {
    const vm = this;
    // TODO Call the StudentService to retrieve the list of the students
    CourseService.getCourses().then((response) =>{
      console.log(response);
      vm.courses = response.data;
      vm.addCourse = (newCourse) => {
        CourseService.addCourse(newCourse).then((response) => {
          vm.courses = response.data;
        });
      vm.newCourse = {};
    };
    vm.deleteCourse = (id) => {
      console.log(id);
      console.log(typeof id);
      CourseService.deleteCourse(id).then((response =>{
        vm.courses = response.data;
      })
    )};

    vm.updateCourse = (course) =>{
      CourseService.updateCourse(course).then((response =>{
        vm.courses = response.data;
      })
      )}
    });
  }]
};

angular
  .module("GCApp")
  .component("courses", courses);