import { Directive, EventEmitter, HostListener, OnDestroy, OnInit, Output } from "@angular/core";
import { Subject, Subscription } from "rxjs";
import { throttleTime } from "rxjs/operators";

@Directive({
    selector: "[gvPeekABoo]",
})
export class PeekABooDirective implements OnInit, OnDestroy {
    @Output() delayClick = new EventEmitter();
    constructor() {}

    // @HostBinding("style.color") show = "red";
    private clicks = new Subject();
    private clickSubs = new Subscription();
    readonly THROTTLE_CLICK_TIME = 1000; // in seconds

    @HostListener("click", ["$event"]) toggle($event: Event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.clicks.next();
    }

    ngOnInit() {
        const sub = this.clicks.pipe(throttleTime(this.THROTTLE_CLICK_TIME)).subscribe((_) => this.delayClick.emit());
        this.clickSubs.add(sub);
    }

    ngOnDestroy(): void {
        this.clickSubs.unsubscribe();
    }

    log(msg: string) {
        console.log(`%c${msg}`, "color:blue; font-size: 14px");
    }
}
