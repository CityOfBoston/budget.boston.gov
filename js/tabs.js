// Override tab AJAX from boston.gov
var tabs = document.getElementsByClassName("tabs__tab-link");
for (var i = 0; i < tabs.length; i++) {
  tabs[i].onclick = function() {
    window.location = this.href;
  }
}
