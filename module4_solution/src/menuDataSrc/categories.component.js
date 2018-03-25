(function(){
	"use strict";
	angular.module("data")
	.component("menuCategories",{
		templateUrl:"src/menuDataSrc/templates/menuComponentCategories.html",
		bindings:{
			categories:"<"
		},
		/*controller:componentCtrl*/
	});

	/*function componentCtrl(){
		$ctrl = this;
		console.log($ctrl.categories);
	}*/
})();