import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'login', pathMatch: 'full', redirectTo: '/login'},
  { path: 'register', pathMatch: 'full', redirectTo: '/register'},
  { path: 'projects', pathMatch: 'full', redirectTo: '/projects'},
  { path: 'tasklists', pathMatch: 'full', redirectTo: '/tasklists'}
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
