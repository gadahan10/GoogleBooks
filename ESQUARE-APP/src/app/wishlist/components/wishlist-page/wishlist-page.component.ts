import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist-page',
  templateUrl: './wishlist-page.component.html',
  styleUrls: ['./wishlist-page.component.css']
})
export class WishlistPageComponent implements OnInit {

  wishlistBooks: Array<Book>;

  constructor(private router: Router) { }

  ngOnInit() {

    this.getWishList();
  }

  getWishList(): void {
    this.wishlistBooks = JSON.parse(sessionStorage.getItem("wishlist"));
  }

  deleteItemFromList($event):void{

    // Remove the item from the wishlist
    this.wishlistBooks.splice($event, 1);

    // Update the session storage
    sessionStorage.setItem("wishlist", JSON.stringify(this.wishlistBooks));
  }

  backToSearch(): void {
    this.router.navigateByUrl('/search/book-search');
  }
}
