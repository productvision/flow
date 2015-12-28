angular
    .module('app')
    .provider('LazyState', [
        '$stateProvider',
        function ($stateProvider) {
            this.$get = [
                '$state',
                function ($state) {
                    return {
                        addState: function (name, state) {
                            if ($state.get(name)) {
                                console.info('State "' + name + '" is already defined');
                                return;
                            }

                            $stateProvider.state(name, state);
                        }
                    }
                }
            ]
        }
    ]);