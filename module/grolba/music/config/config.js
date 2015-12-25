angular
    .module('grolba.music')
    .config([
        '$stateProvider',
        function ($stateProvider) {
            //function load(sources, callback) {
            //    return {
            //        deps: [
            //            '$ocLazyLoad', '$q',
            //            function ($ocLazyLoad, $q) {
            //                var deferred = $q.defer();
            //                var promise = false;
            //                sources = angular.isArray(sources) ? sources : sources.split(/\s+/);
            //                if (!promise) {
            //                    promise = deferred.promise;
            //                }
            //                angular.forEach(sources, function (src) {
            //                    promise = promise.then(function () {
            //                        if (JQ_CONFIG[src]) {
            //                            return $ocLazyLoad.load(JQ_CONFIG[src]);
            //                        }
            //                        angular.forEach(MODULE_CONFIG, function (module) {
            //                            if (module.name == src) {
            //                                name = module.name;
            //                            } else {
            //                                name = src;
            //                            }
            //                        });
            //                        return $ocLazyLoad.load(name);
            //                    });
            //                });
            //                deferred.resolve();
            //                return callback ? promise.then(function () {
            //                    return callback();
            //                }) : promise;
            //            }
            //        ]
            //    }
            //}

            $stateProvider
                .state('music', {
                    url: '/music',
                    templateUrl: 'module/grolba/music/view/music.html',
                    controller: 'grolba.music.IndexController',
                    //resolve: load([
                    //    'com.2fdevs.videogular',
                    //    'com.2fdevs.videogular.plugins.controls',
                    //    'com.2fdevs.videogular.plugins.overlayplay',
                    //    'com.2fdevs.videogular.plugins.poster',
                    //    'com.2fdevs.videogular.plugins.buffering',
                    //    'module/core/js/app/music/ctrl.js',
                    //    'module/core/js/app/music/theme.css'
                    //])
                })
                .state('music.home', {
                    url: '/home',
                    templateUrl: 'module/grolba/music/view/music.home.html'
                })
                .state('music.genres', {
                    url: '/genres',
                    templateUrl: 'module/grolba/music/view/music.genres.html'
                })
                .state('music.detail', {
                    url: '/detail',
                    templateUrl: 'module/grolba/music/view/music.detail.html'
                })
                .state('music.mtv', {
                    url: '/mtv',
                    templateUrl: 'module/grolba/music/view/music.mtv.html'
                })
                .state('music.mtvdetail', {
                    url: '/mtvdetail',
                    templateUrl: 'module/grolba/music/view/music.mtv.detail.html'
                })
                .state('music.playlist', {
                    url: '/playlist/{fold}',
                    templateUrl: 'module/grolba/music/view/music.playlist.html'
                });
        }
    ])
    .run();