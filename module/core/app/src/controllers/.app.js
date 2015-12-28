(function () {
    function applySettings() {
        if (angular.isDefined($localStorage.settings)) {
            $rootScope.space.settings = $localStorage.settings;
        }
        else {
            $localStorage.settings = $rootScope.space.settings;
        }
    }

    function applyBodyClasses() {
        var isIE = !!navigator.userAgent.match(/MSIE/i);
        isIE && angular.element($window.document.body).addClass('ie');
        isSmartDevice($window) && angular.element($window.document.body).addClass('smart');
    }

    $scope.$watch('app.settings', function () {
        if ($rootScope.space.settings.asideDock && $rootScope.space.settings.asideFixed) {
            // aside dock and fixed must set the header fixed.
            $rootScope.space.settings.headerFixed = true;
        }
        // for box layout, add background image
        $rootScope.space.settings.container ? angular.element('html').addClass('bg') : angular.element('html').removeClass('bg');
        // save to local storage
        $localStorage.settings = $rootScope.space.settings;
    }, true);

    $scope.lang = {
        isopen: false
    };
    $scope.langs = {
        en: 'English',
        de_DE: 'German',
        it_IT: 'Italian'
    };
    $scope.selectLang = $scope.langs[$translate.proposedLanguage()] || "English";
    $scope.setLang = function (langKey) {
        $scope.selectLang = $scope.langs[langKey];
        $translate.use(langKey);
        $scope.lang.isopen = !$scope.lang.isopen;
    };

    function isSmartDevice($window) {
        // Adapted from http://www.detectmobilebrowsers.com
        var ua = $window['navigator']['userAgent'] || $window['navigator']['vendor'] || $window['opera'];
        // Checks for iOs, Android, Blackberry, Opera Mini, and Windows mobile devices
        return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
    }
});