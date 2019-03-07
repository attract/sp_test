import {Component, Input} from '@angular/core';

@Component({
    selector: 'loader',
    templateUrl: 'Loader.component.html'
})

export class Loader {

    @Input() background : string = 'rgba(255,255,255,.5)';

    @Input() showed : boolean = false;

    show() {
        this.showed = true;
    }

    hide() {
        this.showed = false;
    }

}
