import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private static readonly UserStorageKey = 'users';

  private users: User[] = [];
  // BehaviorSubject: BehaviorSubject là một lớp trong Angular cung cấp một cơ chế đơn giản để quản lý luồng dữ liệu
  // và theo dõi các thay đổi trong luồng đó. Nó sẽ giữ giá trị hiện tại và thông báo cho tất cả các người đăng ký (subscribers)
  // về giá trị mới khi có sự thay đổi
  // Giá trị khởi tạo là một mảng rỗng
  private usersSubject: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

  constructor(
    private readonly localStorageService: LocalStorageService
  ) { }

  fetchData(){
    this.users = this.localStorageService.getValue<User[]>(UserService.UserStorageKey) || [];
  }

  // Gửi thông báo về giá trị mới (danh sách người dùng hiện tại) đến tất cả các người đăng ký (subscribers) của BehaviorSubject.
  // Điều này cho phép các thành phần khác trong ứng dụng theo dõi và cập nhật dữ liệu người dùng một cách tự động khi có sự thay đổi.
  updateData(){
    this.usersSubject.next(this.users);
  }
}
