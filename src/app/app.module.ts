import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MatTooltipModule } from "@angular/material/tooltip";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AboutComponent } from "./components/about/about.component";
import { IntroComponent } from "./components/intro/intro.component";
import { LandingPageComponent } from "./layout/landing-page/landing-page.component";

@NgModule({
    declarations: [AppComponent, LandingPageComponent, AboutComponent, IntroComponent],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatTooltipModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
