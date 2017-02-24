// Get all tab links
var tabs = document.getElementsByClassName("tabs__tab-link");
// Get all tab list-items
var liTabs = document.getElementsByClassName("tabs__tab");

// Override tab AJAX from boston.gov
for (var i = 0; i < tabs.length; i++) {
  tabs[i].onclick = function() {
    window.location = this.href;
  }
}

// Hide the first tab that is used only to trick boston js
//document.getElementById("decoy").style.display = 'none';

// Add is-active class to tab link
for (var i = 0; i < tabs.length; i++) {
  if (tabs[i].href == window.location.href) {
    var tabLink = "a[href='" + tabs[i].href + "']";
    var tabObj = document.querySelectorAll(tabLink);
    tabObj[0].className += ' is-active';
  }
}

// Add is-active class to tab li
var relPath = window.location.pathname+window.location.search;
if( relPath.charAt( 0 ) === '/' ) {
  adjRelPath = relPath.slice( 1 );
}
for (var i = 0; i < liTabs.length; i++) {
  if (liTabs[i].id == adjRelPath) {
    var tabID = "li[id='" + liTabs[i].id + "']";
    var tabObj = document.querySelectorAll(tabID);
    tabObj[0].className += ' is-active';
  }
  // Account for the homepage with path "/"
  else if (adjRelPath == "") {
    var tabObj = document.querySelectorAll("li[id='front']");
    tabObj[0].className += ' is-active';
  }
}
