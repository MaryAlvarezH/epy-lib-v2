import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EpyModule } from "epy";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, EpyModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
