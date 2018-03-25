(function(){
	"use strict";
	angular.module("data")
	.controller("categoryItemcontroller",CategoryItemController);

	CategoryItemController.$inject = ["$stateParams","menuDataService"];

	function CategoryItemController($stateParams,menuDataService){
		console.log('here');
		var individualitems = this;
		/*individualitems.categoryItem = myItem;*/
		var promise = menuDataService.getItemsForCategory($stateParams.categoryShortName);
				
		promise.then(function(result){
			console.log(result);
			individualitems.categoryItem = result;
		}).catch(function(error){
			console.log(error);
		});	
	}


})();