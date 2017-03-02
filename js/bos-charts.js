var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["FY14", "FY15", "FY16", "FY18"],
    datasets: [
    {
      label: 'Central Fleet Management',
      data: [12, 19, 3, 5],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    },
    {
      label: 'Office of Streets',
      data: [1, 4, 13, 3],
      backgroundColor: [
        'rgba(0, 99, 132, 0.2)',
      ],
      borderColor: [
        'rgba(0,99,132,1)',
      ],
      borderWidth: 1
    }
    ]
  },
  options: ""
});
