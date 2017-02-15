function getJSONObject(path) {
  var req = new XMLHttpRequest();

  // Feature detection for CORS
  if ('withCredentials' in req) {
    req.open('GET', path, true);
    req.onreadystatechange = function() {
      if (req.readyState === 4) {
        if (req.status >= 200 && req.status < 400) {
          //console.log(req.responseText);
          var jsonString = req.responseText;
          var jsonObj = JSON.parse(jsonString);
          JSONObjCallback(jsonObj);
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
  getJSONObject($(this).attr('href'));
  $('.js-table-title').html($(this).html());
});

function JSONObjCallback(obj) {
  $('table tbody').empty();
  var tr;
  for (var i = 0; i < obj.length; i++) {
    tr = $('<tr/>');
    tr.append("<td>" + obj[i].nm + "</td>");
    tr.append("<td>" + obj[i].pp + "</td>");
    tr.append("<td>" + obj[i].tm + "</td>");
    $('table').append(tr);
  }
}
