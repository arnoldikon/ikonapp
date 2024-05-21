function ($scope) {

    
    this.nextPage = function(){
        $scope.properties.record.p+=1;
    };
    
     this.prevPage = function(){
        $scope.properties.record.p-=1;
    };

}