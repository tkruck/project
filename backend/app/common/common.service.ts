import { Injectable } from '@angular/core';
import { meets } from '../app/meetIn.js';
import { Subject } from 'rxjs/Subject';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class CommonService {
    public meeting: meets[]
    public add_subject= new Subject <String>()

    constructor(private http : Http){
        this.meeting= []
    }

    addMeetIn(item){
        return this.http.post('/api/',{
        meeting : item
        })
    }
}