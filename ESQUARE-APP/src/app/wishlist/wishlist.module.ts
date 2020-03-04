import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishlistItemComponent } from './components/wishlist-item/wishlist-item.component';
import { WishlistPageComponent } from './components/wishlist-page/wishlist-page.component';
import { WishlistRoutingModule } from './wishlist-routing.module';



@NgModule({
    declarations: [
        WishlistItemComponent,
        WishlistPageComponent
    ],
    imports: [
        WishlistRoutingModule,
        CommonModule,
        FormsModule
    ]

})
export class WishlistModule { }
