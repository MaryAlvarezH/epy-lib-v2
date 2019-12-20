import { NgModule } from "@angular/core";
import { EpyComponent } from "./epy.component";
import { ButtonComponent } from "./button/button.component";
import { SelectComponent } from "./select/select.component";

@NgModule({
  declarations: [EpyComponent, ButtonComponent, SelectComponent],
  imports: [],
  exports: [EpyComponent, ButtonComponent, SelectComponent]
})
export class EpyModule {}
