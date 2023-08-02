import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
    {
      path: '',
      component: UsersComponent,
      children: [
        { path: '', component: UserListComponent }
      ]
    }
];

@NgModule({
  declarations: [
    UsersComponent,
    UserListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class UsersModule {
 }
