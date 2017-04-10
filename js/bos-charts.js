/**
 * Line chart
 */
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
    if ( lineCharts[i].getAttribute("large") ) {
      lineCharts[i].parentNode.style.margin = '0 15px 0 0';
    }
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
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        },
      }
    });
  }
}

/**
 * Bar chart
 */
if (document.getElementById("aggregateBarChart")) {
  var barCharts = document.getElementsByClassName("barChart");
  for (var i = 0, len = barCharts.length; i < len; i++) {
    barCharts[i].style.backgroundColor = '#F2F2F2';
    barCharts[i].style.padding = '20px';
    barCharts[i].parentNode.style.margin = '0 0 0 15px';
    var barChartContext = barCharts[i].getContext("2d");
    var chartLabelsString = barCharts[i].getAttribute("data-labels");
    var chartLabels = chartLabelsString.replace(/^\s+|\s+$/g,"").split(/\s*,\s*/);
    var chartDataString = barCharts[i].getAttribute("data");
    var chartData = JSON.parse(chartDataString);
    var chartDatasets = new Array();
    var chartColors = ['rgba(9,31,47, 1)','rgba(25,69,91, 1)','rgba(69,120,156, 1)','rgba(150,196,224, 1)'];
    var chartBorderColors = ['rgba(9,31,47, 1)','rgba(25,69,91, 1)','rgba(69,120,156, 1)','rgba(150,196,224, 1)'];
    var k = 0;
/*
    for (var j in chartData) {
      chartDatasets.push({
        label: j,
        data: chartData[j],
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
*/
    var fullColorList = new Array();
    for (var j in chartData) {
      fullColorList.push(chartColors[k]);
      if (k == chartColors.length -1) {
        k = 0;
      } else {
        k++;
      }
    }
    var myChart = new Chart(barChartContext, {
      type: 'horizontalBar',
      data: {
        labels: chartLabels,
        datasets: [{
          label: chartLabels, //['hi', 'bye', 'tie'],
          data: [2121,432,3535,324,235,574,2346,652],
          backgroundColor: fullColorList,//['rgba(9,31,47, 1)','rgba(25,69,91, 1)','rgba(69,120,156, 1)','rgba(150,196,224, 1)'],
          borderColors: fullColorList,//['rgba(9,31,47, 1)','rgba(25,69,91, 1)','rgba(69,120,156, 1)','rgba(150,196,224, 1)'],
        }]//chartDatasets
      },
      options: {
        legend: {
          display: false
        },
      }
    });
  }
}

//document.getElementById("aggregateBarChart-wrapper").style.margin = '0 0 0 15px';
//document.getElementById("totalLineChart-wrapper").style.margin = '0 15px 0 0';
