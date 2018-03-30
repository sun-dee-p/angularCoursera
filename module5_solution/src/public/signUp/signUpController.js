(function(){
	"use strict";

	angular.module("public")
	.controller("signUpController",SignUpController);

	SignUpController.$inject = ["signUpService"];

	function SignUpController(signUpService){
		var signUpCtrl = this;
		signUpCtrl.recordUserInfo = function(info){
			signUpService.getMenuItems(info.favdish.toUpperCase()).then(function(result){
				signUpCtrl.message = "Your information has been saved";
				signUpService.saveUserInfo = info;
				console.log(result);
				signUpService.saveUserMenuFav = result.data;
			}).catch(function(error){
				signUpCtrl.message = "No such menu number exists";
			});
		};
	}
})();





