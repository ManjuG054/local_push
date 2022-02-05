import { Component, OnInit } from "@angular/core";
import { skillImages, SkillsImage } from "@shared/utils/data/images";

@Component({
    selector: "gv-intro",
    templateUrl: "./intro.component.html",
    styleUrls: ["./intro.component.scss"],
})
export class IntroComponent implements OnInit {
    skillImages: SkillsImage[] = [];

    constructor() {}

    ngOnInit(): void {
        this.skillImages = skillImages;
    }
}
