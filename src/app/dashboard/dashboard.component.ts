import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	chart: any;
	sideData: boolean = false;

	chartOptions = {
		theme: "light2",
		animationEnabled: true,
		zoomEnabled: true,
		title: {
			text: "Performance",
			fontSize: "14",
			margin: 50,
			horizontalAlign: "left"
		},
		axisX: {
			valueFormatString: "MMM",
			intervalType: "month",
			interval: 1
		},
		axisY: {
			suffix: "k"
		},
		data: [{
			type: "line",
			name: "Pageviews",
			showInLegend: true,
			dataPoints: [
				{ x: new Date(2021, 5, 1), y: 20 },
				{ x: new Date(2021, 6, 1), y: 13.5 },
				{ x: new Date(2021, 7, 1), y: 9 },
				{ x: new Date(2021, 8, 1), y: 9.3 },
				{ x: new Date(2021, 9, 1), y: 15 },
				{ x: new Date(2021, 10, 1), y: 40 }
			]
		},
		{
			type: "line",
			name: "Clicks",
			showInLegend: true,
			dataPoints: [
				{ x: new Date(2021, 5, 1), y: 0 },
				{ x: new Date(2021, 6, 1), y: 43 },
				{ x: new Date(2021, 7, 1), y: 7 },
				{ x: new Date(2021, 8, 1), y: 0 },
				{ x: new Date(2021, 9, 1), y: 0 },
				{ x: new Date(2021, 10, 1), y: 0 }
			]
		},
		{
			type: "line",
			name: "Conversations",
			showInLegend: true,
			dataPoints: [
				{ x: new Date(2021, 5, 1), y: 0 },
				{ x: new Date(2021, 6, 1), y: 0 },
				{ x: new Date(2021, 7, 1), y: 0 },
				{ x: new Date(2021, 8, 1), y: 0 },
				{ x: new Date(2021, 9, 1), y: 0 },
				{ x: new Date(2021, 10, 1), y: 0 }
			]
		},
		{
			type: "line",
			name: "Commission",
			showInLegend: true,
			dataPoints: [
				{ x: new Date(2021, 5, 1), y: 0 },
				{ x: new Date(2021, 6, 1), y: 0 },
				{ x: new Date(2021, 7, 1), y: 0 },
				{ x: new Date(2021, 8, 1), y: 0 },
				{ x: new Date(2021, 9, 1), y: 0 },
				{ x: new Date(2021, 10, 1), y: 0 }
			]
		}
		]
	};

	tableData: any = [
		{
			id:1,
			type:"Adservice",
			click:"450",
			percent:"1.5",
			color:"#042B6D",
			image:"bi bi-bucket-fill",
			percentColor:'green'
		},
		{
			id:2,
			type:"Adrecord",
			click:"360",
			percent:"2.2",
			color:"#88CD64;",
			image:"bi bi-amazon",
			percentColor:'green'
		},
		{
			id:3,
			type:"Masoffer",
			click:"609",
			percent:"2.6",
			color:"#056FC0;",
			image:"bi bi-apple",
			percentColor:'red'
		},
		{
			id:4,
			type:"Wealthfront",
			click:"800",
			percent:"7.0",
			color:"#4C46A3;",
			image:"bi bi-amd",
			percentColor:'grey'
		}
		]

	ngOnInit(): void {
	}

	sideValue(event: any) {
		if (event == true) {
			this.sideData = true;
		} else if (event == false) {
			this.sideData = false;
		}
	}

}
