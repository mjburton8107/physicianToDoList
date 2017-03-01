angular.module('toDoList').service('mainService', function(){

this.taskList = [];
var TASK_LIST = 'tasks';

this.addTasks = function(userTask){
  LS_wrapper.push(userTask, TASK_LIST)
};

this.getTasks = function(){
  return LS_wrapper.get(TASK_LIST);
}

// localStorage.setItem('taskList', JSON.stringify(this.taskList));
//
// var existingTasks = localStorage.getItem('taskList');
// console.log(existingTasks);
//
// this.getTasks = function(){
//   var existingTasks = localStorage.getItem('taskList');
//   this.taskList = JSON.parse(existingTasks);
//   return this.taskList;
// }



});


var LS_wrapper = {
  push: function(item, store) {
    var data = JSON.parse(localStorage.getItem(store));

    if (!data
      || !Array.isArray(data)
      || !data.length) {
      data = []
    }

    data.push(item);
    var stringData = JSON.stringify(data);

    localStorage.setItem(store, stringData)
  },
  get: function(store) {
    var myStorage = localStorage.getItem(store);
    console.log(myStorage)

    return JSON.parse(myStorage);
  }

}
