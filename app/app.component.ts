import {Component} from "angular2/core";
import {RouteConfig} from "angular2/router";
import {NS_ROUTER_DIRECTIVES} from "nativescript-angular/router";

import {LoginPage} from "./pages/login/login.component";
import {SearchPage} from "./pages/search/search.component";
import {GooglePage} from './pages/google/google.component';
// import {ListPage} from "./pages/list/list.component";

@Component({
    selector: "main",
    directives: [NS_ROUTER_DIRECTIVES],
    // providers: [TestService],
    template: `
        <StackLayout>
            <page-router-outlet></page-router-outlet>
        </StackLayout>
    `
})
@RouteConfig([
    { path: "/Login", component: LoginPage, as: "Login", useAsDefault: true },
    // { path: "/Login", component: LoginPage, as: "Login" },
    { path: "/Google", component: GooglePage, as: "Google" },
    { path: "/Search", component: SearchPage, as: "Search" }
    // { path: "/Search", component: SearchPage, as: "Search", useAsDefault: true }
])
export class AppComponent { }
