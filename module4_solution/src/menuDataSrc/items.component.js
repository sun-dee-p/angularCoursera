(function(){
	"use strict";
	angular.module("data")
	.component("categoriesItems",{
		templateUrl:"src/menuDataSrc/templates/categoryItemComponent.html",
		bindings:{
			items:"<"
		},
		/*controller:componentCtrl*/
	});

	/*function componentCtrl(){
		$ctrl = this;
		console.log($ctrl.categories);
	}*/
})();