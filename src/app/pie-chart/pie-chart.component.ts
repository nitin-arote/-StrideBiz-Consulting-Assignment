import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  public pieChartLabels = ['Total user','Active User' ];
  public pieChartData = [100, 50];
  public pieChartType = 'pie';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }
   submitForm(){

   }
}
