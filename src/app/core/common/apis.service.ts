import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class ApisService {
    constructor(private httpsClient: HttpClient) {}

    getHomeData(): Observable<any> {
        return this.httpsClient.get("http://localhost:3000/home");
    }
}
