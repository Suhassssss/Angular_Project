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
  selectedMsg: string = `${this.count}  selected / ${this.pageSize} total`;
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
    if (arg.target.checked == true) {
      // this.count++;
      this.allChecked==true? this.count = 3 : this.count++;
    }
    else this.count--;
    this.selectedMsg = `${this.count}  selected / ${this.pageSize} total`;
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
    this.selectedMsg = `${this.count}  selected / ${this.pageSize} total`;
  }
  ngOnInit(): void {
  }

}
