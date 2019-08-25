import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RepositoryComponent} from './repository/repository.component';
import {NotFoundComponent} from './not-found/not-found.component';
import { from } from 'rxjs';


const routes: Routes = [
  {"path":"home","component":HomeComponent},
  {"path":"repository","component":RepositoryComponent},
  {"pathMatch":"full","redirectTo":"home","path":""},
  {"path":"**","component":NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
