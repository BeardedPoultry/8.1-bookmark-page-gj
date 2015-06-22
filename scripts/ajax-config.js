/*
  If the url is to Parse, add the Parse headers
*/
$.ajaxPrefilter(function(options, originalOptions, jqXHR){
  if(options.url.match(/api.parse.com/)){
    options.headers = options.headers || {};
    options.headers['X-Parse-Application-Id'] = 'TPqr0wgzfLrceFqDWBztdRKjE1VCscgxAxyQmIbP';
    options.headers['X-Parse-REST-API-Key'] = 'FKMwRtI6xyMSPv4BWfHQtYaCnjnHEnIRi6Ysrelk';
  }
});
