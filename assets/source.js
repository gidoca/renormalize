fetch('assets/generated/cumulative.json')
    .then(response => response.json())
    .then(data => {
        var labels = data.map(row => row.date)
        var datapoints = data.map(row => row.count)
        var context = document.getElementById('dailyvacc').getContext('2d');
        var chart = new Chart(context, {
            type: 'line',
        
            data: {
                labels: labels,
                datasets: [{
                    label: 'Daily vaccinations',
                    data: datapoints
                }]
            }
        });
    });
