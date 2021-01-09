import { StockstateService } from './../../state/stockstate.service';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import {Chart} from 'chart.js'

@Component({
  selector: 'linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent implements OnInit, AfterViewInit {

  constructor(private state:StockstateService) { }
  ngOnInit(): void {
    this.state.getStockHistory().subscribe(value => {
      if(value && value.title){
        this.data = value.data;
        this.title = value.title;
        this.setupChart();
      }
    })
    
  }
  
  @Input() title:string = '';
  @Input() data:any[] = [];
  @Input() showLabel:boolean = false;


  name = 'Angular';
  canvas: any;
  ctx: any;
  lineChart:Chart;
  @ViewChild('mychart') mychart;

  ngAfterViewInit() {
    this.setupChart();
  }


  setupChart(){
    if(!this.mychart) return;
    this.canvas = this.mychart.nativeElement; 
    this.ctx = this.canvas.getContext('2d');

     this.lineChart = new Chart(this.ctx, {
      type: 'line',
      data: {
        datasets: [{
          label: this.title,
          borderColor: "rgb(255, 99, 132)",
          data: this.data,
        }]
      },
      options: {
        scales: {
            xAxes: [{
                type: 'time',
                time: {
                  displayFormats: {
                      quarter: 'h:mm a'
                  }
                },
                scaleLabel: {
                  labelString: 'Time',
                  display: this.showLabel
                }
            }],
            yAxes:[{
              scaleLabel: {
                      labelString: 'Price',
                      display: this.showLabel
                    }

            }]
        }
      }
    });
  }

}
