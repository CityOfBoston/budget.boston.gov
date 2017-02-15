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
  //var table = document.createElement('table');
  //table.setAttribute("class","responsive-table responsive-table--horizontal");
  //var thead = document.createElement('thead');
  //var tbody = document.createElement('tbody');
  //table.appendChild(thead);
  //table.appendChild(tbody);
  //$('.js-table-result').append(table);
  $('table.js-table tbody').empty();
  //var th;
  //th.append("<th>Name</th>");
  //th.append("<th>Party</th>");
  //th.append("<th>Term</th>");
  //$('table.js-table').append(th);
  var tr;
  tr = $('<tr/>');
  tr.append("<th>Name</th>");
  tr.append("<th>Party</th>");
  tr.append("<th>Term</th>");
  $('table.js-table').append(tr);
  for (var i = 0; i < obj.length; i++) {
    tr = $('<tr/>');
    tr.append("<td>" + obj[i].nm + "</td>");
    tr.append("<td>" + obj[i].pp + "</td>");
    tr.append("<td>" + obj[i].tm + "</td>");
    $('table.js-table').append(tr);
  }
}
