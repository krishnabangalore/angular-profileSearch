import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService {
    private username: string;
    private client_id = '83614f4aa05393520f12';
    private client_secret = '0e8bb57f7634765621efb326e03a12711f775884';

    constructor(private _http: Http) {
        this.username = 'strale-bandzi';
    }

    getUser() {
        return this._http.get(`http://api.github.com/users/${this.username}
        ?client_id=${this.client_id}&client_secret=${this.client_secret}`)
            .map(res => res.json());
    }

    getRepos() {
        return this._http.get(`http://api.github.com/users/${this.username}/repos?client_id=
        ${this.client_id}&client_secret=${this.client_secret}`)
            .map(res => res.json());
    }

    updateUser(username: string) {
        this.username = username;
    }
}
