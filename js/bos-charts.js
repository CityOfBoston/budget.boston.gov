if (document.getElementById("totalLineChart")) {
  var totalLineChart = document.getElementById("totalLineChart").getContext("2d");
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

if (totalLineChart) {
  var cabinetName = document.getElementById("totalLineChart").getAttribute("data-title");
  var cabinetDataString = document.getElementById("totalLineChart").getAttribute("data");
  var cabinetData = cabinetDataString.split(",");
  //console.log(cabinetData);
  var myChart = new Chart(totalLineChart, {
    type: 'line',
    data: {
      labels: chartLabels,
      datasets: [{
        label: 'All ' + cabinetName + ' Departments',
        data: cabinetData,
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

document.getElementById("totalLineChart").style.backgroundColor = '#F2F2F2';
document.getElementById("totalLineChart").style.padding = '20px';
document.getElementById("totalLineChart-wrapper").style.margin = '0 10px 0 0';
document.getElementById("aggregateBarChart").style.backgroundColor = '#F2F2F2';
document.getElementById("aggregateBarChart").style.padding = '20px';
document.getElementById("aggregateBarChart-wrapper").style.margin = '0 0 0 10px';
