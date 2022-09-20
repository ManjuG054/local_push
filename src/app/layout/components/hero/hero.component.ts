import { Component, OnInit } from "@angular/core";

import { skilsImg, skilsImgPath } from "../../../core/resource/data";

@Component({
    selector: "gv-hero",
    templateUrl: "./hero.component.html",
    styleUrls: ["./hero.component.scss"],
})
export class HeroComponent implements OnInit {
    skilsImg = skilsImg;
    skilsImgPath = skilsImgPath;
    constructor() {}

    ngOnInit(): void {}
}
