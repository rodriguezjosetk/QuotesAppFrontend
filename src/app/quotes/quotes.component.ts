import { Quote } from './../quote.interface';
import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quote[];

  constructor(private quoteService: QuoteService) {

   }

  ngOnInit() {
    
  }

  onGetQuotes(){
    this.quoteService.getQuotes().subscribe((data: Quote[])=>{
      console.log(data);
      this.quotes = data;
    });
  }

}
