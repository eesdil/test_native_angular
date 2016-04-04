import {Injectable} from "angular2/core";
import {Http, Headers, Response} from "angular2/http";
import {User} from "./user";
import {Config} from "../config";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

@Injectable()
export class UserService {
    constructor(
        private _http: Http
    ) {}

    loginGoogle() {
        console.log('Logging in with google');
        var headers = new Headers();
        headers.append("Content-Type", "application/json");

        let address = Config.apiUrl + "auth/google";
        console.log('address', address);
        return this._http.get(address);
    }
    login(user: any) {
        // var headers = new Headers();
        // headers.append("Content-Type", "application/json");

        // return this._http.post(
        //     Config.apiUrl + "oauth/token",
        //     JSON.stringify({
        //         username: user.email,
        //         password: user.password,
        //         grant_type: "password"
        //     }),
        //     { headers: headers }
        // )
        // .map(response => response.json())
        // .do(data => {
        //     Config.token = data.Result.access_token;
        // })
        // .catch(this.handleErrors);
    }

    register(user: any) {
        // var headers = new Headers();
        // headers.append("Content-Type", "application/json");

        // return this._http.post(
        //     Config.apiUrl + "Users",
        //     JSON.stringify({
        //         Username: user.email,
        //         Email: user.email,
        //         Password: user.password
        //     }),
        //     { headers: headers }
        // )
        // .catch(this.handleErrors);
    }

    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}
