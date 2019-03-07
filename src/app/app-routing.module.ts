import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from './Components/Wrapper/wrapper.component';

const routes : Routes = [

  {
    path : '',
    component : WrapperComponent,
    children : [

      {
        path : 'persons',
        loadChildren : './AppModules/UserCrud/UserCrud.module#UserCrudModule'
      },

      {
        path : '**',
        redirectTo : '/persons'
      }

    ]
  },

  {
    path : '**',
    redirectTo : '/error/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
