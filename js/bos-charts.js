if (document.getElementById("myChart")) {
  var ctx = document.getElementById("myChart").getContext("2d");
}
if (document.getElementById("totalLineChart")) {
  var totalLineChart = document.getElementById("totalLineChart").getContext("2d");
}
if (document.getElementById("aggregateBarChart")) {
  var aggregateBarChart = document.getElementById("aggregateBarChart").getContext("2d");
}
if (document.getElementById("bosBarChart")) {
  var ctx2 = document.getElementById("bosBarChart").getContext("2d");
}
var chartLabelsString = document.getElementById("chart-labels").getAttribute("data");
console.log(chartLabelsString);
var chartLabels = chartLabelsString.split(",");
var chartDataString = document.getElementById("chart-data").getAttribute("data");
console.log(chartDataString);
var chartData = JSON.parse(chartDataString);
var chartDatasets = new Array();
var chartColors = ['rgba(9,31,47, .5)','rgba(252,182,26, .5)','rgba(40,139,228, .5)','rgba(251,77,66, .5)','rgba(183,183,183, .5)'];
var chartBorderColors = ['rgba(9,31,47, 1)','rgba(252,182,26, 1)','rgba(40,139,228, 1)','rgba(251,77,66, 1)','rgba(183,183,183, 1)'];
var k = 0;
for (var i in chartData) {
  chartDatasets.push({
    label: i,
    data: chartData[i],
    backgroundColor: chartColors[k],
    borderColor: chartBorderColors[k],
    borderWidth: 2,
    pointBackgroundColor: '#232323',
    pointBorderColor: '#232323'
  });
  if (k == chartColors.length -1) {
    k = 0;
  } else {
    k++;
  }
}
if (ctx) {
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: chartLabels,
      datasets: chartDatasets
    },
    options: ""
  });
}
if (totalLineChart) {
  var myChart = new Chart(totalLineChart, {
    type: 'line',
    data: {
      labels: chartLabels,
      datasets: chartDatasets
    },
    options: ""
  });
}
if (aggregateBarChart) {
  var myChart = new Chart(aggregateBarChart, {
    type: 'bar',
    data: {
      labels: chartLabels,
      datasets: chartDatasets
    },
    options: ""
  });
}

if (ctx2) {
  var myChart = new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: chartLabels,
      datasets: chartDatasets, 
    },
    options: ""
  });
}

document.getElementById("myChart").style.backgroundColor = '#F2F2F2';
