var myApp = angular
					.module('myModule', [])
					.controller("ngSortTableHeader", function($scope){
      					var protocols = [       
      					{sNumber: "LIVKR-2015", title: "Contrary to popular belief", version: "Version 9", pInvestigator: "Michael Tardif", lSaved: new Date("November 23, 2015")},
      					{sNumber: "LIVHCC-2015", title: "A long established fact", version: "Version 1", pInvestigator: "Zain Man", lSaved: new Date("May 05, 2015")},
      					{sNumber: "LIKKCC-2015", title: "The standard chunk of Lorem Ipsum", version: "Version 9", pInvestigator: "Pauline Elipane", lSaved: new Date("August 15, 2015")},
      					{sNumber: "LICPCC-2015", title: "Many variations of passages of Lorem Ipsum available", version: "Version 2", pInvestigator: "Ezekiel Nwite", lSaved: new Date("October 27, 2015")},
      					{sNumber: "LMLHCC-2015", title: "Always free from repetition, injected humour", version: "Draft", pInvestigator: "Steve Jobs", lSaved: new Date("December 30, 2015")}
      					];

						$scope.protocols = protocols;
						$scope.columnName = "sNumber";
						$scope.revSort = false;
						$scope.shortColumn = function(column){
							$scope.revSort = ($scope.columnName == column)? !$scope.revSort : false;
							$scope.columnName = column;
						}
						$scope.getClass = function(column){
							if($scope.columnName == column){
								return $scope.revSort ? 'arrowDown' : 'arrowUp';							
							}
							return '';						
						}
					});