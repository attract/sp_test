import {NgModule}       from "@angular/core";
import {CommonModule} from "@angular/common";
import { AddIcon } from './add-icon.component';
import { PersonsIcon } from './persons-icon.component';
import { GalleryIcon } from './gallery-icon.component';
import { AccountSettingsIcon } from './account-icon.component';
import { SearchIcon } from './search-icon.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        AddIcon,
        PersonsIcon,
        AccountSettingsIcon,
        SearchIcon,
        GalleryIcon,
    ],
    exports: [
        AddIcon,
        PersonsIcon,
        AccountSettingsIcon,
        SearchIcon,
        GalleryIcon,
    ]

})
export class IconsModule {}

