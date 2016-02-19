angular
    .module('community.pages')
    .config([
        '$stateProvider',
        function ($stateProvider) {
            $stateProvider
                .state('community.pages', {
                    abstract: true,
                    url: '/pages',
                    template: "<div data-ui-view></div>"
                })
                .state('community.pages.show', {
                    url: '/:id',
                    templateUrl: "module/community/pages/view/show.html",
                    controller: 'community.pages.ShowController',
                    resolve: {
                        page: [
                            'Page', '$stateParams',
                            function (Page, $stateParams) {
                                var filter = {
                                    where: {
                                        id: $stateParams.id
                                    }
                                };

                                return Page.findOne({
                                    filter: filter
                                }).$promise;
                            }
                        ]
                    }
                });
        }
    ]);