import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "pascalCase",
})
export class PascalCasePipe implements PipeTransform {
    transform(value: string): string {
        return value.charAt(0).toUpperCase() + value.substring(1);
    }
}
