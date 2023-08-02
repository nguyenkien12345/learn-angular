import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  users: User[] = [
    {id: 1, firstName: 'Nguyễn', lastName: 'Kiên', userName: 'Nguyễn Trung Kiên', age: 23, gender: 1, password: 'ntk'},
    {id: 2, firstName: 'Mai', lastName: 'Thúy', userName: 'Mai Thị Thanh Thúy', age: 24, gender: 2, password: 'mttt'},
    {id: 3, firstName: 'Ngô', lastName: 'My', userName: 'Ngô Nguyễn Phong My', age: 24, gender: 0, password: 'nnpm'},
  ];
}
