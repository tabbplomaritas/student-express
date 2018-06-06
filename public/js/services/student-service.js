"use strict";
function StudentService($http) {
  // Declare the functions to make GET, POST, PUT, and DELETE requests from this service.
  
  const getStudents = () =>{
    return $http({
      method: "GET",
      url: "/portal/students"
    });
  };
  
  const addStudent = (newStudent) =>{
    return $http({
      method: "POST",
      url: "/portal/students",
      data: newStudent
    });
  };
  
  const deleteStudent = (id) =>{
    console.log("student service deleteStudent working");
    
    return $http({
      method: "DELETE",
      url: "/portal/students/" + id
    });
  };

  const updateStudent = (student) =>{
    return $http({
      method: "PUT",
      url: "/portal/students/" + student.id,
      data: student
    });
  };
  return {
    getStudents,
    addStudent,
    deleteStudent,
    updateStudent
  };
};
  
  



angular
  .module("GCApp")
  .factory("StudentService", StudentService);