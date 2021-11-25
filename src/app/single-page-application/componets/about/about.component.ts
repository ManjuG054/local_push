import { Component, HostBinding, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";

@Component({
    selector: "gv-about",
    templateUrl: "./about.component.html",
    styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
    @HostBinding("class.orange-bg") classes = true;
    ngOnInit(): void {
        // console.log(this.in);
    }
}
