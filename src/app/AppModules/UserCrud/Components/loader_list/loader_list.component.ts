import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { LIMIT_ON_PAGE } from '../../../../constants';

@Component({
  selector : 'loader-list',
  templateUrl : 'loader_list.component.html',
  styleUrls : ['loader_list.component.less']
})

export class LoaderListComponent {
    items:any[]= Array(LIMIT_ON_PAGE);

    constructor() {}
}
