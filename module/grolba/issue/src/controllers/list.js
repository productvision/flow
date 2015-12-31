angular
    .module('grolba.issue')
    .controller('grolba.issue.ListController', [
        '$scope', 'Issue', 'entities', 'entityReflector',
        function ($scope, Issue, entities, entityReflector) {
            $scope.entities = entities;

            $scope.addEntity = function () {
                $scope.entities.push(Issue.create({
                    summary: 'Generated'
                }));
            };
            $scope.deleteEntity = function (id) {
                //$scope.gridOptions.data.splice(0,1);
                //Issue.deleteById({
                //    id: id
                //})
            };
            $scope.searcher = {
                data: {
                    query: ''
                },
                search: function () {
                    $scope.gridApi.grid.refresh();
                }
            };

            var columnDefs = entityReflector.mapProperties(function (property) {
                return {
                    displayName: property.hasOwnProperty('description') ? property.description : property.key,
                    field: property.key,
                    enableCellEdit: true
                };
            });

            $scope.gridOptions = {
                columnDefs: columnDefs,
                data: entities,
                onRegisterApi: function (gridApi) {
                    $scope.gridApi = gridApi;

                    var columnNames = $scope.gridOptions.columnDefs.map(function (columnDef) {
                        return columnDef.field;
                    });

                    $scope.gridApi.edit.on.afterCellEdit($scope, function (entity) {
                        entity.$save();
                    });
                    $scope.gridApi.grid.registerRowsProcessor(function (renderableRows) {
                        var matcher = new RegExp($scope.searcher.data.query, 'i');
                        renderableRows.forEach(function (row) {
                            var match = false;
                            columnNames.forEach(function (field) {
                                if (row.entity.hasOwnProperty(field)) {
                                    if (row.entity[field].match(matcher)) {
                                        match = true;
                                    }
                                }
                            });
                            if (!match) {
                                row.visible = false;
                            }
                        });
                        return renderableRows;
                    }, 200);
                }
            };
        }
    ]);