import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector : 'list-item-info',
  templateUrl : 'list-item.component.html',
  styleUrls : ['list-item.component.less']
})

export class ListItemComponent {
  @Input() data: any = null;

    constructor() {}
}
