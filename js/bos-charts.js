var ctx = document.getElementById("myChart").getContext("2d");
var chartLabelsString = document.getElementById("chart-labels").getAttribute("data");
var chartLabels = chartLabelsString.split(",");
var chartDataString = document.getElementById("chart-data").getAttribute("data");
var chartData = JSON.parse(chartDataString);
console.log(chartData);
var chartDatasets = new Array();
for (var i in chartData) {
  console.log(i);
  console.log(chartData[i]);
  chartDatasets.push({
    label: i,
    data: chartData[i],
    backgroundColor: ['rgba(255, 99, 132, 0.2)',],
    borderColor: ['rgba(255,99,132,1)',],
    borderWidth: 1
  });
}
console.log(chartDatasets);
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    //labels: ["FY14", "FY15", "FY16", "FY18"],
    labels: chartLabels,
    datasets: chartDatasets, 
/*
      [
    {
      label: ['Central Fleet Management', 'other'],
      data: [2429952, 2672446, 2557755, 2590424],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
      ],
      borderColor: [
        'rgba(255,99,132,1)',
      ],
      borderWidth: 1
    },
    {
      label: 'Office of Streets',
      data: [1264046, 1360422, 1822681, 1973144],
      backgroundColor: [
        'rgba(0, 99, 132, 0.2)',
      ],
      borderColor: [
        'rgba(0,99,132,1)',
      ],
      borderWidth: 1
    }
    ]
*/
  },
  options: ""
});
