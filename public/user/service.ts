import { Injectable } from 'angular2/core';
import { Http, RequestOptions } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'angular2-cookie/core';
import 'rxjs/Rx';


import { User } from './model';
import { ObservableUtilities } from '../common/utilities';

@Injectable()
export class UserService{
    private _uri;

    constructor (
        private _http: Http,
        private _observable: ObservableUtilities,
        private _cookieService: CookieService,
        private _options : RequestOptions
    ) {
        this._uri = `${this._options.url}/api/user`;
    }
    
    create (user: User): Observable<User> {
        //noinspection TypeScriptUnresolvedFunction
        return this._http.post(this._uri, JSON.stringify(user))
            .map(this._observable.json)
            .catch(this._observable.error);
    }

    retrieve (id?: string): Observable<User> {
        //noinspection TypeScriptUnresolvedFunction
        return this._http.get(this._uri + (id ? `/${id}` : ''))
            .map(this._observable.json)
            .catch(this._observable.error);
    }

    /*
     update (user: User) {}
     delete (id: string) {}
     */

    signin (user: User): Observable<User> {
        //noinspection TypeScriptUnresolvedFunction
        return this._http.post(`${this._uri}/signin`, JSON.stringify(user))
            .map(this._observable.json)
            .catch(this._observable.error);
    }

    signout () {
        this._cookieService.remove('jwt');
    }
}