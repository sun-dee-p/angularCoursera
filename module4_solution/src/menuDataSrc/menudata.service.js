(function(){
	"use strict";
	angular.module("data")
	.service("menuDataService", MenuDataService);

	MenuDataService.$inject = ["$http"];
	function MenuDataService($http){
		var service  = this;

		service.getAllCategories = function(){
			return $http({
				url:"https://davids-restaurant.herokuapp.com/categories.json",
				method:"get"
			}).then(function(result){
				console.log('from service', result);
				return result.data;
			})
			.catch(function(error){
				console.log(error);
			});
		};

		service.getItemsForCategory = function(shortname){
			return $http({
				url:("https://davids-restaurant.herokuapp.com/menu_items.json?category="+shortname),
				method:"GET"
			}).then(function(result){
				console.log(result.data.menu_items);
				return result.data.menu_items;
			}).catch(function(error){
				console.log(error);
			});
		};
	}
})();