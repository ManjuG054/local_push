import { NgModule } from "@angular/core";
import { MatMenuModule } from "@angular/material/menu";
import { MatTableModule } from "@angular/material/table";
import { MatSliderModule } from "@angular/material/slider";

@NgModule({
    exports: [MatMenuModule, MatTableModule, MatSliderModule],
})
export class MaterialModule {}
