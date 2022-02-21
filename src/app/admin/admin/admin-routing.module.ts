import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AllProductComponent } from './components/all-product/all-product.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterProductComponent } from './components/register-product/register-product.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';

const routes: Routes = [
  {
    path: "", component: AdminComponent,
    
    children: [
      { path: "home", component: HomeComponent },
      { path: "register-product", component: RegisterProductComponent },
      { path: "register-user", component: RegisterUserComponent },
      { path: "all-product", component: AllProductComponent },
      { path: "", redirectTo: "/admin/home", pathMatch: 'full' }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
