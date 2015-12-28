angular
    .module('grolba.file')
    .config([
        '$stateProvider', 'AutoloaderProvider',
        function ($stateProvider, AutoloaderProvider) {
            $stateProvider
                //.state('app.form', {
                //    url: '/form',
                //    template: '<div ui-view class="fade-in"></div>',
                //    resolve: AutoloaderProvider.load([
                //        'module/core/app/src/controllers/form.js'
                //    ])
                //})
                .state('app.form.fileupload', {
                    url: '/fileupload',
                    templateUrl: 'module/grolba/file/view/index.html',
                    controller: 'grolba.file.IndexController',
                    resolve: AutoloaderProvider.load([
                        'angularFileUpload',
                        'module/grolba/file/src/controllers/index.js'
                    ])
                });
        }
    ]);