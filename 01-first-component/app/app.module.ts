import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { AppComponent } from "./app.component";
/*module contains all of the dependencies*/

@NgModule({
  declarations: [
    AppComponent
  ], 
  imports: [
    BrowserModule,
    CommonModule
  ],
  bootstrap: [AppComponent]
}) 
/*
  ngmodule is a decorator
  all the components get registered inside of the module
*/
export class AppModule {}