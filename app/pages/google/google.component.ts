import {Component, OnInit} from "angular2/core";
import {Page} from "ui/page";
import {topmost} from "ui/frame";
import * as webViewModule from "ui/web-view";
import {Config} from '../../shared/config';

@Component({
    selector: 'google',
    templateUrl: 'pages/google/google.html'
})
export class GooglePage implements OnInit {

    url: string;
    page: Page;

    constructor() {
    }
    ngOnInit() {
        this.page = <Page>topmost().currentPage;
    }
    ngAfterContentInit() {
        let webView = this.page.getViewById('myWebView');
        // let webView = new webViewModule.WebView();
        webView.on(webViewModule.WebView.loadFinishedEvent, (args) => {
            console.log('load finished');
            let message;
            if (!args.error) {
                message = "WebView finished loading " + args.url;
            }
            else {
                message = "Error loading " + args.url + ": " + args.error;
            }
            console.log(message);
        });
        this.url = Config.apiUrl + 'auth/google';
        // not working with this...
        // webView.src = this.url;
    }
}

