/**
 * Created by gbelmm on 26-12-14.
 */
angular.module('sidenavDemo1', ['ngMaterial'])
    .controller('AppCtrl', function($scope, $timeout, $mdSidenav, $log,$mdToast) {
        $scope.toggleLeft = function() {
            $mdSidenav('left').toggle()
                .then(function(){
                    $log.debug("toggle left is done");
                });
        };
        $scope.showSimpleToast = function() {
            $mdToast.show(
                $mdToast.simple()
                    .content('Simple Toast!')
                    .position('top')
                    .hideDelay(0)
            );
        };
    })
    .controller('LeftCtrl', function($scope, $timeout, $mdSidenav, $log) {

    })
    .controller('RightCtrl', function($scope, $timeout, $mdSidenav, $log) {

    });