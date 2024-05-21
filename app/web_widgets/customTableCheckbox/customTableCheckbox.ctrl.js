function ($scope) {
     $scope.items = $scope.properties.content;

    $scope.properties.selectedRows = [];
    $scope.selectAll = false;

    $scope.toggleSelection = function(item) {
        
        if($scope.selectAll == true){
                $scope.selectAll = !$scope.selectAll;
                
            var index = $scope.properties.selectedRows.indexOf(item);
            if (index !== -1) {
                $scope.properties.selectedRows.splice(index, 1);
            }
                
        }
        
        if (item.selected) {
            $scope.properties.selectedRows.push(item);
            
        } 
        else {
            var index = $scope.properties.selectedRows.indexOf(item);
            if (index !== -1) {
                $scope.properties.selectedRows.splice(index, 1);
            }
        }
        
    };


    $scope.toggleSelectAll = function() {
        angular.forEach($scope.items, function(item) {
            item.selected = $scope.selectAll;
        });

        if ($scope.selectAll) {
            $scope.properties.selectedRows = angular.copy($scope.items);
        } else {
            $scope.properties.selectedRows = [];
        }
    };
}