(function(){
	"use strict";
	angular.module("public")
	.component("infoComponent",{
		templateUrl:"src/public/myInfo/myInfocomponent.html",
		bindings:{
			infoDisp:'<',
			showList:'<',
			menuFav:'<',
			basePath:'<',
			showMsg:'<',
			dispMsg:'<'
		},
		controller:myInfocomponentController
	});

	function myInfocomponentController(){
		var $ctrl = this;
		console.log($ctrl);
	}
})();