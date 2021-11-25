import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "trackByFn",
})
export class TrackByFnPipe implements PipeTransform {
    transform(value: any, ...args: unknown[]): unknown {
        console.log(...arguments);
        return value;
    }
}
