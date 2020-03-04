import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'wishlist-item',
  templateUrl: './wishlist-item.component.html',
  styleUrls: ['./wishlist-item.component.css']
})
export class WishlistItemComponent implements OnInit {

  @Input() item: Book;
  @Input() itemIndex: number;
  @Output() deleteEmitter = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit() {
  }

  deleteItem(): void {
    this.deleteEmitter.emit(this.itemIndex);
  }
}
