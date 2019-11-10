import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutobusiComponent } from './autobusi/autobusi.component';
import { RuteComponent } from './rute/rute.component';


const routes: Routes = [
  {path:'busevi', component:AutobusiComponent},
  {path:'rute', component:RuteComponent},
  { path: '', redirectTo: '/busevi', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
