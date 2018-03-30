(function(){
	"use strict";
	angular.module("public")
	.service("signUpService", SignUpService);

	SignUpService.$inject = ["$http"];

	function SignUpService($http){
		var service = this;
		service.getMenuItems = function(shortName){
			return $http({
				url:("https://sundeeprk-course5.herokuapp.com/menu_items/"+shortName+".json"),
				method:"GET"
			});
		};
	}
})();




