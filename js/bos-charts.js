var ctx = document.getElementById("myChart").getContext("2d");
var chartLabelsString = document.getElementById("chart-labels").getAttribute("data");
var chartLabels = chartLabelsString.split(",");
var chartDataString = document.getElementById("chart-data").getAttribute("data");
var chartData = JSON.parse(chartDataString);
var chartDatasets = new Array();
//var chartColors = ['#091F2F','#FCB61A','#288BE4','#FB4D42','#F3F3F3']
var chartColors = ['rgba(9,31,47, 0.2)','rgba(252,182,26, 0.2)','rgba(40,139,228, 0.2)','rgba(251,77,66, 0.2)','rgba(243,243,243, 0.2)']
var chartBorderColors = ['rgba(9,31,47, 1)','rgba(252,182,26, 1)','rgba(40,139,228, 1)','rgba(251,77,66, 1)','rgba(243,243,243, 1)']
var k = 0;
for (var i in chartData) {
  chartDatasets.push({
    label: i,
    data: chartData[i],
    backgroundColor: chartColors[k], //['rgba(255, 99, 132, 0.2)',],
    borderColor: chartBorderColors[k], //['rgba(255,99,132,1)',],
    borderWidth: 1
  });
  k++;
}
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: chartLabels,
    datasets: chartDatasets, 
  },
  options: ""
});
