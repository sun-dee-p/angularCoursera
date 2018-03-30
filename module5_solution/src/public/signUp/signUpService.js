(function(){
	"use strict";
	angular.module("public")
	.service("signUpService", SignUpService);

	SignUpService.$inject = ["$http","ApiPath"];

	function SignUpService($http,ApiPath){
		var service = this;
		service.getMenuItems = function(shortName){
			console.log(ApiPath);
			return $http({
				url:(ApiPath+"/menu_items/"+shortName+".json"),
				method:"GET"
			});
		};
	}
})();




