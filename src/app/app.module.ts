import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import {  HttpClientModule } from '@angular/common/http';
import {NgbModule,NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { SearchPipe } from './search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { MenuComponent } from './menu/menu.component';
import { HomepageComponent } from './homepage/homepage.component';
import { routerModule } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SearchPipe,
    InputComponent,
    MenuComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,NgbPaginationModule, NgbAlertModule,
    FormsModule,
    ReactiveFormsModule,
    routerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
