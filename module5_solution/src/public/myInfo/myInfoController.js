(function(){
	"use strict";
	angular.module("public")
	.controller("myInfoController",myInfoController);

	myInfoController.$inject = ["signUpService"];

	function myInfoController(signUpService){
		var myInfoCtrl = this;
		myInfoCtrl.showlist = false;
		myInfoCtrl.showmsg = false;
		myInfoCtrl.infoToDisp = signUpService.saveUserInfo;
		myInfoCtrl.menuFav = signUpService.saveUserMenuFav;
		if(myInfoCtrl.infoToDisp == undefined){
			myInfoCtrl.showmsg = true;
			myInfoCtrl.dispMsg = "Not signed up yet!";

		}
		else{
			myInfoCtrl.showlist = true;
		}
	}
})();