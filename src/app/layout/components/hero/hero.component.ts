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

    heroImage = "https://firebasestorage.googleapis.com/v0/b/fir-c06b3.appspot.com/o/hero%20banner.png?alt=media&token=0a1254e3-0651-4b9a-a682-d883bb4c4e8d";
    constructor() {}

    ngOnInit(): void {}
}
