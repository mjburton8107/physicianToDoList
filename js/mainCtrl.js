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
    for (var i = 0; i < $scope.tasks.length; i++){
      if($scope.tasks[i] === task){
        $scope.tasks.splice(i, 1);
      }
    }
  }

});
