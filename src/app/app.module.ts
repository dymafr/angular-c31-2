import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { CoreModule } from './shared/modules/core.module';
import { LayoutModule } from './shared/modules/layout.module';


@NgModule({
  imports:      [ BrowserModule, FormsModule, LayoutModule, CoreModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
