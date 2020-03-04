import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from 'src/app/models/book.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SearchService {

    googleApiUrl: string = "https://www.googleapis.com/books/v1/volumes?q=english+inauthor:ju&maxResults=5&key=YOURAPIKEY";

    constructor(private httpService: HttpClient) {}

    getBooks(searchTerm: string){
       
        var url = "https://www.googleapis.com/books/v1/volumes?q=" + searchTerm + "&maxResults=20&key=YOURAPIKEY";
        return this.httpService.get(url);
    }

    
   
}