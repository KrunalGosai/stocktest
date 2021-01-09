import { SocketService } from './../../services/socket.service';
import { StockstateService } from './../../state/stockstate.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stocklist',
  templateUrl: './stocklist.component.html',
  styleUrls: ['./stocklist.component.css']
})
export class StocklistComponent implements OnInit {

  public displayColumns = [{name:'name',text:'Name'},{name:'value',text:'Value'},{name:'history',text:'History'},{name:'updatedAt',text:'Updated At'}]

  public chartdata = [
    { x: new Date("2021-01-08T17:46:25.136Z"), y: 2 },
    { x: new Date("2021-01-08T18:20:25.136Z"), y: 2.5 },
    { x: new Date("2021-01-08T18:56:25.136Z"), y: 5 },
    { x: new Date("2021-01-08T19:02:25.136Z"), y: 4.75 },
    { x: new Date("2021-01-08T19:20:25.136Z"), y: 4.75 },
  ]

  public detailChartTitle:string = '';
  public listData:any[] = [
    {
      name:"abc",
      value:250,
      history:this.chartdata,
      updatedAt:new Date()
    },
    {
      name:"xyz",
      value:250,
      history:this.chartdata,
      updatedAt:new Date()
    },
    {
      name:"test",
      value:250,
      history:this.chartdata,
      updatedAt:new Date()
    }
  ]

  constructor(private state:StockstateService,private socket:SocketService) { }

  ngOnInit(): void {
    this.socket.setupSocketConnection();
  }

  public getTimeDiff(date:string){
  //   var today = new Date();
  // var Christmas = new Date("2012-12-25");
  // var diffMs = (Christmas - today);  // milliseconds between now & Christmas
  //   var diffDays = Math.floor(diffMs / 86400000); // days
  //   var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
  //   var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
    // alert(diffDays + " days, " + diffHrs + " hours, " + diffMins + " minutes until Christmas 2009 =)");
return '2 minutes ago'
  }

  changSelection(row){

    this.detailChartTitle = row.name;
    this.chartdata = row.history;
    this.state.setStockHistory({data:this.chartdata,title:this.detailChartTitle});
  }

}
