/*
  If the url is to Parse, add the Parse headers
*/
$.ajaxPrefilter(function(options, originalOptions, jqXHR){
  if(options.url.match(/api.parse.com/1/)){
    options.headers = options.headers || {};
    options.headers['X-Parse-Application-Id'] = 'BJPMxxymMUpqvEVllLfI1S8CVkozHRfjWKDG52nA';
    options.headers['X-Parse-REST-API-Key'] = 'GwSQiqrl8FwPkVK5HAYurfWsnPgLC58a73q9K3yg';
  }
});
