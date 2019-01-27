import { QuoteService } from './../quote.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.css']
})
export class NewQuoteComponent implements OnInit {

  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.quoteService.addQuote(form.value.content).subscribe((data) => {
      alert('Quote Created');
    }, (error) => {
      alert('Something Happend');
    });
  }

}
