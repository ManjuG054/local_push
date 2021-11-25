import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    DoCheck,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
} from "@angular/core";

@Component({
    selector: "gv-life-cycle-hooks",
    templateUrl: "./life-cycle-hooks.component.html",
    styleUrls: ["./life-cycle-hooks.component.scss"],
})
export class LifeCycleHooksComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
    VERSIONS: any;

    @Input() in: string = "";
    constructor() {
        console.log("constructor");
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log("OnChanges", changes);
    }

    ngOnInit(): void {
        console.log("OnInit");
    }

    ngDoCheck(): void {
        // console.log("DoCheck");
    }

    ngAfterContentInit(): void {
        console.log("AfterContentInit");
    }

    ngAfterContentChecked(): void {
        // console.log("AfterContentChecked");
    }

    ngAfterViewInit(): void {
        console.log("AfterViewInit");
    }

    ngAfterViewChecked(): void {
        // console.log("AfterViewChecked");
    }

    ngOnDestroy(): void {
        console.log("OnDestroy");
    }
}
