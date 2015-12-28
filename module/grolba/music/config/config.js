angular
    .module('grolba.music')
    .config([
        '$stateProvider', 'AutoloaderProvider',
        function ($stateProvider, AutoloaderProvider) {
            $stateProvider
                .state('music', {
                    url: '/music',
                    templateUrl: 'module/grolba/music/view/index.html',
                    controller: 'grolba.music.IndexController',
                    resolve: AutoloaderProvider.load([
                        'com.2fdevs.videogular',
                        'com.2fdevs.videogular.plugins.controls',
                        'com.2fdevs.videogular.plugins.overlayplay',
                        'com.2fdevs.videogular.plugins.poster',
                        'com.2fdevs.videogular.plugins.buffering',
                        'module/core/js/app/music/ctrl.js',
                        'module/core/js/app/music/theme.css'
                    ])
                })
                .state('music.home', {
                    url: '/home',
                    templateUrl: 'module/grolba/music/view/home.html'
                })
                .state('music.genres', {
                    url: '/genres',
                    templateUrl: 'module/grolba/music/view/genres.html'
                })
                .state('music.detail', {
                    url: '/detail',
                    templateUrl: 'module/grolba/music/view/detail.html'
                })
                .state('music.mtv', {
                    url: '/mtv',
                    templateUrl: 'module/grolba/music/view/mtv.html'
                })
                .state('music.mtvdetail', {
                    url: '/mtvdetail',
                    templateUrl: 'module/grolba/music/view/mtv.detail.html'
                })
                .state('music.playlist', {
                    url: '/playlist/{fold}',
                    templateUrl: 'module/grolba/music/view/playlist.html'
                });
        }
    ])
    .run();