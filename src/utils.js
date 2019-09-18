export function getQueryStringParameters() {
  var queryString = window.location.search;

  if (queryString != null && queryString.length > 0) {
    queryString = queryString.substring(1);
  }

  var params = queryString.split("&");

  var queryParams = {};

  for (var i = 0; i < params.length; i++) {
    var param = params[i].split("=");
    var name = param[0];
    var value = param[1];
    queryParams[name] = value;
  }

  return queryParams;
}
