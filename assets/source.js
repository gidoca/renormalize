var context = document.getElementById('dailyvacc').getContext('2d');
var chart = new Chart(context, {
    type: 'line',

    data: {
        // Dummy data for now
        labels: ['20.12.2020', '21.12.2020', '22.12.2020'],
        datasets: [{
            label: 'Daily vaccinations',
            data: [0, 7, 22]
        }]
    }
});