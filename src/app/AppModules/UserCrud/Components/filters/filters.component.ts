import { Component, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector : 'filters',
  templateUrl : 'filters.component.html',
  styleUrls : ['filters.component.less']
})

export class FiltersComponent {
  @Output() changeType : EventEmitter<any> = new EventEmitter<any>();

  type:number = 0; // 1 - list, 0 - card

  constructor() {}

}
