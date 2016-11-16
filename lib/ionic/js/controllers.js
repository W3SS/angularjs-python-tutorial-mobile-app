angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
})

.controller('HomeCtrl', function($scope, $stateParams) {
})
.controller('AboutCtrl', function($scope, $stateParams) {
})
.controller('BasicCtrl', function($scope, $stateParams) {
  $scope.basicItems = [
    { title: '01 - Overview', id: 1 , url:'01_overview.html'},
    { title: '02 - Environment Setup', id: 2 , url:'02_environment.html'},
    { title: '03 - Basic Syntax', id: 3, url:'03_basic_syntax.html' },
    { title: '04 - Variable Types', id: 4 , url:'04_variable_types.html'},
    { title: '05 - Basic Operators', id: 5 , url:'05_basic_operators.html'},    
    { title: '06 - Decision Making', id: 6 , url:'06_decision_making.html'},      
    { title: '07 - Loops', id: 7 , url:'07_loops.html'},
    { title: '08 - Numbers', id: 8 , url:'08_numbers.html'},    
    { title: '09 - Strings', id: 9 , url:'09_strings.html'},        
    { title: '10 - Lists', id: 10 , url:'10_lists.html'},
    { title: '11 - Tuples', id: 11 , url:'11_tuples.html'},    
    { title: '12 - Dictionary', id: 12 , url:'12_dictionary.html'},    
    { title: '13 - Date & Time', id: 13 , url:'13_date_time.html'},        
    { title: '14 - Functions', id: 14 , url:'14_functions.html'},
    { title: '15 - Modules', id: 15 , url:'15_modules.html'},
    { title: '16 - Files I/O', id: 16 , url:'16_files_io.html'},   
    { title: '17 - Exceptions Handling', id: 17 , url:'17_exceptions.html'}
  ];
})
.controller('AdvanceCtrl', function($scope) {
  $scope.advanceItems = [
    { title: '01 - Class Object', id: 1 , url:'01_classes_objects.html'},
    { title: '02 - Regular Expressions', id: 2 , url:'02_reg_expressions.html'},
    { title: '03 - CGI Programming', id: 3, url:'03_cgi_programming.html' },
    { title: '04 - MySQL Database Access', id: 4 , url:'04_database_access.html'},
    { title: '05 - Network Programming', id: 5 , url:'05_networking.html'},
    { title: '06 - Sending Email using SMTP', id: 6 , url:'06_sending_email.html'},
    { title: '07 - Multithreaded Programming', id: 7 , url:'07_multithreading.html'},
    { title: '08 - XML Processing', id: 8 , url:'08_xml_processing.html'},    
    { title: '09 - GUI Programming', id: 9 , url:'09_gui_programming.html'},
    { title: '10 - Further Extensions', id: 10 , url:'10_further_extensions.html'}
  ];
})

.controller('BasicItemCtrl', function($scope, $stateParams) {

})
.controller('AdvanceItemCtrl', function($scope, $stateParams) {

})
;

