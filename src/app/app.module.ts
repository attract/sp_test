import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WrapperComponent } from './Components/Wrapper/wrapper.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { IconsModule } from './BaseModules/Icons/icons.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoaderModule } from './BaseModules/Loader/Loader.module';
import { RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';



export function createTranslateLoader(http : HttpClient) {
  return new TranslateHttpLoader(http, './lang/', '.json');
}


@NgModule({
  declarations : [
    AppComponent,
    WrapperComponent,
    NavigationComponent,
  ],
  imports : [
    BrowserModule,
    RouterModule,
    LoaderModule,
    IconsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader : {
        provide : TranslateLoader,
        useFactory : (createTranslateLoader),
        deps : [HttpClient]
      }
    })
  ],
  providers : [
  ],
  bootstrap : [AppComponent]
})
export class AppModule {
}
