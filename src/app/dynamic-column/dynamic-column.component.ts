import { Component, OnInit } from '@angular/core';
import * as sampleData from '../../assets/sample.json';
@Component({
  selector: 'app-dynamic-column',
  templateUrl: './dynamic-column.component.html',
  styleUrls: ['./dynamic-column.component.css']
})
export class DynamicColumnComponent implements OnInit {

  columnData: any = sampleData.columns;
  rowData: any = sampleData.rows;
  // page = 4;
  page = 1;
  pageSize = 3;
  search:string="";
  collectionSize = this.rowData.length;
  data = this.rowData;
  constructor() { 
    console.log(this.columnData, this.rowData);
this.refreshData();
    
  }
  refreshData() {
    this.data = this.rowData
      .map((data, i) => ({id: i + 1, ...data}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
  reverse: boolean = false;
  sort(){
    this.reverse = !this.reverse;
    console.log(this.reverse);
    
  }
  ngOnInit(): void {
  }

}
