import {Component, OnInit} from "angular2/core";
import * as webViewModule from "ui/web-view";
import {Config} from '../../shared/config';

@Component({
    selector: 'google',
    templateUrl: 'pages/google/google.html'
})
export class GooglePage implements OnInit {

    url: string;

    constructor() {
    }
    ngOnInit() {
        this.url = Config.apiUrl + 'auth/google';
    }
    loaded(args) {
        console.log('load finished');
        let message;
        if (!args.error) {
            message = "WebView finished loading " + args.url;
        }
        else {
            message = "Error loading " + args.url + ": " + args.error;
        }
        console.log(message);
    }
}

