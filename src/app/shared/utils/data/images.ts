export const skillImages: SkillsImage[] = [
    {
        src: "angular.png",
        alt: "Angular 7+",
        toolTip: "Angular 7+",
    },
    {
        src: "angular_material.png",
        alt: "Angular Material",
        toolTip: "Angular Material",
    },
    {
        src: "rxjs.png",
        alt: "RxJS",
        toolTip: "RxJS",
    },
    {
        src: "ionic.png",
        alt: "Ionic 4+",
        toolTip: "Ionic 4+",
    },
    {
        src: "ngrx.svg",
        alt: "NgRx",
        toolTip: "NgRx",
    },
    {
        src: "sass.png",
        alt: "Syntactically Awesome Style Sheet",
        toolTip: "Syntactically Awesome Style Sheet",
    },
];

export interface SkillsImage {
    src: string;
    alt: string;
    toolTip: string;
}
