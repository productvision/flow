angular
    .module('app')
    .directive('uiFullscreen', [
        '$document', 'AutoloaderProvider', 'uiLoad',
        function ($document, AutoloaderProvider, uiLoad) {
            return {
                restrict: 'AC',
                template: '<i class="fa fa-expand fa-fw text"></i><i class="fa fa-compress fa-fw text-active"></i>',
                link: function (scope, el, attr) {
                    el.addClass('hide');
                    var screenfull = AutoloaderProvider.getAssets().screenfull
                    uiLoad.load(screenfull).then(function () {
                        // disable on ie11
                        if (screenfull.enabled && !navigator.userAgent.match(/Trident.*rv:11\./)) {
                            el.removeClass('hide');
                        }
                        el.on('click', function () {
                            var target;
                            attr.target && ( target = $(attr.target)[0] );
                            screenfull.toggle(target);
                        });
                        $document.on(screenfull.raw.fullscreenchange, function () {
                            if (screenfull.isFullscreen) {
                                el.addClass('active');
                            } else {
                                el.removeClass('active');
                            }
                        });
                    });
                }
            };
        }]);
