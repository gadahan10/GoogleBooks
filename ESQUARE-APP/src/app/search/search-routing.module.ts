import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { NgModule } from '@angular/core';
import { UserGuard } from '../guards/user.guard';

const searchRoutes: Routes = [
    { path: '', children: [
        { path: 'book-search', component: SearchPageComponent, canActivate: [UserGuard]} 
    ]}
]

@NgModule({
    declarations: [],
    imports: [ CommonModule, RouterModule.forChild(searchRoutes) ],
    exports: [ RouterModule ]
  })
  export class SearchRoutingModule { }
  