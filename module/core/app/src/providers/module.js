angular
    .module('app')
    .provider('ModuleFactory', [
        '$stateProvider',
        function ($stateProvider) {
            this.module = function (config) {
                $stateProvider
                    .state(config.name, {
                        url: config.url,
                        templateUrl: 'module/skeleton/crud/view/index.html',
                        controller: 'skeleton.crud.IndexController',
                        resolve: {
                            items: [
                                config.model,
                                function (Entity) {
                                    return Entity.find().$promise
                                }
                            ]
                        }
                    })
                    .state(config.name + '.show', {
                        url: '/:id',
                        templateUrl: 'module/skeleton/crud/view/show.html',
                        controller: 'grolba.issue.ShowController',
                        resolve: {
                            item: [
                                config.model, '$stateParams',
                                function (Entity, $stateParams) {
                                    return Entity.findOne($stateParams.id).$promise;
                                }
                            ]
                        }
                    });
            };

            this.$get = [
                function () {
                    return {};
                }
            ];
        }
    ]);