angular
    .module('grolba.goal')
    .controller('grolba.goal.IndexController', [
        '$scope', '$stateParams', 'goals',
        function ($scope, $stateParams, goals) {
            function map(elements, callback, arg) {
                var value,
                    i = 0,
                    length = elements.length,
                    result = [];

                for (; i < length; i++) {
                    value = callback(elements[i], i, arg);

                    if (value != null) {
                        result.push(value);
                    }
                }

                return result;
            }

            $scope.goals = goals;
            $scope.view = $stateParams.view;

            $scope.gridOptions = {
                enableFiltering: true,
                enableGroupHeaderSelection: true,
                treeRowHeaderAlwaysVisible: false,
                data: goals,
                columnDefs: [
                    {
                        name: 'objective',
                        grouping: {
                            groupPriority: 0
                        },
                        sort: {
                            priority: 0,
                            direction: 'desc'
                        },
                        width: '30%'
                    },
                    {
                        name: 'keyResults',
                        grouping: {
                            groupPriority: 1
                        },
                        width: '30%'
                    },
                    {
                        field: 'measurements',
                        width: '25%'
                    },
                    {
                        field: 'value',
                        width: '15%'
                    }
                ]
            };

            $scope.charts = jQuery.map(goals, function (goal) {
                var keyResult = goal.keyResults[0];
                var measurements = keyResult.measurements;
                measurements.push({
                    datetime: keyResult.dueDate,
                    value: keyResult.expectedValue
                });

                var data = map(measurements, function (measurement) {
                    var date = new Date(measurement.datetime);

                    return [date.getTime(), measurement.value];
                });
                var ticks = map(measurements, function (measurement) {
                    var date = new Date(measurement.datetime);

                    return [
                        date.toISOString().slice(0, 10),
                        date.toISOString().slice(0, 10)
                    ];
                });
                //debugger;
                var chart = [{
                    data: [
                        {
                            data: data,
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
                        xaxis: [
                            {
                                position: 'bottom',
                                ticks: ticks
                            }
                        ],
                        yaxis: {},
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