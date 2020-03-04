import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { Router } from '@angular/router';


@Component({
  selector: 'book-modal',
  templateUrl: './book-modal.component.html',
  styleUrls: ['./book-modal.component.css']
})
export class BookModalComponent implements OnInit {

  @Input() book: Book;
  @Output() modalEmitter = new EventEmitter<boolean>();
  isInWishlist: boolean = false;
  
  constructor(private router: Router) { }

  ngOnInit() {

    // disable background scroll
    const body = document.getElementsByTagName('body')[0];
    body.setAttribute("style", "overflow: hidden;");

    // check if book is already in the wishlist
    this.isInWishlist = this.isBookInWishlist();
  }

  closeBookInfoModal(): void {
    this.modalEmitter.emit(false);

    // enable scroll on modal close
    const body = document.getElementsByTagName('body')[0];
    body.style.overflow = null;
  }

  onAddToWishlistClick(): void {

    this.isInWishlist = true;
    
    var wishlist = sessionStorage.getItem("wishlist");

    var wishlistArray = JSON.parse(wishlist);

    wishlistArray.push(this.book);

    sessionStorage.setItem("wishlist", JSON.stringify(wishlistArray));
  }

  isBookInWishlist(): boolean {

    var wishlist = JSON.parse(sessionStorage.getItem("wishlist"));

    var wishlistBooks = new Array<Book>(wishlist);

    for (var i = 0; i < wishlist.length; i++){
      wishlistBooks.push(wishlist[i]);
    }

    for (var j = 0; j < wishlistBooks.length; j++){

      if (wishlistBooks[j].bookId == this.book.bookId){
        return true;
      }      
    }
       
    return false;

  }

  navigateToWishlist(): void {
    
    this.router.navigateByUrl('/wishlist/items')
  }
}
