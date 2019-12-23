import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { EpyComponent } from "./epy.component";
import { ButtonComponent } from "./button/button.component";
import { SelectComponent } from "./select/select.component";
import { InputComponent } from "./input/input.component";

@NgModule({
  declarations: [
    EpyComponent,
    ButtonComponent,
    InputComponent,
    SelectComponent
  ],
  imports: [FormsModule, BrowserModule],
  exports: [EpyComponent, ButtonComponent, InputComponent, SelectComponent]
})
export class EpyModule {}
