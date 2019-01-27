import { Quote } from './quote.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class QuoteService {

    constructor(private http: HttpClient) {

    }

    addQuote(content: string) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        const body = JSON.stringify({content : content});
        return this.http.post('http://localhost:8000/api/quote', body, httpOptions);
    }

    getQuotes() {
        return this.http.get<Quote[]>('http://localhost:8000/api/quotes');
    }

    updateQuote(id: number, newContent: string) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        const body = JSON.stringify({content : newContent});
        return this.http.put('http://localhost:8000/api/quote/' + id, body, httpOptions);
    }

    deleteQuote(id: number) {
        return this.http.delete('http://localhost:8000/api/quote/' + id);
    }

}