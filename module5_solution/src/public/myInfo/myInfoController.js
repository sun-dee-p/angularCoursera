(function(){
	"use strict";

	angular.module("public")
	.controller("myInfoController",MyInfoController);

	MyInfoController.$inject = ["signUpService","ApiPath","infoToDisp","menuFav"];

	function MyInfoController(signUpService,ApiPath,infoToDisp,menuFav){
		var myInfoCtrl = this;
		console.log('here');
		console.log(ApiPath);
		myInfoCtrl.showlist = false;
		myInfoCtrl.showmsg = false;
		myInfoCtrl.basepath = ApiPath;
		myInfoCtrl.infoToDisp = infoToDisp;
		myInfoCtrl.menuFav = menuFav;
		console.log(infoToDisp);
		console.log(menuFav);
		if(myInfoCtrl.infoToDisp == undefined){
			myInfoCtrl.showmsg = true;
			myInfoCtrl.dispMsg = "Not signed up yet!";

		}
		else{
			myInfoCtrl.showlist = true;
		}
	}
})();




