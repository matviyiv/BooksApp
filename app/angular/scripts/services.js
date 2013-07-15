angular.module('bookServices', ['ngResource']).
    factory('Book', function($resource){
  return $resource('../books/:bookId', {}, {
    query: {method:'GET', params:{phoneId:'books'}, isArray:true}
  });
});