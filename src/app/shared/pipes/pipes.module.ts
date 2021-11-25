import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LowerCasePipe } from "./lower-case.pipe";
import { PascalCasePipe } from "./pascal-case.pipe";
import { TrackByFnPipe } from './track-by-fn.pipe';

@NgModule({
    declarations: [LowerCasePipe, PascalCasePipe, TrackByFnPipe],
    imports: [CommonModule],
    exports: [LowerCasePipe, PascalCasePipe, TrackByFnPipe],
})
export class PipesModule {}
