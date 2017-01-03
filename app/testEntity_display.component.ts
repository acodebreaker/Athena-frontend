import { Component } from '@angular/core';
import { TestEntity } from './testEntity';
//import { HttpModule }    from '@angular/http';


const TValues : TestEntity[] = [
  {portfolio:'dp',application:'da',testRunId:'dt1' , status : 'pass' ,startTime : '123456' , endTime : '123456' , totalExecutionTime : '1'},
  {portfolio:'dp',application:'da',testRunId:'dt2' , status : 'pass' ,startTime : '123456' , endTime : '123456' , totalExecutionTime : '1'},
  {portfolio:'dp',application:'da',testRunId:'dt3' , status : 'pass' ,startTime : '123456' , endTime : '123456' , totalExecutionTime : '1'},
  {portfolio:'dp',application:'da',testRunId:'dt4' , status : 'pass' ,startTime : '123456' , endTime : '123456' , totalExecutionTime : '1'},
  {portfolio:'dp',application:'da',testRunId:'dt5' , status : 'pass' ,startTime : '123456' , endTime : '123456' , totalExecutionTime : '1'}
];

@Component({
	selector : 'data-table',
	template : `
          <table class="table">
    				<thead>
    					<th>Portfolio</th>
              <th>Test Run ID</th>
              <th>Application</th>
              <th>Status</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Total Execution Time</th>
    				</thead>
    				<tbody>
      				<tr *ngFor="let tValue of tValues">
      					<td>{{tValue.portfolio}}</td>
      					<td>{{tValue.application}}</td>
      					<td>{{tValue.testRunId}}</td>
                <td>{{tValue.status}}</td>
                <td>{{tValue.startTime}}</td>
                <td>{{tValue.endTime}}</td>
                <td>{{tValue.totalExecutionTime}}</td>
      				</tr>
    				</tbody>
  			 </table>`
})
export class TestTableView{
	tValues = TValues;
  restUrl:string = "/service/demo"
  //constructor(private http: Http){

  //}
  //callService():void{
    
  //}
}