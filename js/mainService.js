angular.module('toDoList').service('mainService', function(){

this.taskList = [];
var TASK_LIST = 'tasks';

this.addTasks = function(userTask){
  LS_wrapper.push(userTask, TASK_LIST)
};

this.getTasks = function(){
  return LS_wrapper.get(TASK_LIST);
};

this.deleteTasks = function(task){
  return LS_wrapper.delete(task);
};


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
  },
  delete: function(task){
    var myStorage = localStorage.getItem(store);
    var newArray = JSON.parse(myStorage)
    for (var i = 0; i < newArray.length; i++){
      if(newArray[i] === task){
        newArray.splice(i, 1);
      }
    }
    localStorage.setItem(store, JSON.stringify(newArray));
  }

}
