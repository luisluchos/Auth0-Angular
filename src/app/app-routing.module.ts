import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { HomeComponent } from './components/home/home.component';
import { PricesComponent } from './components/prices/prices.component';
import { ProtectedComponent } from './components/protected/protected.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path: "pricing", component: PricesComponent},
  {path: "protected", component: ProtectedComponent, canActivate: [AuthGuard]}, //solo puede entrar si cumple con el guard
  {path:"**", pathMatch:"full", redirectTo:"home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
