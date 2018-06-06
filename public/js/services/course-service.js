"use strict";

function CourseService($http) {
  // TODO Declare the functions to make GET, POST, PUT, and DELETE requests from this service.
  const getCourses = () =>{
    return $http({
      method: "GET",
      url: "/portal/courses"
    });
  };

  const addCourse = (newCourse) => {
    return $http({
      method: "POST",
      url: "/portal/courses",
      data: newCourse
    });
  };

  const deleteCourse = (id) =>{
    return $http({
      method: "DELETE",
      url: "/portal/courses/" + id
    });
  };

  const updateCourse = (course) =>{
    return $http({
      method: "PUT",
      url: "/portal/courses" + course.id,
      data: course
    });
  };

  return {
    getCourses,
    addCourse, 
    deleteCourse,
    updateCourse
  };
}

angular
  .module("GCApp")
  .factory("CourseService", CourseService);