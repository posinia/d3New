window.onload = function(){
	test();
};

function test(){
	var chartData = [
		{
			"src_ip": "192.168.1.144",
			"src_port": "25900",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "31683",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "53166",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "63005",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "42892",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "16746",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "52572",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "37982",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "27084",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "27084",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "57607",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "57607",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "10557",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "33196",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "59515",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "20754",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "8707",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "36305",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "33352",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "29136",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "53166",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "19098",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "42892",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "27928",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "46617",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "18459",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "18459",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "37982",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "31242",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "59515",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "41244",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "8792",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "31140",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "30396",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "8707",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "5869",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "34723",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "34723",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "19098",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "27928",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "40266",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "52572",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "17137",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "14422",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "14422",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "49449",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "6061",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "47758",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "31242",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "33196",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "14498",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "15744",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "15744",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "34994",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "22263",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "25900",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "40266",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "39198",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "17137",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "36208",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "36208",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "49449",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "6061",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "47758",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "35239",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "10557",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "41244",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "8792",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "55244",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "31140",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "34994",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "36305",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "22263",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "29136",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "9248",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "9248",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "31683",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "63005",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "16746",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "39198",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "46617",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "35239",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "14498",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "20754",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "55244",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "30396",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "5869",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		},
		{
			"src_ip": "192.168.1.144",
			"src_port": "33352",
			"dst_port": "123",
			"dst_ip": "91.189.89.198"
		}
	];
	
	
	var pieOpt = {
		x:{
			"value": "key"
		},
		y:{
			"value": "value"
		},
		balloon:{
			"value":"[[key]]: [[percentage]]"
		},
		legend:{
		
		},
		animation:{
		
		}
	};
	
	var pieData = d3.nest()
		.key(function(d){ return d.src_ip;})
		.rollup(function(a){
			return a.length;
		})
		.entries(chartData);
	console.log("pieData", pieData);
	
	//NaruSecD3.createPieGraph(pieOpt, pieData);
}