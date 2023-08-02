import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  // Data Binding
  public user = {
    name: 'Mai Thị Thanh Thúy',
    age: 23,
    gender: false,
    isMarried: false,
    address: 'Bà Rịa Vũng Tàu',
    image: 'https://image-us.24h.com.vn/upload/3-2023/images/2023-07-11/anh-1-1689066226-471-width650height883.jpg'
  };

  // Property - Attribute Binding
  public dataImage = {
    width: "300",
    height: "300",
    imageSrc: 'https://huyhoangblog.com/wp-content/uploads/2021/09/hinh-anh-gai-xinh-25.jpg',
    imageAlt: 'Hình ảnh gái xin'
  };

  // Class/Style binding
  public isHaveClass: boolean = true;
  public isHaveStyle: boolean = true;

  // One/Two way binding
  public name: string = 'Nguyễn Trung Kiên';

  // Template reference variables
  // Tham chiếu đến ref txtName
  @ViewChild('txtName') dataName: ElementRef = new ElementRef(null);

  onHandleGetData(): void {
    console.log('value: ', this.dataName.nativeElement.value);
    console.log('className: ', this.dataName.nativeElement.className);
  };

  showInfo() {
    return `Xin chào tôi tên là ${this.user.name}.
    Năm nay ${this.user.age} tuổi.
    Tôi là ${this.user.gender ? 'Nam' : 'Nữ'}.
    Tôi đến từ ${this.user.address}.
    Tôi hiện tại đang trong trạng thái ${this.user.isMarried ? 'Đã kết hôn' : 'Độc thân'}`
  };

  // *ngIf
  public isChecked: boolean = true;

  public boyData = {
    name: 'Nguyễn Trung Kiên',
    age: 23,
    gender: true,
    address: 'Thành phố Hồ Chí Minh',
    phone: '0981284476'
  };

  public girlData = {
    name: 'Mai Thị Thanh Thúy',
    age: 23,
    gender: false,
    address: 'Bà Rịa Vũng Tàu',
    phone: '0969776816'
  };

  // Nhận dữ liệu truyền từ component con (child) lên component cha (home)
  public txtName: string = '';
  public txtAge: number = 0;
  public txtGender: number = 0;

  GetName(value: string){
    this.txtName = value;
  }

  GetAge(value: number){
    this.txtAge = value;
  }

  GetGender(value: number){
    this.txtGender = value;
  }
}
