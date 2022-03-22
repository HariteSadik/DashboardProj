const ctx2 = document.getElementById('Emp').getContext('2d');
const myChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['EFET', 'ISTA', 'ENCG', 'EX'],
        datasets: [{
            label: 'Employees',
            data: [40,30,10,2],
            backgroundColor: [
                'rgba(41, 155, 99, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(120, 46, 139, 1)'
            ],
            borderColor: [
                'rgba(41, 155, 99, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(120, 46, 139, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true
    }
});