function PbTableCtrl($scope,modalService) {

  this.isArray = Array.isArray;

  this.isClickable = function () {
    return $scope.properties.isBound('selectedRow');
  };

  this.selectRow = function (row) {
    if (this.isClickable()) {
      $scope.properties.selectedRow = row;
      openModal($scope.properties.modalId);
    }
  };

  this.isSelected = function(row) {
    return angular.equals(row, $scope.properties.selectedRow);
  };
  
  function openModal(modalId) {
    modalService.open(modalId);
  } 
  
}
