(function(){
	"use strict";
	angular.module("MenuApp")
	.config(routesConfig);

	routesConfig.$inject = ["$stateProvider","$urlRouterProvider"];

	function routesConfig($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state("home",{
			url:"/",
			template:"<h2>Welcome to our Restaurant</h2> <a ui-sref='categories'> Find out the available menu categories</a>"


		})
		.state("categories",{
			url:"/categories",
			templateUrl:"src/menuDataSrc/templates/menuCategories.html",
			controller:"menuCategoriesController as menu",
			resolve:{
				myCategories:["menuDataService", function(menuDataService){
					console.log('inside resolve');
					return menuDataService.getAllCategories();
				}]
			}

		})
		.state("items",{
			url:"/items/{categoryShortName}",
			templateUrl:"src/menuDataSrc/templates/categoryItem.html",
			controller:"categoryItemcontroller as individualitems",
			resolve:{
				myItem:['$stateParams',"menuDataService", function($stateParams,menuDataService){
					return menuDataService.getItemsForCategory($stateParams.categoryShortName);
				}]
			}

		});
	}
})();