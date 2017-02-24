/**
 * Load table for the first .js-table-link found on page
 */
getJSONObject(
  $('.js-table-data').attr('data-table-source'), 
  $('.js-table-data').attr('data-table-th'), 
  $('.js-table-data').attr('data-table-td')
);

/**
 * Gets the JSON and puts it into an object
 */
function getJSONObject(path, th, td) {
  var req = new XMLHttpRequest();
  // Feature detection for CORS
  if ('withCredentials' in req) {
    req.open('GET', path, true);
    req.onreadystatechange = function() {
      if (req.readyState === 4) {
        if (req.status >= 200 && req.status < 400) {
          var jsonString = req.responseText;
          var jsonObj = JSON.parse(jsonString);
          var thObj = (this, th);
          var thJSONObj = JSON.parse(thObj);
          var tdObj = (this, td);
          var tdJSONObj = JSON.parse(tdObj);
          JSONObjCallback(jsonObj, thJSONObj, tdJSONObj);
          } else {
            // Handle error case
          }
        }
    };
    req.send();
  }
}

/**
 * Build the actual table that's displayed to the page
 */
function JSONObjCallback(obj, th, td) {
  $('table.js-table tbody').empty();
  var tr;
  tr = $('<tr/>');
  for (var i = 0; i < Object.keys(th[0]).length; i++) {
    var j = i + 1;
    tr.append("<th>" + th[0][j] + "</th>");
    $('table.js-table').append(tr);
  }
  for (var i = 0; i < obj.length; i++) {
    tr = $('<tr/>');
    for (var j = 0; j < Object.keys(td[0]).length; j++) {
      var k = j + 1;
      var key = td[0][k];
      tr.append("<td>" + obj[i][key] + "</td>");
    }
    $('table.js-table').append(tr);
  }
}
