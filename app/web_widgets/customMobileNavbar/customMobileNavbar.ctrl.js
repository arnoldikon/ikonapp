function MobileNavbar($scope, modalService) {
    var ctrl = this;
    ctrl.openCurrentSessionModal = function() {
        modalService.open($scope.properties.currentSessionModalId);
    };
    
}
