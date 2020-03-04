import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'ESQUARE-APP';


  constructor(private router: Router){}

  ngOnInit(): void {}

  onWishlistClick(): void {

    this.router.navigateByUrl('/wishlist/items');
  }

  logout(): void {
    this.router.navigateByUrl('/welcome');
  }
}
