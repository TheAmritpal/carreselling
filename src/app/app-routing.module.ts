import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcarComponent } from './component/addcar/addcar.component';
import { CarsComponent } from './component/cars/cars.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';


const routes: Routes = [
  { path: "home", component: HomeComponent},
  { path: "login", component: LoginComponent},
  { path: "register", component: RegisterComponent},
  { path: "add", component: AddcarComponent},
  { path: "cars", component: CarsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
