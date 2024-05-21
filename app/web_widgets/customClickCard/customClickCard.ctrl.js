function ($scope,modalService) {

    $scope.handleItemClick = function(item) {
        $scope.properties.selected = item;
        
        if($scope.properties.openModal===true){
            openModal($scope.properties.modalId);
        }
        
        closeModal($scope.properties.closeOnSuccess);
    };
    
     function openModal(modalId) {
        modalService.open(modalId);
    }
    
    function closeModal(shouldClose) {
        if(shouldClose)
          modalService.close();
      }
}