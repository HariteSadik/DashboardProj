const ctx = document.getElementById('Gains').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        datasets: [{
            label: 'gains b $',
            data: [1000, 2000, 4000, 3000, 1500, 6000, 1000, 1000, 1000, 3000, 1700, 1000],
            backgroundColor: [
                'rgba(85, 85, 85, 1)'
            ],
            borderColor: [
                'rgb(41, 155, 99)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true
    }
});
