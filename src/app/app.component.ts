import { Component } from "@angular/core";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "environments/environment";

@Component({
    selector: "gv-root",
    templateUrl: "./app.component.html",
})
export class AppComponent {
    title = "angular12";

    constructor() {
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
    }
}
