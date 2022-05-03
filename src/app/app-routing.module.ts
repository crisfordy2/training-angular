import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminUserListComponent } from './components/admin-user-list/admin-user-list.component';
import { ComponentCreateUsersComponent } from './components/component-create-users/component-create-users.component';
import { ComponentListUsersComponent } from './components/component-list-users/component-list-users.component';
import { CreateUserTwoComponent } from './components/create-user-two/create-user-two.component';
import { NormalUserListComponent } from './components/normal-user-list/normal-user-list.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', redirectTo: '/form-template', pathMatch: 'full' },
  { path: 'form-template', component: ComponentCreateUsersComponent },
  { path: 'form-reactive', component: CreateUserTwoComponent },
  {
    path: 'list-users',
    component: ComponentListUsersComponent,
    children: [
      { path: 'normal-user-list', component: NormalUserListComponent },
      { path: 'admin-user-list', component: AdminUserListComponent },
    ],
  },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
