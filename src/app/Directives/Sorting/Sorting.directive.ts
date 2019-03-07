import {Directive, ElementRef, Input, HostListener, Output, EventEmitter, OnInit, OnChanges} from "@angular/core";

import * as $ from 'jquery';

@Directive({
    selector : '[sorting]'
})

export class SortingDirective implements OnInit, OnChanges {

    el : any;

    @Input() sorting : string;

    @Input() sortBy : string;

    @Output() private change : EventEmitter<string> = new EventEmitter<string>();

    constructor(private elem : ElementRef) {
        this.el = elem.nativeElement;
    }

    @HostListener('click') onClick() {

        if(this.sortBy == this.sorting) {
            this.sortBy = `-${this.sorting}`;
        }
        else if(this.sortBy == `-${this.sorting}`) {
            this.sortBy = '-';
        }
        else {
            this.sortBy = this.sorting;
        }

        this.change.emit(this.sortBy);

    }

    ngOnInit() {
        $(this.el).addClass('sorting');
    }

    ngOnChanges() {
        $(this.el)
            .removeClass('sorting')
            .removeClass('sorting_desc')
            .removeClass('sorting_asc');

        if(this.sortBy == this.sorting) {
            $(this.el).addClass('sorting_asc')
        }
        else if(this.sortBy == `-${this.sorting}`) {
            $(this.el).addClass('sorting_desc');
        }
        else {
            $(this.el).addClass('sorting')
        }
    }

}
