if (document.getElementById("lineChart")) {
  var lineCharts = document.getElementsByClassName("lineChart");
  for (var i = 0, len = lineCharts.length; i < len; i++) {
    var lineChartLabelsString = lineCharts[i].getAttribute("data-labels");
    var lineChartLabels = lineChartLabelsString.replace(/^\s+|\s+$/g,"").split(/\s*,\s*/);
    var lineChart = lineCharts[i].getContext("2d");
    var lineChartTitle = lineCharts[i].getAttribute("data-title");
    var lineChartDataString = lineCharts[i].getAttribute("data");
    var lineChartData = lineChartDataString.split(",");
    lineCharts[i].style.backgroundColor = '#F2F2F2';
    lineCharts[i].style.padding = '20px';
    var myChart = new Chart(lineChart, {
      type: 'line',
      data: {
        labels: lineChartLabels,
        datasets: [{
          label: lineChartTitle,
          data: lineChartData,
          backgroundColor: 'transparent',
          borderColor: '#4A7EBB',
          borderWidth: 2,
          pointBackgroundColor: '#232323',
          pointBorderColor: '#232323',
          pointRadius: 6,
          pointHoverRadius: 10
        }]
      },
      options: {
        legend: {
          display: false
        },
      }
    });
  }
}
if (document.getElementById("aggregateBarChart")) {
  var aggregateBarChart = document.getElementById("aggregateBarChart").getContext("2d");
}
if (document.getElementById("bosBarChart")) {
  var ctx2 = document.getElementById("bosBarChart").getContext("2d");
}
var chartLabelsString = document.getElementById("aggregateBarChart").getAttribute("data-labels");
var chartLabels = chartLabelsString.replace(/^\s+|\s+$/g,"").split(/\s*,\s*/);
var chartDataString = document.getElementById("aggregateBarChart").getAttribute("data");
var chartData = JSON.parse(chartDataString);
var chartDatasets = new Array();
var chartColors = ['rgba(9,31,47, 1)','rgba(25,69,91, 1)','rgba(69,120,156, 1)','rgba(150,196,224, 1)'];
var chartBorderColors = ['rgba(9,31,47, 1)','rgba(25,69,91, 1)','rgba(69,120,156, 1)','rgba(150,196,224, 1)'];
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

document.getElementById("aggregateBarChart").style.backgroundColor = '#F2F2F2';
document.getElementById("aggregateBarChart").style.padding = '20px';
document.getElementById("aggregateBarChart-wrapper").style.margin = '0 0 0 10px';
