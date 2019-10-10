import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserNameService {

    execChange: Subject<any> = new Subject<any>();

    constructor() {}

    /**
     * Use to change user name 
     * @data type: string
     */
    userNameChange(data: string) {
        this.execChange.next(data);
    }
}