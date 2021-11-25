import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
    selector: "gv-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
    encapsulation: ViewEncapsulation.Emulated,
})
export class HomeComponent implements OnInit {
    errors: any[] = [];

    name = "";

    constructor() {}

    ngOnInit(): void {
        setTimeout(() => {
            this.name = "okay";
        }, 3200);
    }
}
