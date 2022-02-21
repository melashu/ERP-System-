import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RegisteredUserComponent } from './components/registered-user/registered-user.component';
import { StaffComponent } from './components/staff/staff.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent, children: [
// {path:"home",component:HomeComponent},
      { path: "product-list", component: ProductListComponent },
      { path: "registered-user", component: RegisteredUserComponent },
      { path: "staff", component: StaffComponent },
      { path: "", redirectTo: "./user/home", pathMatch: "full" }
    ]
  },
  // {path:}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
