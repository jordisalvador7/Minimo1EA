import { AddroleComponent } from './components/addrole/addrole.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolesComponent } from './components/roles/roles.component';


const routes: Routes = [
  {
    path: 'getRoles',
    component: RolesComponent
  },

  {
    path: 'addRole',
    component: AddroleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
