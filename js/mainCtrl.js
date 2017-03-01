angular.module('toDoList').controller('mainCtrl', function($scope, mainService){

  //gets task from local storage
  $scope.tasks = mainService.getTasks();
  // $scope.tasks = [];

  $scope.addTasks = function(userTask){
      mainService.addTasks(userTask);

      $scope.tasks = mainService.getTasks();
      $scope.userTask = '';
  };





  $scope.deleteTask = function(task){
    mainService.deleteTasks(task);
    $scope.tasks = mainService.getTasks();
  }
});
