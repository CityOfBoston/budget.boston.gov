var ctx = document.getElementById("myChart").getContext("2d");
var chartLabelsString = document.getElementById("chart-labels").getAttribute("data");
var chartLabels = chartLabelsString.split(",");
var chartDataString = document.getElementById("chart-data").getAttribute("data");
var chartData = JSON.parse(chartDataString);
var chartDatasets = new Array();
//var chartColors = ['rgba(9,31,47, 0.3)','rgba(252,182,26, 0.3)','rgba(40,139,228, 0.3)','rgba(251,77,66, 0.3)','rgba(243,243,243, 0.3)']
var chartColors = ['rgba(9,31,47, .5)','rgba(252,182,26, .5)','rgba(40,139,228, .5)','rgba(251,77,66, .5)','rgba(183,183,183, .5)']
var chartBorderColors = ['rgba(9,31,47, 1)','rgba(252,182,26, 1)','rgba(40,139,228, 1)','rgba(251,77,66, 1)','rgba(183,183,183, 1)']
var k = 0;
for (var i in chartData) {
  chartDatasets.push({
    label: i,
    data: chartData[i],
    backgroundColor: chartColors[k],
    borderColor: chartBorderColors[k],
    borderWidth: 2
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
