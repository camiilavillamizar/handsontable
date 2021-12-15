import { Component, OnInit, ViewChild } from '@angular/core';
import Handsontable from 'handsontable';
import { Data } from './data/data';
import { commentList, data } from './models/handsontable.model';
import { HotTableModule, HotTableRegisterer } from '@handsontable/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  ngOnInit() {
    
  }
 
  cambiar(){

  }
} 
