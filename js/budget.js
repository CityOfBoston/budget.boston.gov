/**
 * Load table for the first .js-table-link found on page
 */
getJSONObject($('.js-table-link').attr('href'), $('.js-table-link').attr('data-js-table-th'), $('.js-table-link').attr('data-js-table-td'));

/**
 * Click event that determines which JSON table gets created
 */
$('.js-table-link').click(function(event) {
  event.preventDefault();
  getJSONObject($(this).attr('href'), $(this).attr('data-js-table-th'), $(this).attr('data-js-table-td'));
  $('.js-table-title').html($(this).html());
});

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
          //console.log(jsonString);
          var jsonObj = JSON.parse(jsonString);
          //console.log(jsonObj.feed.entry[0]);
          var thObj = (this, th);
          var thJSONObj = JSON.parse(thObj);
          var tdObj = (this, td);
          var tdJSONObj = JSON.parse(tdObj);
          if (jsonObj.feed != undefined ) {
            JSONObjCallback(jsonObj.feed.entry, thJSONObj, tdJSONObj);
          } else {
            JSONObjCallback(jsonObj, thJSONObj, tdJSONObj);
          }
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
      console.log(obj[i]);
      console.log(key);
      if (obj[i][key]["$t"] != undefined) {
        tr.append("<td>" + obj[i][key]["$t"] + "</td>");
      } else {
        tr.append("<td>" + obj[i][key] + "</td>");
      }
    }
    $('table.js-table').append(tr);
  }
}
