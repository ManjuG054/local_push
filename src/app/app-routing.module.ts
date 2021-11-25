import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
    {
        path: "",
        // loadChildren: "./single-page-application/single-page-application.module#SinglePageApplicationModule",
        loadChildren: () => import("./single-page-application/single-page-application.module").then((m) => m.SinglePageApplicationModule),
    },
    {
        path: "**",
        redirectTo: "404",
        pathMatch: "full",
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
