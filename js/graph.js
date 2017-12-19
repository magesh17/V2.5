(function($) {
	
	"use strict";
	
	
	var barChartData = {
		labels : ["2010","2011","2012","2013","2014","2015","2016"],
		datasets : [
			{
				fillColor : "rgba(229,166,44,0.8)",
				strokeColor : "rgba(255,93,93,0.7)",
				highlightFill: "rgba(255,93,93,0.9)",
				highlightStroke: "rgba(0,0,0,0.9)",
				data : [10,18,32,40,60,80,95]
			}
		]

	};
	
	window.onload = function(){
		var ctx = document.getElementById("workflow-graph").getContext("2d");
		window.myBar = new Chart(ctx).Bar(barChartData, {
			responsive : true,
			scaleFontColor: "#999999"
		});
	};
	

})(window.jQuery);