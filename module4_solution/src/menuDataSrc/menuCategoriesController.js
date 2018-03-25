(function(){
	"use strict";
	angular.module("data")
	.controller("menuCategoriesController",MenuCategoriesController);

	MenuCategoriesController.$inject = ["menuDataService","myCategories"];

	function MenuCategoriesController(menuDataService,myCategories){
		 var menu = this;
		console.log('server response ',myCategories);
		menu.categories = myCategories;
	}




})();