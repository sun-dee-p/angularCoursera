(function(){
	"use strict";
	angular.module("LunchCheck",[])
	.controller("LunchCheckController",LunchCheckController);
	LunchCheckController.$inject = ["$scope"];
	function LunchCheckController($scope){
		$scope.orderLength = function(){
			console.log( typeof $scope.data);
			console.log($scope.data);
			if($scope.data==undefined || $scope.data ==""){
				$scope.message = "Please enter data first";
			}
			else{
				var x = $scope.data.split(",");
				console.log(x);
				if(x.length<=3){
					$scope.message = "Enjoy!";
				}
				if(x.length>3) {
					$scope.message = "too much!";
				}
				
			}

		};
	}
})();