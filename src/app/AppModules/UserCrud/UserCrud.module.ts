import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ROUTING } from './UserCrud.routing';
import { ListComponent } from './List/List.component';
import { FiltersComponent } from './Components/filters/filters.component';
import { CardComponent } from './Components/card/card.component';
import { ListItemComponent } from './Components/list_item/list-item.component';
import { LoaderListComponent } from './Components/loader_list/loader_list.component';
import { LoaderCardComponent } from './Components/loader_card/loader_card.component';
import { LoaderModule } from '../../BaseModules/Loader/Loader.module';
import { UserModule } from '../../EntityModules/User/User.module';
import { SlickModule } from 'ngx-slick';


@NgModule({
  imports : [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    TranslateModule,
    LoaderModule,
    UserModule,
    ROUTING,
    SlickModule.forRoot()
  ],
  declarations : [
    ListComponent,
    FiltersComponent,
    ListItemComponent,
    LoaderListComponent,
    LoaderCardComponent,
    CardComponent,
  ],
  exports : [],
  providers : [

  ]
})

export class UserCrudModule {
}
