import {Injectable} from 'angular2/core';

@Injectable()
export class TestService {
    constructor() {
        console.log('hello service');
    }
}
