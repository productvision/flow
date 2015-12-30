angular
    .module('app')
    .provider('ModuleReflector', [
        function () {
            function ModuleReflector(moduleName) {
                this.moduleName = moduleName;
            }

            ModuleReflector.prototype.getConfigBlocks = function () {
                return angular.module(this.moduleName)._configBlocks;
            };
            ModuleReflector.prototype.getStates = function () {
                var stateProvider = this.createStateProvider();

                angular.forEach(this.getConfigBlocks(), function (configBlock) {
                    var configMethodArguments = Array.prototype.slice.call(configBlock.pop()).pop();
                    var configMethod = configMethodArguments.pop();
                    var argumentMatches = configMethod.toString().match(/^\s*function\s+(?:\w*\s*)?\((.*?)\)/);
                    if (argumentMatches) {
                        var args = jQuery.map(argumentMatches.pop().split(','), jQuery.trim);
                        if (args.indexOf('$stateProvider') > -1) {
                            configMethod.apply(null, jQuery.map(args, function (arg) {
                                var replaceMap = {
                                    '$stateProvider': stateProvider
                                };
                                if (Object.keys(replaceMap).indexOf(arg) > -1) {
                                    arg = replaceMap[arg];
                                }
                                return arg;
                            }));
                        }
                    }
                });
                return stateProvider.all();
            };
            ModuleReflector.prototype.createStateProvider = function () {
                function StateProvider() {
                    this.states = {};
                }

                StateProvider.prototype.state = function (name, config) {
                    this.states[name] = config;

                    return this;
                };
                StateProvider.prototype.all = function () {
                    return this.states;
                };

                return new StateProvider();
            };

            this.$get = [
                function () {
                    return ModuleReflector;
                }
            ];
        }
    ]);