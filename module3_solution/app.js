(function(){
	"use strict";
	angular.module("NarrowItDownApp",[])
	.controller("NarrowItDownController",NarrowItDownController)
	.service("MenuSearchService",MenuSearchService)
	.directive("foundItems", FoundItems);

	NarrowItDownController.$inject = ["MenuSearchService"];
	function NarrowItDownController(MenuSearchService){
		var narrow = this;

		narrow.narrowlist = function(searchTerm){
			if(searchTerm == undefined || searchTerm.trim() == ""){
				narrow.show = true;
				narrow.found = "";
			}
			else if(searchTerm != undefined && searchTerm.trim() != ""){
				var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
				promise.then(function(result){
					if(result.length!=0){
						narrow.show = false;
						narrow.found = result;	
					}
					else {
						narrow.show = true;
					}
				}).catch(function(error){
					console.log(error);
				});
			}
			
		};

		narrow.remove = function(item){
			narrow.found.splice(item,1);
		};
	}
    
	function FoundItems(){
		var ddo = {
			restrict:"E",
			templateUrl:"foundItems.html",
			scope:{
				foundItems:'<',
				onRemove:"&"
			},
			controller:directiveController,
			controllerAs:"dirctrl",
			bindToController:true
			
		};

		return ddo;
	}

	function directiveController(){
		var dirctrl = this;
	}

	MenuSearchService.$inject = ["$http"];
	function MenuSearchService($http){
		var service = this;
		service.getMatchedMenuItems = function(searchterm){
			return $http({
				url:"https://davids-restaurant.herokuapp.com/menu_items.json",
				method:"GET"
			}).then(function(result){
				var founditems = [];
				result.data.menu_items.forEach(function(ce){
					if(ce.description.toLowerCase().indexOf(searchterm.trim().toLowerCase())>=0){
						founditems.push(ce);
					}
				});
				return founditems;
			}).catch(function(error){
				console.log(error);
			});
		};
	}

})();