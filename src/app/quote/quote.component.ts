import { QuoteService } from './../quote.service';
import { Quote } from './../quote.interface';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  @Input() quote :Quote;
  @Output() quoteDeleted = new EventEmitter<Quote>();

  editing = false;
  editValue = '';
  
  constructor(private quoteService : QuoteService) { }

  ngOnInit() {
  }

  onEdit(){
    this.editing = true;
    this.editValue = this.quote.content;
  }

  onUpdate(){
    //this.editValue = '';
    //this.editing = false;
    this.quoteService.updateQuote(this.quote.id, this.editValue).subscribe((data: Quote) =>{
      alert('The quote has been modified');
      this.quote = data;
      this.editValue = '';
      this.editing = false;
    }, (error) => {
      alert(error);
    });
  }

  onCancel(){
    this.editing = false;
    this.editValue = '';
  }

  onDelete(){
    this.quoteService.deleteQuote(this.quote.id).subscribe((data)=>{
      alert(data);
      this.quoteDeleted.emit(this.quote);

    }, (error)=> {
      alert(error);
    });
  }

}
