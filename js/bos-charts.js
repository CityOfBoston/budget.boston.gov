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
    //var lineChartMax = Math.max.apply(Math, lineChartData);
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
              beginAtZero: true,
              //max: lineChartMax,
              userCallback: function(value, index, values) {
                // Convert the number to a string and splite the string every 3 charaters from the end
                value = value.toString();
                value = value.split(/(?=(?:...)*$)/);
                value = value.join(',');
                return value;
              }
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
    var chartData = chartDataString.replace(/^\s+|\s+$/g,"").split(/\s*,\s*/);
    var chartColors = ['rgba(9,31,47, 1)','rgba(25,69,91, 1)','rgba(69,120,156, 1)','rgba(150,196,224, 1)'];
    var chartBorderColors = ['rgba(9,31,47, 1)','rgba(25,69,91, 1)','rgba(69,120,156, 1)','rgba(150,196,224, 1)'];
    var k = 0;
    var fullColorList = new Array();
    for (var j in chartData) {
      fullColorList.push(chartColors[k]);
      if (k == chartColors.length -1) {
        k = 0;
      } else {
        k++;
      }
    }
    console.log(chartLabels);
    console.log(chartData);
    var myChart = new Chart(barChartContext, {
      type: 'horizontalBar',
      data: {
        labels: chartLabels,
        datasets: [{
          label: "",
          data: chartData,
          backgroundColor: fullColorList,
          borderColors: fullColorList,
        }]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            ticks: {
              userCallback: function(value, index, values) {
                // Convert the number to a string and splite the string every 3 charaters from the end
                value = value.toString();
                value = value.split(/(?=(?:...)*$)/);
                value = value.join(',');
                return value;
              }
            }
          }]
        },
      }
    });
  }
}

//document.getElementById("aggregateBarChart-wrapper").style.margin = '0 0 0 15px';
//document.getElementById("totalLineChart-wrapper").style.margin = '0 15px 0 0';
