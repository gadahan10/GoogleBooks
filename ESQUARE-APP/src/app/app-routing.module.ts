import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: '', component: WelcomeComponent },
  { path: 'search', loadChildren: './search/search.module#SearchModule'},
  { path: 'wishlist', loadChildren: './wishlist/wishlist.module#WishlistModule'},
  
];

@NgModule({
  declarations: [],
  imports: [ CommonModule, RouterModule.forRoot(routes)],
 
})
export class AppRoutingModule { }
