function ($scope,$http,modalService) {
    
    $scope.update = function(){
        $scope.properties.value = $scope.properties.newValue;
        
        closeModal($scope.properties.closeOnSuccess);
        if($scope.properties.openModal){
            openModal($scope.properties.modalId);
        }
        if($scope.properties.refreshUrl.length>0){
            $http.get($scope.properties.refreshUrl)
            .then(function(response) {
                // Success callback
                $scope.properties.listData = response.data;
            }, function(error) {
                // Error callback
                console.error('Error:', error);
            });
        }
    };
    
    function openModal(modalId) {
        modalService.open(modalId);
    }
    
    function closeModal(shouldClose) {
        if(shouldClose)
          modalService.close();
      }
}