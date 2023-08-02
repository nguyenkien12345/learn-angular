import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'}, // pathMatch: 'full' => Khớp đường dẫn chính xác

  { path: 'home', component: HomeComponent},

  // Điều này chỉ định rằng khi truy cập vào đường dẫn '/users', Angular sẽ không nạp ngay lập tức component của trang này.
  // Thay vào đó, nó sẽ nạp một module bên ngoài, được gọi là UsersModule, và sử dụng các cấu hình route của module
  // này để xác định component hiển thị tương ứng với đường dẫn con của '/users'
  // Nó cho phép ứng dụng chỉ nạp các module cần thiết khi người dùng thực sự truy cập vào chúng,
  // giúp giảm thời gian tải trang ban đầu và tiết kiệm tài nguyên.
  { path: 'users', loadChildren: () => import('./users/users.module').then((m) => m.UsersModule), }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
