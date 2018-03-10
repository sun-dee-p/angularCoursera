(function(){
	"use strict";
	angular.module("ShoppingListCheckOff",[])
	.controller("ToBuyController",ToBuyController)
	.controller("AlreadyBoughtController",AlreadyBoughtController)
	.service("ShoppingListCheckOffService",ShoppingListCheckOffService);

	ToBuyController.$inject = ["ShoppingListCheckOffService"];
	AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];

	function ToBuyController(ShoppingListCheckOffService){
		var buyer = this;
		buyer.itemstobuy = ShoppingListCheckOffService.shoppingList;
		buyer.movetobought = function(item){
			buyer.itemstobuy = ShoppingListCheckOffService.updateShoppingList(item);
		};
	}

	function AlreadyBoughtController(ShoppingListCheckOffService){
		var bought = this;
		bought.boughtitems = ShoppingListCheckOffService.purchased_items;
		
	}

	function ShoppingListCheckOffService(){
		var service = this;
		service.purchased_items = [];
		service.shoppingList = [{name:"Yoga mat",quantity:1},{name:"kilos of butter",quantity:2},{name:"kilos of sugar",quantity:5},{name:"packs of biscuts",quantity:4},{name:"liters of milk",quantity:3}];

		service.updateShoppingList = function(item){
			service.purchased_items.push(item);
			service.shoppingList.splice(service.shoppingList.indexOf(item),1);
			return service.shoppingList;
		};
	}
	 
})();