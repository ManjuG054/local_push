import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SinglePageApplicationComponent } from "./single-page-application.component";
import { HeaderComponent } from "./componets/header/header.component";
import { FooterComponent } from "./componets/footer/footer.component";
import { SidebarComponent } from "./componets/sidebar/sidebar.component";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./componets/home/home.component";
import { AboutComponent } from "./componets/about/about.component";
import { ContatctComponent } from "./componets/contatct/contatct.component";
import { NotFoundComponent } from "./componets/not-found/not-found.component";
import { PipesModule } from "@shared/pipes/pipes.module";
import { MaterialModule } from "@shared/material/material.module";
import { PeekABooDirective } from "./componets/peek-aboo.directive";
import { LifeCycleHooksComponent } from "./componets/life-cycle-hooks/life-cycle-hooks.component";
import { ApisService } from "../core/common/apis.service";

const routes: Routes = [
    {
        path: "",
        component: SinglePageApplicationComponent,
        children: [
            {
                path: "",
                redirectTo: "home",
                pathMatch: "full",
            },
            {
                path: "home",
                component: HomeComponent,
            },
            {
                path: "about",
                component: AboutComponent,
            },
            {
                path: "contact",
                component: ContatctComponent,
            },
            {
                path: "404",
                component: NotFoundComponent,
            },
        ],
    },
];

@NgModule({
    declarations: [
        SinglePageApplicationComponent,
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        HomeComponent,
        AboutComponent,
        ContatctComponent,
        NotFoundComponent,
        PeekABooDirective,
        LifeCycleHooksComponent,
    ],
    imports: [CommonModule, RouterModule.forChild(routes), PipesModule, MaterialModule],
    providers: [ApisService],
})
export class SinglePageApplicationModule {
    constructor() {}
}
