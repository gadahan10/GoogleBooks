import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from 'src/app/models/book.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SearchService {  

    constructor(private httpService: HttpClient) {}

    getBooks(searchTerm: string){
       
        var url = `https://www.googleapis.com/books/v1/volumes?q=" ${searchTerm} "&maxResults=20&key=AIzaSyBcaVnYSRR3JzHvGm4ad1IMY5oGWz40ePI`;
        return this.httpService.get(url);
 
    }

    
   
}