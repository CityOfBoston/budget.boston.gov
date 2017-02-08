function getJSONObject(path) {
  var req = new XMLHttpRequest();

  // Feature detection for CORS
  if ('withCredentials' in req) {
    req.open('GET', path, true);
    // Just like regular ol' XHR
    req.onreadystatechange = function() {
      if (req.readyState === 4) {
        if (req.status >= 200 && req.status < 400) {
          //console.log(req.responseText);
          //var obj = JSON.parse(req.responseText);
          JSONObjCallback(req.responseText);
          } else {
            // Handle error case
          }
        }
    };
    req.send();
  }
}

$('.report').click(function(event) {
  event.preventDefault();
  getJSONObject($(this).attr('href'));
});

//var test_remote = 'http://mysafeinfo.com/api/data?list=presidents&format=jsonp';
//var test_local = 'http://localhost:3000/test.json';

//var obj = getJSONObject(test_remote);
//var obj = getJSONObject(test_local);

function JSONObjCallback(obj) {
  console.log("value is " + obj);
  //document.getElementById("result").innerHTML = obj.nm + ", " + obj[0].pp + ", " + obj[0].tm;
  document.getElementById("result").innerHTML = obj;
}
