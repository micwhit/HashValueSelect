import {
    Component, OnInit, OnDestroy, Input, Output,
    ViewContainerRef, EventEmitter, ViewChild, trigger
} from '@angular/core';

import {IhashValue}from './hashValue';

@Component({
  selector: 'hashValue',
  templateUrl: './hash-value-form-element.component.html',
  styleUrls: ['./hash-value-form-element.component.css']
})
export class HashValueFormElementComponent implements OnInit {


 names = [
   {"id": 1, "title": "Anna"},
   {"id": 2, "title": "Mike"},
   {"id": 3, "title": "Dinah"},
   {"id": 4, "title": "Matt"}
 ]

  parameter: any;

  constructor() { }

  ngOnInit() {
  }

  //grabs the
  getObjectFromSelect(myId:any){
    let i = JSON.parse(myId);
     console.log(i.id);
  }

  displayMyName(myId:IhashValue){
     console.log(typeof myId);
  }

}
