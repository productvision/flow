'use strict';

/* Controllers */
// signin controller
 angular.module('app').controller('SigninFormController', [
    '$scope', '$http', '$state',
    function ($scope, $http, $state) {
        $scope.user = {};
        $scope.authError = null;
        $scope.login = function () {
            $scope.authError = null;

            $.ajax({
                type: "POST",
                url: 'http://localhost:3000/login',
                data: {
                    email: $scope.user.email,
                    password: $scope.user.password
                },
                success: function (response) {
                    if (!response.data.user) {
                        $scope.authError = 'Email or Password not right';
                    } else {
                        $state.go('app.dashboard');
                    }
                },
                error: function () {
                }
            });
        };
    }]);