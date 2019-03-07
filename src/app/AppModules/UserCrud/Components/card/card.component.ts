import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector : 'card-info',
  templateUrl : 'card.component.html',
  styleUrls : ['card.component.less']
})

export class CardComponent {
  @Input() data: any = null;

    constructor() {}
}
