(function(){
	"use strict";
	angular.module("data")
	.controller("categoryItemcontroller",CategoryItemController);

	CategoryItemController.$inject = ["menuDataService","myItem"];

	function CategoryItemController(menuDataService,myItem){
		var individualitems = this;
		console.log("inside cntrl");
		console.log(myItem);
		individualitems.categoryItem = myItem;
	}


})();