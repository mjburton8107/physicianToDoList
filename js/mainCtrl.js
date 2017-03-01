angular.module('toDoList').controller('mainCtrl', function($scope, mainService){

  $scope.tasks = [];

  $scope.addTasks = function(userTask){
     $scope.tasks.push(userTask);
  };

  $scope.deleteTask = function(task){
    for (var i = 0; i < $scope.tasks.length; i++){
      if($scope.tasks[i] === task){
        $scope.tasks.splice(i, 1);
      }
    }
  }

  // $scope.tasks = mainService.getTasks();
  // console.log('this is $scope.tasks', $scope.tasks)

});
