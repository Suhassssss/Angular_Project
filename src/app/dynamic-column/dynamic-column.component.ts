import { Component, OnInit } from '@angular/core';
import * as sampleData from 'src/assets/sample.json';
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
  checked:boolean = false;
  count: number = 0;
  selectedMsg: string = "0 row selected";
  allChecked: boolean = false;
  constructor() { 
this.refreshData();
    
  }
  refreshData() {
    this.data = this.rowData
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    
  }
  reverse: boolean = false;
  sort(){
    this.reverse = !this.reverse;
  }
  selectcount(arg){
    console.log(arg.target.checked);
    if (arg.target.checked == true) {
      this.count++;
    }
    else this.count--;
    this.selectedMsg = this.count == 1? `1 row selected`: `${this.count} rows selected`;
    console.log(this.selectedMsg);
    if(this.count < this.pageSize){
      this.allChecked = false;
    }
    if(this.count === this.pageSize){
      this.allChecked = true;
    }
      }
  selectAll(arg){
    this.checked = true;
    this.allChecked = !this.allChecked;
    if (arg.target.checked == false) {
      this.count=0;
      this.checked = false;
    }
    else{
      this.checked = true;
      this.count = this.pageSize;
    }
    console.log(arg.target.checked);
    this.selectedMsg = `${this.count} rows selected`;
  }
  ngOnInit(): void {
  }

}
