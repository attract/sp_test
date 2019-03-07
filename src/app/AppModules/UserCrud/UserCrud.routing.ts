import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './List/List.component';


const routes : Routes = [
  {
    path : '',
    component : ListComponent
  }
];

export const ROUTING = RouterModule.forChild(routes);
