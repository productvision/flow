angular
    .module('grolba.goal')
    .controller('grolba.goal.IndexController', [
        '$filter', '$http', '$interval', '$scope', 'goals',
        function ($filter, $http, $interval, $scope, goals) {
            debugger;
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
        }
    ]);