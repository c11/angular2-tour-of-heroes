/**
 * Created by yang on 2/10/16.
 */
import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TimeSyncService {
    public server: string = 'http://timesync.forestry.oregonstate.edu/_y';

    constructor(private http: Http) { }

    getPlots(projectID: number, tsa: number, userID: number) {
        return this.http.get(`${this.server}/plot/${userID}/${projectID}/${tsa}`)
            .map(res => res.json());
    }

    getTasks(userID: number) {
        return this.http.get(`${this.server}/project/${userID}`)
            .map(res => res.json());
    }
}
