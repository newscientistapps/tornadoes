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
                data: [52,19,192,472,26,18,73,111,64,21,42,32,22,22,48,253,35,102,96,60,61,48,15,68,292,49,35,40,45,24,20,20,53,26,104,43,10,47,30,44,46,30,34,25,60,24,24,68,130,93,41,36,53,43,35,14,63,79,80,14,27,364,44],
                color: "#980043",
 
            }]
        });
    });