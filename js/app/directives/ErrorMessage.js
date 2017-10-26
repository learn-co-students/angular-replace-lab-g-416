angular
  .module('app')
  .directive('errorMessage', function () {
    return {
      replace: true;
      template: '<div>Oh no, and error occurred!</div>'
    }
  })
