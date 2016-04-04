import {Component, OnInit} from "angular2/core";
import {Router} from "angular2/router";
import {topmost} from "ui/frame";
import {Page} from "ui/page";
import {TextField} from "ui/text-field";
import * as barcodescanner from "nativescript-barcodescanner";

@Component({
    selector: "search",
    templateUrl: "pages/search/search.html"
})
export class SearchPage implements OnInit {
    page: Page;

    constructor(
        private _router: Router
    ) {}

    ngOnInit() {
        this.page = <Page>topmost().currentPage;
    }

    scan() {
        barcodescanner.scan({
            // cancelLabel: "Stop scanning", // iOS only, default 'Close'
            // message: "Go scan something", // Android only, default is 'Place a barcode inside the viewfinder rectangle to scan it.'
            // preferFrontCamera: false,     // Android only, default false
            // showFlipCameraButton: true    // Android only, default false (on iOS it's always available)
        }).then((result) => {
            console.log("Scan format: " + result.format);
            console.log("Scan text:   " + result.text);
        }, (error) => {
            console.log("No scan: " + error);
        })
    }
}


