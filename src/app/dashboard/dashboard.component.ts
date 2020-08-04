import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['user1', 'user2', 'user3', 'user4', 'user5', 'user6', 'user7'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [25, 60, 80, 100, 56, 55, 40], label: 'User Score'},
    // {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
  ngOnInit() {
  }

}
