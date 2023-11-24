
document.addEventListener("DOMContentLoaded", function() {
    
    var barData = {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
      datasets: [{
        label: 'Ventas',
        data: [12, 19, 3, 5, 2],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    };
  
 
    var barConfig = {
      type: 'bar',
      data: barData,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };
  

    var barChart = new Chart(document.getElementById('barChart'), barConfig);
  
 
    var pieData = {
      labels: ['Rojo', 'Verde', 'Azul'],
      datasets: [{
        data: [30, 50, 20],
        backgroundColor: ['red', 'green', 'blue']
      }]
    };
  
  
    var pieConfig = {
      type: 'pie',
      data: pieData
    };
  
   
    var pieChart = new Chart(document.getElementById('pieChart'), pieConfig);
  });
  