angular
    .module('grolba.goal')
    .controller('grolba.goal.ChartController', [
        '$scope', '$stateParams', 'goals',
        function ($scope, $stateParams, goals) {
            $scope.goals = goals;
            $scope.view = $stateParams.view;

            $scope.charts = jQuery.map(goals, function (goal) {
                var chart = [{
                    data: [
                        {
                            data: [[1, 6.5], [2, 6.5], [3, 7], [4, 8], [5, 7.5], [6, 7], [7, 6.8], [8, 7], [9, 7.2], [10, 7], [11, 6.8], [12, 7]],
                            points: {
                                show: true,
                                radius: 6
                            },
                            splines: {
                                show: true,
                                tension: 0.45,
                                lineWidth: 5,
                                fill: 0
                            }
                        }
                    ],
                    options: {
                        series: {
                            shadowSize: 3
                        },
                        xaxis: {
                            font: {
                                color: '#ccc'
                            },
                            position: 'bottom',
                            ticks: [
                                [1, 'Jan'], [2, 'Feb'], [3, 'Mar'], [4, 'Apr'], [5, 'May'], [6, 'Jun'], [7, 'Jul'], [8, 'Aug'], [9, 'Sep'], [10, 'Oct'], [11, 'Nov'], [12, 'Dec']
                            ]
                        },
                        yaxis: {
                            font: {
                                color: '#ccc'
                            }
                        },
                        grid: {
                            hoverable: true,
                            clickable: true,
                            borderWidth: 0,
                            color: '#ccc'
                        },
                        tooltip: true,
                        tooltipOpts: {
                            content: '%x.1 is %y.4',
                            defaultTheme: false,
                            shifts: {
                                x: 0,
                                y: 20
                            }
                        }
                    }
                }];


                return chart;
            });
        }
    ]);