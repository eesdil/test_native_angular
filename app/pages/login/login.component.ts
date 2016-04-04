import {Component, OnInit} from "angular2/core";
import {Router} from "angular2/router";
import {Color} from "color";
import {alert} from "ui/dialogs";
import {topmost} from "ui/frame";
import {Page} from "ui/page";
import {TextField} from "ui/text-field";

import {User} from "../../shared/user/user";
import {UserService} from "../../shared/user/user.service";
// import {setHintColor} from "../../utils/hint-util";

@Component({
    selector: "login",
    templateUrl: "pages/login/login.html",
    providers: [UserService],
    styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class LoginPage implements OnInit {
    user: User;
    isLoggingIn = true;
    page: Page;

    constructor(
        private _router: Router,
        private _userService: UserService
    ) {
            this.user = new User();

            // Hardcode a few values to make testing easy
            this.user.email = "";
            this.user.password = "";
        }

        ngOnInit() {
            this.page = <Page>topmost().currentPage;
            // this.page.actionBarHidden = true;
            // this.page.backgroundImage = this.page.ios ? "res://bg_login.jpg" : "res://bg_login";
            // this.setHintColors();
        }

        submit() {
            if (this.isLoggingIn) {
                this.login();
            } else {
                this.signUp();
            }
        }

        loginGoogle() {
            this._router.navigate(['Google']);
            // this._userService.loginGoogle()
            //     .subscribe((result) => {
            //         console.log('something', result);
            //     }, (err) => {
            //         console.log('err', JSON.stringify(err));
            //     });
        }
        loginFacebook() {
        }
        login() {
            // this._userService.login(this.user)
            // .subscribe(
            //     () => this._router.navigate(["List"]),
            //         (error) => alert("Unfortunately we could not find your account.")
            // );
        }

        signUp() {
            // this._userService.register(this.user)
            // .subscribe(
            //     () => {
            //         alert("Your account was successfully created.")
            //         .then(() => this.toggleDisplay());
            //     },
            //     () => alert("Unfortunately we were unable to create your account.")
            // );
        }

        toggleDisplay() {
            this.isLoggingIn = !this.isLoggingIn;
            this.setHintColors();
            this.page.getViewById("container").animate({
                backgroundColor: this.isLoggingIn ? new Color("white") : new Color("#301217"),
                duration: 200
            });
        }

        setHintColors() {
            var hintColor = this.isLoggingIn ? "#ACA6A7" : "#C4AFB4";
            var email = <TextField>this.page.getViewById("email");
            var password = <TextField>this.page.getViewById("password");
            // setHintColor({ view: email, color: hintColor });
            // setHintColor({ view: password, color: hintColor });
        }
}

