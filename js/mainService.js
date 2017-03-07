angular.module('toDoList').service('mainService', function(){

this.taskList = [];
var TASK_LIST = 'tasks';

this.addTasks = function(userTask, userTaskLink){
  LS_wrapper.push(userTask, userTaskLink, TASK_LIST)
};

this.getTasks = function(){
  return LS_wrapper.get(TASK_LIST);
};

this.deleteTasks = function(task){
  LS_wrapper.delete(task, TASK_LIST);
};


});


var LS_wrapper = {
  push: function(item, itemlink, store) {
    var data = JSON.parse(localStorage.getItem(store));

    if (!data
      || !Array.isArray(data)
      || !data.length) {
      data = []
    }

    data.push(item, itemlink);
    var stringData = JSON.stringify(data);

    localStorage.setItem(store, stringData)
  },
  get: function(store) {
    var myStorage = localStorage.getItem(store);
    console.log(myStorage)

    return JSON.parse(myStorage);
  },
  delete: function(task, store){
    var myStorage = localStorage.getItem(store);
    var newArray = JSON.parse(myStorage)
    for (var i = 0; i < newArray.length; i++){
      if(newArray[i] === task){
        newArray.splice(i, 1);
      }
    }
    var newStringData = JSON.stringify(newArray);
    var myStorage = localStorage.setItem(store, newStringData);
  }

}
