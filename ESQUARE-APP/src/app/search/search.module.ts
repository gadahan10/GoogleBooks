import { SearchPageComponent } from './components/search-page/search-page.component';
import { NgModule } from '@angular/core';
import { SearchRoutingModule } from './search-routing.module';
import { ResultBoxComponent } from './components/result-box/result-box.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookModalComponent } from './components/book-modal/book-modal.component';


@NgModule({
    declarations: [
        SearchPageComponent,
        ResultBoxComponent,
        BookModalComponent,
    ],
    imports: [
        SearchRoutingModule,
        CommonModule,
        FormsModule
    ]

})
export class SearchModule { }
