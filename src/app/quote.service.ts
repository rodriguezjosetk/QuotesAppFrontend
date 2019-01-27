import { Quote } from './quote.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuoteService{

    constructor(private http: HttpClient){

    }

    getQuotes(){
        return this.http.get<Quote[]>('http://localhost:8000/api/quotes');
    }

}