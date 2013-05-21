$(function () {

	Highcharts.setOptions({
        chart: {
        	type: 'column',	
            style: {
                fontFamily: 'Arial',
                fontWeight: '400',
                fontSize: '10pt'
            }
        }
    });

        $('#container').highcharts({
            chart: {
                zoomType: false,
                marginLeft: 50,
                spacingRight: 10
            },
            credits: {
            	enabled: false
            },
            title: {
                text: false	
            },
            subtitle: {
                text: false
            },
            xAxis: {
                type: 'datetime',
                dateTimeLabelFormats: {
                year: '%Y'
            	},
            	labels: {
            		y: 20,
            		overflow: 'justify',
            		align: 'center'
            	},
    	        title: {
                    text: null
                },
            tickInterval: 24 * 3600 * 1000 * 30.42 * 12 * 10,

                },

            yAxis: {
                title: {
                    text: 'Deaths per year',
                    style: {
	                     color: '#000',
	                     fontWeight: '400'
                    	}
                    },
                max: 500,
                min: 0
            },
            tooltip: {
                shared: true,
                xDateFormat: '<strong>%Y</strong>'
            },
            legend: {
                enabled: false,
            },
            plotOptions: {
                column: {
                    lineWidth: 0,
                    marker: {
                        enabled: false
                    },
                    shadow: false,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },
            
            
        series: [{
                type: 'column',
                name: 'Deaths',
                pointPadding: 0,
                pointWidth: 5,
                pointInterval: 24 * 3600 * 1000 * 365.25,
                pointStart: Date.UTC(1950, 0, 01),
                data: [70,34,230,515,36,126,83,191,66,58,47,51,28,31,73,296,98,114,131,66,72,156,27,87,361,60,44,43,53,83,28,24,64,34,122,93,15,59,32,50,53,39,39,33,69,30,25,67,130,94,41,40,55,54,35,38,67,81,126,21,45,553,70],
                color: "#980043",
 
            }]
        });
    });