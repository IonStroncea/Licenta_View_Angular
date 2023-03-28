import { MenuComponent } from './../menu/menu.component';
import { IParent } from './IParent';

import { Component ,ViewChild,ViewContainerRef,ViewEncapsulation } from '@angular/core';
import {TabulatorFull as Tabulator} from 'tabulator-tables';
import { ProcessesServiceService } from '../processes-service.service';

@Component({
  selector: 'app-processes',
  templateUrl: './processes.component.html',
  styleUrls: ['./processes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProcessesComponent implements IParent {

  tab = document.createElement('div');
  private service : ProcessesServiceService;

  private values : any;

  public Notify(input: any) {
    console.log("clicked");
  }

  @ViewChild('menu', {read : ViewContainerRef}) target: ViewContainerRef;

  constructor(service : ProcessesServiceService)
  {
    this.service = service;
    this.tabledata = service.GetProcesses();
  } 
  private tabledata: any[];

  private exTable : any;

  ngAfterViewInit() {
    
    this.DrawTable();
    this.AddMenu();
  }

  AddMenu(){
    var menu = this.target.createComponent<any>(MenuComponent);
    menu.instance.parent = this;
  }

  DrawTable(){
    this.exTable = new Tabulator('#my-tabular-table', {
      data: this.tabledata,           //load row data from array
      layout: "fitColumns",      //fit columns to width of table
      responsiveLayout: "hide",  //hide columns that dont fit on the table
      addRowPos: "top",          //when adding a new row, add it to the top of the table
      history: true,             //allow undo and redo actions on the table
      pagination: true,       //paginate the data
      paginationSize: 20,         //allow 7 rows per page of data
      paginationCounter: "rows", //display count of paginated rows in footer
      movableColumns: true,      //allow column order to be changed
      initialSort: [             //set the initial sort order of the data
          { column: "ramUssage", dir: "desc" },
      ],
      columns: [                 //define the table columns
          { title: "Name", field: "name", editor: "input", sorter: "string" },
          { title: "Task id", field: "id", hozAlign: "center", editor: null, sorter: "number" },
          { title: "CPU Usage", field: "ussage", hozAlign: "center", formatter:function(cell, formatterParams, onRendered){    
                    return cell.getValue() >= 1 ? parseFloat(cell.getValue()).toFixed(2) + "%" : "<1 %"; 
                  }, 
                  editor: null, sorter: "number" },
          {
              title: "RAM Usage", field: "ramUssage", editor: null, hozAlign: "center",
              formatter:function(cell, formatterParams, onRendered){    
                    return cell.getValue() + " MB"; 
                  }, 
                  sorter: "number"}
      ]
    });
  }
}
