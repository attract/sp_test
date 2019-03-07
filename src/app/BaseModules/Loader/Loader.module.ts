import {NgModule}       from "@angular/core";
import {CommonModule} from "@angular/common";
import { Loader } from './Loader.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        Loader
    ],
    exports: [
        Loader
    ]

})
export class LoaderModule {}

