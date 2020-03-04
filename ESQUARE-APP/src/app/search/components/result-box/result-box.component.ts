import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'result-box',
  templateUrl: './result-box.component.html',
  styleUrls: ['./result-box.component.css']
})
export class ResultBoxComponent implements OnInit {

  @Input() book: Book;
  @Output() bookEmitter = new EventEmitter<Book>();

  constructor() { }

  ngOnInit() {
  }

  onLearnMoreClick(data:Book){
    
    this.bookEmitter.emit(data);
  }
}
