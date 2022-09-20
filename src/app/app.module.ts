import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LayoutComponent } from "./layout/layout.component";
import { AboutComponent } from "../app/layout/components/about/about.component";
import { HeroComponent } from "../app/layout/components/hero/hero.component";
import { HeaderComponent } from "../app/layout/header/header.component";
@NgModule({
    declarations: [AppComponent, LayoutComponent, AboutComponent, HeroComponent, HeaderComponent],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
