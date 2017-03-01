angular.module('toDoList').service('mainService', function(){

this.taskList = [];

this.addTasks = function(userTask){
  this.taskList.push(userTask);
  return this.taskList;
};

// localStorage.setItem('taskList', JSON.stringify(this.taskList));

// var existingTasks = localStorage.getItem('taskList');
// console.log(existingTasks);

// this.getTasks = function(){
//   var existingTasks = localStorage.getItem('taskList');
//   this.taskList = JSON.parse(existingTasks);
//   return this.taskList;
// }



});
