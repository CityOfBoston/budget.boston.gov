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
          //console.log(thObj);
          //console.log(thJSONObj);
          //console.log(tdObj);
          //console.log(tdJSONObj);
          JSONObjCallback(jsonObj, thJSONObj, tdJSONObj);
          } else {
            // Handle error case
          }
        }
    };
    req.send();
  }
}

$('.js-table-link').click(function(event) {
  event.preventDefault();
  getJSONObject($(this).attr('href'), $(this).attr('data-js-table-th'), $(this).attr('data-js-table-td'));
  $('.js-table-title').html($(this).html());
});

function JSONObjCallback(obj, th, td) {
  $('table.js-table tbody').empty();
  var tr;
  tr = $('<tr/>');
  for (var i = 0; i < Object.keys(th[0]).length; i++) {
    console.log(th);
    var j = i + 1;
    tr.append("<th>" + th[0][j] + "</th>");
    $('table.js-table').append(tr);
  }
  for (var i = 0; i < obj.length; i++) {
    tr = $('<tr/>');
    tr.append("<td>" + obj[i].nm + "</td>");
    tr.append("<td>" + obj[i].pp + "</td>");
    tr.append("<td>" + obj[i].tm + "</td>");
    $('table.js-table').append(tr);
  }
}
