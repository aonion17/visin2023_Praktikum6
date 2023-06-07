google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(getSpreadsheetData);

function getSpreadsheetData() {
    var spreadsheetId = '1I0AoQfK3QRzH1_cr715mEE1knCe_nbDTabRF7ZqeR7Y';
    var range = 'SALES!A1:E3';

    var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/' + spreadsheetId + '/gviz/tq?gid=0&range=' + range);
    query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
    if (response.isError()) {
        console.error('Error: ' + response.getMessage());
        return;
    }

    var data = response.getDataTable();
    drawCharts(data);
}

function drawCharts(data) {
    var options = {
        title: 'Total Harga Kategori Makanan Menurut Beberapa Negara Bagian',
        width: 500,
        height: 300
    };

    var chart1 = new google.visualization.PieChart(document.getElementById('chart1'));
    chart1.draw(data, options);

    var chart2 = new google.visualization.ColumnChart(document.getElementById('chart2'));
    chart2.draw(data, options);

    var chart3 = new google.visualization.AreaChart(document.getElementById('chart3'));
    chart3.draw(data, options);

    var chart4 = new google.visualization.ScatterChart(document.getElementById('chart4'));
    chart4.draw(data, options);
}
