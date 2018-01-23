import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { HashValueFormElementComponent } from './hash-value-form-element/hash-value-form-element.component';


@NgModule({
  declarations: [
    AppComponent,
    HashValueFormElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
