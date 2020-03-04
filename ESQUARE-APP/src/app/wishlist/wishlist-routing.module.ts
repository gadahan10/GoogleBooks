import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WishlistPageComponent } from './components/wishlist-page/wishlist-page.component';
import { UserGuard } from '../guards/user.guard';


const wishlistRoutes: Routes = [
    { path: '', children: [
        { path: 'items', component: WishlistPageComponent, canActivate: [UserGuard]} 
    ]}
]

@NgModule({
    declarations: [],
    imports: [ CommonModule, RouterModule.forChild(wishlistRoutes) ],
    exports: [ RouterModule ]
  })
  export class WishlistRoutingModule { }
  