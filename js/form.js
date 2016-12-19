var UserInfoModule=angular.module('UserInfoModule',[]);
UserInfoModule.controller('SignUpController',function($scope){
	$scope.userdata={};
	$scope.submitForm=function(){
		console.log($scope.userdata);
		if($scope.signUpForm.$invalid)
			alert('请检查您的信息');
		else
			alert('提交成功');

	}
});
UserInfoModule.directive('compare',function(){
	var o={};
	o.strict='AE';
	o.scope={
		orgText:'=compare'
	}
	o.require="ngModel";
	o.link=function(scope,element,attrs,con){
		con.$validators.compare=function(v){
			return v == scope.orgText;
		}
		scope.$watch('orgText',function(){
			con.$validate();
		});		
	}
	return o;
});