angular
    .module('grolba.calendar')
    .controller('grolba.calendar.IndexController', [
        '$scope', 'events',
        function ($scope, events) {
            var date = new Date();
            var d = date.getDate();
            var m = date.getMonth();
            var y = date.getFullYear();

            $scope.events = events;

            $scope.precision = 400;
            $scope.lastClickTime = 0;
            $scope.alertOnEventClick = function (date) {
                var time = new Date().getTime();
                if (time - $scope.lastClickTime <= $scope.precision) {
                    $scope.events.push({
                        title: 'New Event',
                        start: date,
                        className: ['b-l b-2x b-info']
                    });
                }
                $scope.lastClickTime = time;
            };
            /* alert on Drop */
            $scope.alertOnDrop = function (event, delta) {
                $scope.alertMessage = ('Event Droped to make dayDelta ' + delta);
            };
            /* alert on Resize */
            $scope.alertOnResize = function (event, delta) {
                $scope.alertMessage = ('Event Resized to make dayDelta ' + delta);
            };

            $scope.overlay = $('.fc-overlay');
            $scope.alertOnMouseOver = function (event, jsEvent) {
                $scope.event = event;
                $scope.overlay.removeClass('left right top').find('.arrow').removeClass('left right top pull-up');
                var wrap = $(jsEvent.target).closest('.fc-event');
                var cal = wrap.closest('.calendar');
                var left = wrap.offset().left - cal.offset().left;
                var right = cal.width() - (wrap.offset().left - cal.offset().left + wrap.width());
                var top = cal.height() - (wrap.offset().top - cal.offset().top + wrap.height());
                if (right > $scope.overlay.width()) {
                    $scope.overlay.addClass('left').find('.arrow').addClass('left pull-up')
                } else if (left > $scope.overlay.width()) {
                    $scope.overlay.addClass('right').find('.arrow').addClass('right pull-up');
                } else {
                    $scope.overlay.find('.arrow').addClass('top');
                }
                if (top < $scope.overlay.height()) {
                    $scope.overlay.addClass('top').find('.arrow').removeClass('pull-up').addClass('pull-down')
                }
                (wrap.find('.fc-overlay').length == 0) && wrap.append($scope.overlay);
            };

            /* config object */
            $scope.uiConfig = {
                calendar: {
                    height: 450,
                    editable: true,
                    lang: 'de',
                    header: {
                        left: 'prev',
                        center: 'title',
                        right: 'next'
                    },
                    dayClick: $scope.alertOnEventClick,
                    eventDrop: $scope.alertOnDrop,
                    eventResize: $scope.alertOnResize,
                    eventMouseover: $scope.alertOnMouseOver
                }
            };

            /* add custom event*/
            $scope.addEvent = function () {
                $scope.events.push({
                    title: 'New Event',
                    start: new Date(y, m, d),
                    className: ['b-l b-2x b-info']
                });
            };

            /* remove event */
            $scope.remove = function (index) {
                $scope.events.splice(index, 1);
            };

            /* Change View */
            $scope.changeView = function (view) {
                $('.calendar').fullCalendar('changeView', view);
            };

            $scope.today = function () {
                $('.calendar').fullCalendar('today');
            };

            /* event sources array*/
            $scope.eventSources = [$scope.events];
        }]);
/* EOF */