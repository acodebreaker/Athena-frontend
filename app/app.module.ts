import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { TestTableView }  from './testEntity_display.component';

@NgModule({
  imports:      [ BrowserModule ],
  
  declarations: [ 
  				  AppComponent ,
  				  TestTableView 
  				],
  
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
