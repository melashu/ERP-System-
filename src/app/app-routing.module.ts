import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: "admin", loadChildren: () => import("./admin/admin/admin.module").then(m => m.AdminModule) },
  { path: "user", loadChildren: () => import("./admin/user/user.module").then(m => m.UserModule) },
  { path: "", redirectTo: 'admin', pathMatch: 'full' },
  { path: "**", component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
