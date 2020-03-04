import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/searchService.service';
import { Book } from 'src/app/models/book.model';
import { $ } from 'protractor';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  books: Array<Book>;
  booksFiltered: Array<Book>
  searchValue: string;
  isPopupOpen: boolean;
  selectedBook: Book = new Book();
  wishlistBooks: Array<Book>;
  username: string;
  lastKeypress: number = 0;

  // Prev next
  resultsPerPage: number;
  currentPage: number = 1;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    // get username from session storage
    this.username = sessionStorage.getItem("username");

    // Set number of results per page
    this.resultsPerPage = 6;

    // Initialize / get exist book array from session storage
    this.initilizedWishList();

    // Initilized main books array
    this.books = new Array<Book>();

  }

  onSearch(searchTerm): void {

    if (searchTerm.timeStamp - this.lastKeypress > 200) {


      this.searchService.getBooks(searchTerm.target.value)
        .subscribe((data: any) => {
          console.log(data);
          // Clear the array before adding the new results
          this.books = [];

          // Fill the array with updated results
          for (let b of data.items) {
            var book = new Book();
            book.title = b.volumeInfo.title;
            book.bookId = b.id;
            book.authors = (b.volumeInfo.authors == undefined) ? "N\\A" : b.volumeInfo.authors;
            book.categories = (b.volumeInfo.categories == undefined) ? "N\\A" : b.volumeInfo.categories;
            book.publishedDate = (b.volumeInfo.publishedDate == undefined) ? "N\\A" : b.volumeInfo.publishedDate;
            book.publisher = (b.volumeInfo.publisher == undefined) ? "N\\A" : b.volumeInfo.publisher;
            book.description = (b.volumeInfo.description == undefined) ? "N\\A" : b.volumeInfo.description;
            book.thumbnail = (b.volumeInfo.imageLinks != undefined && b.volumeInfo.imageLinks.thumbnail != undefined) ? b.volumeInfo.imageLinks.thumbnail : "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";
            book.smallThumbnail = (b.volumeInfo.imageLinks != undefined && b.volumeInfo.imageLinks.smallThumbnail != undefined) ? b.volumeInfo.imageLinks.smallThumbnail : "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

            this.books.push(book);
          }

          this.showResultsByRange(0, 6);


        });
    }

    this.lastKeypress = searchTerm.timeStamp;
  }

  initilizedWishList(): void {

    this.wishlistBooks = new Array<Book>();
    var sessionWishlist = sessionStorage.getItem("wishlist");

    if (sessionWishlist == null) {

      sessionStorage.setItem("wishlist", JSON.stringify(this.wishlistBooks));
    }

  }

  onBookEmitEvent(event): void {
    this.isPopupOpen = true;
    this.selectedBook = event.book;
  }

  onCloseModalEmitEvent($event: boolean): void {
    console.log($event);
    this.isPopupOpen = $event;
  }

  updateFilteredArray(): void {
    this.booksFiltered = this.books;
  }

  showResultsByRange(from: number, to: number): void {

    if (from >= 0 && to > 0) {

      this.updateFilteredArray();

      this.booksFiltered = this.booksFiltered.slice(from, to);
    }
  }

  onNextClick(): void {

    // Filter the array with next page results
    this.showResultsByRange((this.currentPage * this.resultsPerPage), (++this.currentPage * this.resultsPerPage));
  }

  onPrevClick(): void {

    --this.currentPage;
    // Filter the array with prev page results
    this.showResultsByRange(((this.currentPage - 1) * this.resultsPerPage), (this.currentPage * this.resultsPerPage));
  }

}
